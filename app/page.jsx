import Link from "next/link";
import Hero from "@/components/Hero";
import { products, fluidsFeatures } from "@/data/products";
import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export const metadata = {
  title: "Pradrava | Purpose-Built Software for Industrial Operations",
  description:
    "Pradrava builds purpose-built software for industrial gas operations and finance — cylinder tracking, quality control, procurement, dispatch, and reporting in one connected system, with implementation and support to match.",
  keywords: [
    "industrial operations software",
    "cylinder tracking platform",
    "gas operations software",
    "finance operations software",
    "SaaS products",
    "operations automation",
  ],
  alternates: {
    canonical: "/",
  },
};

const differentiators = [
  {
    icon: "🎯",
    title: "Built for real operations",
    desc: "Every feature traces back to an actual workflow pain point on the plant floor — not a generic template. If it doesn't earn its place, it isn't there.",
  },
  {
    icon: "🧱",
    title: "Modular by design",
    desc: "Start with exactly what you need today — cylinders only, items only, or both — and activate additional modules as your operations grow.",
  },
  {
    icon: "🛡️",
    title: "Production-grade from day one",
    desc: "Role-based access, audit trails, tenant isolation, and uptime reliability are engineered in from the start — not bolted on after launch.",
  },
];

const outcomes = [
  { stat: "Zero", label: "lost cylinders", desc: "Full lifecycle traceability from procurement to return means every asset is accounted for." },
  { stat: "Minutes", label: "not days", desc: "Generate invoices, dispatch orders, and quality records in real time instead of chasing paper." },
  { stat: "One", label: "source of truth", desc: "Sales, procurement, production, quality, and finance all read from the same live data." },
];

const highlightFeatures = fluidsFeatures.slice(0, 6);

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />

      {/* Trust strip */}
      <div className="trust-strip reveal">
        <span>Industrial Gas</span>
        <span>·</span>
        <span>Manufacturing</span>
        <span>·</span>
        <span>Quality &amp; Compliance</span>
        <span>·</span>
        <span>Finance Operations</span>
      </div>

      {/* Why Pradrava */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Why Pradrava</p>
          <h2>Software that solves real operational problems</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            We don&apos;t sell shelfware. Each product is built alongside the teams who use it,
            so it fits the way your plant actually runs.
          </p>
        </div>
        <div className="pulse-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="pulse-card">
              <div className="feature-tile-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Our Products</p>
          <h2>Purpose-built platforms for demanding industries</h2>
        </div>
        <div className="card-grid">
          {products.map((p) => (
            <Link key={p.title} href={p.href} className="card service-card product-card-link">
              <div className="product-card-top">
                <span className="product-badge">{p.tag}</span>
                {p.status !== "Available" && (
                  <span className="product-status-badge">{p.status}</span>
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="inline-cta" style={{ marginTop: "1rem" }}>
                {p.status === "Available" ? "Explore" : "See roadmap"}
              </span>
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/products" className="btn btn-ghost">View All Products</Link>
        </div>
      </section>

      {/* Capability highlights */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Inside the Platform</p>
          <h2>Everything a plant needs, connected end to end</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            A snapshot of what Fluids does out of the box — from live plant visibility to
            traceability, assignment, refill, and quality.
          </p>
        </div>
        <div className="features-grid">
          {highlightFeatures.map((f) => (
            <article key={f.title} className="feature-tile">
              <div className="feature-tile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/products/fluids" className="btn btn-ghost">See All Fluids Features</Link>
        </div>
      </section>

      {/* Outcomes band */}
      <section className="modules-panel reveal">
        <p className="eyebrow">The Payoff</p>
        <h2 style={{ marginBottom: "1.8rem" }}>What changes when operations run on Pradrava</h2>
        <div className="hero-stats" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
          {outcomes.map((o) => (
            <article key={o.label}>
              <strong style={{ fontSize: "1.9rem" }}>{o.stat}</strong>
              <span style={{ fontSize: "0.95rem", color: "#a5b4fc", fontWeight: 700 }}>{o.label}</span>
              <span style={{ marginTop: "0.4rem" }}>{o.desc}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Demos */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Interactive Experiences</p>
          <h2>Explore what your future platform can feel like</h2>
        </div>
        <div className="card-grid">
          {demos.map((d) => (
            <DemoCard key={d.slug} demo={d} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Professional Services</p>
          <h2>We go beyond the software</h2>
        </div>
        <p className="lead">
          Alongside our products, we offer implementation, onboarding, custom integrations,
          and ongoing support — so your team gets the full value from day one and keeps
          getting it as you grow.
        </p>
        <div className="section-cta-row">
          <Link href="/services" className="btn btn-ghost">See Our Services</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="momentum-panel reveal">
        <p className="eyebrow">Get Started</p>
        <h3>Ready to modernize your operations?</h3>
        <p>
          Explore our products, request a guided walkthrough, or talk to our team about
          exactly how Pradrava fits your workflow.
        </p>
        <div className="hero-actions">
          <Link href="/products" className="btn btn-primary">Explore Products</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to Us</Link>
        </div>
      </section>
    </div>
  );
}
