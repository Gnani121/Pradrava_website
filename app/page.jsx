import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Pradrava | Operations Software for Industrial Gas Plants",
  description:
    "Pradrava builds Fluids — cylinder lifecycle, sales, procurement, production, laboratory quality, dispatch and GST-correct invoicing on one set of live data. Know where every cylinder is, what is stuck, and stop an out-of-test cylinder before it leaves.",
  keywords: [
    "gas cylinder management software",
    "gas cylinder tracking software",
    "industrial gas plant software",
    "gas filling plant software",
    "oxygen plant software",
    "gas cylinder billing software",
    "GST billing software for gas cylinders",
    "cylinder rental and demurrage billing",
    "gas cylinder inventory software",
    "gas plant ERP India",
    "cylinder management software for gas agency",
    "ISO 6141 certificate of analysis software",
  ],
  alternates: {
    canonical: "/",
  },
};

// Written for a plant owner, not a developer: every line says what changes for
// the customer, never how the system does it. No record numbers, no figures,
// no module counts — a cylinder is "a cylinder", an order is "a sales order".

const questions = [
  {
    q: "How many of our cylinders does that customer have?",
    was: "someone digs through challans and a register, and the number still gets argued.",
    now: "the answer is on screen, both ways: your cylinders with them, and theirs with you.",
  },
  {
    q: "Why hasn't this order gone out yet?",
    was: "you ring three desks to find where it stopped.",
    now: "you see the step it is stuck at, who has it, and how long it has been sitting there.",
  },
  {
    q: "Was this cylinder tested before it left?",
    was: "you find out when the customer or an inspector asks.",
    now: "an out-of-test cylinder cannot be dispatched. It is caught at the gate.",
  },
  {
    q: "Did we bill rent on the cylinders out with customers?",
    was: "someone has to remember, and usually doesn't.",
    now: "rent starts after the free period and is billed when it is due, every time.",
  },
  {
    q: "The customer is asking for the test certificate.",
    was: "someone types it into a spreadsheet from the lab notebook.",
    now: "it is printed from the actual test result, ready for their auditor.",
  },
  {
    q: "Which branch is actually making money?",
    was: "you wait for each branch to send its numbers.",
    now: "every branch is kept separate, and the group total is one view away.",
  },
];

const orderSteps = [
  { title: "Enquiry and quotation", desc: "The customer's request becomes a priced quotation with the right GST." },
  { title: "Sales order", desc: "Confirmed in one step. Stock is held for it straight away." },
  { title: "Cylinders assigned", desc: "The right cylinders are set aside. Two orders can never claim the same one." },
  { title: "Filling", desc: "The filling floor sees what to fill, and what it used is recorded." },
  { title: "Gas tested", desc: "The lab records the result and the certificate comes from it.", hold: "Fails the test? It goes back for rework, not onto a truck." },
  { title: "Checked before it leaves", desc: "Test date and papers are checked at the gate.", hold: "Out of test? It is held back." },
  { title: "Dispatch and delivery", desc: "The challan prints and the customer's signature closes the delivery." },
  { title: "Invoice and payment", desc: "A GST-correct invoice from the delivery, and you see who has paid." },
];

const threeQuestions = [
  {
    big: "Where is every cylinder?",
    line: "Open any cylinder and see its whole story.",
    points: [
      "Which bay it is standing in, or which customer has it",
      "Whether it is yours, the customer's, sold or on rent",
      "When it was last filled, tested and sent out",
    ],
  },
  {
    big: "What is stuck, and who has it?",
    line: "Every step has an owner. When work sits too long, someone is told.",
    points: [
      "Orders waiting to be filled, tested or dispatched",
      "Cylinders idle at a customer for weeks",
      "Invoices nobody has collected",
    ],
  },
  {
    big: "Is it safe to send?",
    line: "The checks happen before the truck, not after the complaint.",
    points: [
      "Out-of-test cylinders cannot be dispatched",
      "Gas that failed its test cannot go out",
      "A cylinder holding the wrong gas is stopped and held",
    ],
  },
];

const reminders = [
  { title: "Pressure test due", desc: "Every cylinder's next test date, flagged as it comes up." },
  { title: "Gas certificate expiry", desc: "Mixtures nearing the end of their stated life." },
  { title: "Rent and holding charges", desc: "Billed on time once the free period is over." },
  { title: "Unpaid invoices", desc: "Who is running late, and by how much." },
  { title: "Instrument calibration", desc: "Lab instruments due for re-calibration." },
  { title: "Cylinders idle at customers", desc: "Bottles that should have come back by now." },
];

const plantTypes = [
  { title: "Cylinder refillers and distributors", desc: "Refills, rentals, sales and customer cylinders, with every bottle accounted for.", gain: "Rent and returns handled for you" },
  { title: "Filling plants with a tank or air separation unit", desc: "Gas from your own tank or plant into cylinders, with what was used recorded.", gain: "Know your filling loss" },
  { title: "Bulk liquid suppliers", desc: "Tanker deliveries in and out, billed on the agreed rate.", gain: "Tank levels you can trust" },
  { title: "Specialty gas and testing labs", desc: "Mixtures, tests and certificates your customers' auditors accept.", gain: "Certificates from real results" },
];

const goLive = [
  { title: "Bring your lists", desc: "Customers, cylinders, gases and prices, in whatever form you keep them." },
  { title: "We load and set it up", desc: "Shaped to how your plant runs and which branches you have." },
  { title: "Every desk is trained", desc: "Sales, filling, lab, dispatch and accounts each learn their own screen." },
  { title: "Your first invoice", desc: "A real order, end to end, on your own data. Then we stay on call." },
];

export default function HomePage() {
  return (
    <div className="container page-stack">
      <Hero />

      <div className="trust-strip reveal">
        <span>Industrial Gas</span>
        <span>·</span>
        <span>Cylinder Fleets</span>
        <span>·</span>
        <span>Bulk Liquid</span>
        <span>·</span>
        <span>Laboratory Quality</span>
        <span>·</span>
        <span>Statutory Compliance</span>
        <span>·</span>
        <span>Multi-Branch Groups</span>
      </div>

      <section id="your-day" className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Sound familiar?</p>
          <h2>Six questions that eat your day, and what happens to them</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            These are the questions plant owners bring to the first call. Each one turns into a
            screen you open, instead of a phone call or a hunt through registers.
          </p>
        </div>
        <div className="home-calls">
          {questions.map((c) => (
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

      <section className="section-block home-tint reveal">
        <div className="section-head">
          <p className="eyebrow">One order, start to finish</p>
          <h2>A sales order travels the whole plant without anyone re-typing it</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Each desk picks up where the last one finished. The record moves with the cylinder, so
            nothing is lost between sales, the filling floor, the lab, dispatch and accounts.
          </p>
        </div>
        <ol className="home-rail">
          {orderSteps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.hold && <p className="home-rail-hold">{s.hold}</p>}
            </li>
          ))}
        </ol>
        <p className="home-note">
          Refills of the customer&apos;s own cylinders, rentals, outright sales, bulk liquid by
          tanker and lab-only testing all run on the same path.
        </p>
      </section>

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Three things you will never chase again</p>
          <h2>Where is it? Is it stuck? Is it safe to send?</h2>
        </div>
        <div className="home-qs">
          {threeQuestions.map((t) => (
            <article key={t.big} className="home-q">
              <p className="home-q-big">{t.big}</p>
              <p>{t.line}</p>
              <ul>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block home-tint reveal">
        <div className="section-head">
          <p className="eyebrow">It remembers so your team doesn&apos;t have to</p>
          <h2>Dates and dues that used to live in somebody&apos;s head</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            The system watches them, and tells the right person before it becomes a problem.
          </p>
        </div>
        <div className="home-remind">
          {reminders.map((r) => (
            <div key={r.title} className="home-rm">
              <b>{r.title}</b>
              <span>{r.desc}</span>
            </div>
          ))}
        </div>
        <div className="home-escal" aria-label="How a delay is escalated">
          <div>
            <small>First</small>
            <strong>The person who owns the step is told</strong>
          </div>
          <div>
            <small>Still waiting</small>
            <strong>Their manager is told</strong>
          </div>
          <div>
            <small>Always</small>
            <strong>It stays on screen until it is done</strong>
          </div>
        </div>
      </section>

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2>Built for the way your plant actually runs</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Switch on what you do and leave out what you don&apos;t. Start small and add more
            later, without moving your data.
          </p>
        </div>
        <div className="home-plants">
          {plantTypes.map((p) => (
            <article key={p.title} className="home-plant">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="home-plant-gain">{p.gain}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Getting live</p>
          <h2>We set it up with you, not just for you</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Software this deep needs someone who knows it. You bring the lists you already have; we
            do the rest alongside your team.
          </p>
        </div>
        <div className="home-steps">
          {goLive.map((s) => (
            <div key={s.title} className="home-step">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="momentum-panel reveal">
        <p className="eyebrow">Get Started</p>
        <h3>Bring us the thing that takes three people and a WhatsApp group</h3>
        <p>We will show you the screen that does it, live, in the demo. No slides.</p>
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
