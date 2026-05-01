import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isIP } from "node:net";
import {
  createOtpForEmail,
  getRecentOtpCount,
  getRecentIpOtpCount,
} from "@/lib/demoOtpStore";

const MAX_PER_EMAIL_PER_HOUR = 3;
const MAX_PER_IP_PER_HOUR = 10;

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure =
    String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";

  if (!host || !port || !user || !pass) {
    return null;
  }

  return { host, port, user, pass, secure };
}

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

export async function POST(request) {
  try {
    const { email = "" } = await request.json();
    const trimmedEmail = String(email).trim().toLowerCase();

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);

    const emailCount = await getRecentOtpCount(trimmedEmail);
    if (emailCount >= MAX_PER_EMAIL_PER_HOUR) {
      return NextResponse.json(
        { error: "Too many OTP requests for this email. Try again in an hour." },
        { status: 429 }
      );
    }

    if (ip) {
      const ipCount = await getRecentIpOtpCount(ip);
      if (ipCount >= MAX_PER_IP_PER_HOUR) {
        return NextResponse.json(
          { error: "Too many OTP requests from this network. Try again later." },
          { status: 429 }
        );
      }
    }

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      return NextResponse.json(
        { error: "Demo login email is not configured on the server." },
        { status: 500 }
      );
    }

    const { otp } = await createOtpForEmail(trimmedEmail, ip);

    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
    });

    const fromEmail = process.env.CONTACT_FROM_EMAIL || mailConfig.user;

    await transporter.sendMail({
      from: fromEmail,
      to: trimmedEmail,
      subject: "Your Pradrava Demo OTP",
      text: [
        "Use this OTP to access Pradrava demos:",
        otp,
        "",
        "This code expires in 10 minutes.",
      ].join("\n"),
      html: `
        <p>Use this OTP to access Pradrava demos:</p>
        <p style="font-size: 22px; font-weight: 700; letter-spacing: 2px;">${otp}</p>
        <p>This code expires in 10 minutes.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[DEMO_OTP_REQUEST_ERROR]", error);

    if (error instanceof Error && error.message.includes("OTP storage failed")) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Unable to send OTP right now." },
      { status: 500 }
    );
  }
}