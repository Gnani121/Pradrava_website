import Link from "next/link";

export const metadata = {
  title: "Fluids | Industrial Gas Operations | Pradrava",
  description: "End-to-end gas cylinder operations platform with sales, procurement, cylinder tracking, quality inspection, scanner app, and role-based security.",
  keywords: [
    "industrial gas cylinder management",
    "cylinder inventory tracking",
    "gas dispatch software",
    "refill and production workflow",
    "quality inspection software",
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
  operatingSystem: "Web, Android, iOS",
  url: "https://pradrava.com/products/fluids",
  description: "Industrial gas operations software for cylinder lifecycle tracking, dispatch, refill, quality, and analytics.",
  brand: {
    "@type": "Brand",
    name: "Pradrava",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

const features = [
  {
    icon: "🧭",
    title: "Plant Flow Command Center",
    desc: "Real-time overview across demand, procurement, cylinder distribution, and item distribution zones with drill-down visibility into every stage.",
  },
  {
    icon: "🧪",
    title: "Trace Passport",
    desc: "End-to-end lifecycle trace for any cylinder, item, or order with module/stage, idle hours, risk level, and event timeline in one view.",
  },
  {
    icon: "📦",
    title: "Cylinder Assignment Engine",
    desc: "Match open sales order lines with available cylinders by gas composition, capacity, and ownership before dispatch.",
  },
  {
    icon: "♻️",
    title: "Refill Queue + Production",
    desc: "Push eligible empty or low-pressure cylinders to refill queue and track production readiness, urgency, and donor-cylinder gas transfer.",
  },
  {
    icon: "🔁",
    title: "Sales + Procurement Lifecycle",
    desc: "Manage enquiry to quote to order on sales side, and requisition to RFQ to PO on procurement side with stage and conversion tracking.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "AI-driven analytics with cylinder and system tabs, KPI dashboard, and recent activity feed for operational decision support.",
  },
  {
    icon: "📷",
    title: "Mobile Scanner App",
    desc: "Companion React Native scanner app for Android/iOS to scan cylinder QR/barcodes and trigger workflow actions using the same backend APIs.",
  },
  {
    icon: "🔐",
    title: "Session + Role Security",
    desc: "Auto-logout after 10 minutes inactivity and route/action-level access gates for Super Admin, Manager, Accountant, Operator, and Viewer.",
  },
];

const coreFlows = [
  {
    n: "01",
    title: "Sales Lifecycle",
    desc: "Create and manage customer enquiry, quotation, and order workflows with clear stage transitions and conversion timing.",
    items: [
      "Lifecycle stages: ENQUIRY_ONLY -> QUOTED -> ORDER_CREATED",
      "Track conversion time between each stage",
      "Dispatch filled cylinders against confirmed orders",
    ],
  },
  {
    n: "02",
    title: "Procurement Lifecycle",
    desc: "Run upstream sourcing from requisition through RFQ and quotation to final purchase orders, then bring inventory in with quality checks.",
    items: [
      "Purchase requisition -> RFQ -> quotation -> PO",
      "Goods receipt against purchase orders",
      "Item inward inspection before stock acceptance",
    ],
  },
  {
    n: "03",
    title: "Cylinder Operations",
    desc: "The domain core: register, assign, refill, inspect, service, rent, move, and transfer ownership of cylinders with full movement history.",
    items: [
      "Inventory with status, pressure, weight, valve, MFG/test dates",
      "Assignment by composition, capacity, and owner",
      "Refill queue + production (new fill and refill)",
      "Final inspection before dispatch",
      "Service and hydro-test tracking",
      "Rental duration, charges, and return status",
      "Cylinder movement and sold-cylinder ownership transfer",
      "Gas consumption logging by location and customer",
    ],
  },
  {
    n: "04",
    title: "Quality + Intelligence",
    desc: "Combine lab quality checks with operational intelligence for complete visibility and proactive risk control.",
    items: [
      "Quality lab records and product quality certification",
      "Picking and packing before dispatch",
      "KPI dashboard + AI natural language cylinder search",
      "Trace Passport for lifecycle, idle hours, and risk",
      "Cylinder Pipeline and AI-driven analytics tabs",
    ],
  },
];

const zoneBreakdown = [
  {
    zone: "Zone 1",
    title: "Demand Flow",
    desc: "Tracks enquiry to quotation to sales order flow and exposes stage bottlenecks in real time.",
  },
  {
    zone: "Zone 2",
    title: "Procurement Flow",
    desc: "Monitors requisitions, RFQs, quotations, and purchase orders to keep supply aligned with demand.",
  },
  {
    zone: "Zone 3",
    title: "Cylinder Distribution",
    desc: "Shows live cylinder counts and movement by module and stage across plant operations.",
  },
  {
    zone: "Zone 4",
    title: "Item Distribution",
    desc: "Tracks non-cylinder item progression by module and stage with drill-down details.",
  },
];

const modules = [
  "Sales: Enquiry, Quotation, Sales Order lifecycle",
  "Goods Dispatch against confirmed sales orders",
  "Procurement: Requisition, RFQ, Quotation, PO lifecycle",
  "Goods Receipt and Item Inward Inspection",
  "Cylinder Inventory Register with technical attributes",
  "Cylinder Assignment Engine for order allocation",
  "Refill Queue for empty and low cylinders",
  "Production Queue for fills and refills",
  "Item Production workflow for non-cylinder items",
  "Final Inspection before dispatch",
  "Cylinder Service and hydro-test tracking",
  "Cylinder Rental Tracking with charges and returns",
  "Cylinder Movement tracking across locations",
  "Cylinder Sale Assignment and ownership transfer",
  "Gas Consumption Log by location/customer",
  "Quality Lab and Product Quality certifications",
  "Picking and Packing operations",
  "Dashboard with KPI cards and activity feed",
  "AI-powered natural language cylinder search",
  "Plant Flow Command Center with zone drill-down",
  "Trace Passport with idle hours and risk level",
  "Cylinder Pipeline visualization",
  "Advanced Analytics (cylinder tab and system tab)",
  "Masters for customers, vendors, gas, valves, capacity, locations",
  "Manager controls and system settings",
  "AI provider toggle (Mistral / Anthropic / fallback)",
  "Manage Users with role assignments",
  "Mobile scanner app with shared backend APIs",
];

const keyCharacteristics = [
  {
    feature: "Session Security",
    detail: "Auto-logout after 10 minutes of inactivity",
  },
  {
    feature: "Role-Based Access",
    detail: "5 roles with route-level and action-level gates: Super Admin, Manager, Accountant, Operator, Viewer",
  },
];

const faq = [
  {
    q: "What types of assets can Fluids track?",
    a: "Fluids tracks gas cylinders, pallets, gas banks, trolleys, and SKIDs—giving you complete visibility over every asset in your fleet, across all locations and customers.",
  },
  {
    q: "What transaction types are supported?",
    a: "It supports dispatch and returns as part of sales fulfillment, plus upstream procurement flows and deep cylinder operations including assignment, refill, production, inspection, movement, rental, and ownership transfer.",
  },
  {
    q: "Can we trace a cylinder end-to-end?",
    a: "Yes. Trace Passport provides full lifecycle visibility for cylinder, item, or order including current module, stage, idle hours, risk level, and complete event timeline.",
  },
  {
    q: "Is Fluids accessible on mobile?",
    a: "Yes. There is a companion scanner-app built with Expo (React Native) for Android and iOS, in addition to responsive web access.",
  },
  {
    q: "How does Plant Flow Command Center help operations?",
    a: "It gives a real-time, zone-based operational map across demand, procurement, cylinder distribution, and item distribution, with drill-down stage counts for faster interventions.",
  },
  {
    q: "How is access controlled for different teams?",
    a: "Fluids enforces route-level and action-level permission gates across five roles: Super Admin, Manager, Accountant, Operator, and Viewer.",
  },
];

export default function FluidsPage() {
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fluidsSchema) }}
      />

      {/* Hero */}
      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Pradrava Product • Live</p>
        <h1 className="hero-title">Fluids</h1>
        <p className="hero-subtitle">
          End-to-end industrial gas cylinder operations platform that tracks every
          cylinder from procurement through filling, quality inspection, customer
          delivery, rental, and return.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Request a Demo</Link>
          <Link href="/services" className="btn btn-ghost">
            Talk to Sales
          </Link>
        </div>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>Functional Summary</h3>
        <p>
          Fluids is purpose-built for gas manufacturers and distributors to manage
          sales, procurement, cylinder operations, quality, inventory, and analytics
          in one connected operating system.
        </p>
      </div>

      {/* Features */}
      <div className="reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Features</p>
          <h2>Platform capabilities</h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <article key={f.title} className="feature-tile">
              <div className="feature-tile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Core Business Flows */}
      <div className="reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Core Business Flows</p>
          <h2>Mapped to actual plant operations</h2>
        </div>
        <div className="flow-grid">
          {coreFlows.map((s) => (
            <div key={s.n} className="flow-card">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="flow-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Plant Flow Command Center</p>
          <h2>Real-time zone intelligence</h2>
        </div>
        <div className="zones-grid">
          {zoneBreakdown.map((zone) => (
            <article key={zone.zone} className="zone-card">
              <p className="zone-tag">{zone.zone}</p>
              <h3>{zone.title}</h3>
              <p>{zone.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="modules-panel reveal delay-2">
        <h2>Full Modules & Feature List</h2>
        <ul className="modules-checklist">
          {modules.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="security-grid reveal delay-2">
        {keyCharacteristics.map((entry) => (
          <article key={entry.feature} className="security-card">
            <h3>{entry.feature}</h3>
            <p>{entry.detail}</p>
          </article>
        ))}
      </div>

      {/* FAQ */}
      <div className="reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
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
        <h3>See Fluids in action today</h3>
        <p>
          Book a guided demo with our team and see how Fluids fits your existing
          workflow. No commitment required.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Request a Demo</Link>
          <Link href="/products" className="btn btn-ghost">← Back to Products</Link>
        </div>
      </div>

    </div>
  );
}
