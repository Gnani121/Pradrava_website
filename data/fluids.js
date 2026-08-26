// Verified feature inventory for Fluids.
//
// Two rules for this file:
//  1. Every claim here maps to shipped, working functionality. Anything built
//     but not connected goes in the roadmap list at the bottom instead.
//  2. Say it in the words a plant owner uses, then give the technical proof.
//     The owner reads the first half and decides; the person they forward it
//     to reads the second half and is reassured. Do not drop either half.

export const fluidsStats = [
  { value: "Every", label: "cylinder accounted for", note: "where it is, who holds it, when it was last tested" },
  { value: "One", label: "system instead of seven", note: "sales, plant, lab, dispatch and accounts on the same data" },
  { value: "All", label: "your branches", note: "each kept separate, the group total in one view" },
  { value: "5", label: "standards built in", note: "the lab and cylinder rules an auditor asks about" },
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
    problem: "GST is a week of fixing at the end of every month.",
    answer:
      "Each invoice comes out right the first time instead of being corrected later. The place of supply is worked out from the two states involved and the system refuses to guess, rates come from a table you control, and your numbering cannot have a gap because the database will not allow one.",
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
      "Certificates your customer's auditor will accept, instruments tracked against their calibration dates, results signed by the analyst and the reviewer, and a record nobody can quietly edit afterwards. Built to ISO 6141, ISO 6142 and ISO/IEC 17025.",
  },
  {
    icon: "🔗",
    problem: "Purchase, production and accounts do not agree.",
    answer:
      "One set of records. A vendor's bill is checked against what you ordered and what actually arrived before anyone can pay it, and every posted document is handed to your accounts package by a queue that keeps trying until it lands.",
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
    now: "A cylinder can be claimed exactly once. The database enforces it, so it holds even when two operators press the button in the same second — not by an agreement about who edits when.",
  },
  {
    was: "A sheet shared with your Delhi branch is shared with your Delhi branch. All of it.",
    now: "Branches genuinely cannot see each other. It is built into the structure of the data rather than left to whoever writes the next screen, and moving stock between branches is an approval step, not a copy-paste.",
  },
  {
    was: "A cell nobody looks at is a job nobody does. The order sits until a customer calls.",
    now: "Every handover in the plant raises a task with a deadline on it — sixty-five of them, from enquiry through to cylinder return. When the deadline passes it goes to the person you nominated, and to the branch manager if nobody holds that role. You set the hours and the names; we do not.",
  },
  {
    was: "Rent gets billed when someone remembers to check who still has your cylinders.",
    now: "Demurrage accrues daily after the grace period against a billing watermark, so the same day is never billed twice and never quietly skipped. It runs whether anyone remembers or not.",
  },
  {
    was: "The GST working is correct because the person who built the sheet was careful.",
    now: "The tax is worked out twice, by two separate pieces of code, and the invoice cannot be issued if the two disagree or if the place of supply could not be established.",
  },
];

export const pillars = [
  {
    icon: "⚙️",
    title: "Cylinder Operations",
    href: "/products/fluids/cylinder-operations",
    desc:
      "Everything that happens to a cylinder — arriving, being checked, filled, sent out, rented, serviced and returned — with a record behind every move.",
    points: [
      "Your fleet split by who owns it: yours, the customer's, in the plant, sold",
      "Hydro test, valve change, guard fitting and gas change, with the parts used",
      "Rent, demurrage and deposits, billed without anyone remembering to",
      "A bay that takes only inert gas will refuse a flammable cylinder",
    ],
  },
  {
    icon: "🧪",
    title: "Quality & Compliance",
    href: "/products/fluids/quality",
    desc:
      "A real laboratory system rather than a checklist — certificates, calibration, sampling and corrective actions that hold up when somebody audits you.",
    points: [
      "Certificates your customer's auditor will accept — ISO 6141, with ISO 6142 uncertainty",
      "Analyzers tracked against their calibration dates and flagged before they lapse (ISO/IEC 17025)",
      "Tells the inspector how many cylinders to check from a batch, and when to reject it (ISO 2859-1)",
      "Signed by the analyst and the reviewer, and nobody can quietly edit a result afterwards",
    ],
  },
  {
    icon: "₹",
    title: "Finance, GST & Billing",
    href: "/products/fluids/finance",
    desc:
      "Indian tax handled on each document as it is raised, rather than reconstructed at month end.",
    points: [
      "Invoices that are GST-correct when raised, so the return is not a month of fixing",
      "E-invoice and e-way bill paperwork prepared for your GSP, across four kinds of movement",
      "Who owes you, how overdue they are, and reminders that go out on their own",
      "Documents handed to your accounts package, retried until they land",
    ],
  },
  {
    icon: "📥",
    title: "Procurement & Inventory",
    href: "/products/fluids/procurement",
    desc:
      "From raising a requisition to paying the bill, with the checks that stop money leaking out along the way.",
    points: [
      "A vendor's bill checked against what you ordered and what actually arrived, before it can be paid",
      "Freight and customs spread across the goods, so your item cost is the real cost",
      "Rate contracts, budgets, and reordering that triggers itself",
      "Stock promised to one order cannot be sold to another",
    ],
  },
  {
    icon: "🏭",
    title: "Production & Machines",
    href: "/products/fluids/production",
    desc:
      "Filling, transfilling and manufacture — and how well the equipment doing it is actually performing.",
    points: [
      "A filling queue that records which cylinder gave gas to which",
      "What a batch was meant to consume, what it did consume, and the difference in rupees",
      "How much of the day each machine actually ran, and the top reasons it stopped",
      "Servicing driven by running hours rather than by somebody remembering",
    ],
  },
  {
    icon: "🔔",
    title: "Notifications & SLA",
    href: "/products/fluids/notifications",
    desc:
      "Every handover in the plant gets an owner, a deadline and somebody it goes to if it slips — set by you on a settings screen, not by us in a release.",
    points: [
      "Seventy-one rules covering every handover, from enquiry to cylinder return",
      "Each has a deadline, and a person it escalates to when that deadline passes",
      "If nobody holds that role, it goes to the branch manager — and that is recorded",
      "Ten more jobs that watch dates instead: rent due, tests expiring, invoices overdue",
    ],
  },
  {
    icon: "🛡️",
    title: "Platform & Security",
    href: "/products/fluids/platform",
    desc:
      "Several companies and several branches on one system, kept apart by how the data is built rather than by anyone remembering to keep them apart.",
    points: [
      "Thirteen roles — your sales team cannot open the lab's records, and no branch sees another's",
      "If a screen were ever left unprotected, the system refuses to start rather than expose it",
      "Switch features on or off per branch yourself, without waiting for a release",
      "Tapping Save twice cannot create two purchase orders",
    ],
  },
];

export const standards = [
  { code: "ISO 6141", note: "Certificate of Analysis for gas mixtures" },
  { code: "ISO 6142", note: "Expanded measurement uncertainty (k=2)" },
  { code: "ISO/IEC 17025", note: "Analyzer calibration and validity register" },
  { code: "ISO 2859-1", note: "Acceptance sampling by attributes (AQL)" },
  { code: "CCOE / PESO", note: "Cylinder test and licence gating before dispatch" },
  { code: "India GST", note: "Place of supply, HSN, gapless numbering, e-invoice and e-way bill payloads" },
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
    gets: ["Plant Flow zones with stuck-longest queues", "Dispatch readiness board", "Move task queue and shop-floor kiosk", "Missed deadlines chased automatically"],
  },
  {
    role: "Quality Manager",
    line: "Every result defensible, every instrument in calibration, every deviation closed.",
    gets: ["Certificates with uncertainty calculated", "Analyzer calibration register", "Trend charts and first-pass yield", "Non-conformance and corrective action"],
  },
  {
    role: "Accounts & Compliance",
    line: "Books that close from live data instead of a month of chasing.",
    gets: ["GST-correct invoices from the start", "Gapless numbering per GSTIN and FY", "Vendor bills checked before payment", "Hand-off to your accounts package"],
  },
  {
    role: "Store & Dispatch",
    line: "The right cylinder, in the right bay, on the right vehicle.",
    gets: ["Cylinder allocation with no double-claim", "Gas-class segregation at the bay", "Picking, packing and box catalogue", "Phone-as-scanner QR sessions"],
  },
  {
    role: "Purchase",
    line: "Buy at the contracted rate, receive what was ordered, pay what was received.",
    gets: ["Requisition to RFQ to PO chain", "Vendor scorecards on real receipt data", "Budget check at approval", "Landed cost and import documentation"],
  },
];

export const platformProof = [
  {
    title: "One branch cannot see another's data",
    desc:
      "Every table in the database says which branch or company it belongs to, and the build fails if a new one is added without saying. So it is not something a developer has to remember on each screen — a query cannot silently forget which branch it is in.",
  },
  {
    title: "It will not start if a screen is left unprotected",
    desc:
      "On startup the server checks every screen that changes data for both a role check and a module check, and refuses to run if one is missing. The number of exceptions is currently zero, and it is only allowed to go down.",
  },
  {
    title: "The GST is worked out twice, by two different pieces of code",
    desc:
      "Once in the application and once in the database, tested against a shared set of known-correct answers. If the two ever disagree on an invoice, the database refuses to issue it rather than letting a wrong figure onto a tax document.",
  },
  {
    title: "A double-tap cannot create a duplicate",
    desc:
      "Every save carries a key that identifies it. A patchy connection, an impatient second tap or two tabs open on the same form replay the original answer instead of creating a second purchase order.",
  },
];

export const automations = [
  { name: "Purchase automation", desc: "Drafts purchase orders from the price book and raises RFQs by category policy — never auto-spends." },
  { name: "Sales automation", desc: "Reads enquiries from a mailbox, pulls out the customer and the items, and sends anything it is unsure about to a person." },
  { name: "Reservation reclaim", desc: "Frees up stock that was held for an order which never happened." },
  { name: "Accounting outbox", desc: "Hands documents to your accounts package daily, keeps retrying if it fails, and writes the voucher number back." },
  { name: "Dunning run", desc: "Groups overdue invoices by customer and sends payment reminders, logging every attempt." },
  { name: "Invoice consolidation", desc: "Rolls a month of delivery challans into a single consolidated customer invoice." },
  { name: "Rental billing", desc: "Bills accrued rent and demurrage monthly against the billing watermark." },
  { name: "Item cost reconciliation", desc: "Rebuilds your average item cost from the stock ledger." },
];

export const fluidsFaq = [
  {
    q: "Is this a cylinder tracker or a full ERP?",
    a: "It is a full operations system for a gas plant. Sales, procurement, inventory, production, quality, machines, dispatch and finance all run on the same data, with cylinder operations as the domain core. If you already run accounts elsewhere, Fluids hands documents over to it rather than replacing it.",
  },
  {
    q: "How is data kept separate between our branches and group companies?",
    a: "It is built into the structure of the data rather than left to convention. Every table says whether it belongs to a branch, a company, a location or is genuinely shared, and the build fails if a new one is added without saying. Somebody assigned to one branch cannot read or write another branch's data by any route.",
  },
  {
    q: "We only fill cylinders — do we have to take the item and manufacturing modules?",
    a: "No. You can set the system to gas only, items only, or both, and it is enforced when data is saved rather than just hidden from the menu. Beyond that, your plant profile — full plant, on-site production, import-and-fill, bulk-fill — decides which capabilities exist at all, and any of 28 modules and 48 sub-modules can be switched on or off per company or per branch without a code change.",
  },
  {
    q: "Does it handle Indian GST properly, or is it a generic tax field?",
    a: "Properly, on the documents you raise. The place of supply is worked out from the supplier and recipient states and the system refuses to guess; intra-state versus inter-state, HSN/SAC, per-line rates from a table you can edit yourself, and gapless numbering per GSTIN and financial year. The tax is calculated twice by separate code and the invoice will not issue if the two disagree. E-invoice and e-way bill payloads are prepared and are connected to your GSP at go-live. Filing your returns is not something Fluids does — that is your accountant's portal, and a fuller returns capability is coming with Pradrava Accounting.",
  },
  {
    q: "Can it stop an unsafe or non-compliant dispatch?",
    a: "Yes, at several points. Cylinders past their hydro-test date or missing CCOE documentation are blocked by the compliance gate. Storage bays only accept the gas classes they are declared for, so a flammable cylinder is refused by an inert-only bay. Final inspection with photographs gates the dispatch board, and a delivery with no proof of delivery blocks invoicing.",
  },
  {
    q: "What happens to quality records in an audit?",
    a: "They hold up. Test methods are versioned, results carry the analyst's and reviewer's electronic signatures, every edit after entry is written to a record nobody can change, an analyzer must be inside its calibration date for a result to count, and certificates are issued to ISO 6141 with ISO 6142 uncertainty per component.",
  },
  {
    q: "Do field and shop-floor staff need laptops?",
    a: "No. There is a simplified full-screen mode for shop-floor stations with big touch targets and a chime for new tasks, a phone-as-scanner mode where a desktop opens a session and a phone joins it by scanning a QR code, and a companion scanner app for Android and iOS handsets that we install on your devices — it is in preview, not on the app stores.",
  },
  {
    q: "How do handovers between teams actually get chased?",
    a: "Sixty-five points in the plant — enquiry created, cylinder assignment pending, gas test failed, refill received, requisition awaiting approval, return available and so on — raise a task for a named role with a deadline. Fifty-six of the seventy-one rules also carry an escalation, so an untouched task moves to the person you nominated without anybody chasing it. Which role, how many hours, who it goes to next, and whether the rule is on at all are settings, not code.",
  },
  {
    q: "Can we get our data out?",
    a: "Yes. CSV export on the operational registers, seventeen printable document types with your own header, footer and template, and a documented API if you want to pull it programmatically.",
  },
  {
    q: "How is it deployed?",
    a: "Cloud-hosted in the Mumbai region, on managed infrastructure with a managed database. Error tracking and performance monitoring are wired in. There is nothing for you to run or maintain in the plant.",
  },
];

// Built, but not yet connected or switched on. Kept separate so it never leaks
// into feature copy above.
export const roadmap = [
  { title: "WhatsApp notifications", desc: "The channel is built and works with any provider; it is waiting on business API provisioning." },
  { title: "Live e-invoice and e-way bill", desc: "Both run against a sandbox today. Connecting your production GSP is the remaining step, and we do it with you at go-live." },
  { title: "GST return preparation", desc: "The builders produce a working from live documents — GSTR-1 covering your B2B invoices and a credit-note summary, and a GSTR-3B liability figure. They stop short of a filable return: no GSTN file, and no B2C, export, nil-rated or HSN-summary sections. They are off by default, and the full version belongs to Pradrava Accounting." },
  { title: "PLC / SCADA telemetry bridge", desc: "The system already accepts machine and instrument readings; a live plant-floor connector is next." },
  { title: "Natural-language search", desc: "Search over cylinders and orders in plain English is built and awaiting rollout into the operator screens." },
];
