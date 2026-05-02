import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <p className="eyebrow">Purpose-Built Software</p>
      <h1 className="hero-title">Powerful products. Real operations. Zero compromise.</h1>
      <p className="hero-subtitle">
        Pradrava builds specialized software products for industrial operations and finance —
        with the depth, reliability, and support that demanding businesses need.
      </p>

      <div className="hero-actions">
        <Link href="/products" className="btn btn-primary">
          Explore Products
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Talk to Us
        </Link>
      </div>

      <div className="hero-stats" aria-label="Key product highlights">
        <article>
          <strong>2</strong>
          <span>industry-focused products</span>
        </article>
        <article>
          <strong>99.9%</strong>
          <span>designed for uptime</span>
        </article>
        <article>
          <strong>End-to-End</strong>
          <span>from tracking to reporting</span>
        </article>
      </div>
    </section>
  );
}