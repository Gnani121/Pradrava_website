import nodemailer from "nodemailer";

// One place that decides whether this deployment can send mail at all.
//
// Both /api/contact and /api/demo-auth/request-otp had their own private copy of
// this function. They agreed today, but two copies of a credential check drift,
// and the failure mode is silent: a form that answers 500 and loses the lead.
export function getMailConfig() {
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

export function createTransporter(mailConfig) {
  return nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: { user: mailConfig.user, pass: mailConfig.pass },
  });
}

export function fromAddress(mailConfig) {
  return process.env.CONTACT_FROM_EMAIL || mailConfig.user;
}

// Anything a visitor typed is interpolated into an HTML email we send to
// ourselves. Unescaped, a submitted message can inject markup and links into a
// mail that appears to come from pradrava.com — which is a phishing primitive,
// not just a rendering bug.
export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Shown to a visitor when we cannot send mail. A generic "try again later" ends
// the conversation; this keeps a route to us open.
export const HUMAN_FALLBACK =
  "We could not send your message just now. Please email info@pradrava.com or call +91 97383 88683 and we will pick it up straight away.";
