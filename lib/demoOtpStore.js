import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "./supabaseAdmin";

const OTP_TTL_MS = 10 * 60 * 1000;
const MAX_VERIFY_ATTEMPTS = 5;
const BCRYPT_ROUNDS = 10;
const SUPABASE_SCHEMA = process.env.SUPABASE_DB_SCHEMA || "public";
const OTP_TABLE = process.env.SUPABASE_OTP_TABLE || "otp_codes";
const ALLOW_MEMORY_FALLBACK =
  String(process.env.DEMO_OTP_ALLOW_MEMORY_FALLBACK || "false").toLowerCase() ===
  "true";

const memoryOtpStore = new Map();

function getEmailMemoryRows(email) {
  return memoryOtpStore.get(email) || [];
}

function saveMemoryRow(email, row) {
  const rows = getEmailMemoryRows(email);
  rows.push(row);
  memoryOtpStore.set(email, rows);
}

function getLatestOpenMemoryRow(email) {
  const rows = getEmailMemoryRows(email)
    .filter((row) => !row.consumed_at)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return rows[0] || null;
}

function countRecentMemoryByEmail(email, sinceIso) {
  const since = new Date(sinceIso);
  return getEmailMemoryRows(email).filter(
    (row) => new Date(row.created_at) >= since
  ).length;
}

function countRecentMemoryByIp(ipAddr, sinceIso) {
  const since = new Date(sinceIso);
  let count = 0;

  for (const rows of memoryOtpStore.values()) {
    for (const row of rows) {
      if (row.ip_addr === ipAddr && new Date(row.created_at) >= since) {
        count += 1;
      }
    }
  }

  return count;
}

function normalizeEmail(rawEmail) {
  return String(rawEmail || "").trim().toLowerCase();
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function createOtpForEmail(rawEmail, ipAddr = null) {
  const email = normalizeEmail(rawEmail);
  const otp = generateOtp();
  const codeHash = await bcrypt.hash(otp, BCRYPT_ROUNDS);
  const expiresAt = new Date(Date.now() + OTP_TTL_MS).toISOString();

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from(OTP_TABLE).insert({
      email,
      code_hash: codeHash,
      expires_at: expiresAt,
      ip_addr: ipAddr,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    if (!ALLOW_MEMORY_FALLBACK) {
      console.error("[demoOtpStore.createOtpForEmail] storage failed", error);
      throw new Error(
        `OTP storage failed for ${SUPABASE_SCHEMA}.${OTP_TABLE}. Check SUPABASE_DB_SCHEMA, SUPABASE_OTP_TABLE, schema exposure, and table setup.`
      );
    }

    console.warn("[demoOtpStore.createOtpForEmail] falling back to memory store", error);
    saveMemoryRow(email, {
      id: `mem-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      email,
      code_hash: codeHash,
      expires_at: expiresAt,
      consumed_at: null,
      attempts: 0,
      ip_addr: ipAddr,
      created_at: new Date().toISOString(),
    });
  }

  return { email, otp, expiresAt };
}

export async function verifyOtpForEmail(rawEmail, rawOtp) {
  const email = normalizeEmail(rawEmail);
  const otp = String(rawOtp || "").trim();

  if (!email || !otp) {
    return { ok: false, reason: "Missing email or OTP." };
  }

  let data = null;
  let supabase = null;

  try {
    supabase = getSupabaseAdmin();
    const result = await supabase
      .from(OTP_TABLE)
      .select("id, code_hash, expires_at, consumed_at, attempts")
      .eq("email", email)
      .is("consumed_at", null)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (result.error) {
      throw result.error;
    }

    data = result.data;
  } catch (error) {
    if (!ALLOW_MEMORY_FALLBACK) {
      console.error("[demoOtpStore.verifyOtpForEmail] storage read failed", error);
      return {
        ok: false,
        reason:
          "OTP verification storage is unavailable. Please contact support.",
      };
    }

    console.warn("[demoOtpStore.verifyOtpForEmail] falling back to memory store", error);
    data = getLatestOpenMemoryRow(email);
  }

  if (!data) {
    return { ok: false, reason: "OTP not found. Request a new code." };
  }

  if (new Date(data.expires_at) < new Date()) {
    return { ok: false, reason: "OTP expired. Request a new code." };
  }

  if (data.attempts >= MAX_VERIFY_ATTEMPTS) {
    return {
      ok: false,
      reason: "Too many attempts. Please request a new code.",
    };
  }

  const matches = await bcrypt.compare(otp, data.code_hash);

  if (!matches) {
    if (String(data.id).startsWith("mem-")) {
      const row = getLatestOpenMemoryRow(email);
      if (row) row.attempts = (row.attempts || 0) + 1;
    } else if (supabase) {
      await supabase
        .from(OTP_TABLE)
        .update({ attempts: data.attempts + 1 })
        .eq("id", data.id);
    }

    return { ok: false, reason: "Invalid OTP. Please try again." };
  }

  if (String(data.id).startsWith("mem-")) {
    const row = getLatestOpenMemoryRow(email);
    if (row) {
      row.consumed_at = new Date().toISOString();
    }
  } else if (supabase) {
    const { error: updateError } = await supabase
      .from(OTP_TABLE)
      .update({ consumed_at: new Date().toISOString() })
      .eq("id", data.id);

    if (updateError) {
      console.error(
        "[demoOtpStore.verifyOtpForEmail] update consumed failed",
        updateError
      );
      return { ok: false, reason: "Unable to verify OTP right now." };
    }
  }

  return { ok: true, email };
}

export async function getRecentOtpCount(email, withinMs = 60 * 60 * 1000) {
  const since = new Date(Date.now() - withinMs).toISOString();
  const normalizedEmail = normalizeEmail(email);

  try {
    const supabase = getSupabaseAdmin();
    const { count, error } = await supabase
      .from(OTP_TABLE)
      .select("*", { count: "exact", head: true })
      .eq("email", normalizedEmail)
      .gte("created_at", since);

    if (error) {
      throw error;
    }

    return count ?? 0;
  } catch {
    if (!ALLOW_MEMORY_FALLBACK) return 0;
    return countRecentMemoryByEmail(normalizedEmail, since);
  }
}

export async function getRecentIpOtpCount(ipAddr, withinMs = 60 * 60 * 1000) {
  if (!ipAddr) return 0;
  const since = new Date(Date.now() - withinMs).toISOString();

  try {
    const supabase = getSupabaseAdmin();
    const { count, error } = await supabase
      .from(OTP_TABLE)
      .select("*", { count: "exact", head: true })
      .eq("ip_addr", ipAddr)
      .gte("created_at", since);

    if (error) {
      throw error;
    }

    return count ?? 0;
  } catch {
    if (!ALLOW_MEMORY_FALLBACK) return 0;
    return countRecentMemoryByIp(ipAddr, since);
  }
}