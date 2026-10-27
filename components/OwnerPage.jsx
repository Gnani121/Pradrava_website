import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";

// One layout for every Fluids page, so they read like the homepage: a question
// the owner recognises, what changes for them, and what the system stops. The
// copy lives in data/ownerPages.js and says WHAT happens, never HOW — no record
// numbers, no figures, nothing about how the software is built.
export default function OwnerPage({ page, current }) {
  const p = page;
  return (
    <div className="container page-stack">
      <FluidsSubNav current={current} />

      <section className="hero reveal">
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="hero-copy" style={{ position: "relative", zIndex: 1, maxWidth: "62rem" }}>
          <p className="eyebrow">{p.eyebrow}</p>
          <h1 className="hero-title">
            {p.title} {p.titleAccent && <span className="grad-text">{p.titleAccent}</span>}
          </h1>
          <p className="hero-subtitle">{p.lead}</p>
          <div className="hero-actions">
            <Link href="/demo" className="btn btn-primary">
              Book a live demo
            </Link>
            <Link href="/contact?interest=fluids-demo" className="btn btn-ghost">
              Talk to us
            </Link>
          </div>
          {p.highlights && (
            <div className="hero-stats" aria-label="Highlights">
              {p.highlights.map((h) => (
                <article key={h.strong}>
                  <strong>{h.strong}</strong>
                  <span>{h.text}</span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {p.questions && (
        <section className="section-block reveal">
          <div className="section-head">
            <p className="eyebrow">Sound familiar?</p>
            <h2>{p.questionsTitle}</h2>
          </div>
          <div className="home-calls">
            {p.questions.map((c) => (
              <article key={c.q} className="home-call">
                <q>{c.q}</q>
                <p className="home-call-was">
                  <b>Today:</b> {c.was}
                </p>
                <p className="home-call-now">
                  <b>With Fluids:</b> {c.now}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {p.flow && (
        <section className="section-block home-tint reveal">
          <div className="section-head">
            <p className="eyebrow">{p.flow.eyebrow}</p>
            <h2>{p.flow.title}</h2>
            {p.flow.lead && (
              <p className="lead" style={{ marginTop: "0.9rem" }}>
                {p.flow.lead}
              </p>
            )}
          </div>
          <ol className="home-rail">
            {p.flow.steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.hold && <p className="home-rail-hold">{s.hold}</p>}
              </li>
            ))}
          </ol>
        </section>
      )}

      {p.areas && (
        <section className="section-block reveal">
          <div className="section-head">
            <p className="eyebrow">{p.areas.eyebrow}</p>
            <h2>{p.areas.title}</h2>
          </div>
          <div className="home-plants">
            {p.areas.items.map((a) => (
              <article key={a.title} className="home-plant">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                {a.gain && <p className="home-plant-gain">{a.gain}</p>}
                {a.href && (
                  <Link href={a.href} className="inline-cta">
                    See how →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {p.stops && (
        <section className="section-block reveal">
          <div className="section-head">
            <p className="eyebrow">{p.stops.eyebrow}</p>
            <h2>{p.stops.title}</h2>
          </div>
          <div className="home-qs">
            {p.stops.items.map((t) => (
              <article key={t.big} className="home-q">
                <p className="home-q-big">{t.big}</p>
                <p>{t.line}</p>
                {t.points && (
                  <ul>
                    {t.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {p.reminders && (
        <section className="section-block home-tint reveal">
          <div className="section-head">
            <p className="eyebrow">{p.reminders.eyebrow}</p>
            <h2>{p.reminders.title}</h2>
            {p.reminders.lead && (
              <p className="lead" style={{ marginTop: "0.9rem" }}>
                {p.reminders.lead}
              </p>
            )}
          </div>
          <div className="home-remind">
            {p.reminders.items.map((r) => (
              <div key={r.title} className="home-rm">
                <b>{r.title}</b>
                <span>{r.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {p.soon && (
        <section className="section-block reveal">
          <div className="section-head">
            <p className="eyebrow">Straight with you</p>
            <h2>{p.soon.title}</h2>
            <p className="lead" style={{ marginTop: "0.9rem" }}>
              {p.soon.lead}
            </p>
          </div>
          <div className="home-remind">
            {p.soon.items.map((r) => (
              <div key={r.title} className="home-rm">
                <b>{r.title}</b>
                <span>{r.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {p.faq && (
        <section className="section-block reveal">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>What people ask us before they start</h2>
          </div>
          <div className="faq-list">
            {p.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p className="faq-body">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="momentum-panel reveal">
        <p className="eyebrow">Get Started</p>
        <h3>{p.cta?.title ?? "See it on your own workflow"}</h3>
        <p>
          {p.cta?.text ??
            "Bring us your hardest process. We will show you the screen that does it, live, in the demo."}
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">
            Book a live demo
          </Link>
          <Link href="/contact?interest=fluids-demo" className="btn btn-ghost">
            Talk to us
          </Link>
        </div>
      </section>
    </div>
  );
}
