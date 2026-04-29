import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <p className="eyebrow">Built For Bold Teams</p>
      <h1 className="hero-title">Launch faster. Operate smarter. Scale with confidence.</h1>
      <p className="hero-subtitle">
        We design high-performance products and AI-enabled systems that turn ambitious
        ideas into measurable growth, not just more code.
      </p>

      <div className="hero-actions">
        <Link href="/demo" className="btn btn-primary">
          See It Live
        </Link>
        <Link href="/services" className="btn btn-ghost">
          Plan My Roadmap
        </Link>
      </div>

      <div className="hero-stats" aria-label="Key impact highlights">
        <article>
          <strong>2-4x</strong>
          <span>faster rollout cycles</span>
        </article>
        <article>
          <strong>99.9%</strong>
          <span>designed for platform uptime</span>
        </article>
        <article>
          <strong>24/7</strong>
          <span>designed for continuous monitoring</span>
        </article>
      </div>
    </section>
  );
}