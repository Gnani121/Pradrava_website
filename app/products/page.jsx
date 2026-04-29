import Link from "next/link";
import { accountingFeatures } from "@/data/products";

const cylinderOnlyHighlights = [
  "Cylinder Assignment Engine",
  "Refill Queue + Filling Production",
  "Cylinder Service + Hydro-test Tracking",
  "Rental Lifecycle + Return Monitoring",
  "Cylinder Movement + Ownership Transfer",
  "Cylinder Trace Passport + Risk Visibility",
  "Final Inspection before Dispatch",
  "Scanner App for cylinder QR/barcode actions",
];

const itemOnlyHighlights = [
  "Item Inward Inspection from purchase orders and returns",
  "Inward metadata capture: entry ID, order reference, recipient, date, count",
  "Inward status flow: pending → in_progress → completed",
  "Item Production job creation linked to sales orders/requisitions",
  "Material consumption logging with quantity, unit, and storage location",
  "Partial or full production completion with resume support",
  "Item Service for repairs, upgrades, and component replacement",
  "Item Dispatch with ordered/packed/dispatched tracking and partial shipments",
  "Item lifecycle visibility in Trace Passport",
  "Zone 4 item distribution analytics by module and stage",
];

export const metadata = {
  title: "Products | Pradrava",
  description: "Fluids: end-to-end industrial gas operations. Accounting: finance operations platform (upcoming). Purpose-built for scale.",
  keywords: [
    "industrial gas software",
    "cylinder tracking platform",
    "finance operations software",
    "SaaS products",
    "operations automation",
  ],
  alternates: {
    canonical: "/products",
  },
};

const productsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pradrava Products",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Fluids",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        url: "https://pradrava.com/products/fluids",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Accounting",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://pradrava.com/products/accounting",
      },
    },
  ],
};

export default function ProductsPage() {
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsListSchema) }}
      />

      {/* Page header */}
      <div className="section-head reveal">
        <p className="eyebrow">Products</p>
        <h1>Built for industrial operations</h1>
      </div>
      <p className="lead reveal delay-1">
        Two purpose-built platforms—Fluids for gas and cylinder operations, Accounting for
        financial control—designed to work independently or together as an integrated system.
      </p>

      {/* ── FLUIDS ───────────────────────────────────────────── */}
      <div className="product-showcase-block reveal delay-1">
        <div className="product-showcase-header fluids-header">
          <div>
            <span className="product-badge">Industrial Gas</span>
            <h2>Fluids</h2>
            <p>
              Fluids supports modular deployment. You can run Cylinder Management only,
              Item Management only, or enable both later. For now, details are shown
              separately below to avoid mixing workflows.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/products/fluids" className="btn btn-primary">Full Details</Link>
            <Link href="/demo" className="btn btn-ghost">See Live Demo</Link>
          </div>
        </div>

        <div className="flow-grid" style={{ marginBottom: "1.4rem" }}>
          <article className="flow-card">
            <h3>Cylinder Management</h3>
            <p>
              Dedicated cylinder workflows for gas operations teams managing refill,
              service, movement, dispatch, and returns.
            </p>
            <ul className="flow-list">
              {cylinderOnlyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="flow-card">
            <h3>Item Management</h3>
            <p>
              Separate non-cylinder workflow for accessories, components, raw materials,
              and finished goods from inward to production, service, and dispatch.
            </p>
            <ul className="flow-list">
              {itemOnlyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="product-showcase-footer">
          <p>Both sections are independent. Teams can activate only the module they need today and expand later.</p>
          <Link href="/products/fluids" className="btn btn-ghost btn-sm">Explore Fluids →</Link>
        </div>
      </div>

      {/* ── ACCOUNTING ───────────────────────────────────────── */}
      <div className="product-showcase-block reveal delay-2">
        <div className="product-showcase-header accounting-header">
          <div>
            <span className="product-badge orange">Upcoming</span>
            <h2>Accounting</h2>
            <p>
              Accounting is currently in active development. We are building a
              finance workspace for invoicing, reconciliation, and reporting with
              audit-ready controls.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/products/accounting" className="btn btn-primary">View Roadmap</Link>
            <Link href="/contact?interest=accounting-launch&source=products-accounting" className="btn btn-ghost">Get Launch Updates</Link>
          </div>
        </div>

        <div className="showcase-chip-grid">
          {accountingFeatures.map((f) => (
            <div key={f.title} className="showcase-chip">
              <span className="chip-icon">{f.icon}</span>
              <span>{f.title}</span>
              <span className="chip-state">Planned</span>
            </div>
          ))}
        </div>

        <div className="product-showcase-footer">
          <p>Planned release: phased rollout with core invoicing, reconciliation, and reporting modules</p>
          <Link href="/products/accounting" className="btn btn-ghost btn-sm">See What Is Coming →</Link>
        </div>
      </div>

      {/* CTA */}
      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get Started</p>
        <h3>Ready to see it live?</h3>
        <p>
          Fluids is available for guided demos now. Accounting is in active
          development and open for launch updates.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Request a Demo</Link>
          <Link href="/services" className="btn btn-ghost">Talk to Our Team</Link>
        </div>
      </div>

    </div>
  );
}
