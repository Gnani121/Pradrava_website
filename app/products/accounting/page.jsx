import Link from "next/link";
import { accountingFeatures, accountingModules, accountingFaq } from "@/data/products";

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

      <div className="feature-panel reveal delay-1">
        <h3>What we&apos;re building</h3>
        <p>
          A finance operations workspace designed for Indian SMEs and growing operations —
          GST-ready invoicing, automated reconciliation, and real-time reporting with the
          same audit-grade controls and role-based security that power Fluids.
        </p>
      </div>

      {/* Planned capabilities */}
      <div className="reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Planned Capabilities</p>
          <h2>Everything you need to close the books faster</h2>
        </div>
        <div className="features-grid">
          {accountingFeatures.map((f) => (
            <article key={f.title} className="feature-tile">
              <div className="feature-tile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Full module list */}
      <div className="modules-panel reveal delay-2">
        <h2>Planned Modules &amp; Feature List</h2>
        <ul className="modules-checklist">
          {accountingModules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {accountingFaq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
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
