import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";
import { fluidsModules } from "@/data/products";
import {
  pillars,
  standards,
  personas,
  automations,
  fluidsFaq,
  roadmap,
  fluidsStats,
} from "@/data/fluids";
import { depthProof, scaleFacts } from "@/data/depth";

export const metadata = {
  title: "Fluids | Industrial Gas Plant ERP | Pradrava",
  description:
    "Fluids is a complete operations system for industrial gas plants: cylinder lifecycle, sales and procurement, production, ISO-grade laboratory quality, dispatch, machines and GST-correct invoicing — multi-company and multi-branch on one set of live data.",
  keywords: [
    "industrial gas ERP software",
    "gas cylinder management system",
    "cylinder lifecycle tracking",
    "gas plant quality management LIMS",
    "GST invoicing software for gas plants",
    "cylinder rental demurrage billing",
    "multi branch gas distribution software",
    "CCOE PESO cylinder compliance",
  ],
  alternates: {
    canonical: "/products/fluids",
  },
};

const fluidsSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fluids",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Enterprise Resource Planning",
  operatingSystem: "Web",
  url: "https://pradrava.com/products/fluids",
  description:
    "Operations system for industrial gas plants covering cylinder lifecycle, sales, procurement, production, laboratory quality, dispatch, machine maintenance and Indian GST-correct invoicing.",
  brand: { "@type": "Brand", name: "Pradrava" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fluidsFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orderToCash = [
  "Enquiry",
  "Quotation",
  "Sales order",
  "Reservation",
  "Cylinder allocation",
  "Filling",
  "Quality test",
  "Final inspection",
  "Compliance gate",
  "Dispatch",
  "Proof of delivery",
  "GST invoice",
  "E-way bill",
  "Accounts",
];

const procureToPay = [
  "Requisition",
  "Budget check",
  "RFQ",
  "Vendor quotation",
  "Purchase order",
  "Goods receipt",
  "Receiving inspection",
  "Landed cost",
  "Three-way match",
  "Vendor invoice",
  "Accounts",
];

const deploymentModes = [
  {
    mode: "Gas only",
    title: "For cylinder-first operations",
    desc: "Cylinder lifecycle, filling, quality, rental and dispatch, without the item manufacturing side. Enforced on writes, so an item line cannot be created by mistake.",
    includes: [
      "Cylinder allocation, refill queue, service and rental",
      "Gas quality testing and Certificates of Analysis",
      "Cylinder-focused dashboards and Trace Passport",
    ],
  },
  {
    mode: "Item only",
    title: "For component and goods workflows",
    desc: "Inward inspection, item production with bill of materials, servicing and dispatch of non-cylinder goods, with the same procurement and finance spine.",
    includes: [
      "Item inward inspection from purchase orders and returns",
      "Item production, material consumption and BOM variance",
      "Item service with parts resolved from a service BOM",
    ],
  },
  {
    mode: "Combined",
    title: "For complete plant operations",
    desc: "Cylinder and item lines on the same order, the same dispatch, the same traceability and the same analytics — the way most plants actually operate.",
    includes: [
      "Single order and dispatch covering cylinders and items",
      "Unified Plant Flow across all four operational zones",
      "Cross-asset Trace Passport and combined analytics",
    ],
  },
];

const plantProfiles = [
  { name: "Full plant", desc: "Produces its own gas, stores in bulk, fills, tests and services. Every capability available." },
  { name: "On-site production", desc: "Generates gas at the customer site. Bulk storage and filling capabilities without the import chain." },
  { name: "Import and fill", desc: "Sources filled or bulk gas from outside, fills and distributes. Production capability narrowed accordingly." },
  { name: "Bulk fill", desc: "Bulk storage and cylinder filling as the core operation, with quality and service as needed." },
];

export default function FluidsPage() {
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fluidsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FluidsSubNav current="/products/fluids" />

      {/* Hero */}
      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Pradrava Product • Live in production</p>
        <h1 className="hero-title">Fluids</h1>
        <p className="hero-subtitle">
          The operating system for an industrial gas plant. Cylinder lifecycle, sales,
          procurement, production, laboratory quality, machines, dispatch and Indian statutory
          compliance — one system, one set of live data, multi-company and multi-branch.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Try a live demo</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to sales</Link>
        </div>

        <div className="product-hero-stats">
          {fluidsStats.map((s) => (
            <article key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </article>
          ))}
        </div>
      </div>

      {/* What it is */}
      <div className="feature-panel reveal delay-1">
        <h3>What Fluids actually is</h3>
        <p>
          Most software sold to gas companies is a cylinder register with an invoice screen
          attached. Fluids is the full operational chain: an enquiry becomes a quotation with a
          versioned amendment history, becomes an order that reserves stock and allocates
          specific cylinders, that gets filled and tested against a method with a calibrated
          analyzer, that passes final inspection with photographic evidence, that clears a
          compliance gate on hydro-test dates, that dispatches on a challan,
          that invoices with the tax split verified by the database itself, and that hands the
          posted document to your accounts system through a queue with retry and backoff.
          Nothing in that sentence is re-keyed.
        </p>
      </div>

      {/* The two chains */}
      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">End to end</p>
          <h2>Two chains, no gaps</h2>
        </div>
        <p className="lead" style={{ marginBottom: "1rem" }}>Order to cash</p>
        <div className="chain">
          {orderToCash.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span>{step}</span>
              {i < orderToCash.length - 1 && <i>→</i>}
            </span>
          ))}
        </div>
        <p className="lead" style={{ margin: "1.8rem 0 1rem" }}>Procure to pay</p>
        <div className="chain">
          {procureToPay.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span>{step}</span>
              {i < procureToPay.length - 1 && <i>→</i>}
            </span>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Capability areas</p>
          <h2>Seven areas, each deep enough for its own team</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <article key={p.title} className="pillar-card">
              <div className="feature-tile-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="pillar-list">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link href={p.href} className="inline-cta">Explore in detail</Link>
            </article>
          ))}
        </div>
      </div>

      {/* Standards */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Built against</p>
          <h2>Standards and statutory frameworks</h2>
        </div>
        <div className="standards-grid">
          {standards.map((s) => (
            <div key={s.code} className="standard-chip">
              <strong>{s.code}</strong>
              <span>{s.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Automations */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Runs without you</p>
          <h2>Eight jobs that run on a schedule</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            The work nobody remembers to do — chasing overdue payments, billing accrued rent,
            reclaiming stale reservations, pushing documents to accounts — happens on a clock.
          </p>
        </div>
        <dl className="spec-list">
          {automations.map((a) => (
            <div key={a.name} className="spec-row">
              <dt>{a.name}</dt>
              <dd>{a.desc}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Deployment modes */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Fit</p>
          <h2>Take the shape of Fluids that matches your plant</h2>
        </div>
        <div className="flow-grid">
          {deploymentModes.map((mode) => (
            <article key={mode.mode} className="flow-card">
              <p className="zone-tag" style={{ marginBottom: "0.8rem" }}>{mode.mode}</p>
              <h3>{mode.title}</h3>
              <p>{mode.desc}</p>
              <ul className="flow-list">
                {mode.includes.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ margin: "2.4rem 0 1.2rem" }}>
          <h3>And four plant profiles on top of that</h3>
          <p className="lead" style={{ marginTop: "0.6rem" }}>
            A profile decides which capabilities exist at all — gas sourcing, bulk storage,
            whether quality control is mandatory, whether servicing is offered. The company sets
            the ceiling; a branch may narrow it further but never widen it.
          </p>
        </div>
        <dl className="spec-list">
          {plantProfiles.map((p) => (
            <div key={p.name} className="spec-row">
              <dt>{p.name}</dt>
              <dd>{p.desc}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Personas */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Who uses it</p>
          <h2>One system, six very different daily jobs</h2>
        </div>
        <div className="persona-grid">
          {personas.map((p) => (
            <article key={p.role} className="persona-card">
              <h3>{p.role}</h3>
              <p>{p.line}</p>
              <ul>
                {p.gets.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Full module list */}
      <div className="modules-panel reveal delay-2">
        <h2>Full module and capability list</h2>
        <p style={{ color: "rgba(226,232,240,0.75)", marginTop: "-0.6rem", marginBottom: "1.6rem", fontSize: "0.95rem" }}>
          Everything below is shipped and working today. Anything still in progress is listed
          separately at the bottom of this page.
        </p>
        <ul className="modules-checklist">
          {fluidsModules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      {/* Depth */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Depth</p>
          <h2>The parts that never fit on a feature list</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Every operations product demos well for twenty minutes. What separates them is
            what happens on the day a customer cancels an order and you are still holding
            their cylinders, or the day someone banks the same cheque twice. These are the
            answers to those days — all shipped, all working now.
          </p>
        </div>
        <div className="stat-band" style={{ marginBottom: "1.6rem" }}>
          {scaleFacts.map((s) => (
            <article key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
              <em>{s.note}</em>
            </article>
          ))}
        </div>
        <div className="features-grid">
          {depthProof.map((d) => (
            <article key={d.title} className="feature-tile">
              <div className="feature-tile-icon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Roadmap honesty */}
      <div className="roadmap-panel reveal delay-2">
        <h3>Built, not yet live</h3>
        <p>
          We would rather you knew. These are implemented in the product but not switched on for
          customers yet, usually waiting on a third-party provisioning step.
        </p>
        <ul>
          {roadmap.map((r) => (
            <li key={r.title}>
              <strong>{r.title}</strong> — {r.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>The questions we actually get asked</h2>
        </div>
        <div className="faq-list">
          {fluidsFaq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get Started</p>
        <h3>See it on your own workflow</h3>
        <p>
          Book a walkthrough and we will run your hardest process — the awkward rental billing,
          the multi-branch transfer, the quality certificate your customer keeps rejecting.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Try a live demo</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
