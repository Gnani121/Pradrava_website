import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";

export const metadata = {
  title: "Finance, GST & Billing | Fluids | Pradrava",
  description:
    "Indian statutory compliance handled at the transaction: place-of-supply resolution, editable GST rate table, gapless numbering per GSTIN and financial year, e-invoice IRN, NIC e-way bills across four movement types, GSTR-1 and GSTR-3B materialisation, credit control, AR ageing, dunning and rental demurrage billing.",
  keywords: [
    "GST software for gas distribution",
    "e-way bill software NIC GSP",
    "e-invoice IRN generation software",
    "GSTR-1 GSTR-3B software India",
    "gapless invoice numbering GSTIN financial year",
    "accounts receivable ageing and dunning",
    "cylinder demurrage billing software",
  ],
  alternates: { canonical: "/products/fluids/finance" },
};

const gstDepth = [
  {
    label: "One engine, two implementations",
    value:
      "The tax split is computed identically in the application and in the database, pinned to a shared golden test matrix so the two can never drift apart. CGST and SGST are equal by construction rather than by convention.",
  },
  {
    label: "Rates are data, not code",
    value:
      "GST slabs live in a table with validity dates. Adding or changing a rate is a configuration change, not a deployment. Every line records which rung of the resolution chain produced its rate — explicit line, price book, product master or branch default.",
  },
  {
    label: "Place of supply refuses to guess",
    value:
      "Supplier state comes from your GST registration, then the branch. Recipient state comes from an override, then the shipping address, then the billing address, then the default address, then the GSTIN prefix — and if none of those resolve, the system refuses rather than assuming intra-state.",
  },
  {
    label: "The database is the last line of defence",
    value:
      "A trigger refuses to issue an invoice with an invalid slab, an unreconciled tax split, or an undecided intra-versus-inter-state classification. Twenty-two check constraints and eight rate-validation triggers back it up.",
  },
  {
    label: "Gapless numbering",
    value:
      "Document series are allocated atomically per GSTIN, document type and financial year. Two users hitting save at the same instant cannot produce a duplicate or a hole in the sequence.",
  },
];

const statutory = [
  {
    icon: "🧾",
    title: "E-invoice / IRN",
    desc: "Generate, cancel and read IRNs, with reporting-window validation. Provider slots for the common GSPs. Runs against the sandbox today with the production connection as the remaining step — we would rather tell you that than let you find out at go-live.",
  },
  {
    icon: "🚛",
    title: "NIC E-Way Bills",
    desc: "Full lifecycle across four movement sources — sales invoice, branch transfer, purchase inward and delivery challan — with Part-B update, validity extension and consolidated bills. Configurable rupee threshold, a sandbox provider and a live NIC adapter, and a full event audit of every call.",
  },
  {
    icon: "📑",
    title: "GSTR-1 and GSTR-3B",
    desc: "B2B and B2CS supplies with credit notes as CDNR, plus net liability and inward ITC, materialised from live documents and persisted as a return export you can hand to your filing agent. A GST inward register sits alongside it.",
  },
  {
    icon: "📲",
    title: "UPI scan-to-pay",
    desc: "A UPI payment QR is embedded directly on the invoice, encoded so it survives the server-side PDF rendering. The customer pays from the document rather than from a follow-up email.",
  },
];

const receivables = [
  {
    label: "Credit control",
    value:
      "A credit limit gate at order entry, so an order that would push a customer past their limit stops there rather than at dispatch. Ad-hoc credit checks available on demand.",
  },
  {
    label: "AR ageing",
    value:
      "A materialised ageing snapshot by customer and bucket, so exposure is a number you can look at rather than a query someone has to run.",
  },
  {
    label: "Automated dunning",
    value:
      "Overdue invoices grouped by customer and emailed weekly where an address exists, with an in-app notification either way and every attempt logged. Supports a dry run, so you can see who would be contacted before anyone is.",
  },
  {
    label: "Rental and demurrage",
    value:
      "Per-day accrual after grace against a customer deposit ledger, with a billing watermark so rent is billed monthly and on return without ever double-billing a day. Deliberately kept off the dispatch invoice.",
  },
  {
    label: "Credit and debit notes",
    value:
      "Partial sales returns credited at the quantity level with over-credit protection enforced by the database, and vendor debit notes with their own issue and cancel lifecycle.",
  },
];

const handoff = [
  {
    title: "You do not have to replace your accounts package",
    desc: "Fluids posts documents to whatever you already run. The hand-off is a durable outbox — not a fire-and-forget webhook — with exponential backoff, voucher ID write-back onto the source document, and an hourly drain.",
  },
  {
    title: "It tells you when it gives up",
    desc: "A document that exhausts its retry attempts raises a high-priority notification. Nothing fails silently into a log file nobody reads.",
  },
  {
    title: "Payments come back the other way",
    desc: "An inbound bridge lets your accounts system mark documents synced or failed and post payment against an invoice, secured by an API key and failing closed if it is not configured.",
  },
  {
    title: "Invoicing is transactional",
    desc: "Invoice creation, issue, cancellation and total recomputation are database functions, so an invoice is never left half-created by a dropped connection or a duplicate submit.",
  },
];

const registers = [
  "Sales register",
  "Credit note register",
  "Delivery-challan-pending-invoice",
  "GSTR-1 summary",
  "GST inward register",
  "Receivables ageing",
  "Rental ageing",
  "Cylinder holdings by customer",
  "Cylinder test-due",
  "Purchase spend and price trend",
  "Top vendors and expiring contracts",
  "Vendor scorecard by period",
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/finance" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Finance, GST &amp; Billing</h1>
        <p className="hero-subtitle">
          Statutory compliance is handled at the moment the transaction happens, not reconstructed
          at month end. The result is that filing becomes a review rather than a rebuild.
        </p>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>Why we went this deep on tax</h3>
        <p>
          Most operations software treats GST as a percentage field. That works until an
          inter-state branch transfer, a partial credit note, a customer with a different
          shipping state to their billing state, or an auditor asking why invoice 4471 does not
          exist. Fluids resolves place of supply from the actual state pair and refuses to
          proceed if it cannot; computes the split in two independent places and checks them
          against each other; and lets the database itself veto an invoice that does not
          reconcile.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">The tax engine</p>
          <h2>Five design decisions you will care about</h2>
        </div>
        <dl className="spec-list">
          {gstDepth.map((g) => (
            <div key={g.label} className="spec-row">
              <dt>{g.label}</dt>
              <dd>{g.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Statutory filings and documents</p>
          <h2>The India-specific machinery</h2>
        </div>
        <div className="features-grid">
          {statutory.map((s) => (
            <article key={s.title} className="feature-tile">
              <div className="feature-tile-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Getting paid</p>
          <h2>Receivables, credit and the money that goes missing</h2>
        </div>
        <dl className="spec-list">
          {receivables.map((r) => (
            <div key={r.label} className="spec-row">
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Your existing accounts system</p>
          <h2>Fluids hands over, it does not fight you</h2>
        </div>
        <div className="pain-grid">
          {handoff.map((h) => (
            <article key={h.title} className="pain-card">
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="modules-panel reveal delay-2">
        <h2>Registers and reports out of the box</h2>
        <ul className="modules-checklist">
          {registers.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See where the money goes out</h3>
        <p>
          Three-way match, landed cost, budgets and contract drawdown — the controls on the
          purchase side.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids/procurement" className="btn btn-primary">Procurement &amp; Inventory →</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
        </div>
      </div>
    </div>
  );
}
