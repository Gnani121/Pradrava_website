import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Operations software for industrial gas</p>
          <h1 className="hero-title">
            Run the whole plant on <span className="grad-text">one set of live data</span>
          </h1>
          <p className="hero-subtitle">
            Pradrava builds Fluids — the operating system for a gas plant. Cylinder lifecycle,
            sales, procurement, production, laboratory quality, dispatch and GST-correct invoicing
            stop being seven disconnected records and become one.
          </p>

          <div className="hero-actions">
            <Link href="/products/fluids" className="btn btn-primary">
              See what Fluids does
            </Link>
            <Link href="/demo" className="btn btn-ghost">
              Try a live demo
            </Link>
          </div>

          <p className="hero-meta">
            Multi-branch from day one · ISO-grade quality records · India GST built in
          </p>

          <div className="hero-stats" aria-label="Key product highlights">
            <article>
              <strong>19</strong>
              <span>operational modules, one system</span>
            </article>
            <article>
              <strong>84</strong>
              <span>working screens, not menu items</span>
            </article>
            <article>
              <strong>13</strong>
              <span>roles checked on every request</span>
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
