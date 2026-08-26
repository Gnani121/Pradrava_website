import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";

export const metadata = {
  title: "Production & Machines | Fluids | Pradrava",
  description:
    "Filling and transfilling with donor and receiver gas logging, item production with bill of materials and planned-versus-actual variance, production costing that feeds margin, genealogy traceability, plus OEE, MTBF and MTTR, preventive maintenance on run hours, calibration registers and telemetry ingestion.",
  keywords: [
    "cylinder filling management software",
    "OEE MTBF MTTR software",
    "preventive maintenance run hours software",
    "bill of materials variance manufacturing",
    "production genealogy traceability software",
    "machine calibration register software",
    "predictive maintenance rules",
  ],
  alternates: { canonical: "/products/fluids/production" },
};

const production = [
  {
    n: "01",
    title: "Filling and transfilling",
    desc: "The gas side of production, measured rather than assumed.",
    items: [
      "Reserve, fill and complete states on a live production queue",
      "Donor and receiver gas transfer with a consumption log by order, cylinder, operator and date",
      "Internal production jobs for top-up, transfer and buffer work not tied to a sales order",
      "Gas cost resolved in priority order: manual entry, then filling cost, then purchased and landed cost",
    ],
  },
  {
    n: "02",
    title: "Item production",
    desc: "The manufacturing side, for plants that build as well as fill.",
    items: [
      "Separate item production queue with release, start, partial and complete transitions",
      "Material consumption drawn from the inventory ledger with location tracking",
      "A released bill of materials with planned-versus-actual variance per job",
      "Production costing and work-in-progress absorption feeding item valuation",
    ],
  },
  {
    n: "03",
    title: "Traceability",
    desc: "Answering the recall question before anyone asks it.",
    items: [
      "Genealogy reporting forward and backward across the production chain",
      "Assembled from tracking events, quality tests, certificates, inspections and movements",
      "Any cylinder, gas composition, item or order can be traced from one screen",
    ],
  },
];

const machines = [
  {
    icon: "📊",
    title: "How much of the day a machine really ran (OEE)",
    desc: "Was it available, did it run at full rate, and was the output good — multiplied into one figure per machine, worked out from the usage log and the quality results rather than typed into a spreadsheet at month end.",
  },
  {
    icon: "🔧",
    title: "How often it breaks, and how long it stays down",
    desc: "The average run between breakdowns and the average time to get it going again, split by the reason it stopped — with those reasons ranked biggest first, so the argument about what to fix is settled by numbers.",
  },
  {
    icon: "⏰",
    title: "Preventive maintenance on run hours",
    desc: "Database triggers keep total run hours, accrued hours and next-due dates current from the usage log. Maintenance is scheduled by how much the machine has actually worked, not by a calendar reminder someone set once.",
  },
  {
    icon: "🧰",
    title: "Maintenance log with parts",
    desc: "Breakdowns and planned work recorded with reason codes, and the spare parts consumed drawn directly from inventory so maintenance cost is real.",
  },
  {
    icon: "📅",
    title: "Calibration register",
    desc: "Statutory and machine calibration tracked with validity windows and due alerts, so an instrument does not quietly fall out of certification mid-shift.",
  },
  {
    icon: "📶",
    title: "Telemetry and predictive rules",
    desc: "An ingestion endpoint accepts machine data tagged as manual, PLC, SCADA or IoT sourced, with predictive maintenance rules over it. The endpoint is live today; the plant-floor connector is the next step.",
  },
  {
    icon: "🗓️",
    title: "Finite scheduling",
    desc: "A shop-load view showing what each machine is committed to, so a promised delivery date is checked against capacity rather than optimism.",
  },
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/production" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Production &amp; Machines</h1>
        <p className="hero-subtitle">
          What happens between receiving gas and dispatching it, and the condition of the
          equipment that does it. Both measured, both costed, both feeding the same margin
          calculation as everything else.
        </p>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>Why production and maintenance sit together</h3>
        <p>
          A filling bay that is down is a production problem, a delivery problem and a customer
          problem in that order — but in most plants it is recorded as none of them. Fluids ties
          the machine to the job it was running, the hours it accrued, the maintenance that came
          due as a result and the cost of the spares consumed, so downtime is visible as money
          rather than as an anecdote.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Production</p>
          <h2>Three layers, one costed record</h2>
        </div>
        <div className="flow-grid">
          {production.map((s) => (
            <div key={s.n} className="flow-card">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="flow-list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Machines</p>
          <h2>Equipment as a managed asset</h2>
        </div>
        <div className="features-grid">
          {machines.map((m) => (
            <article key={m.title} className="feature-tile">
              <div className="feature-tile-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See what holds all of this together</h3>
        <p>
          Multi-company isolation, thirteen roles, module toggles per branch, and the checks that
          run before the application will even start.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids/platform" className="btn btn-primary">Platform &amp; Security →</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
