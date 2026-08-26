import { NextResponse } from "next/server";
import { isIP } from "node:net";
import {
  createOtpForEmail,
  getRecentOtpCount,
  getRecentIpOtpCount,
} from "@/lib/demoOtpStore";
import { getMailConfig, createTransporter, fromAddress } from "@/lib/mailer";

const MAX_PER_EMAIL_PER_HOUR = 3;
const MAX_PER_IP_PER_HOUR = 10;

const MAIL_DOWN =
  "We could not send your passcode just now. Please email info@pradrava.com or call +91 97383 88683 and we will open the demo for you.";

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
      console.error("[DEMO_OTP_MAIL_UNCONFIGURED]");
      return NextResponse.json({ error: MAIL_DOWN }, { status: 503 });
    }

    const transporter = createTransporter(mailConfig);

    // Prove the mail path works BEFORE minting a code.
    //
    // createOtpForEmail() writes a row that counts against
    // MAX_PER_EMAIL_PER_HOUR. If the send then failed, the visitor burned one of
    // three attempts and received nothing — three retries and they are locked
    // out for an hour having never seen a passcode, on the primary call to
    // action of the whole site. Verifying first costs one handshake on a path
    // limited to three requests an hour per address.
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("[DEMO_OTP_MAIL_UNREACHABLE]", verifyError);
      return NextResponse.json({ error: MAIL_DOWN }, { status: 503 });
    }

    const { otp } = await createOtpForEmail(trimmedEmail, ip);

    try {
      await transporter.sendMail({
        from: fromAddress(mailConfig),
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
    } catch (sendError) {
      console.error("[DEMO_OTP_SEND_FAILED]", sendError);
      return NextResponse.json({ error: MAIL_DOWN }, { status: 502 });
    }

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
