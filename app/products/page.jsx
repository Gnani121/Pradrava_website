import Link from "next/link";
import { products } from "@/data/products";
import { pillars, standards } from "@/data/fluids";

export const metadata = {
  title: "Products | Pradrava",
  description:
    "Pradrava products: Fluids, a complete operations system for industrial gas plants covering cylinder lifecycle, quality, procurement, production, dispatch and GST compliance — and Accounting, a companion ledger in development.",
  keywords: [
    "industrial gas software products",
    "gas cylinder ERP",
    "plant operations platform",
    "accounting software for gas distribution",
  ],
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Our Products</p>
        <h1>Two products. One is live and deep.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          We build a small number of things properly rather than a catalogue of things
          approximately. Fluids runs industrial gas plants today. Accounting is being built on the
          same foundation and is not yet available — until it is, Fluids hands your documents to
          whatever accounts package you already use.
        </p>
      </div>

      <div className="card-grid reveal delay-1">
        {products.map((p) => (
          <Link key={p.title} href={p.href} className="card service-card product-card-link">
            <div className="product-card-top">
              <span className="product-badge">{p.tag}</span>
              <span className={`product-status-badge${p.status === "Available" ? "" : " neutral"}`}>
                {p.status}
              </span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="inline-cta" style={{ marginTop: "1rem" }}>
              {p.status === "Available" ? "Explore Fluids" : "See where it stands"}
            </span>
          </Link>
        ))}
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Inside Fluids</p>
          <h2>Six capability areas, each with its own depth</h2>
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

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Compliance</p>
          <h2>Standards the product was built against</h2>
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

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Not sure which fits?</p>
        <h3>Tell us how your plant runs</h3>
        <p>
          Whether you fill your own gas, import and distribute, or run several branches under one
          group — we will tell you honestly which parts of Fluids you need and which you can
          leave switched off.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>
    </div>
  );
}
