import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Pradrava",
  description:
    "How Pradrava Private Limited collects, uses, stores and protects personal data on pradrava.com and in the Fluids demo, and your rights under India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "26 August 2026";

const collected = [
  {
    label: "Contact form",
    value:
      "Your name, email address, the interest area you select, and the message you write. Your email address is used as the reply-to address so we can answer you.",
  },
  {
    label: "Demo access",
    value:
      "Your email address, and the IP address the request came from. The one-time passcode itself is stored only as a bcrypt hash, expires after 10 minutes, and is never readable by us in plain form.",
  },
  {
    label: "Demo session cookies",
    value:
      "Two strictly necessary cookies, demo_access and demo_session, which keep you signed in to the demo. They carry no advertising or tracking identifier.",
  },
  {
    label: "Server logs",
    value:
      "Standard request logs kept by our hosting provider — IP address, page requested, timestamp, browser user agent. These exist to keep the service running and to detect abuse.",
  },
  {
    label: "Customer plant data",
    value:
      "If your organisation licenses Fluids, the operational data you enter is yours, held under your separate agreement with us. We process it on your instructions and do not use it to market to anyone.",
  },
];

const purposes = [
  "To answer the enquiry you sent us, and to follow up on it by email or phone.",
  "To issue and verify the one-time passcode that opens demo access.",
  "To rate-limit passcode requests — three per email address and ten per network address per hour — so the demo cannot be used to send unsolicited mail to others.",
  "To keep the website secure, available and free of abuse.",
  "To meet our legal, tax and record-keeping obligations in India.",
];

const processors = [
  {
    label: "Vercel",
    value: "Website and application hosting, and server request logs.",
  },
  {
    label: "Supabase",
    value: "Database hosting for demo passcodes and, for licensed customers, operational data.",
  },
  {
    label: "Our email provider",
    value: "Delivery of the passcode email and of the enquiry you submit to our own inbox.",
  },
];

const rights = [
  {
    label: "Access",
    value: "Ask us what personal data of yours we hold and what we have done with it.",
  },
  {
    label: "Correction",
    value: "Ask us to correct data that is inaccurate, or complete data that is incomplete.",
  },
  {
    label: "Erasure",
    value:
      "Ask us to delete your data, unless we are required to keep it to meet a legal obligation.",
  },
  {
    label: "Withdraw consent",
    value:
      "Withdraw consent you previously gave, at any time. Withdrawal does not undo processing already carried out lawfully.",
  },
  {
    label: "Grievance redressal",
    value:
      "Raise a complaint with us directly, using the contact details below. We will respond.",
  },
  {
    label: "Nomination",
    value:
      "Nominate another individual to exercise these rights on your behalf in the event of your death or incapacity.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="container page-stack">
      <div className="product-page-hero reveal">
        <p className="eyebrow">Legal • Last updated {LAST_UPDATED}</p>
        <h1 className="hero-title">Privacy Policy</h1>
        <p className="hero-subtitle">
          This policy explains what personal data Pradrava Private Limited collects through
          pradrava.com and the Fluids demo, why we collect it, who else touches it, and what you
          can ask us to do about it. It is written to be read, not to be survived.
        </p>
      </div>

      <div className="roadmap-panel reveal delay-1">
        <h3>The short version</h3>
        <p>
          We collect the details you type into a form, plus the technical minimum needed to run a
          website and stop abuse. We do not sell personal data, we do not share it for anyone
          else&apos;s advertising, and we run no advertising or analytics trackers on this site.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Who we are</p>
          <h2>The data fiduciary</h2>
        </div>
        <p className="lead">
          Pradrava Private Limited, 4th Floor, Om Chambers, 648/A, 1st Stage, Binnamangala, Stage
          1, Indiranagar, Bengaluru, Karnataka 560038, India. For anything in this policy, write to{" "}
          <a href="mailto:info@pradrava.com">info@pradrava.com</a> or call{" "}
          <a href="tel:+919738388683">+91 97383 88683</a>.
        </p>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">What we collect</p>
          <h2>Every place this site takes data from you</h2>
        </div>
        <dl className="spec-list">
          {collected.map((c) => (
            <div key={c.label} className="spec-row">
              <dt>{c.label}</dt>
              <dd>{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Why we collect it</p>
          <h2>The purposes, in full</h2>
        </div>
        <ul className="flow-list">
          {purposes.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="lead" style={{ marginTop: "1rem" }}>
          We do not use your data for automated decision-making, we do not profile you, and we do
          not send marketing email to an address that only ever asked for a demo passcode.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Who else touches it</p>
          <h2>Our processors</h2>
        </div>
        <dl className="spec-list">
          {processors.map((p) => (
            <div key={p.label} className="spec-row">
              <dt>{p.label}</dt>
              <dd>{p.value}</dd>
            </div>
          ))}
        </dl>
        <p className="lead" style={{ marginTop: "1rem" }}>
          These providers process data on our instructions only. Some of them operate
          infrastructure outside India; where that happens, the transfer is made in line with
          applicable Indian law. We do not sell personal data, and we do not disclose it to third
          parties for their own purposes. We will disclose data if we are legally compelled to.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">How long we keep it</p>
          <h2>Retention</h2>
        </div>
        <dl className="spec-list">
          <div className="spec-row">
            <dt>Demo passcodes</dt>
            <dd>Expire 10 minutes after being issued and are cleared thereafter.</dd>
          </div>
          <div className="spec-row">
            <dt>Enquiries</dt>
            <dd>
              Kept for as long as the conversation is live, and afterwards only as a business
              record. Ask us to delete yours and we will.
            </dd>
          </div>
          <div className="spec-row">
            <dt>Server logs</dt>
            <dd>Retained for a short operational window by our hosting provider.</dd>
          </div>
          <div className="spec-row">
            <dt>Customer plant data</dt>
            <dd>Governed by your licence agreement, not by this policy.</dd>
          </div>
        </dl>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Your rights</p>
          <h2>Under the Digital Personal Data Protection Act, 2023</h2>
        </div>
        <dl className="spec-list">
          {rights.map((r) => (
            <div key={r.label} className="spec-row">
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        <p className="lead" style={{ marginTop: "1rem" }}>
          To exercise any of these, email <a href="mailto:info@pradrava.com">info@pradrava.com</a>{" "}
          with enough detail for us to find your record. We will acknowledge and act within a
          reasonable period. If you are not satisfied with our response, you may escalate to the
          Data Protection Board of India.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Security and children</p>
          <h2>Two things worth stating plainly</h2>
        </div>
        <p className="lead">
          Data is transmitted over HTTPS, passcodes are stored hashed and never in plain text, and
          access to production systems is restricted to the people who need it. No system is
          perfectly secure, and we will not pretend otherwise — if a breach affects your data, we
          will notify you and the Data Protection Board as required.
        </p>
        <p className="lead" style={{ marginTop: "0.9rem" }}>
          This is business software. The site and the demo are not directed at children, and we do
          not knowingly collect data from anyone under 18.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Changes</p>
          <h2>If this policy changes</h2>
        </div>
        <p className="lead">
          We will update the date at the top of this page. If a change materially affects how we
          handle data you have already given us, we will tell you directly rather than relying on
          you noticing.
        </p>
        <div className="section-cta-row">
          <Link href="/contact" className="btn btn-primary">Ask us about your data</Link>
          <Link href="/terms" className="btn btn-ghost">Read the Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
