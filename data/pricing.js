// Fluids pricing — taken from the pricing model workbook
// front2/Gas_Cylinder_System_Pricing_Model.FIXED.xlsx (26 Aug 2026), sheets
// "Price Grid", "Services" and "AMC and Support".
//
// The website shows these as APPROXIMATE, "from" figures and says a written
// quote is final. Every number on /pricing comes from this file; change it here.
//
// The workbook's own formula, reproduced exactly (verified against its grid):
//   subscription (shared cloud), per branch / month
//        = bundle.base (band S price, discounts already applied) x band.multiplier
//   dedicated database, per branch / month = shared x 1.6   (+ managed hosting per band)
//   one-time perpetual licence, per branch = dedicated x 12 x 3   (+ AMC 18% or 22% a year)
//   branch 2 onwards = 60% of the first branch's licence line
//   users beyond the band's included count = band.extraUser per user / month
//
// All amounts are in Indian rupees and EXCLUDE GST (18%).

export const gstNote = "All prices are in Indian rupees, per branch, and exclude GST at 18%.";

export const DEDICATED_MULTIPLIER = 1.6;
export const PERPETUAL_YEARS = 3;          // perpetual = 3 x the annual dedicated fee
export const ADDITIONAL_BRANCH_FACTOR = 0.6;
export const AMC_STANDARD = 0.18;
export const AMC_PREMIUM = 0.22;

// Size bands: a gas plant is sized by the cylinders it manages, not by revenue.
export const bands = [
  { id: "S", name: "Small", who: "One plant, one filling line", cylinders: "up to 2,000 cylinders", users: 10, multiplier: 1, extraUser: 450, hosting: 18000 },
  { id: "M", name: "Medium", who: "One or two plants with your own transport", cylinders: "up to 10,000 cylinders", users: 30, multiplier: 1.8, extraUser: 400, hosting: 32000 },
  { id: "L", name: "Large", who: "A group of 3 to 6 locations with its own lab", cylinders: "up to 35,000 cylinders", users: 80, multiplier: 3.2, extraUser: 350, hosting: 58000 },
  { id: "XL", name: "Extra large", who: "A national or regional player, 7+ branches, bulk plant", cylinders: "35,000+ cylinders", users: 200, multiplier: 5, extraUser: 300, hosting: 95000 },
];

// Cumulative bundles: each one adds to the one before. `base` is the band S,
// shared-cloud price from the workbook's grid.
export const bundles = [
  { id: "B1", name: "Cylinder Basic", base: 13000, adds: "Platform and cylinder core", desc: "Know every cylinder: where it is, whose it is, when it was last tested." },
  { id: "B2", name: "Stock & Movement", base: 16715, adds: "Inventory and warehouse", desc: "Valves, seals, caps and packing material — stock, reserve, pick and transfer between branches." },
  { id: "B3", name: "Commercial", base: 24890, adds: "Sales and GST-correct billing", desc: "Enquiry to quotation to order to a GST-correct invoice, with receipts. The first bundle that runs a business." },
  { id: "B4", name: "Supply Chain", base: 31160, adds: "Purchase and dispatch", desc: "Requisition to purchase order to goods receipt, and challan to proof of delivery. Both ends closed." },
  { id: "B5", name: "Plant", base: 35750, adds: "Filling and production", desc: "Refill queue, donor and receiver filling, gas consumption, final inspection and bulk tanks.", popular: true },
  { id: "B6", name: "Quality", base: 40325, adds: "Quality, compliance and traceability", desc: "Gas analysis, analyzer calibration, certificates of analysis, NCR and corrective action, AQL sampling, cylinder trace." },
  { id: "B7", name: "Finance Pro", base: 45750, adds: "Advanced finance, rental and demurrage", desc: "Credit control, receivables ageing, reminders, three-way match, landed cost, rental billing, demurrage and deposits." },
  { id: "B8", name: "Enterprise", base: 49950, adds: "Machines, analytics and automation", desc: "Everything: OEE and maintenance, machine telemetry intake, quotes drafted from email, purchase automation, full analytics." },
];

export const tiers = [
  {
    id: "shared",
    name: "Cloud subscription",
    short: "per branch / month",
    billing: "Monthly or annual subscription",
    desc: "Runs on our shared cloud with your data kept separate by the database itself. Hosting, backups, updates and standard support included.",
    bestFor: "Most single-plant and two-plant businesses.",
  },
  {
    id: "dedicated",
    name: "Dedicated database",
    short: "per branch / month + hosting",
    billing: "Annual subscription, paid in advance",
    desc: "Your own database and app instance, your own domain, your own backup and upgrade schedule. Managed hosting is a separate monthly fee by size.",
    bestFor: "Anyone with an auditor, a foreign parent or an IT head.",
  },
  {
    id: "perpetual",
    name: "One-time licence",
    short: "per branch, one-time",
    billing: "One-time licence + annual maintenance (AMC)",
    desc: "A perpetual licence to run the current major version on your own servers or cloud. Annual maintenance of 18% (Standard) or 22% (Premium) of the licence is required from year two.",
    bestFor: "Large groups and anyone who will not take on a monthly cost.",
  },
];

/** Price of one branch for a bundle, band and tier, exactly as the workbook computes it. */
export function bundlePrice(bundle, band, tierId) {
  const shared = bundle.base * band.multiplier;
  if (tierId === "shared") return shared;
  const dedicated = shared * DEDICATED_MULTIPLIER;
  if (tierId === "dedicated") return dedicated;
  return dedicated * 12 * PERPETUAL_YEARS;
}

/** Round to the nearest hundred: these are approximations, and ₹24,890.40 reads as false precision. */
export const approx = (n) => Math.round(n / 100) * 100;

export const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// One-time services (sheet "Services"). Shown as "from" figures.
export const services = [
  { name: "Base configuration and go-live, first branch", price: 150000, note: "company, GST numbers, locations, roles, users, numbering, print templates, alert rules" },
  { name: "Each additional branch", price: 95000, note: "locations, users, numbering and opening stock for that branch" },
  { name: "Master data migration", price: 90000, note: "customers, vendors, items and price books — cleaned, de-duplicated and loaded" },
  { name: "Opening stock and balances", price: 45000, note: "stock on hand, deposits held, cylinders at customer sites" },
  { name: "Cylinder QR / barcode tagging", price: 35, unit: "per cylinder", note: "minimum ₹50,000" },
  { name: "E-invoice onboarding with your GSP", price: 125000, note: "credentials, mapping and testing with the provider" },
  { name: "E-way bill integration", price: 85000, note: "including consolidated e-way bills" },
  { name: "Accounts package integration (Tally or ERP)", price: 175000, note: "connector, voucher mapping and write-back" },
  { name: "Analyzer data import", price: 60000, unit: "per instrument model", note: "results come straight from the instrument, no retyping" },
  { name: "Training batch, up to 15 people", price: 35000, unit: "per batch", note: "by role: sales, plant, lab, dispatch, accounts" },
  { name: "Hypercare, 4 weeks after go-live", price: 150000, note: "named engineer and a daily check-in with your team" },
  { name: "Custom development", price: 9500, unit: "per person-day", note: "quoted from a written specification" },
];
export const typicalImplementation = 1834000; // "TYPICAL BAND M IMPLEMENTATION" in the workbook

export const supportPlans = [
  { name: "Standard", response: "Next business day, 9×6", subscription: "Included", perpetual: "18% of licence a year", covers: "Bug fixes, every minor release, statutory updates when GST, e-invoice or e-way bill formats change, email and portal support." },
  { name: "Premium", response: "4 hours, 24×7", subscription: "+20% of subscription", perpetual: "22% of licence a year", covers: "Everything in Standard, plus 24×7 cover for critical issues, a named support engineer, a quarterly health check, an annual disaster-recovery test and a refresher training block every six months." },
];

export const pricingFaq = [
  {
    q: "Are these the final prices?",
    a: "They are approximate starting prices so you can tell whether Fluids fits your budget. Your final figure comes in a written quote once we know your branches, users, cylinders and which bundle you need.",
  },
  {
    q: "Why is the price per branch?",
    a: "Each plant or depot carries its own stock, cylinders, documents and users. From the second branch onwards the licence is charged at 60% of the first, because the setup and the design already exist.",
  },
  {
    q: "How do I know which size band I am in?",
    a: "By the number of cylinders you manage: up to 2,000 is Small, up to 10,000 Medium, up to 35,000 Large, and more than that Extra large. Each band includes a number of named users; beyond that each extra user is a small monthly charge.",
  },
  {
    q: "Can we start with a smaller bundle and add more later?",
    a: "Yes. The bundles build on each other and every capability is a switch inside the system, so moving up is a change of plan, not a migration. Your data stays exactly where it is.",
  },
  {
    q: "Why is implementation priced separately?",
    a: "Because it is real work: walking your plant, loading your data, configuring your workflows, training each team and standing at the dispatch gate on go-live day. A typical medium-sized plant spends about as much on implementation in the first year as on the licence — and it is what decides whether the project succeeds.",
  },
  {
    q: "Does the price include GST filing?",
    a: "No. Fluids makes every invoice GST-correct when it is raised, but returns are filed on your accountant's portal. A fuller returns capability is coming with Pradrava Accounting.",
  },
];
