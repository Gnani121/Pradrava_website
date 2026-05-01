import { NextResponse } from "next/server";
import { verifyOtpForEmail } from "@/lib/demoOtpStore";

export async function POST(request) {
  try {
    const { email = "", otp = "" } = await request.json();

    const validation = await verifyOtpForEmail(email, otp);
    if (!validation.ok) {
      return NextResponse.json({ error: validation.reason }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });
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
