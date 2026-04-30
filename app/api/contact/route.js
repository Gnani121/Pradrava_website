import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const VALID_INTERESTS = new Set([
  "accounting-launch",
  "fluids-demo",
  "ai-forecast-demo",
  "general-enquiry",
]);

const INTEREST_LABELS = {
  "accounting-launch": "Accounting launch updates",
  "fluids-demo": "Fluids guided demo",
  "ai-forecast-demo": "AI Forecast Studio demo",
  "general-enquiry": "General enquiry",
};

function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";

  if (!host || !port || !user || !pass) {
    return null;
  }

  return { host, port, user, pass, secure };
}

export async function POST(request) {
  try {
    const { name = "", email = "", interest = "", message = "", source = "" } = await request.json();

    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedInterest = String(interest).trim();

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!VALID_INTERESTS.has(trimmedInterest)) {
      return NextResponse.json({ error: "Please select a valid interest area." }, { status: 400 });
    }

    const payload = {
      name: String(name).trim(),
      email: trimmedEmail,
      interest: trimmedInterest,
      interestLabel: INTEREST_LABELS[trimmedInterest] || trimmedInterest,
      message: String(message).trim(),
      source: String(source).trim(),
      createdAt: new Date().toISOString(),
    };

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      return NextResponse.json(
        { error: "Contact email is not configured on the server." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@pradrava.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || mailConfig.user;

    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.email,
      subject: `[Pradrava Contact] ${payload.interestLabel}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${payload.name || "Not provided"}`,
        `Email: ${payload.email}`,
        `Interest: ${payload.interestLabel}`,
        `Source: ${payload.source || "contact-page"}`,
        `Submitted At: ${payload.createdAt}`,
        "",
        "Message:",
        payload.message || "No message provided.",
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${payload.name || "Not provided"}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Interest:</strong> ${payload.interestLabel}</p>
        <p><strong>Source:</strong> ${payload.source || "contact-page"}</p>
        <p><strong>Submitted At:</strong> ${payload.createdAt}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message || "No message provided."}</p>
      `,
    });

    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_SUBMISSION_ERROR]", error);
    return NextResponse.json({ error: "Unable to process request right now." }, { status: 500 });
  }
}
