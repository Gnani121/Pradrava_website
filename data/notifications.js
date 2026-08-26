// Notifications, SLA and escalation — verified feature inventory.
//
// Every figure here is counted from the live rule table, not estimated:
//   71 active hand-off rules · 65 distinct stages · 17 emitting modules · 8 roles
//   56 rules carry an SLA clock and an escalation target
//   15 are informational by design (no due date, never escalate)
//   SLA range in use: 8 hours to 240 hours
//
// Do not add anything here that is not shipped. Channels that are built but
// not switched on are marked as such in notificationChannels.

export const slaStats = [
  { value: "71", label: "hand-off rules live", note: "every one editable, none of them code" },
  { value: "65", label: "stages that raise work", note: "across 17 modules" },
  { value: "56", label: "carry an SLA clock", note: "and an escalation target" },
  { value: "8h–240h", label: "SLA range in use", note: "a failed gas test to a quote follow-up" },
];

// Real rules, as configured today. The hours are the shipped defaults.
export const slaLadder = [
  {
    stage: "Gas quality test failed",
    from: "Quality lab",
    to: "Production",
    also: "QC, Branch Manager, Admin",
    sla: "8 h",
    escalate: "16 h → Branch Manager",
    priority: "high",
    why: "A cylinder holding out-of-spec gas is the one thing that must not sit. It raises the rework job and tells four desks at once.",
  },
  {
    stage: "Cylinder assignment pending",
    from: "Cylinder assignment",
    to: "Production",
    also: "—",
    sla: "24 h",
    escalate: "48 h → Branch Manager",
    priority: "high",
    why: "A customer's order is waiting on somebody choosing which bottles will fill it.",
  },
  {
    stage: "Requisition pending approval",
    from: "Purchase",
    to: "Branch Manager",
    also: "—",
    sla: "24 h",
    escalate: "72 h → Admin",
    priority: "high",
    why: "The one hand-off whose escalation target is not the branch manager — because the branch manager is the one holding it up.",
  },
  {
    stage: "Refill inwarded from the filler",
    from: "Customer refill inward",
    to: "QC",
    also: "Inventory",
    sla: "8 h",
    escalate: "16 h → Branch Manager",
    priority: "normal",
    why: "Gas has come back from a third party. Nothing ships until it has been tested.",
  },
  {
    stage: "Manager review pending",
    from: "Approval",
    to: "Branch Manager",
    also: "—",
    sla: "12 h",
    escalate: "24 h → Super Admin",
    priority: "high",
    why: "An exception is sitting in one person's queue. Twelve hours, then it goes over their head.",
  },
  {
    stage: "Final inspection passed",
    from: "Final inspection",
    to: "Inventory",
    also: "—",
    sla: "8 h",
    escalate: "16 h → Branch Manager",
    priority: "normal",
    why: "The cylinder is ready to leave. From here the only thing between it and the customer is a vehicle.",
  },
  {
    stage: "Quotation created",
    from: "Sales",
    to: "Sales",
    also: "—",
    sla: "240 h",
    escalate: "480 h → Branch Manager",
    priority: "normal",
    why: "Ten working days to follow up a quote, twenty before the manager hears about it. A very different clock, on exactly the same engine.",
  },
  {
    stage: "Quotation expired",
    from: "Quote funnel",
    to: "Sales",
    also: "—",
    sla: "24 h",
    escalate: "72 h → Branch Manager",
    priority: "high",
    why: "The validity date has passed. Extend it, re-quote it or mark it lost — but do not let it rot silently.",
  },
];

// The 17 modules that raise SLA-clocked work, with rule counts as configured.
export const slaModules = [
  { module: "Sales", rules: 15, note: "Enquiry, quotation and its amendments, order, and sales review hand-offs into production and service." },
  { module: "Production", rules: 8, note: "Queued, completed, re-test created, sent out for refill, restart after service." },
  { module: "Inventory", rules: 8, note: "Stock reserved, movement tasks and transfers — mostly informational, one on a clock." },
  { module: "Purchase", rules: 5, note: "Requisition raised, pending approval, RFQ, vendor quotation, purchase order." },
  { module: "Purchase inward", rules: 5, note: "Goods receipt created, cylinder receiving accepted, refill inwarded." },
  { module: "Cylinder assignment", rules: 4, note: "Allocation pending, and routing on to production, QC or service." },
  { module: "Customer refill inward", rules: 4, note: "Customer cylinders arriving, returns available, refills back from the filler." },
  { module: "Gas quality test", rules: 4, note: "Passed to final inspection, failed to rework, re-test created." },
  { module: "Service", rules: 4, note: "Sent to service, service completed, item service completed." },
  { module: "Goods receipt", rules: 3, note: "Item inward expected, cylinder inward pending." },
  { module: "Inspection", rules: 2, note: "Cylinder inwarded post-inspection, item quality inspection completed." },
  { module: "Pick and pack", rules: 2, note: "Ready for picking, packing completed." },
  { module: "Dispatch", rules: 2, note: "Dispatch-ready and delivered notices." },
  { module: "Quote funnel", rules: 2, note: "Stale enquiry, expired quotation." },
  { module: "Approval", rules: 1, note: "Manager review pending — the one that escalates to super admin." },
  { module: "Final inspection", rules: 1, note: "Passed, and therefore dispatch-ready." },
  { module: "Refill", rules: 1, note: "Cylinder queued for refill at a third-party filler." },
];

export const notificationMechanics = [
  {
    icon: "⚡",
    title: "A notification is a consequence, not a message",
    desc:
      "Nothing in the product writes a notification by hand. A step records that an item reached a stage, and the database decides — from your rule table — who hears about it and by when. That is why changing a rule takes effect on the very next event and never needs a release.",
  },
  {
    icon: "⏱️",
    title: "The clock starts at the event, not when someone opens the screen",
    desc:
      "Due time is the moment the thing happened plus the hours you configured. A task raised at six on Friday evening is already eleven hours old on Saturday morning, and the screen says so — rather than starting the count when somebody finally looks.",
  },
  {
    icon: "📈",
    title: "Escalation goes to a person, not to a louder colour",
    desc:
      "Past the escalation window the original is marked escalated and a fresh copy is addressed to the role you nominated, linked back to the one it came from. Most escalate to the branch manager. Requisition approval escalates past the branch manager to admin, and a manager review escalates to super admin.",
  },
  {
    icon: "🪑",
    title: "An empty desk does not swallow the task",
    desc:
      "If nobody at that branch holds the role a rule names, the notification is re-addressed to the branch manager instead of being raised against nobody. Every substitution is recorded — so the report also tells you which roles you are short of.",
  },
  {
    icon: "👥",
    title: "Addressed to a role, read by a person",
    desc:
      "A task belongs to a role, so whoever is on shift can pick it up. Your own read state is tracked separately from whether the task has actually been actioned, so marking it read does not make it look done to everyone else.",
  },
  {
    icon: "🔇",
    title: "Silence is measured",
    desc:
      "Every alert that could not be delivered is recorded with its reason — no rule configured for that stage, or nobody staffed in that role. It is a report you can read, not a line lost in a log file.",
  },
  {
    icon: "🎯",
    title: "It names the document and takes you to it",
    desc:
      "The alert says which requisition, which quotation, which cylinder — and the link opens that record, filtered and ready. Not a list of four hundred rows with the answer somewhere inside it.",
  },
  {
    icon: "🤫",
    title: "Fifteen rules are deliberately silent",
    desc:
      "Not everything deserves a deadline. Fifteen of the seventy-one are informational: they appear in the feed, they never turn red and they never escalate. A system that shouts about everything gets ignored about everything.",
  },
];

// Reminder engines that are NOT the hand-off rule table. Each runs on a
// schedule and is independently switchable per branch.
export const reminderEngines = [
  {
    icon: "⏰",
    name: "Escalation sweep",
    desc: "Walks every open, overdue notification and bumps it to the escalation role. This is the job that makes an SLA mean something instead of being a decorative timestamp.",
  },
  {
    icon: "📉",
    name: "Quote funnel sweep",
    desc: "Flags enquiries that have gone stale past your configured day count, and quotations that have passed their validity date — before the customer rings to ask where their price went.",
  },
  {
    icon: "💰",
    name: "Dunning run",
    desc: "Groups overdue invoices by customer and sends the reminder, logging every attempt, so you can prove what was chased and when.",
  },
  {
    icon: "🧾",
    name: "Rental and demurrage billing",
    desc: "Bills accrued rent monthly against a billing watermark, so the same day is never billed twice and never quietly skipped.",
  },
  {
    icon: "📦",
    name: "Reorder policy run",
    desc: "Measures free stock — net of live reservations — against reorder point and safety stock, and raises the requisition itself rather than waiting for someone to notice the shortage.",
  },
  {
    icon: "🔬",
    name: "Calibration expiry alerts",
    desc: "Analyzers and machines approaching or past calibration surface on a due list. An instrument whose expiry was never recorded is reported as unknown — never as valid.",
  },
  {
    icon: "🛡️",
    name: "Hydro-test due bands",
    desc: "The fleet is banded into overdue, due within 30 days, due within 90, later, and not recorded. That last band is its own answer: a cylinder with no test date on file is not the same as one in date.",
  },
  {
    icon: "🔁",
    name: "Reservation reclaim",
    desc: "Releases stock reserved against demand that never materialised, so the shortage you are being warned about is a real one.",
  },
  {
    icon: "🏷️",
    name: "Contract price expiry",
    desc: "Vendor prices lapsing inside 30 days are listed with the day count, so a rate contract gets renegotiated before it silently reverts to list price.",
  },
  {
    icon: "🔌",
    name: "Accounting hand-off alarm",
    desc: "If a document cannot be pushed to your accounts system after its retries, the accountant and the branch manager are told. A sync failure nobody hears about is the expensive kind.",
  },
];

export const notificationChannels = [
  {
    channel: "In-app",
    state: "Live",
    desc: "The base channel, always on: a live counter in the header, a full inbox, and a per-zone overdue-and-escalated summary on the plant-flow command centre.",
  },
  {
    channel: "Shop-floor station",
    state: "Live",
    desc: "A distraction-free kiosk with large touch targets and an audible chime when a new move task lands — for the bay, where nobody is watching a browser tab.",
  },
  {
    channel: "Email",
    state: "Live",
    desc: "Switched on per branch with your own sender identity, routed to the right department mailbox by role. Dispatch runs as a scheduled sweep and every send is stamped on the notification itself.",
  },
  {
    channel: "WhatsApp",
    state: "Built, not switched on",
    desc: "The channel is implemented and provider-agnostic. It is waiting on business API provisioning, and we would rather tell you that than list it as available.",
  },
];

// What an operator can actually do with the alert once it arrives.
export const notificationSurfaces = [
  { label: "Header counter", value: "An unread count that refreshes on its own, on every screen, for the roles you hold." },
  { label: "Notification inbox", value: "Filter by module, stage, priority and status. Mark read, action or dismiss." },
  { label: "Command-centre alert summary", value: "Overdue, escalated and total open, counted per plant-flow zone, so a blocked zone is visible before anyone opens a queue." },
  { label: "Stuck-longest queues", value: "Work ranked by how long it has been sitting, not by when it was created — the two are not the same list." },
  { label: "Deep link into the record", value: "Every alert opens the requisition, quotation, order, production job or cylinder it is about, already filtered to it." },
  { label: "Delivery report", value: "Which alerts reached a channel, which did not, and why — a rule that was never configured or a role with nobody in it." },
];

export const notificationsFaq = [
  {
    q: "Can we change who gets notified without calling you?",
    a: "Yes — that is the whole design. Notified role, additional roles, the SLA hours, the escalation window, the escalation role, the priority and whether the rule is on at all are all edited on an admin screen and take effect on the next event. There are 71 rules configured today and none of them is written in code.",
  },
  {
    q: "What if we do not want a deadline on something?",
    a: "Leave the SLA hours empty. The notification is still raised and still appears in the feed, but it never acquires a due date, never turns overdue and never escalates. Fifteen of the current rules are deliberately set that way.",
  },
  {
    q: "We do not have a QC person at our second branch. What happens to QC alerts there?",
    a: "They go to the branch manager instead of being raised against an empty role, and the substitution is recorded. The delivery report then shows you exactly which roles are unstaffed at which branch, which is usually more useful than the individual alerts.",
  },
  {
    q: "Does it email people, or is it just a bell in the app?",
    a: "In-app is the base channel and is always on. Email is switched on per branch with your own sender identity and routes to the right department mailbox by role, dispatched on a scheduled sweep, with each send stamped on the notification. WhatsApp is built and awaiting business API provisioning — we list it as not yet live.",
  },
  {
    q: "How do we know an alert was actually raised and not silently dropped?",
    a: "Because a drop is a record. If a stage fires and no rule matches it, or a rule names a role nobody holds, that is written down with the reason and shown on a delivery report. Most systems lose that in a log; here it is a screen with a count on it.",
  },
  {
    q: "Is this just for the plant, or does it chase commercial work too?",
    a: "Both, on one engine. The same mechanism that gives a failed gas test an eight-hour clock gives a quotation a ten-working-day follow-up clock that escalates to the branch manager after twenty. Separately, a scheduled job chases overdue invoices, and rental billing, reservation reclaim and e-way bill expiry run on their own clocks. Sweeps for expiring quotes, lapsing vendor prices, calibrations coming due and cylinders approaching their hydro-test date are built and run when you run them — we have not put them on a timer yet.",
  },
];
