import { NextResponse } from "next/server";
import {
  getMailConfig,
  createTransporter,
  fromAddress,
  escapeHtml,
  HUMAN_FALLBACK,
} from "@/lib/mailer";

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

// A lead that cannot be emailed must still be recoverable. This marker is what
// you grep the Vercel runtime logs for.
function recordUndeliveredLead(payload, reason) {
  console.error(
    "[CONTACT_LEAD_UNDELIVERED]",
    JSON.stringify({ reason: String(reason), lead: payload })
  );
}

export async function POST(request) {
  try {
    const { name = "", email = "", interest = "", message = "", source = "" } =
      await request.json();

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

    // Capture BEFORE mail. The webhook is the independent record — if it is
    // configured, a lead survives a mail outage. It is best-effort in both
    // directions: its failure must never lose a submission that mail accepted,
    // which is what awaiting it unguarded used to do.
    let webhookOk = false;
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        const hookRes = await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        webhookOk = hookRes.ok;
        if (!hookRes.ok) {
          console.error("[CONTACT_WEBHOOK_FAILED]", hookRes.status);
        }
      } catch (hookError) {
        console.error("[CONTACT_WEBHOOK_FAILED]", hookError);
      }
    }

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      recordUndeliveredLead(payload, "SMTP not configured");
      // If the webhook captured it, this visitor is not lost and should not be
      // told to phone us.
      if (webhookOk) return NextResponse.json({ ok: true });
      return NextResponse.json({ error: HUMAN_FALLBACK }, { status: 503 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "info@pradrava.com";
    const transporter = createTransporter(mailConfig);

    const safe = {
      name: escapeHtml(payload.name || "Not provided"),
      email: escapeHtml(payload.email),
      interestLabel: escapeHtml(payload.interestLabel),
      source: escapeHtml(payload.source || "contact-page"),
      createdAt: escapeHtml(payload.createdAt),
      message: escapeHtml(payload.message || "No message provided."),
    };

    try {
      await transporter.sendMail({
        from: fromAddress(mailConfig),
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
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Interest:</strong> ${safe.interestLabel}</p>
          <p><strong>Source:</strong> ${safe.source}</p>
          <p><strong>Submitted At:</strong> ${safe.createdAt}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safe.message}</p>
        `,
      });
    } catch (mailError) {
      recordUndeliveredLead(payload, mailError);
      if (webhookOk) return NextResponse.json({ ok: true });
      return NextResponse.json({ error: HUMAN_FALLBACK }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_SUBMISSION_ERROR]", error);
    return NextResponse.json({ error: HUMAN_FALLBACK }, { status: 500 });
  }
}
