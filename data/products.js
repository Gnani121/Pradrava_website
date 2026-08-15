export const products = [
  {
    title: "Fluids",
    tag: "Industrial Gas Operations",
    desc: "The operating system for a gas plant — cylinder lifecycle, sales, procurement, production, laboratory quality, dispatch and GST compliance on one set of live data.",
    href: "/products/fluids",
    status: "Available",
  },
  {
    title: "Accounting",
    tag: "Finance Operations",
    desc: "A companion ledger for teams that want their books inside Pradrava. In development — Fluids already hands documents to your existing accounts system today.",
    href: "/products/accounting",
    status: "In Development",
  },
];

// Headline capabilities used on the home page. All shipped and verified.
export const fluidsFeatures = [
  {
    icon: "🧭",
    title: "Command Center",
    desc: "One live cockpit across demand, procurement, cylinder operations and item operations — with the queues that are stuck longest surfaced first, not buried in a report.",
  },
  {
    icon: "🧪",
    title: "Laboratory-Grade Quality",
    desc: "ISO 6141 Certificates of Analysis, ISO 6142 measurement uncertainty, ISO/IEC 17025 analyzer calibration, e-signed results and an audit trail that cannot be rewritten.",
  },
  {
    icon: "🛡️",
    title: "Compliance Gate",
    desc: "Cylinders past their hydro-test date or missing CCOE documentation are blocked from dispatch. Storage bays refuse gases outside their declared hazard class.",
  },
  {
    icon: "🧾",
    title: "GST Handled at the Transaction",
    desc: "Place of supply resolved from the state pair, gapless numbering per GSTIN and financial year, e-invoice IRN, NIC e-way bills, and GSTR-1 and 3B built from live documents.",
  },
  {
    icon: "🔎",
    title: "Trace Passport",
    desc: "Any cylinder, gas composition, item or order — its full lifecycle, current position, idle hours and risk level, assembled from every module at once.",
  },
  {
    icon: "🏢",
    title: "Multi-Company, Multi-Branch",
    desc: "Group companies and branches in one deployment with isolation enforced in the database schema, plus approved cross-branch stock transfer with in-transit tracking.",
  },
  {
    icon: "⏱️",
    title: "SLA Engine with Escalation",
    desc: "Thirty stage hand-offs raise a notification with an SLA clock. Miss the clock and it escalates automatically to the role you nominated — all configuration, no code.",
  },
  {
    icon: "🎛️",
    title: "Turn Modules On and Off",
    desc: "28 modules and 48 sub-modules switched per company or per branch, plus plant profiles and gas-only or item-only business modes — enforced server-side, not just hidden.",
  },
];

// Complete verified module list for the Fluids product page.
export const fluidsModules = [
  "Sales: enquiry, quotation with versioned amendments, sales order, sales review",
  "Five sale types: full sale, gas-only refill, rental, quality check, service",
  "Quote funnel with stale-enquiry and quote-expiry sweeps",
  "Sales price book with tier and quantity-band slabs, plus promotional schemes",
  "Standing orders, backorders and customer product aliases",
  "Purchase: requisition, RFQ, vendor quotation comparison, purchase order",
  "Three-way match of purchase order, goods receipt and vendor invoice",
  "Landed cost apportionment and import documentation with Bill of Entry",
  "Blanket rate contracts with call-off drawdown, and departmental budgets",
  "Reorder policies with min/max, reorder point, EOQ and safety stock",
  "Vendor scorecards on on-time delivery, reject rate, lead time and spend",
  "Cylinder receiving inspection and customer cylinder intake reconciliation",
  "Cylinder allocation across rental, full-sale, quality-check and service lanes",
  "Cylinder 360 fleet view segmented by ownership",
  "Cylinder service: hydro test, valve change, guard fitting, gas change, replacement",
  "Refill dispatch to third-party fillers, and vendor-supply inward",
  "Rental and demurrage accrual with a customer deposit ledger",
  "Compliance gate on next test due, tested date, test pressure and CCOE licence",
  "Storage bays with accepted gas hazard classes and segregation enforcement",
  "Production and transfilling queue with donor and receiver gas consumption log",
  "Item production, bill of materials, planned-versus-actual variance and costing",
  "Genealogy and forward/backward traceability reporting",
  "Gas quality testing with components, impurities, physical, stability and compliance detail",
  "Certificate of Analysis to ISO 6141 with ISO 6142 expanded uncertainty",
  "Analyzer master and calibration register to ISO/IEC 17025 with expiry alerts",
  "LIMS controls: versioned methods, analyst and reviewer e-signature, result audit",
  "SPC control charts, first-pass yield, cost of quality and defect Pareto",
  "AQL acceptance sampling to ISO 2859-1 applied to production lots",
  "Non-conformance and CAPA workflow, auto-raised from receiving and inspection",
  "Final inspection with photographic evidence gating dispatch",
  "Append-only inventory ledger with reservations, reclaim and stock snapshots",
  "Picking batches, packing units, packing material consumption and box catalogue",
  "Branch transfer with requested, approved, dispatched and received states",
  "Bulk and cryogenic tanks: tanker receipts, level events and tank-to-cylinder transfer",
  "Dispatch readiness board, delivery challans and proof-of-delivery capture",
  "Machine master, preventive maintenance, run-hour meters and spare consumption",
  "OEE, MTBF and MTTR analytics with downtime Pareto and finite-capacity load",
  "Machine and statutory calibration register with due alerts",
  "Machine and instrument telemetry ingestion with predictive maintenance rules",
  "GST engine with editable rate table and fail-closed place-of-supply resolution",
  "E-invoice IRN generation, cancellation and reporting-window checks",
  "NIC e-way bills across invoice, branch transfer, purchase inward and delivery challan",
  "GSTR-1 and GSTR-3B materialisation and GST inward register",
  "Gapless document numbering per GSTIN, document type and financial year",
  "Credit control with limit gate at order entry, and AR ageing snapshots",
  "Automated dunning with per-attempt logging, and credit and debit notes",
  "Durable accounting hand-off queue with retry, backoff and voucher write-back",
  "Print Center: 17 document types with per-branch templates and server-rendered PDF",
  "Email Center: sender identity and recipient routing per branch and per department",
  "UPI scan-to-pay QR embedded on invoices",
  "Notification and SLA engine over 30 stage hand-offs with automatic escalation",
  "Module Control Panel: 28 modules and 48 sub-modules toggled per company or branch",
  "Plant profiles and gas-only, item-only or combined business modes",
  "Activity and security audit log with database-level change tracking",
  "Shop-floor kiosk station, phone-as-scanner QR sessions, and a mobile scanner app",
  "Advanced analytics across eight dimensions including demand forecast and customer insight",
];

export const fluidsFaq = [
  {
    q: "What exactly does Fluids replace?",
    a: "Typically a stack of spreadsheets, a cylinder register, a separate quality logbook, and manual GST workings. Sales, procurement, inventory, production, quality, machines, dispatch and statutory compliance all move onto one set of live data.",
  },
  {
    q: "Can we run more than one plant or company on it?",
    a: "Yes. Multiple companies and branches run in a single deployment with isolation enforced in the database schema, plus an approved cross-branch transfer workflow with in-transit tracking.",
  },
  {
    q: "Does it stop non-compliant dispatch?",
    a: "Yes. Cylinders past their hydro-test date or missing CCOE documentation are blocked, storage bays refuse gases outside their declared hazard class, and final inspection with photographic evidence gates the readiness board.",
  },
  {
    q: "Is Indian GST properly supported?",
    a: "Yes — place of supply resolved from the supplier and recipient state pair, per-line rates from an editable rate table, gapless numbering per GSTIN and financial year, e-invoice IRN, NIC e-way bills, and GSTR-1 and GSTR-3B built from live documents.",
  },
  {
    q: "Will our shop floor and drivers manage on it?",
    a: "There is a chromeless kiosk station for the shop floor with large touch targets and an audible chime for new tasks, a phone-as-scanner mode joined by scanning a QR code, and a companion scanner app for Android and iOS.",
  },
];

// Accounting is pre-release. Nothing here is presented as available today.
export const accountingFeatures = [
  { icon: "🧾", title: "Invoicing on live documents", desc: "Invoices raised from the same dispatch and delivery data your operations team already works in, rather than re-keyed at month end." },
  { icon: "💰", title: "Receipts and payment tracking", desc: "Customer receipts, vendor payments and running balances against the ledgers Fluids already maintains." },
  { icon: "📈", title: "Financial statements", desc: "Profit and loss, balance sheet and cash position generated from posted transactions instead of exported and rebuilt in a spreadsheet." },
  { icon: "🧮", title: "Expense capture and approval", desc: "Log, categorise and approve spend with the same approval and budget controls used in procurement." },
  { icon: "🏦", title: "Bank reconciliation", desc: "Match statement lines against ledger entries, clear the matches and surface only the exceptions for review." },
  { icon: "📋", title: "Audit trail", desc: "Every entry timestamped and attributed, on the same activity and change-log foundation the rest of the platform uses." },
  { icon: "🧷", title: "Vendor and customer ledgers", desc: "Party-wise ledgers that reconcile to the operational documents they came from, not a parallel set of books." },
  { icon: "🔐", title: "Role-based access", desc: "Accountants, approvers and auditors see exactly their scope, using the same permission model as Fluids." },
];

export const accountingModules = [
  "Invoice and bill posting from operational documents",
  "Receipts, payments and party-wise ledgers",
  "Expense recording with approval workflow",
  "Bank statement import and reconciliation",
  "GST computation and return preparation support",
  "Profit and loss, balance sheet and cash position",
  "Vendor and customer ageing",
  "Audit log and change history",
  "Role-based access and approval controls",
];

export const accountingFaq = [
  {
    q: "Is Accounting available today?",
    a: "No. It is in active development. What is available today is the accounting hand-off in Fluids — a durable queue that pushes invoices, credit notes and payments into whatever accounts system you already run, with retry and voucher write-back.",
  },
  {
    q: "Do we have to wait for it to start using Fluids?",
    a: "No. Fluids is designed to sit alongside an existing accounts package. The sync bridge and the inbound payment endpoint are live and in use.",
  },
  {
    q: "What will it integrate with?",
    a: "It is being built on the same tenancy, permission and audit foundation as Fluids, so branch isolation, roles and change history carry over unchanged rather than being re-implemented.",
  },
  {
    q: "How do we get involved early?",
    a: "Talk to us. Design partners get to shape the module list and the reporting formats against their own chart of accounts before general release.",
  },
];

export function FaqSection({ items }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>{item.q}</summary>
          <p className="faq-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
