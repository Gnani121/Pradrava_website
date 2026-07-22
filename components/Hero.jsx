import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Purpose-Built Operations Software</p>
          <h1 className="hero-title">
            Run your plant on <span className="grad-text">one connected system</span>
          </h1>
          <p className="hero-subtitle">
            Pradrava builds industrial-grade platforms that turn scattered spreadsheets and
            manual tracking into clear, reliable workflows — from cylinder operations and
            quality control to procurement, dispatch, and financial reporting.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link href="/demo" className="btn btn-ghost">
              See a Live Demo
            </Link>
          </div>

          <p className="hero-meta">
            Fast onboarding · Modular by design · Enterprise-grade security &amp; audit trails
          </p>

          <div className="hero-stats" aria-label="Key product highlights">
            <article>
              <strong>30+</strong>
              <span>operational modules in Fluids</span>
            </article>
            <article>
              <strong>99.9%</strong>
              <span>designed-for uptime</span>
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
            <strong>Real-time inventory map</strong>
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
