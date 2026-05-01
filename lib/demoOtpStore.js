import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "./supabaseAdmin";

const OTP_TTL_MS = 10 * 60 * 1000;
const MAX_VERIFY_ATTEMPTS = 5;
const BCRYPT_ROUNDS = 10;

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

  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("otp_codes").insert({
    email,
    code_hash: codeHash,
    expires_at: expiresAt,
    ip_addr: ipAddr,
  });

  if (error) {
    console.error("[demoOtpStore.createOtpForEmail] insert failed", error);
    throw new Error("Could not create OTP.");
  }

  return { email, otp, expiresAt };
}

export async function verifyOtpForEmail(rawEmail, rawOtp) {
  const email = normalizeEmail(rawEmail);
  const otp = String(rawOtp || "").trim();

  if (!email || !otp) {
    return { ok: false, reason: "Missing email or OTP." };
  }

  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("otp_codes")
    .select("id, code_hash, expires_at, consumed_at, attempts")
    .eq("email", email)
    .is("consumed_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("[demoOtpStore.verifyOtpForEmail] select failed", error);
    return { ok: false, reason: "Unable to verify OTP right now." };
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
    await supabase
      .from("otp_codes")
      .update({ attempts: data.attempts + 1 })
      .eq("id", data.id);

    return { ok: false, reason: "Invalid OTP. Please try again." };
  }

  const { error: updateError } = await supabase
    .from("otp_codes")
    .update({ consumed_at: new Date().toISOString() })
    .eq("id", data.id);

  if (updateError) {
    console.error(
      "[demoOtpStore.verifyOtpForEmail] update consumed failed",
      updateError
    );
    return { ok: false, reason: "Unable to verify OTP right now." };
  }

  return { ok: true, email };
}

export async function getRecentOtpCount(email, withinMs = 60 * 60 * 1000) {
  const supabase = getSupabaseAdmin();
  const since = new Date(Date.now() - withinMs).toISOString();

  const { count, error } = await supabase
    .from("otp_codes")
    .select("*", { count: "exact", head: true })
    .eq("email", normalizeEmail(email))
    .gte("created_at", since);

  if (error) {
    console.error("[demoOtpStore.getRecentOtpCount] count failed", error);
    return 0;
  }

  return count ?? 0;
}

export async function getRecentIpOtpCount(ipAddr, withinMs = 60 * 60 * 1000) {
  if (!ipAddr) return 0;

  const supabase = getSupabaseAdmin();
  const since = new Date(Date.now() - withinMs).toISOString();

  const { count, error } = await supabase
    .from("otp_codes")
    .select("*", { count: "exact", head: true })
    .eq("ip_addr", ipAddr)
    .gte("created_at", since);

  if (error) {
    console.error("[demoOtpStore.getRecentIpOtpCount] count failed", error);
    return 0;
  }

  return count ?? 0;
}