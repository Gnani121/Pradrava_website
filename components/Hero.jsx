import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Purpose-Built Software</p>
          <h1 className="hero-title">Design smarter operations that scale with confidence</h1>
          <p className="hero-subtitle">
            Turn operational complexity into clear, reliable workflows with specialized
            products built for industrial execution and financial control.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to Us
            </Link>
          </div>

          <p className="hero-meta">Fast onboarding. Practical modules. Enterprise-grade reliability.</p>

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
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-ring" />
          <div className="mock-card mock-card-top">
            <p>Live Ops</p>
            <strong>Realtime inventory map</strong>
          </div>
          <div className="mock-bag">
            <div className="mock-bag-label">Pradrava Suite</div>
          </div>
          <div className="mock-cup" />
          <div className="float-dot dot-one" />
          <div className="float-dot dot-two" />
        </div>
      </div>
    </section>
  );
}