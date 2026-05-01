import { randomUUID } from "node:crypto";
import { isIP } from "node:net";
import { NextResponse } from "next/server";
import { verifyOtpForEmail } from "@/lib/demoOtpStore";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { signJwtToken } from "@/lib/jwt";

const SESSION_DURATION_SECONDS = 15 * 60;

function getClientIp(request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) {
    const candidate = fwd.split(",")[0].trim();
    return isIP(candidate) ? candidate : null;
  }

  const real = request.headers.get("x-real-ip");
  if (real) {
    const candidate = real.trim();
    return isIP(candidate) ? candidate : null;
  }

  return null;
}

function getUserAgent(request) {
  return request.headers.get("user-agent") || null;
}

export async function POST(request) {
  try {
    const { email = "", otp = "" } = await request.json();

    const validation = await verifyOtpForEmail(email, otp);
    if (!validation.ok) {
      return NextResponse.json({ error: validation.reason }, { status: 400 });
    }

    const fluidsAppUrl = process.env.FLUIDS_APP_URL;
    if (!fluidsAppUrl) {
      throw new Error("Missing FLUIDS_APP_URL environment variable.");
    }

    const jti = randomUUID();
    const ip = getClientIp(request);
    const userAgent = getUserAgent(request);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_SECONDS * 1000).toISOString();
    const supabase = getSupabaseAdmin();
    const { error: sessionError } = await supabase.from("sessions").insert({
      jti,
      email: validation.email,
      expires_at: expiresAt,
      ip_addr: ip,
      user_agent: userAgent,
    });

    if (sessionError) {
      throw sessionError;
    }

    const token = await signJwtToken(
      {
        email: validation.email,
        role: "demo",
        jti,
      },
      {
        expiresIn: `${SESSION_DURATION_SECONDS}s`,
        subject: validation.email,
      }
    );

    const redirectUrl = new URL("/demo-launch", fluidsAppUrl);
    redirectUrl.searchParams.set("t", token);

    const response = NextResponse.json({
      ok: true,
      redirectUrl: redirectUrl.toString(),
    });
    response.cookies.set("demo_access", "granted", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[DEMO_OTP_VERIFY_ERROR]", error);
    return NextResponse.json({ error: "Unable to verify OTP right now." }, { status: 500 });
  }
}
