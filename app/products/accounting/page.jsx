import Link from "next/link";
import { accountingFeatures, accountingModules, accountingFaq } from "@/data/products";

export const metadata = {
  title: "Accounting & GST Returns | In Development | Pradrava",
  description:
    "Pradrava Accounting is the books and the GST returns, in active development on the same separation, permissions and record-keeping foundation as Fluids. Available today: Fluids gets the GST right on every document you raise, and hands those documents to the accounts package you already run.",
  keywords: [
    "GST return filing software India",
    "GSTR-1 GSTR-3B filing software",
    "GSTR-2B input credit matching",
    "accounting software for industrial operations",
    "ERP accounts integration",
    "operational ledger software India",
  ],
  alternates: { canonical: "/products/accounting" },
};

const availableNow = [
  {
    label: "Registers you can hand to your accountant",
    value:
      "Sales register, credit note register, delivery-challan-pending-invoice, GST inward register, receivables ageing and rental ageing. All six run today and export today.",
  },
  {
    label: "GST-correct documents at the point of sale",
    value:
      "Place of supply is resolved from the supplier and recipient state pair and the system refuses to guess, with per-line rates from an editable slab table, gapless numbering per GSTIN and financial year, and a database rule that will not let an invoice be issued if its tax does not reconcile. Credit and debit notes reverse correctly against the original.",
  },
  {
    label: "Accounting hand-off — built, connected during implementation",
    value:
      "Invoices, credit notes and debit notes queue to your existing accounts package with exponential backoff and voucher ID write-back onto the source document, and raise a high-priority alert if a document exhausts its retries rather than failing silently. The queue runs daily. Your accounts endpoint and the inbound payment key are configured as part of implementation — until they are, nothing is sent and nothing is lost.",
  },
  {
    label: "Statutory portals — payload ready, connection is the last step",
    value:
      "Fluids prepares the e-invoice IRN and e-way bill payloads across four movement types and records every call and its response as an event. Both currently run against a sandbox; connecting your production GSP is a step we do with you at go-live, not something already switched on. The GSTR-1 and GSTR-3B builders give you a working from live documents — B2B invoices, a credit-note summary and a liability figure — but they are off by default, and the GSTN file and the remaining return sections are what this product adds.",
  },
];

export default function AccountingPage() {
  return (
    <div className="container page-stack">
      <div className="product-page-hero accounting-hero reveal">
        <p className="eyebrow">Pradrava Product • In development</p>
        <h1 className="hero-title">Accounting &amp; GST Returns</h1>
        <p className="hero-subtitle">
          The books and the GST returns, inside Pradrava rather than beside it. This is where
          filing belongs — the parts of a return Fluids deliberately stops short of: the GSTN
          file itself, the B2C, export and HSN-summary sections, and 2B matching against your
          input credit. It is being built on the same separation, permissions and record-keeping
          foundation as Fluids — and it is not available yet. Here is exactly where it stands.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Become a design partner</Link>
          <Link href="/products/fluids/finance" className="btn btn-ghost">See what Fluids does today</Link>
        </div>
      </div>

      <div className="roadmap-panel reveal delay-1">
        <h3>Read this before anything else on the page</h3>
        <p>
          Everything below describes what Accounting is being built to do. None of it is
          available today. We would rather say that plainly than let you plan around it. If you
          need finance functionality now, the section that follows lists what is live in Fluids.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Available today</p>
          <h2>You do not have to wait for this to run your books properly</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Fluids is designed to sit alongside your existing accounts package, not to hold your
            operations hostage until we finish ours.
          </p>
        </div>
        <dl className="spec-list">
          {availableNow.map((a) => (
            <div key={a.label} className="spec-row">
              <dt>{a.label}</dt>
              <dd>{a.value}</dd>
            </div>
          ))}
        </dl>
        <div className="section-cta-row">
          <Link href="/products/fluids/finance" className="btn btn-ghost">See Finance &amp; GST in Fluids</Link>
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">In development</p>
          <h2>What Accounting is being built to do</h2>
        </div>
        <div className="features-grid">
          {accountingFeatures.map((f) => (
            <article key={f.title} className="feature-tile">
              <div className="product-card-top">
                <div className="feature-tile-icon">{f.icon}</div>
                <span className="product-status-badge neutral">Planned</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="modules-panel reveal delay-2">
        <h2>Planned module list</h2>
        <p style={{ color: "rgba(226,232,240,0.75)", marginTop: "-0.6rem", marginBottom: "1.6rem", fontSize: "0.95rem" }}>
          Design partners get to shape this list against their own chart of accounts before
          general release.
        </p>
        <ul className="modules-checklist">
          {accountingModules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="section-block reveal delay-2">
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

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get involved</p>
        <h3>Shape it before it ships</h3>
        <p>
          If your finance team is willing to sit with us on the design, you get the module list
          and the report formats built around how you actually close a month.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/products" className="btn btn-ghost">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
}
