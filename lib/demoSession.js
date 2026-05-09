import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const DEMO_SESSION_DURATION_SECONDS = 15 * 60;

export function getDemoCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: DEMO_SESSION_DURATION_SECONDS,
    path: "/",
  };
}

export async function getActiveDemoSession(cookieStore) {
  const hasAccessCookie = cookieStore.get("demo_access")?.value === "granted";
  const sessionId = cookieStore.get("demo_session")?.value;

  if (!hasAccessCookie || !sessionId) {
    return { ok: false, reason: "missing-cookie" };
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("sessions")
    .select("jti, email, expires_at")
    .eq("jti", sessionId)
    .maybeSingle();

  if (error || !data) {
    return { ok: false, reason: "missing-session" };
  }

  const expiresAtMs = new Date(data.expires_at).getTime();
  if (!Number.isFinite(expiresAtMs) || expiresAtMs <= Date.now()) {
    await supabase.from("sessions").delete().eq("jti", sessionId);
    return { ok: false, reason: "expired" };
  }

  return { ok: true, session: data };
}
