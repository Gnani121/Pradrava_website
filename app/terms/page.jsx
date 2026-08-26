import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Pradrava",
  description:
    "The terms on which Pradrava Private Limited makes pradrava.com and the Fluids demo environment available. Licensed use of Fluids is governed by a separate written agreement.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "26 August 2026";

const demoTerms = [
  {
    label: "It is a demonstration",
    value:
      "The demo runs the real application against sample data. Nothing you do in it affects a real plant, and nothing you enter into it should be real customer, pricing or compliance data.",
  },
  {
    label: "Access is time-boxed",
    value:
      "Demo sessions expire. Passcodes expire ten minutes after issue. We may end or reset a demo session at any time, including to reset the sample data.",
  },
  {
    label: "It is not a service level",
    value:
      "The demo is provided as-is and may be unavailable, reset, or changed without notice. No availability commitment applies to it.",
  },
  {
    label: "One person, one passcode",
    value:
      "Do not share your passcode or session. Do not request passcodes for an address that is not yours.",
  },
  {
    label: "No probing",
    value:
      "Do not attempt to breach, scan, overload, reverse-engineer or extract data from the demo or the site. If you are a security researcher and you find something, tell us — we would rather hear it from you.",
  },
];

const yours = [
  "Everything you type into a contact form or the demo remains yours.",
  "Operational data entered by a licensed customer into their own Fluids tenant is theirs, and is dealt with under their licence agreement.",
];

const ours = [
  "The Fluids and Accounting software, the Pradrava name and marks, this website, its copy, its diagrams, and the written operating guides that ship with the product.",
  "Nothing on this site transfers any of that to you. Reading it does not grant a licence.",
];

export default function TermsPage() {
  return (
    <div className="container page-stack">
      <div className="product-page-hero reveal">
        <p className="eyebrow">Legal • Last updated {LAST_UPDATED}</p>
        <h1 className="hero-title">Terms of Service</h1>
        <p className="hero-subtitle">
          These terms cover this website and the Fluids demo environment. They are deliberately
          short, because the thing that actually matters — your licence to run Fluids in your
          plant — is a separate written agreement, not a page you scrolled past.
        </p>
      </div>

      <div className="roadmap-panel reveal delay-1">
        <h3>Read this first</h3>
        <p>
          <strong>These terms do not govern licensed use of Fluids.</strong> If your organisation
          buys Fluids, a separate written agreement covers implementation, support, service
          levels, data ownership, fees and liability. Where that agreement and this page
          disagree, that agreement wins.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Who these terms are with</p>
          <h2>Parties</h2>
        </div>
        <p className="lead">
          &ldquo;We&rdquo; is Pradrava Private Limited, 4th Floor, Om Chambers, 648/A, 1st Stage,
          Binnamangala, Stage 1, Indiranagar, Bengaluru, Karnataka 560038, India.
          &ldquo;You&rdquo; is the person using this website or the demo. By using either, you
          accept these terms. If you are doing so on behalf of a company, you confirm you are
          entitled to accept them for that company.
        </p>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Demo environment</p>
          <h2>What the demo is, and what it is not</h2>
        </div>
        <dl className="spec-list">
          {demoTerms.map((d) => (
            <div key={d.label} className="spec-row">
              <dt>{d.label}</dt>
              <dd>{d.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Intellectual property</p>
          <h2>What is yours and what is ours</h2>
        </div>
        <h3 style={{ marginBottom: "0.6rem" }}>Yours</h3>
        <ul className="flow-list">
          {yours.map((y) => (
            <li key={y}>{y}</li>
          ))}
        </ul>
        <h3 style={{ marginTop: "1.4rem", marginBottom: "0.6rem" }}>Ours</h3>
        <ul className="flow-list">
          {ours.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Accuracy</p>
          <h2>What this website claims</h2>
        </div>
        <p className="lead">
          We describe the product in detail and we try hard to keep those descriptions true. Even
          so, this site is marketing material: features change, figures move, and something on a
          page may be out of date. Nothing here is a warranty, a specification, or a
          representation you should rely on when deciding to buy. Ask us, get it in the
          agreement, and see it in the demo.
        </p>
        <p className="lead" style={{ marginTop: "0.9rem" }}>
          References to standards such as ISO 6141, ISO 6142, ISO/IEC 17025 and ISO 2859-1
          describe the frameworks the product&apos;s workflows and record formats were built
          against. They are not a claim that Pradrava or your plant is certified to them.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Liability</p>
          <h2>Limits, stated plainly</h2>
        </div>
        <p className="lead">
          This website and the demo are provided on an as-is basis, without warranties of any
          kind to the fullest extent permitted by law. To that same extent, we are not liable for
          indirect, incidental or consequential loss, or for loss of profit, revenue, data or
          business, arising out of your use of this website or the demo. Nothing in these terms
          excludes liability that cannot lawfully be excluded.
        </p>
        <p className="lead" style={{ marginTop: "0.9rem" }}>
          <strong>
            Do not make an operational or safety decision on the basis of the demo environment.
          </strong>{" "}
          It holds sample data. Filling, testing, dispatch and statutory decisions in a real plant
          must be made against your own records and your own licensed system.
        </p>
      </div>

      <div className="section-block reveal delay-3">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Administration</p>
          <h2>Changes, suspension and governing law</h2>
        </div>
        <dl className="spec-list">
          <div className="spec-row">
            <dt>Changes</dt>
            <dd>
              We may update these terms. The date at the top of the page changes when we do, and
              continued use after that means you accept the update.
            </dd>
          </div>
          <div className="spec-row">
            <dt>Suspension</dt>
            <dd>
              We may suspend or withdraw access to the site or the demo, for anyone, without
              notice — principally to stop abuse.
            </dd>
          </div>
          <div className="spec-row">
            <dt>Governing law</dt>
            <dd>
              These terms are governed by the laws of India. The courts at Bengaluru, Karnataka
              have exclusive jurisdiction.
            </dd>
          </div>
          <div className="spec-row">
            <dt>Contact</dt>
            <dd>
              <a href="mailto:info@pradrava.com">info@pradrava.com</a> ·{" "}
              <a href="tel:+919738388683">+91 97383 88683</a>
            </dd>
          </div>
        </dl>
        <div className="section-cta-row">
          <Link href="/privacy" className="btn btn-ghost">Read the Privacy Policy</Link>
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
