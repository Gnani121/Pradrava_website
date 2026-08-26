import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";

export const metadata = {
  title: "Cylinder Operations | Fluids | Pradrava",
  description:
    "Full cylinder lifecycle in Fluids: receiving inspection, ownership segmentation, allocation without double-claim, filling, third-party refill, hydro test and valve service, rental and demurrage billing, hazard-class segregation and CCOE compliance gating.",
  keywords: [
    "cylinder lifecycle management software",
    "cylinder rental and demurrage billing",
    "hydro test tracking software",
    "CCOE PESO compliance cylinder dispatch",
    "cylinder movement audit trail",
    "gas cylinder allocation software",
  ],
  alternates: { canonical: "/products/fluids/cylinder-operations" },
};

const lifecycle = [
  {
    n: "01",
    title: "Arrival and identity",
    desc: "A cylinder enters the system once and is never guessed at again.",
    items: [
      "New cylinders received against a purchase order by serial number",
      "Automatically queued for receiving inspection before they can be used",
      "Technical spec captured at inspection, not at receipt, so it reflects reality",
      "Customer-owned cylinders arrive against an expected-intake manifest and are reconciled against the delivery note",
    ],
  },
  {
    n: "02",
    title: "Ownership and fleet position",
    desc: "The fleet view answers the question your auditor and your customer both ask.",
    items: [
      "Segmented by company owned, customer company owned, customer in plant, sold, and out on rental",
      "Unified per-cylinder history that merges every record source into one timeline",
      "Trace Passport shows current position, idle hours and a low, medium or high risk flag",
      "Ownership transfer recorded when a cylinder is sold, with the assignment mapped to the invoice",
    ],
  },
  {
    n: "03",
    title: "Allocation",
    desc: "Matching the right cylinder to the right order, with no possibility of two operators claiming the same one.",
    items: [
      "Four allocation lanes: rental, full sale, quality check and service",
      "Matched on gas composition, capacity, material of construction and ownership",
      "Claiming uses a compare-and-swap so a cylinder can only be claimed once, even under concurrent use",
      "A partial unique index in the database enforces one live dispatch line per cylinder",
    ],
  },
  {
    n: "04",
    title: "Filling and refill",
    desc: "Whether you fill it yourself or send it out, the chain stays intact.",
    items: [
      "Production queue with reserve, fill and complete states",
      "Donor and receiver gas transfer logged, so consumption is measured rather than estimated",
      "Refill dispatch queue for cylinders sent to third-party fillers, and inward on return",
      "Vendor-supply inward for new filled cylinders bought in",
      "Bulk and cryogenic tanks with tanker receipts, level events and tank-to-cylinder transfer",
    ],
  },
  {
    n: "05",
    title: "Service and testing",
    desc: "Five service types, each with the parts they consume resolved automatically.",
    items: [
      "Gas change, valve change, guard fitting, hydraulic test and full replacement",
      "A service bill of materials pre-fills the parts to be issued from inventory",
      "Statutory attributes tracked: tested date, next test due, test pressure, CCOE licence number",
      "Test-due report so the fleet is scheduled, not discovered overdue at the gate",
    ],
  },
  {
    n: "06",
    title: "Rental, return and money",
    desc: "The part most systems get wrong, and where the leakage usually is.",
    items: [
      "Per-day demurrage accrual after a configurable grace period",
      "Customer deposit ledger held against cylinders in their possession",
      "A billing watermark so the same rental day is never billed twice and never skipped",
      "Rent billed monthly and on return — deliberately not on the dispatch invoice",
      "Cylinder holdings and rental ageing reports by customer",
    ],
  },
];

const safety = [
  {
    label: "Compliance gate",
    value:
      "A cylinder whose hydro test is overdue, or whose CCOE licence details are missing, is blocked from dispatch. The gate is a configuration toggle, so you can run it as advisory during rollout and then switch it to blocking.",
  },
  {
    label: "Hazard-class segregation",
    value:
      "Every storage bay declares the gas classes it accepts. A mixture carries every class it contains — argon and hydrogen together count as both inert and flammable — and needs a bay that accepts both. It never blocks on missing master data, so incomplete setup slows nothing down.",
  },
  {
    label: "Gas mismatch holds",
    value:
      "A cylinder found holding the wrong gas is parked on hold with an explicit disposition step, rather than quietly re-entering stock.",
  },
  {
    label: "Final inspection evidence",
    value:
      "Pre-dispatch inspection captures photographs and annotated defects, and gates the dispatch-readiness board.",
  },
  {
    label: "Movement ledger",
    value:
      "Every movement between locations and states is written to an immutable ledger, exportable as CSV, so a dispute over where a cylinder was on a given date has an answer.",
  },
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/cylinder-operations" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Cylinder Operations</h1>
        <p className="hero-subtitle">
          The cylinder is the asset, the container, the compliance item and the rental unit all
          at once. Fluids treats it that way — one identity, one history, one ledger, from the
          day it is received to the day it is scrapped.
        </p>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>Why this is the hard part</h3>
        <p>
          A cylinder is not stock. It leaves your premises, comes back, gets refilled with a
          different gas, gets tested by a statutory authority, accrues rent while a customer
          holds it, is sometimes owned by that customer, and carries a deposit. Systems designed
          for boxes on a shelf cannot represent it, which is why most gas companies end up with a
          separate spreadsheet. Fluids models the cylinder as a first-class asset with its own
          lifecycle, and every other module reads from it.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Lifecycle</p>
          <h2>Six stages, one continuous record</h2>
        </div>
        <div className="flow-grid">
          {lifecycle.map((s) => (
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
          <p className="eyebrow">Safety and compliance</p>
          <h2>Five places the system says no</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Warnings get dismissed. These are enforced.
          </p>
        </div>
        <dl className="spec-list">
          {safety.map((s) => (
            <div key={s.label} className="spec-row">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">On the floor</p>
          <h2>Built for people who are not at a desk</h2>
        </div>
        <div className="features-grid">
          <article className="feature-tile">
            <div className="feature-tile-icon">🖥️</div>
            <h3>Kiosk station</h3>
            <p>
              A distraction-free shop-floor screen with large touch targets — moved, partial, cannot
              move — that polls for new tasks every eight seconds and chimes when one arrives.
              No sidebar, no menus, nothing to get lost in.
            </p>
          </article>
          <article className="feature-tile">
            <div className="feature-tile-icon">📱</div>
            <h3>Phone as scanner</h3>
            <p>
              The desktop opens a scan session and displays a QR code. A phone scans it and
              becomes the scanner for that session — no app install, no pairing, no hardware.
            </p>
          </article>
          <article className="feature-tile">
            <div className="feature-tile-icon">📦</div>
            <h3>Companion scanner app</h3>
            <p>
              A React Native application for Android and iOS with camera scanning and haptic
              feedback, talking to the same backend as everything else.
            </p>
          </article>
          <article className="feature-tile">
            <div className="feature-tile-icon">🔀</div>
            <h3>Branch transfer</h3>
            <p>
              Move cylinders and item stock between branches through requested, approved,
              dispatched and received states, with in-transit visibility to both ends and
              per-line shortage capture on receipt.
            </p>
          </article>
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See how quality attaches to every fill</h3>
        <p>
          A filled cylinder is only dispatchable if the gas in it passed a test, on a calibrated
          analyzer, against a versioned method, signed by two people.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids/quality" className="btn btn-primary">Quality &amp; Compliance →</Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>
    </div>
  );
}
