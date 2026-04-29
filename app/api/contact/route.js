import { NextResponse } from "next/server";

const VALID_INTERESTS = new Set([
  "accounting-launch",
  "fluids-demo",
  "ai-forecast-demo",
  "general-enquiry",
]);

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
      message: String(message).trim(),
      source: String(source).trim(),
      createdAt: new Date().toISOString(),
    };

    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      console.log("[CONTACT_SUBMISSION]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request right now." }, { status: 500 });
  }
}
