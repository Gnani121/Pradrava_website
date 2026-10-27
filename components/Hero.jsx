import Link from "next/link";

// The morning screen beside the headline. Deliberately generic ("a cylinder",
// "a sales order"): no record numbers, no figures, nothing about how the
// system decides any of it. It shows the reader their own morning.
const morning = [
  { tone: "bad", title: "A cylinder is due for its pressure test", note: "Held back from dispatch until it is tested. Nobody has to spot it." },
  { tone: "warn", title: "A sales order has been waiting at dispatch too long", note: "The dispatch lead was told. Their manager is next if it keeps waiting." },
  { tone: "warn", title: "A customer is holding your cylinders past the free period", note: "Rent is now running and will be billed. Nobody has to remember." },
  { tone: "ok", title: "A delivery was signed for", note: "The GST invoice is ready to send." },
  { tone: "live", title: "A gas test passed", note: "The certificate is ready for the customer." },
];

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
            <a href="#your-day" className="btn btn-ghost">
              See what changes for you
            </a>
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

        <aside className="hero-morning" aria-label="Illustration of the screen a plant manager opens in the morning">
          <div className="hero-morning-top">
            <h2>Your plant, this morning</h2>
            <span>Illustration</span>
          </div>
          <ul>
            {morning.map((m) => (
              <li key={m.title}>
                <i className={`hero-morning-sig ${m.tone}`} aria-hidden="true" />
                <div>
                  <strong>{m.title}</strong>
                  <p>{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="hero-morning-foot">One screen. It tells you what needs you, before anyone has to call.</p>
        </aside>
      </div>
    </section>
  );
}
