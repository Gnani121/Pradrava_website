import Link from "next/link";
import { fluidsFeatures, accountingFeatures } from "@/data/products";

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
              End-to-end industrial gas operations platform that tracks each cylinder
              from procurement through filling, quality inspection, customer delivery,
              rental, and return.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/products/fluids" className="btn btn-primary">Full Details</Link>
            <Link href="/demo" className="btn btn-ghost">See Live Demo</Link>
          </div>
        </div>

        <div className="showcase-chip-grid">
          {fluidsFeatures.map((f) => (
            <div key={f.title} className="showcase-chip">
              <span className="chip-icon">{f.icon}</span>
              {f.title}
            </div>
          ))}
        </div>

        <div className="product-showcase-footer">
          <p>Includes dashboard KPIs, AI-powered search, pipeline visibility, and full lifecycle traceability</p>
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
