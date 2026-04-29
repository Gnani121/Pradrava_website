import Link from "next/link";

export const metadata = {
  title: "Accounting (Upcoming) | Finance Operations | Pradrava",
  description: "India-first accounting workspace for GST-ready invoicing, reconciliation, expense controls, and audit visibility. Coming soon.",
  keywords: [
    "accounting software",
    "India accounting software",
    "invoicing and reconciliation",
    "finance operations platform",
    "GST-ready accounting",
    "GST invoicing",
    "Indian SME accounting",
    "audit trail software",
  ],
  alternates: {
    canonical: "/products/accounting",
  },
};

const accountingSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Accounting",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://pradrava.com/products/accounting",
  description: "Upcoming India-first finance operations software for GST-ready invoicing, reconciliation, expense controls, and reporting.",
  brand: {
    "@type": "Brand",
    name: "Pradrava",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
  },
};

export default function AccountingPage() {
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingSchema) }}
      />

      {/* Hero */}
      <div className="product-page-hero accounting-hero reveal">
        <p className="eyebrow">Pradrava Product • Upcoming</p>
        <h1 className="hero-title">Accounting</h1>
        <p className="hero-subtitle">
          Accounting is in active development for India-first rollout. We are preparing a
          finance operations workspace for GST-ready invoicing, reconciliation, and
          audit-ready reporting controls.
        </p>
        <div className="hero-actions">
          <Link href="/contact?interest=accounting-launch&source=accounting-hero" className="btn btn-primary">Get Launch Updates</Link>
          <Link href="/services" className="btn btn-ghost">
            Talk to Our Team
          </Link>
        </div>
        <div className="product-hero-stats">
          <article>
            <strong>Upcoming</strong>
            <span>Core invoicing module</span>
          </article>
          <article>
            <strong>Upcoming</strong>
            <span>Bank reconciliation</span>
          </article>
          <article>
            <strong>Upcoming</strong>
            <span>Finance dashboards</span>
          </article>
          <article>
            <strong>Upcoming</strong>
            <span>Audit and compliance controls</span>
          </article>
        </div>
      </div>

      {/* Roadmap */}
      <div className="reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Roadmap</p>
          <h2>Planned release scope</h2>
        </div>
        <div className="modules-panel">
          <h2>Phase 1 (Planned)</h2>
          <ul className="modules-checklist">
            <li>Invoice and bill generation</li>
            <li>Payment collection and disbursement tracking</li>
            <li>Expense recording and approvals</li>
            <li>Bank reconciliation workflows</li>
            <li>GST-ready reports and ledgers</li>
            <li>Role-based access and audit logs</li>
          </ul>
        </div>
      </div>

      <div className="feature-panel reveal delay-2">
        <h3>Availability</h3>
        <p>
          Accounting is not live yet. We are onboarding India-based teams for launch
          notifications, early walkthroughs, and pilot access.
        </p>
      </div>

      {/* CTA */}
      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get Started</p>
        <h3>Be first to know when Accounting launches in India</h3>
        <p>
          Share your interest and we will send launch updates, roadmap milestones,
          and early access options for the India rollout.
        </p>
        <div className="hero-actions">
          <Link href="/contact?interest=accounting-launch&source=accounting-cta" className="btn btn-primary">Get Launch Updates</Link>
          <Link href="/products" className="btn btn-ghost">← Back to Products</Link>
        </div>
      </div>

    </div>
  );
}
