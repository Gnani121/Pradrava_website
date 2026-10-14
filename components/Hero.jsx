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
            sales, procurement, production, laboratory quality, inventory, dispatch and GST-correct
            billing stop being disconnected records and become one.
          </p>

          <div className="hero-actions">
            <Link href="/demo" className="btn btn-primary">
              Book a live demo
            </Link>
            <Link href="/products/fluids" className="btn btn-ghost">
              Explore Fluids
            </Link>
          </div>

          <p className="hero-meta">
            Works across every branch · Lab records an auditor will accept · Built for Indian GST
          </p>

          <div className="hero-stats" aria-label="Key product highlights">
            <article>
              <strong>Every</strong>
              <span>cylinder accounted for — where it is, who has it, when it was last tested</span>
            </article>
            <article>
              <strong>One</strong>
              <span>place for sales, plant, lab, dispatch and your accounts</span>
            </article>
            <article>
              <strong>All</strong>
              <span>your branches, each kept separate, the group total in one view</span>
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
