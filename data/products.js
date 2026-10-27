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
    desc: "The books and the GST returns — filing, 2B matching and the ledger. In development. Fluids already gets the GST right on every document and hands them to your existing accounts system today.",
    href: "/products/accounting",
    status: "In Development",
  },
];

export const accountingFeatures = [
  { icon: "🧾", title: "Invoicing on live documents", desc: "Invoices raised from the same dispatch and delivery data your operations team already works in, rather than re-keyed at month end." },
  { icon: "💰", title: "Receipts and payment tracking", desc: "Customer receipts, vendor payments and running balances against the ledgers Fluids already maintains." },
  { icon: "📈", title: "Financial statements", desc: "Profit and loss, balance sheet and cash position generated from posted transactions instead of exported and rebuilt in a spreadsheet." },
  { icon: "🧮", title: "Expense capture and approval", desc: "Log, categorise and approve spend with the same approval and budget controls used in procurement." },
  { icon: "🏦", title: "Bank reconciliation", desc: "Match statement lines against ledger entries, clear the matches and surface only the exceptions for review." },
  { icon: "📋", title: "Audit trail", desc: "Every entry timestamped and attributed, the same way as everything else in Fluids." },
  { icon: "🧷", title: "Vendor and customer ledgers", desc: "Party-wise ledgers that reconcile to the operational documents they came from, not a parallel set of books." },
  { icon: "🔐", title: "Role-based access", desc: "Accountants, approvers and auditors see exactly their scope, just as in Fluids." },
];

export const accountingModules = [
  "Chart of accounts, journals and the general ledger",
  "Invoice and bill posting from operational documents, so nothing is re-keyed",
  "Receipts, payments and a running ledger per customer and per vendor",
  "Expense recording with an approval step, and petty cash",
  "Bank statement import, and matching statement lines against your entries",
  "Profit and loss, balance sheet and cash position from posted entries",
  "Customer and vendor ageing",
  "Fixed assets with depreciation, and project-wise costing",
  "Payroll, and Form 16 at the end of the year",
  "TDS deduction, tracking and returns",
  "GST: output summary, returns, and GSTR-2B matching for input credit",
  "Income tax working papers, Form 26AS and AIS reconciliation, and ITR preparation",
  "E-filing with digital signature support",
  "Financial years, multiple currencies and editable tax rates",
  "Budgets, purchase orders and approvals",
  "Audit log and change history on every entry",
  "Role-based access, so each person sees only their own scope",
];

export const accountingFaq = [
  {
    q: "Is Accounting available today?",
    a: "No. It is in active development. What is available today is the accounting hand-off in Fluids — Fluids sends invoices, credit notes and payments to whatever accounts system you already run.",
  },
  {
    q: "Do we have to wait for it to start using Fluids?",
    a: "No. Fluids is designed to sit alongside an existing accounts package rather than replace it. The connection to your accounts package is built; we set it up with you when you go live.",
  },
  {
    q: "What will it integrate with?",
    a: "It works with Fluids directly, so your branches, roles and change history carry over unchanged.",
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
