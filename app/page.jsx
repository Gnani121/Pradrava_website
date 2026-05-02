import Link from "next/link";
import Hero from "@/components/Hero";
import { products } from "@/data/products";
import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export const metadata = {
  title: "Pradrava | Purpose-Built Software Products",
  description: "Pradrava builds purpose-built software products for industrial operations and finance — with implementation and support services to match.",
  keywords: [
    "industrial operations software",
    "cylinder tracking platform",
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
    title: "Built for real operations",
    desc: "Every feature traces back to an actual workflow pain point — not a generic template."
  },
  {
    title: "Modular by design",
    desc: "Start with what you need today and activate additional modules as your operations grow."
  },
  {
    title: "Production-grade from day one",
    desc: "Security, role-based access, audit trails, and uptime reliability are built in — not bolted on."
  }
];

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Why Pradrava</p>
          <h2>Products that solve real operational problems</h2>
        </div>
        <div className="pulse-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="pulse-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

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
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/products" className="btn btn-ghost">View All Products</Link>
        </div>
      </section>

      <section className="section-block reveal delay-1">
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

      <section className="section-block reveal delay-1">
        <div className="section-head">
          <p className="eyebrow">Professional Services</p>
          <h2>We go beyond the software</h2>
        </div>
        <p className="lead">
          Alongside our products, we offer implementation, onboarding, custom integrations,
          and ongoing support — so your team gets the full value from day one.
        </p>
        <div className="section-cta-row">
          <Link href="/services" className="btn btn-ghost">See Our Services</Link>
        </div>
      </section>

      <section className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get Started</p>
        <h3>Ready to modernize your operations?</h3>
        <p>
          Explore our products, request a walkthrough, or talk to our team about
          how Pradrava fits your workflow.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <Link href="/products" className="btn btn-primary">Explore Products</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to Us</Link>
        </div>
      </section>
    </div>
  );
}