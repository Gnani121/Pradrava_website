// The details that do not fit a feature bullet.
//
// Everything here is shipped and working. These are the things a plant only
// discovers it needed in year two, and the reason a demo that looks similar to
// another product stops looking similar about twenty minutes in.

export const depthProof = [
  {
    icon: "💵",
    title: "Payments, not just invoices",
    desc:
      "Record a customer receipt against an invoice — full or part — by cash, cheque, NEFT, RTGS, UPI or card. An over-payment is refused rather than quietly parked, a receipt is voided with a stated reason rather than deleted, and the invoice balance is maintained by the database so two people banking the same cheque cannot both succeed.",
  },
  {
    icon: "🗂️",
    title: "A cylinder is retired, never erased",
    desc:
      "You cannot delete a bottle that is customer-owned, still holding gas, committed to an order or named on a live document — and the refusal tells you which of those it is. What you can do is retire it, which keeps its inward log, service history and consumption ledger intact and is reversible.",
  },
  {
    icon: "↩️",
    title: "Cancelling an order is not one click",
    desc:
      "A cancelled order leaves physical cylinders somewhere. Each one lands in a disposition queue with five outcomes, and a customer-owned bottle can only be returned to its customer — enforced in the application, in the choices offered, and by the database. The cancellation is not complete while you are still holding somebody else's cylinders.",
  },
  {
    icon: "🧭",
    title: "Find a cylinder by the number stencilled on it",
    desc:
      "Type the id painted on the bottle and get, in one answer: where it is standing, what is holding it, which sales order, which purchase order, which vendor it went to, on which challan, and what happens to it next. If it is on no document at all, it says so rather than showing you an empty board.",
  },
  {
    icon: "🧮",
    title: "Tolerances you set, not tolerances we chose",
    desc:
      "The three-way match runs on percentage and rupee tolerance bands you configure per branch, falling back to a company default. The screen tells you which of the two is actually in force — and says plainly when neither exists and it is running at zero tolerance.",
  },
  {
    icon: "🚧",
    title: "It checks the door a cylinder has to come back through",
    desc:
      "Before a bottle can be sent to a third-party filler, the system checks that a fill range exists for bringing it back. Without that check a cylinder leaves the gate, gets filled, and is then refused at your own receiving bay — with the challan open and the purchase order unsettled.",
  },
  {
    icon: "📋",
    title: "A worklist of what your master data is missing",
    desc:
      "Not a completeness percentage. A ranked list: 37 customers with no address, 9 capacity-and-gas pairs with no refill range, 2 addresses with no GST state code — each one saying what it will break downstream and which screen fixes it. Master data gaps fail somewhere else, weeks later, on somebody else's screen.",
  },
  {
    icon: "👁️",
    title: "You can see who is hitting walls",
    desc:
      "An administrator console over sessions, every action taken, every permission refusal, browser crashes, endpoint health and open tax discrepancies. Failed sign-ins are captured and repeated failures from one address are blocked. Log retention is a number you set on that screen, with a floor, and no setting that means delete everything.",
  },
  {
    icon: "✍️",
    title: "Segregation of duties, when you want it",
    desc:
      "Off by default, because in a two-person branch the same person legitimately raises and approves. Switch it on and the person who raised a requisition, created a vendor invoice or requested an order cancellation cannot be the one who approves it. An unknown creator never blocks an approval.",
  },
  {
    icon: "🔒",
    title: "A double-tap cannot create a duplicate",
    desc:
      "Every save carries a key that identifies it, so an impatient second tap, a patchy connection or two tabs open on the same form give you back the original answer instead of a second purchase order — and if a save times out, it tells you it may have gone through rather than inviting you to try again and make two.",
  },
  {
    icon: "🧊",
    title: "Bulk and cryogenic, not only cylinders",
    desc:
      "Tanker receipts weighed gross and tare, tank level events, boil-off, and tank-to-cylinder transfer — with the tank ledger reconciling to the kilogram. A finalise that would overfill a tank is refused, and the room remaining is shown while the weights are being keyed rather than at the end.",
  },
  {
    icon: "🖨️",
    title: "Seventeen documents, your letterhead",
    desc:
      "Quotation, order, delivery challan, invoice, credit and debit note, certificate of analysis, goods receipt, purchase order and more — server-rendered to PDF with your own header, footer, terms and sections, configured per branch and per document type. Email them from the same screen, routed to the right department mailbox.",
  },
];

// Numbers that are true today, measured rather than rounded up.
export const scaleFacts = [
  { value: "71", label: "SLA rules", note: "over 65 stages, all editable" },
  { value: "17", label: "print & email document types", note: "your letterhead, per branch" },
  { value: "10", label: "scheduled reminder engines", note: "chasing dates, not hand-offs" },
  { value: "5", label: "sale types", note: "sale, refill, rental, quality check, service" },
];
