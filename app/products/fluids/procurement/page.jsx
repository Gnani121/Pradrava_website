import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";

export const metadata = {
  title: "Procurement & Inventory | Fluids | Pradrava",
  description:
    "Requisition to payment with real controls: three-way match against PO and goods receipt, landed cost apportionment into weighted-average valuation, import documentation, blanket rate contracts, budgets enforced at approval, reorder policies with EOQ, vendor scorecards, and an append-only inventory ledger with reservations.",
  keywords: [
    "three way match purchase invoice software",
    "landed cost apportionment software",
    "blanket rate contract call off",
    "reorder point EOQ safety stock software",
    "vendor scorecard software",
    "inventory reservation and picking software",
    "procurement budget control software",
  ],
  alternates: { canonical: "/products/fluids/procurement" },
};

const controls = [
  {
    icon: "⚖️",
    title: "Three-way match",
    desc: "A vendor invoice is matched against the purchase order and the goods receipt before it can be paid. Quantities are re-derived on the server rather than trusted from the submission, tolerance bands are configurable in both percentage and rupee terms, and clearing a mismatch requires an explicit override that is recorded.",
  },
  {
    icon: "🚢",
    title: "Landed cost",
    desc: "Freight, insurance, customs, testing and handling apportioned across lines by value, weight or quantity, persisted per line and rolled into weighted-average item valuation. Your margin reflects what the goods actually cost to get here.",
  },
  {
    icon: "🌐",
    title: "Import documentation",
    desc: "Bill of Entry, customs duty, IGST on import and the exchange rate on the purchase order, all pushed through into landed cost rather than kept in a separate file.",
  },
  {
    icon: "📃",
    title: "Rate contracts",
    desc: "Blanket contracts with call-off drawdown validated against remaining contracted quantity, so you cannot over-draw a contract by accident and cannot lose track of what is left on it.",
  },
  {
    icon: "💼",
    title: "Budgets that bite",
    desc: "Budgets by department, branch and category, checked at requisition and purchase order approval. Configurable to warn or to block — most plants start on warn and move to block once the numbers are trusted.",
  },
  {
    icon: "📉",
    title: "Reorder policies",
    desc: "Minimum, maximum, reorder point, economic order quantity and safety stock per item and branch. A replenishment run reads live on-hand net of reservations and raises requisitions — not a report someone has to action.",
  },
  {
    icon: "🏆",
    title: "Vendor scorecards",
    desc: "How often a vendor delivered on time, how much of it you rejected, what you spent, how long they took, and one overall score — worked out each period from your actual receipts and orders, not from an opinion. Problems raised at inspection feed straight into it.",
  },
  {
    icon: "🤖",
    title: "Procurement automation",
    desc: "It drafts purchase orders from your price book and raises draft enquiries by category. Running it twice cannot create two orders, it only ever does the safe part on its own, and it never spends your money — a person always confirms.",
  },
];

const inventory = [
  {
    label: "The ledger is the truth",
    value:
      "Every stock movement is added to the ledger and never rewritten. Your stock figures are worked out from that list and can be rebuilt from it at any time — so an argument about a balance is something you can settle, not a matter of opinion.",
  },
  {
    label: "Reservations",
    value:
      "Stock is held automatically against open orders, freed again if the order never happens, and every hold and release is kept on record.",
  },
  {
    label: "Picking and packing",
    value:
      "Picking batches and lines, packing batches, packing units and lines, packing material consumption, and a box catalogue — with pick lists, wave pick lists, packing slips, carton labels and shipping labels printable.",
  },
  {
    label: "Locations with roles",
    value:
      "Storage locations are tagged by workflow role — inward, empty store, raw full store, quarantine — and by the gas hazard classes they accept, so a flammable cylinder is refused by an inert-only bay. Item stock and cylinder bays are separate masters because they behave differently.",
  },
  {
    label: "Branch transfer",
    value:
      "Requested, approved, dispatched, received, with rejection and cancellation paths, covering both cylinders and item stock, visible from both ends of the transfer.",
  },
  {
    label: "Bulk and cryogenic",
    value:
      "Bulk tanks with tanker receipts, tank level events and tank-to-cylinder transfers, so the bulk side of the plant is in the same ledger as everything else.",
  },
];

const chain = [
  "Requisition",
  "Budget check",
  "RFQ",
  "Vendor quotation",
  "Comparison",
  "Purchase order",
  "Goods receipt",
  "Receiving inspection",
  "Landed cost",
  "Three-way match",
  "Vendor invoice",
  "Payment",
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/procurement" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Procurement &amp; Inventory</h1>
        <p className="hero-subtitle">
          The purchase side is where margin quietly disappears — paying an invoice for goods that
          never arrived, buying off-contract, ignoring freight in the costing, holding stock
          nobody planned. Fluids puts a control at each of those points.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Procure to pay</p>
          <h2>The chain, with a gate at each link</h2>
        </div>
        <div className="chain">
          {chain.map((step, i) => (
            <span key={step} style={{ display: "contents" }}>
              <span>{step}</span>
              {i < chain.length - 1 && <i>→</i>}
            </span>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Controls</p>
          <h2>Eight things that stop money leaking</h2>
        </div>
        <div className="features-grid">
          {controls.map((c) => (
            <article key={c.title} className="feature-tile">
              <div className="feature-tile-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Inventory</p>
          <h2>Stock you can reconcile, not just look at</h2>
        </div>
        <dl className="spec-list">
          {inventory.map((i) => (
            <div key={i.label} className="spec-row">
              <dt>{i.label}</dt>
              <dd>{i.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Sales side too</p>
          <h2>Pricing that knows what things cost</h2>
        </div>
        <div className="pain-grid">
          <article className="pain-card">
            <h3>Five pricing kinds, one resolver</h3>
            <p>
              Gas by cubic metre, item including cylinder, rental, gas quality check and service —
              each with tier and quantity-band slabs, aware of material of construction, with
              deposit and rent-per-day columns. One call resolves the price, the cost and
              therefore the margin.
            </p>
          </article>
          <article className="pain-card">
            <h3>Promotional schemes on top</h3>
            <p>
              Priority-ranked schemes layer over the price book slabs, so a campaign does not mean
              editing your base rates and forgetting to change them back.
            </p>
          </article>
          <article className="pain-card">
            <h3>Customer part codes</h3>
            <p>
              Your customer&apos;s own product codes map to your masters, so their purchase order
              arrives speaking their language and lands on the right item.
            </p>
          </article>
          <article className="pain-card">
            <h3>Standing orders and backorders</h3>
            <p>
              Recurring supply templates emit sales orders on a schedule, and partial fulfilment
              is a first-class record that reserves stock the moment it becomes available.
            </p>
          </article>
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See what happens between receipt and dispatch</h3>
        <p>Filling, bills of material, machine availability and the maintenance that protects it.</p>
        <div className="hero-actions">
          <Link href="/products/fluids/production" className="btn btn-primary">Production &amp; Machines →</Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>
    </div>
  );
}
