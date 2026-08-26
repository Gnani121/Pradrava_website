export const products = [
  {
    title: "Fluids",
    tag: "Industrial Gas Operations",
    desc: "The operating system for a gas plant — cylinder lifecycle, sales, procurement, production, laboratory quality, dispatch and GST-correct invoicing on one set of live data.",
    href: "/products/fluids",
    status: "Available",
  },
  {
    title: "Accounting & GST Returns",
    tag: "Finance, GST & Compliance",
    desc: "The ledger and GST returns product — filing, 2A/2B reconciliation and the books. In development. Fluids already resolves GST on every document and hands them to your existing accounts system today.",
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
    desc: "ISO 6141 Certificates of Analysis, ISO 6142 measurement uncertainty, ISO/IEC 17025 analyzer calibration, e-signed results and an append-only audit trail.",
  },
  {
    icon: "🛡️",
    title: "Compliance Gate",
    desc: "Cylinders past their hydro-test date or missing CCOE documentation are blocked from dispatch. Storage bays refuse gases outside their declared hazard class.",
  },
  {
    icon: "🧾",
    title: "GST Handled at the Transaction",
    desc: "Place of supply resolved from the supplier and recipient state pair, per-line rates from a table you edit yourself, and gapless numbering per GSTIN and financial year. The tax split is computed twice — once in the application, once in the database — and an invoice whose two answers disagree cannot be issued.",
  },
  {
    icon: "🔎",
    title: "Trace Passport",
    desc: "Any cylinder, gas composition, item or order — its full lifecycle, current position, idle hours and risk level, assembled from every module at once.",
  },
  {
    icon: "🏢",
    title: "Multi-Company, Multi-Branch",
    desc: "Group companies and branches in one deployment, with every table declaring the branch or company it belongs to and the build failing if one does not — plus approved cross-branch stock transfer with in-transit tracking.",
  },
  {
    icon: "⏱️",
    title: "SLA Engine with Escalation",
    desc: "71 rules over 65 stages give every hand-off an owner and a deadline. Miss the clock and it escalates to the role you nominated — plus ten scheduled engines chasing overdue invoices, expiring quotes and cylinders coming due for test.",
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
  "Machine and instrument telemetry ingestion with configurable maintenance rules",
  "GST engine with editable rate table and fail-closed place-of-supply resolution",
  "E-invoice IRN generation, cancellation and reporting-window checks — sandbox today, pending your GSP connection",
  "E-way bills across invoice, branch transfer, purchase inward and delivery challan — sandbox provider today, NIC adapter ready to connect",
  "Draft GSTR-1 (B2B) and GSTR-3B working built from live documents, plus a GST inward register for ITC — a reconciliation working, not a filing",
  "Gapless document numbering per GSTIN, document type and financial year, across multiple GST registrations",
  "Credit control with limit gate at order entry, and AR ageing snapshots",
  "Automated dunning with per-attempt logging, and credit and debit notes",
  "Durable accounting hand-off queue with retry, backoff and voucher write-back",
  "Print Center: 17 document types with per-branch templates and server-rendered PDF",
  "Email Center: sender identity and recipient routing per branch and per department",
  "Notification and SLA engine: 71 editable rules over 65 stages, with due dates, additional recipients, priorities and automatic escalation",
  "Unstaffed-role fallback and a delivery report showing every alert that could not be raised, and why",
  "Ten scheduled reminder engines: escalation sweep, quote funnel, dunning, rental billing, reorder, calibration expiry, hydro-test bands, reservation reclaim, contract price expiry and accounting hand-off alarms",
  "Module Control Panel: 28 modules and 48 sub-modules toggled per company or branch",
  "Plant profiles and gas-only, item-only or combined business modes",
  "Activity and security audit log with database-level change tracking",
  "Shop-floor kiosk station, phone-as-scanner QR sessions, and a companion scanner app in preview",
  "Advanced analytics across eight dimensions, including customer, cylinder and quality insight",
  "Customer receipts ledger: part payment, six payment modes, over-payment refused, void with a stated reason",
  "Receivables summary with collected, outstanding, and unpaid, part-paid and settled counts",
  "Order cancellation with a cylinder disposition queue — decide, then confirm the physical move",
  "Cylinder retirement with a stated reason and full history retained, instead of deletion",
  "Cylinder lookup by the number stencilled on the bottle: position, holder, order, vendor, challan and next step",
  "Configurable three-way match tolerance bands per branch, with the effective source shown",
  "Fill quantity ranges gating the return leg, with a worklist of capacity and gas pairs that have none",
  "Master-data readiness worklist ranked by what each gap breaks downstream",
  "Optional segregation of duties on requisition approval, vendor invoice approval and order cancellation",
  "Administrator console: sessions, activity, permission denials, client errors, endpoint and system health",
  "Failed sign-in capture with repeat-failure lockout, and configurable log retention with an audited purge",
  "Stock corrections entered as a physical count, with the system deriving the adjustment",
  "Acceptance sampling plan editor with a lot-size lookup that matches what production QC applies",
  "Demurrage run log recording when a sweep ran, through what date, and what it accrued",
];

export const fluidsFaq = [
  {
    q: "What exactly does Fluids replace?",
    a: "Typically a stack of spreadsheets, a cylinder register, a separate quality logbook, and manual GST workings on every invoice. Sales, procurement, inventory, production, quality, machines, dispatch and statutory compliance all move onto one set of live data.",
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
    a: "GST is handled where the document is raised, not at month end: place of supply resolved from the supplier and recipient state pair with no guessing, intra-state versus inter-state classification, HSN/SAC, per-line rates from a table you edit without a deploy, and gapless numbering per GSTIN and financial year. E-invoice IRN and e-way bills are built and run against a sandbox today — connecting them to a live GSP is a configuration step we do with you. Fluids does not file your returns; it gives your accountant or your existing returns software clean, reconciled documents to file from.",
  },
  {
    q: "Will our shop floor and drivers manage on it?",
    a: "There is a chromeless kiosk station for the shop floor with large touch targets and an audible chime for new tasks, a phone-as-scanner mode joined by scanning a QR code, and and a companion scanner app built in React Native that we install on your handsets — it is in preview, not on the app stores.",
  },
];

// Accounting is pre-release. Nothing here is presented as available today.
export const accountingFeatures = [
  { icon: "📑", title: "GST returns and filing", desc: "GSTR-1 and GSTR-3B in the GSTN format, including the sections a return needs beyond B2B — B2C, exports, nil-rated, advances, amendments and the HSN summary — built from the documents Fluids already got right." },
  { icon: "🔁", title: "2A / 2B reconciliation", desc: "Match what your vendors filed against what you booked, so input tax credit is claimed on what is actually there rather than on what you expected." },
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
  "GSTR-1 and GSTR-3B preparation and filing in the GSTN format",
  "GSTR-2A / 2B reconciliation and input tax credit matching",
  "Profit and loss, balance sheet and cash position",
  "Vendor and customer ageing",
  "Audit log and change history",
  "Role-based access and approval controls",
];

export const accountingFaq = [
  {
    q: "Is Accounting available today?",
    a: "No. It is in active development. What is available today is in Fluids: GST resolved on every document with the place of supply, rate and HSN settled as it is raised, a draft GSTR-1 and GSTR-3B working plus a GST inward register for your accountant, and a durable queue that pushes invoices, credit notes and payments into whatever accounts system you already run. Filing itself — GSTN format, the B2C and export sections, and 2A/2B reconciliation — is what this product adds.",
  },
  {
    q: "Do we have to wait for it to start using Fluids?",
    a: "No. Fluids is designed to sit alongside an existing accounts package. The sync bridge and the inbound payment endpoint are built and waiting on the connection details for whichever package you run.",
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
