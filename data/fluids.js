// Verified feature inventory for Fluids.
// Every claim in this file maps to shipped, working functionality in the product.
// Do not add items here that are not live — use the roadmap list at the bottom instead.

export const fluidsStats = [
  { value: "19", label: "operational modules", note: "sales to finance, in one system" },
  { value: "84", label: "working screens", note: "not menus — real workflows" },
  { value: "13", label: "role-based access levels", note: "enforced at the database" },
  { value: "5", label: "ISO / statutory frameworks", note: "built in, not bolted on" },
];

export const painPoints = [
  {
    icon: "🔍",
    problem: "Nobody knows where the cylinders are.",
    answer:
      "Every cylinder carries a complete history — who filled it, who tested it, which customer holds it, how long it has been idle, and what it is worth. One screen, any cylinder, any date.",
  },
  {
    icon: "⚠️",
    problem: "An out-of-test cylinder leaves the gate.",
    answer:
      "The compliance gate refuses to dispatch a cylinder whose hydro-test is overdue or whose CCOE/PESO paperwork is missing. It is a hard block, not a warning banner.",
  },
  {
    icon: "🧾",
    problem: "GST filing means a week of reconciliation.",
    answer:
      "GSTR-1 and GSTR-3B are generated from live invoices, credit notes and inward supplies. Document numbers are gapless per GSTIN and financial year, because the database will not allow otherwise.",
  },
  {
    icon: "💸",
    problem: "Rent and demurrage quietly go unbilled.",
    answer:
      "Rental accrues per day after the grace period, against a customer deposit ledger, with a billing watermark so the same day is never billed twice and never missed.",
  },
  {
    icon: "📄",
    problem: "The quality lab runs on paper and Excel.",
    answer:
      "Certificates of Analysis to ISO 6141, measurement uncertainty to ISO 6142, analyzer calibration to ISO/IEC 17025, e-signed results and an audit trail no one can edit after the fact.",
  },
  {
    icon: "🔗",
    problem: "Purchase, production and accounts do not agree.",
    answer:
      "One ledger. A purchase invoice is matched three ways against the PO and the goods receipt before it can be paid, and every posted document reaches your accounts system through a queue that retries until it lands.",
  },
];

// Things a spreadsheet structurally cannot do. Each one maps to an enforced
// mechanism in the product, not to a nicer interface.
export const spreadsheetLimits = [
  {
    was: "A spreadsheet will happily let you dispatch a cylinder whose hydro test expired in March.",
    now: "Fluids refuses. The compliance gate blocks an out-of-test cylinder or one missing its CCOE details before it reaches the vehicle — and a bay that only accepts inert gas will not take a flammable one.",
  },
  {
    was: "Two people open the same file and both allocate cylinder 4471 to a different order.",
    now: "A cylinder can be claimed exactly once. The database enforces it, so it holds under two operators working at the same second — not by a convention about who edits when.",
  },
  {
    was: "A sheet shared with your Delhi branch is shared with your Delhi branch. All of it.",
    now: "Isolation is structural. Every table declares which branch or company it belongs to, and the build fails if one does not. Moving stock between branches is an approval workflow, not a copy-paste.",
  },
  {
    was: "A cell nobody looks at is a job nobody does. The order sits until a customer calls.",
    now: "Sixty-five stages across seventeen modules raise a task with an SLA clock on it — seventy-one rules, all of them yours to edit. When the clock runs out it escalates to the role you nominated, and to the branch manager if nobody is staffed there.",
  },
  {
    was: "Rent gets billed when someone remembers to check who still has your cylinders.",
    now: "Demurrage accrues daily after the grace period against a billing watermark, so the same day is never billed twice and never quietly skipped. It runs whether anyone remembers or not.",
  },
  {
    was: "The GST working is correct because the person who built the sheet was careful.",
    now: "The tax split is computed twice, independently, and the database refuses to issue an invoice where the two disagree or where the place of supply could not be resolved.",
  },
];

export const pillars = [
  {
    icon: "⚙️",
    title: "Cylinder Operations",
    href: "/products/fluids/cylinder-operations",
    desc:
      "The full asset lifecycle — receiving inspection, allocation, filling, refill vendors, service, rental and return — with a movement ledger behind every step.",
    points: [
      "Fleet segmented by ownership: company, customer-owned, in-plant, sold",
      "Hydro test, valve change, guard fitting and gas change with parts BOM",
      "Rental, demurrage and deposit ledger billed on a watermark",
      "Hazard-class segregation enforced at the storage bay",
    ],
  },
  {
    icon: "🧪",
    title: "Quality & Compliance",
    href: "/products/fluids/quality",
    desc:
      "A real laboratory system, not a checklist — certificates, uncertainty, calibration, sampling plans, SPC and CAPA, all defensible in an audit.",
    points: [
      "ISO 6141 Certificate of Analysis and ISO 6142 measurement uncertainty",
      "ISO/IEC 17025 analyzer and calibration register with expiry alerts",
      "39 AQL sampling plans to ISO 2859-1, applied to production lots",
      "Analyst and reviewer e-signature with an immutable result audit trail",
    ],
  },
  {
    icon: "₹",
    title: "Finance, GST & Billing",
    href: "/products/fluids/finance",
    desc:
      "Indian statutory compliance handled at the transaction, not at month end — one tax engine, provably consistent between the application and the database.",
    points: [
      "GSTR-1 and GSTR-3B materialised from live documents",
      "E-invoice IRN and NIC e-way bills across four movement types",
      "Credit control, AR ageing, automated dunning and demurrage",
      "Durable accounting hand-off queue that retries until it succeeds",
    ],
  },
  {
    icon: "📥",
    title: "Procurement & Inventory",
    href: "/products/fluids/procurement",
    desc:
      "Requisition to payment with the controls that stop money leaking — three-way match, landed cost, budgets and contract drawdown.",
    points: [
      "PO / GRN / invoice three-way match with tolerance bands",
      "Landed cost apportioned into weighted-average valuation",
      "Blanket rate contracts, budgets and reorder policies",
      "Append-only inventory ledger with reservations and picking",
    ],
  },
  {
    icon: "🏭",
    title: "Production & Machines",
    href: "/products/fluids/production",
    desc:
      "Filling, transfilling and item manufacture, with the equipment that does it measured for availability, performance and quality.",
    points: [
      "Filling queue with donor and receiver gas transfer logging",
      "Bill of materials with planned-versus-actual variance and costing",
      "OEE, MTBF and MTTR with downtime Pareto by reason code",
      "Preventive maintenance driven by run hours, not by memory",
    ],
  },
  {
    icon: "🔔",
    title: "Notifications & SLA",
    href: "/products/fluids/notifications",
    desc:
      "Every hand-off in the plant gets an owner, a deadline and a named person it escalates to — configured by you, on an admin screen, not by us in a release.",
    points: [
      "71 live rules over 65 stages raised by 17 modules",
      "Due time set by the event, escalation to the role you nominate",
      "An unstaffed role falls back to the branch manager, and it is recorded",
      "Ten more scheduled engines chasing dates rather than hand-offs",
    ],
  },
  {
    icon: "🛡️",
    title: "Platform & Security",
    href: "/products/fluids/platform",
    desc:
      "Multi-company, multi-branch isolation that is a property of the schema — not something a developer has to remember on every query.",
    points: [
      "13 roles across three tenancy levels, 67 enforced permission keys",
      "The application refuses to start if a route is left unguarded",
      "Turn features on or off per company or per branch, without a deploy",
      "Idempotent writes — a double-tap cannot create two purchase orders",
    ],
  },
];

export const standards = [
  { code: "ISO 6141", note: "Certificate of Analysis for gas mixtures" },
  { code: "ISO 6142", note: "Expanded measurement uncertainty (k=2)" },
  { code: "ISO/IEC 17025", note: "Analyzer calibration and validity register" },
  { code: "ISO 2859-1", note: "Acceptance sampling by attributes (AQL)" },
  { code: "CCOE / PESO", note: "Cylinder test and licence gating before dispatch" },
  { code: "India GST", note: "E-invoice IRN, e-way bill, GSTR-1 and GSTR-3B" },
];

export const personas = [
  {
    role: "Managing Director",
    line: "One live picture of the plant — where the money, the assets and the risk are, today.",
    gets: ["Command Center with live KPIs", "Quote funnel and conversion", "AR ageing and credit exposure", "Cylinder fleet value by ownership"],
  },
  {
    role: "Plant / Branch Manager",
    line: "Nothing sits idle and nothing moves that should not.",
    gets: ["Plant Flow zones with stuck-longest queues", "Dispatch readiness board", "Move task queue and shop-floor kiosk", "SLA breaches escalated automatically"],
  },
  {
    role: "Quality Manager",
    line: "Every result defensible, every instrument in calibration, every deviation closed.",
    gets: ["CoA and uncertainty calculation", "Analyzer calibration register", "SPC charts and first-pass yield", "NCR and CAPA workflow"],
  },
  {
    role: "Accounts & Compliance",
    line: "Books that close from live data instead of a month of chasing.",
    gets: ["GSTR-1 / 3B materialisation", "Gapless numbering per GSTIN and FY", "Three-way match before payment", "Accounting outbox with retry"],
  },
  {
    role: "Store & Dispatch",
    line: "The right cylinder, in the right bay, on the right vehicle.",
    gets: ["Cylinder allocation with no double-claim", "Gas-class segregation at the bay", "Picking, packing and box catalogue", "Phone-as-scanner QR sessions"],
  },
  {
    role: "Purchase",
    line: "Buy at the contracted rate, receive what was ordered, pay what was received.",
    gets: ["Requisition to RFQ to PO chain", "Vendor scorecards on real GRN data", "Budget check at approval", "Landed cost and import documentation"],
  },
];

export const platformProof = [
  {
    title: "Isolation is structural",
    desc:
      "Every table in the database carries an explicit tenancy axis — branch, company, location or global — and the build fails if a new table is added without one. A query cannot silently forget which branch it belongs to.",
  },
  {
    title: "It refuses to boot if unguarded",
    desc:
      "On startup the server checks every route that changes data for a role guard and a module guard, and throws if one is missing. The count of exceptions is currently zero, and it is a ratchet that can only shrink.",
  },
  {
    title: "One tax engine, two implementations, one answer",
    desc:
      "The GST split is computed identically in the application and in the database, pinned to a shared golden test matrix. A database trigger refuses to issue an invoice whose tax does not reconcile.",
  },
  {
    title: "Safe to retry",
    desc:
      "Every write accepts an idempotency key. A network retry, a double-tap or two open tabs replay the original response instead of creating a second document.",
  },
];

export const automations = [
  { name: "Purchase automation", desc: "Drafts purchase orders from the price book and raises RFQs by category policy — never auto-spends." },
  { name: "Sales automation", desc: "Ingests enquiries from a mailbox, extracts customer and line items, and routes low-confidence ones to a human." },
  { name: "Reservation reclaim", desc: "Releases stock reserved against demand that never materialised." },
  { name: "Accounting outbox", desc: "Pushes documents to your accounts system hourly with exponential backoff and voucher write-back." },
  { name: "Dunning run", desc: "Groups overdue invoices by customer and sends payment reminders, logging every attempt." },
  { name: "Invoice consolidation", desc: "Rolls a month of delivery challans into a single consolidated customer invoice." },
  { name: "Rental billing", desc: "Bills accrued rent and demurrage monthly against the billing watermark." },
  { name: "Item cost reconciliation", desc: "Rebuilds weighted-average valuation from the inventory ledger." },
];

export const fluidsFaq = [
  {
    q: "Is this a cylinder tracker or a full ERP?",
    a: "It is a full operations system for a gas plant. Sales, procurement, inventory, production, quality, machines, dispatch and finance all run on the same data, with cylinder operations as the domain core. If you already run accounts elsewhere, Fluids hands documents over to it through a durable sync queue rather than replacing it.",
  },
  {
    q: "How is data kept separate between our branches and group companies?",
    a: "Tenancy is enforced in the schema, not by convention. Every table declares whether it is scoped to a branch, a company, a location or is genuinely global, and the build fails if a table is added without that declaration. A user assigned to one branch cannot read or write another branch's data through any route.",
  },
  {
    q: "We only fill cylinders — do we have to take the item and manufacturing modules?",
    a: "No. Business mode can be set to gas-only, item-only or both, and it is enforced on writes rather than just hidden in the menu. Separately, plant profiles — full plant, on-site production, import-and-fill, bulk-fill — decide which capabilities exist at all, and any of 28 modules and 48 sub-modules can be switched on or off per company or per branch without a code change.",
  },
  {
    q: "Does it handle Indian GST properly, or is it a generic tax field?",
    a: "Properly. Place of supply is resolved from the supplier and recipient state pair and the system refuses to guess; intra-state versus inter-state classification, HSN/SAC, per-line rates from a rate table you can edit without a deploy, gapless document series per GSTIN and financial year, e-invoice IRN, NIC e-way bills, and GSTR-1 and GSTR-3B materialised from live documents.",
  },
  {
    q: "Can it stop an unsafe or non-compliant dispatch?",
    a: "Yes, at several points. Cylinders past their hydro-test date or missing CCOE documentation are blocked by the compliance gate. Storage bays only accept declared gas hazard classes, so a flammable cylinder is refused by an inert-only bay. Final inspection with photographic evidence gates the dispatch-readiness board, and delivery without proof of delivery blocks invoicing.",
  },
  {
    q: "What happens to quality records in an audit?",
    a: "They hold up. Test methods are versioned, results carry analyst and reviewer electronic signatures, every edit after entry is written to an immutable audit table, analyzers must be inside their calibration validity for a result to count, and Certificates of Analysis are issued to ISO 6141 with ISO 6142 expanded uncertainty per component.",
  },
  {
    q: "Do field and shop-floor staff need laptops?",
    a: "No. There is a chromeless kiosk mode for shop-floor stations with large touch targets and an audible chime for new move tasks, a phone-as-scanner mode where a desktop opens a scan session and a phone joins it by scanning a QR code, and a companion React Native scanner app for Android and iOS.",
  },
  {
    q: "How do handovers between teams actually get chased?",
    a: "Sixty-five stage events across seventeen modules — enquiry created, cylinder assignment pending, gas test failed, refill inwarded, requisition pending approval, return available and so on — raise a notification to a configured role with an SLA clock. Fifty-six of the seventy-one rules also carry an escalation window, so an unactioned task moves to the role you nominated without anyone chasing it. Which role, how many hours, who it escalates to, and whether the rule is on at all are configuration, not code. The full picture is on the Notifications & SLA page.",
  },
  {
    q: "Can we get our data out?",
    a: "Yes. CSV export on the operational registers, seventeen print and PDF document types with your own header, footer and template configuration, and a documented API surface if you want to pull it programmatically.",
  },
  {
    q: "How is it deployed?",
    a: "Cloud-hosted, in the Mumbai region, on managed serverless infrastructure with a managed PostgreSQL database. Error tracking and performance monitoring are wired in. There is nothing for you to run in the plant.",
  },
];

// Built, but not yet live. Kept separate so it never leaks into feature copy.
export const roadmap = [
  { title: "WhatsApp notifications", desc: "Channel is built and provider-agnostic; awaiting business API provisioning." },
  { title: "Live e-invoice IRN", desc: "Runs against the sandbox today; the production GSP connection is the remaining step." },
  { title: "PLC / SCADA telemetry bridge", desc: "The ingestion endpoint accepts machine and instrument data now; a live plant-floor connector is next." },
  { title: "Natural-language search", desc: "AI search over cylinders and orders is built and awaiting rollout into the operator screens." },
];
