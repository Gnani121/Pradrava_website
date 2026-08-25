import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";
import {
  slaStats,
  slaLadder,
  slaModules,
  notificationMechanics,
  reminderEngines,
  notificationChannels,
  notificationSurfaces,
  notificationsFaq,
} from "@/data/notifications";

export const metadata = {
  title: "Notifications, SLA & Escalation | Fluids | Pradrava",
  description:
    "71 configurable hand-off rules across 65 stages give every step in a gas plant an owner, a deadline and an escalation path. Miss the clock and it goes to the role you nominated — plus ten scheduled reminder engines chasing overdue invoices, expiring quotes, due calibrations and cylinders approaching hydro-test.",
  keywords: [
    "SLA management software manufacturing",
    "workflow escalation software",
    "automated reminders ERP",
    "notification engine gas plant",
    "task escalation branch manager",
    "overdue invoice dunning reminder software",
    "cylinder hydro test due alert",
    "calibration expiry alert software",
  ],
  alternates: { canonical: "/products/fluids/notifications" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: notificationsFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const lifecycle = [
  { step: "Event", desc: "A step in the plant records that an item reached a stage." },
  { step: "Rule match", desc: "The database looks up your rule for that module and stage." },
  { step: "Raise", desc: "One task per role, with a due time = event time + your SLA hours." },
  { step: "Deliver", desc: "In-app always; email and the shop-floor chime where enabled." },
  { step: "Work", desc: "Whoever is on shift opens the record itself, from the alert." },
  { step: "Escalate", desc: "Still open past the window? A copy goes to the nominated role." },
];

const withoutWith = [
  {
    was: "The order sat for three days because the person who takes cylinder assignments was on leave.",
    now: "The task is addressed to the role, not the person, so whoever is on shift sees it — and at 48 hours it is on the branch manager's screen whether anyone was on leave or not.",
  },
  {
    was: "Everyone gets a copy of everything, so nobody reads any of it.",
    now: "Eight roles, 71 rules, and fifteen of them deliberately carry no deadline at all. What turns red is a small enough set that red still means something.",
  },
  {
    was: "We have SLAs. They are in the quality manual, and nobody has read it since the audit.",
    now: "The SLA is the row that raises the task. If it is not in the rule table it does not exist, and if it is, it is running right now.",
  },
  {
    was: "A cylinder failed its gas test on Friday and production found out on Monday.",
    now: "A failed test tells production, QC, the branch manager and admin at the same moment, on an eight-hour clock, and raises the rework job itself.",
  },
  {
    was: "The clock only starts when somebody logs in and notices.",
    now: "It starts at the event. A task raised at six on Friday evening is already eleven hours old when the plant opens.",
  },
  {
    was: "An alert went to a role nobody holds at that branch, so it went nowhere.",
    now: "It is re-addressed to the branch manager, and the substitution is written down — so the report tells you which desks you have not staffed.",
  },
];

export default function Page() {
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FluidsSubNav current="/products/fluids/notifications" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Notifications, SLA &amp; Escalation</h1>
        <p className="hero-subtitle">
          Most of what goes wrong in a plant is not a mistake. It is a hand-off nobody picked
          up. Fluids gives every one of 65 stages an owner, a deadline and a named person it
          escalates to — and none of that is written in code, so you change it yourself on a
          Tuesday afternoon.
        </p>

        <div className="product-hero-stats">
          {slaStats.map((s) => (
            <article key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>The gap this closes</h3>
        <p>
          A cylinder comes back from the filler and sits in inward for two days because the
          person who normally logs it was on leave. A requisition waits for an approval that
          the approver never saw. A quote goes quiet and nobody notices until the customer
          buys elsewhere. None of these is a failure of software or of care — they are the
          ordinary cost of work that is handed from one desk to another with nothing counting
          the time in between. That counting is what this module does, and it is the reason a
          plant on Fluids stops discovering delays at the point where a customer complains.
        </p>
      </div>

      {/* The pipeline */}
      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">How it works</p>
          <h2>Six steps, and only one of them involves a person</h2>
        </div>
        <div className="chain">
          {lifecycle.map((l, i) => (
            <span key={l.step} style={{ display: "contents" }}>
              <span>{l.step}</span>
              {i < lifecycle.length - 1 && <i>→</i>}
            </span>
          ))}
        </div>
        <dl className="spec-list" style={{ marginTop: "1.4rem" }}>
          {lifecycle.map((l) => (
            <div key={l.step} className="spec-row">
              <dt>{l.step}</dt>
              <dd>{l.desc}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Real rules */}
      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Configured today</p>
          <h2>Eight of the seventy-one, with their real numbers</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            These are shipped defaults, not illustrations. Every hour figure, every role and
            every escalation target below is editable from an admin screen without a release.
          </p>
        </div>
        <div className="sla-grid">
          {slaLadder.map((r) => (
            <article key={r.stage} className="sla-card">
              <div className="sla-card-head">
                <h3>{r.stage}</h3>
                <span className={`sla-pri sla-pri-${r.priority}`}>{r.priority}</span>
              </div>
              <div className="sla-route">
                <span className="sla-from">{r.from}</span>
                <i>→</i>
                <span className="sla-to">{r.to}</span>
              </div>
              <div className="sla-clock">
                <div>
                  <strong>{r.sla}</strong>
                  <span>to action</span>
                </div>
                <div>
                  <strong>{r.escalate}</strong>
                  <span>if still open</span>
                </div>
              </div>
              {r.also !== "—" && (
                <p className="sla-also">Also notified — {r.also}</p>
              )}
              <p className="sla-why">{r.why}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Mechanics */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Design decisions</p>
          <h2>Eight things that make the difference between an alert and a nag</h2>
        </div>
        <div className="features-grid">
          {notificationMechanics.map((m) => (
            <article key={m.title} className="feature-tile">
              <div className="feature-tile-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Coverage */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Coverage</p>
          <h2>Seventeen modules raise work, not just the obvious two</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            The interesting hand-offs are rarely inside a department. They are the seams
            between them — sales to production, the filler back to QC, inspection to the
            store — which is exactly where a spreadsheet has nothing to say.
          </p>
        </div>
        <div className="module-rule-grid">
          {slaModules.map((m) => (
            <article key={m.module} className="module-rule-card">
              <div className="module-rule-count">{m.rules}</div>
              <div>
                <h3>{m.module}</h3>
                <p>{m.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Channels */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Where it lands</p>
          <h2>Four channels, and we will tell you which one is not ready</h2>
        </div>
        <div className="channel-grid">
          {notificationChannels.map((c) => (
            <article key={c.channel} className="channel-card">
              <span
                className={
                  c.state === "Live" ? "channel-state live" : "channel-state pending"
                }
              >
                {c.state}
              </span>
              <h3>{c.channel}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Surfaces */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">On screen</p>
          <h2>What an operator can do with it</h2>
        </div>
        <dl className="spec-list">
          {notificationSurfaces.map((s) => (
            <div key={s.label} className="spec-row">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Reminder engines */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Reminders</p>
          <h2>Ten more engines that chase things nobody is watching</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            The hand-off rules cover work moving between desks. These cover the other kind of
            deadline — the one attached to a date rather than to a hand-off. Each runs on a
            schedule and each is switchable per branch.
          </p>
        </div>
        <div className="features-grid">
          {reminderEngines.map((r) => (
            <article key={r.name} className="feature-tile">
              <div className="feature-tile-icon">{r.icon}</div>
              <h3>{r.name}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Before / after */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">The difference</p>
          <h2>Six sentences you stop having to say</h2>
        </div>
        <div className="contrast-grid">
          {withoutWith.map((c) => (
            <article key={c.was} className="contrast-card">
              <p className="was">{c.was}</p>
              <p className="now">
                <strong>With Fluids</strong> {c.now}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>What people ask about SLAs</h2>
        </div>
        <div className="faq-list">
          {notificationsFaq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See the rest of the plant it is chasing</h3>
        <p>
          The SLA engine is only useful because there is a real operation underneath it. Start
          with the cylinder lifecycle, or see how the whole thing is switched on and off per
          branch.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids/cylinder-operations" className="btn btn-primary">
            Cylinder Operations →
          </Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>
    </div>
  );
}
