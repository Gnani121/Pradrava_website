import Link from "next/link";

const fluidsFeatures = [
	{ icon: "🧭", title: "Plant Flow Command Center", desc: "Real-time visibility across demand flow, procurement flow, cylinder distribution, and item distribution zones." },
	{ icon: "🧪", title: "Trace Passport", desc: "End-to-end trace for any cylinder, item, or order with stage, idle hours, risk level, and event timeline." },
	{ icon: "📦", title: "Cylinder Assignment", desc: "Assign exact cylinders to open sales order lines by gas composition, capacity, and ownership." },
	{ icon: "♻️", title: "Refill + Production", desc: "Push eligible cylinders to refill queue and manage filling workflows, urgency, and readiness." },
	{ icon: "🧾", title: "Sales + Procurement Lifecycle", desc: "Track enquiry-to-order conversion and requisition-to-PO progression with stage-level control." },
	{ icon: "🔬", title: "Quality + Inspection", desc: "Item inward inspection, quality lab records, product quality checks, and final inspection before dispatch." },
	{ icon: "📷", title: "Scanner App", desc: "Companion mobile scanner app for QR/barcode actions on Android and iOS, connected to the same backend." },
	{ icon: "🔐", title: "Session + Role Security", desc: "10-minute inactivity auto-logout and route/action-level access for Super Admin, Manager, Accountant, Operator, and Viewer." },
];

const fluidsModules = [
	"Cylinder, Pallet, Gas Bank, Trolley & SKID Tracking",
	"Transaction Management (DC, ECR, ETM, FRC)",
	"Purchase Order and Invoice Creation",
	"Quotation, Bill Management & Payment Logbook",
	"Dispute and Mismatch Transaction Tracking",
	"Stock Transfer Module",
	"Advanced Reporting and Analytics",
	"Smart Barcode and QR Scanning",
	"Customer, Gas & Vehicle Management",
	"Alerts via Email, SMS & WhatsApp",
	"Cylinder Stock Level and Due Notifications",
	"Document and Certification Management",
	"Comprehensive Operations Dashboard",
	"Role-Based Secure Access Control",
	"Cloud Hosting and Data Security",
	"Mobile-Ready Web Application",
];

const fluidsFaq = [
	{ q: "What types of assets can Fluids track?", a: "Fluids tracks gas cylinders, pallets, gas banks, trolleys, and SKIDs—giving you complete visibility over every asset in your fleet, across all locations and customers." },
	{ q: "What transaction types are supported?", a: "The platform supports Delivery Challan (DC), Empty Cylinder Return (ECR), Empty-to-Full Transfer (ETM), and Full Return Challan (FRC), covering every movement type in the industrial gas workflow." },
	{ q: "How does billing and invoicing work?", a: "Invoices are generated automatically based on delivery transactions. You can track payment status, manage quotations, handle disputes, and maintain a full payment logbook—all in one place." },
	{ q: "Is Fluids accessible on mobile?", a: "Yes. Fluids is fully web-responsive and designed to work on smartphones and tablets so field staff can record deliveries, scan QR codes, and check stock levels on the go." },
	{ q: "How are alerts and notifications delivered?", a: "Alerts are sent via email, SMS, and WhatsApp for events like low stock, overdue cylinder returns, expiry dates, and suspicious transaction mismatches." },
];

const accountingFeatures = [
	{ icon: "🧾", title: "Smart Invoicing", desc: "Create professional invoices in seconds with auto-calculated taxes, discounts, and payment terms. Send directly to customers via email." },
	{ icon: "💰", title: "Payment Tracking", desc: "Monitor incoming and outgoing payments with automated reminders for overdue accounts and real-time cash position." },
	{ icon: "📈", title: "Real-Time Financial Reports", desc: "P&L statements, balance sheets, and cash flow reports generated on demand—always reflecting the latest transactions." },
	{ icon: "🧮", title: "Expense Management", desc: "Log, categorize, and approve expenses with receipt capture and configurable policy enforcement for every spend category." },
	{ icon: "🏦", title: "Bank Reconciliation", desc: "Match transactions automatically against bank statements and flag discrepancies instantly—close your books faster every month." },
	{ icon: "📋", title: "Audit Trail", desc: "Every transaction is timestamped and attributed to a user, providing a complete, tamper-proof log for regulatory compliance." },
	{ icon: "🌐", title: "Multi-Currency Support", desc: "Handle international transactions with live exchange rates and multi-currency reporting for global operations." },
	{ icon: "🔐", title: "Role-Based Access", desc: "Finance teams, managers, and auditors each see precisely what they need—no more, no less—with configurable permission sets." },
];

const accountingModules = [
	"Invoice and Bill Generation",
	"Payment Collection and Disbursement",
	"Expense Recording and Approval Workflows",
	"Bank Statement Reconciliation",
	"Tax Computation and Filing Support (GST-ready)",
	"Profit & Loss and Balance Sheet Reports",
	"Cash Flow Forecasting",
	"Vendor and Customer Ledger Management",
	"Multi-Currency Transaction Handling",
	"Audit Log and Compliance Trails",
	"Role-Based Secure Access Control",
	"Cloud Data Storage and Automatic Backup",
	"Comprehensive Finance Dashboard",
	"Purchase Order and Quotation Management",
];

const accountingFaq = [
	{ q: "Can Accounting handle GST and tax compliance?", a: "Yes. The platform includes GST-ready invoicing and tax computation, making it straightforward to stay compliant with local tax regulations and generate tax reports at period-end." },
	{ q: "How does bank reconciliation work?", a: "Accounting auto-matches transactions from imported bank feeds against your ledger entries. Matched entries are cleared automatically; exceptions are flagged for manual review, dramatically cutting reconciliation time." },
	{ q: "Is my financial data secure?", a: "All data is cloud-hosted with encryption at rest and in transit. Role-based access controls and a full audit trail ensure that only authorized users can view or modify financial records." },
	{ q: "Can multiple users work simultaneously?", a: "Yes. Accounting supports multi-user access with configurable roles—accountants, managers, approvers, and auditors can all work concurrently without conflicts." },
	{ q: "Does it support multi-currency transactions?", a: "Yes. You can record transactions in any currency with live exchange rate conversion. Reports can be generated in your base currency with full transaction history preserved." },
];

function FaqSection({ items }) {
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

export default function ProductsPage() {
	return (
		<div className="container page-stack">

			{/* Page header */}
			<div className="section-head reveal">
				<p className="eyebrow">Products</p>
				<h1>Built for industrial operations</h1>
			</div>
			<p className="lead reveal delay-1">
				Two purpose-built platforms—Fluids for gas and cylinder operations, Accounting for
				financial control—designed to work independently or together as an integrated system.
			</p>

			{/* ── FLUIDS ───────────────────────────────────────────── */}
			<div className="product-showcase-block reveal delay-1">
				<div className="product-showcase-header fluids-header">
					<div>
						<span className="product-badge">Industrial Gas</span>
						<h2>Fluids</h2>
						<p>
							End-to-end industrial gas operations platform that tracks each cylinder
							from procurement through filling, quality inspection, customer delivery,
							rental, and return.
						</p>
					</div>
					<div className="hero-actions">
						<Link href="/products/fluids" className="btn btn-primary">Full Details</Link>
						<Link href="/demo" className="btn btn-ghost">See Live Demo</Link>
					</div>
				</div>

				<div className="showcase-chip-grid">
					{fluidsFeatures.map((f) => (
						<div key={f.title} className="showcase-chip">
							<span className="chip-icon">{f.icon}</span>
							{f.title}
						</div>
					))}
				</div>

				<div className="product-showcase-footer">
					<p>Includes dashboard KPIs, AI-powered search, pipeline visibility, and full lifecycle traceability</p>
					<Link href="/products/fluids" className="btn btn-ghost btn-sm">Explore Fluids →</Link>
				</div>
			</div>

			{/* ── ACCOUNTING ───────────────────────────────────────── */}
			<div className="product-showcase-block reveal delay-2">
				<div className="product-showcase-header accounting-header">
					<div>
						<span className="product-badge orange">Upcoming</span>
						<h2>Accounting</h2>
						<p>
							Accounting is currently in active development. We are building a
							finance workspace for invoicing, reconciliation, and reporting with
							audit-ready controls.
						</p>
					</div>
					<div className="hero-actions">
						<Link href="/products/accounting" className="btn btn-primary">View Roadmap</Link>
						<Link href="/demo" className="btn btn-ghost">Get Launch Updates</Link>
					</div>
				</div>

				<div className="showcase-chip-grid">
					{accountingFeatures.map((f) => (
						<div key={f.title} className="showcase-chip">
							<span className="chip-icon">{f.icon}</span>
							{f.title}
						</div>
					))}
				</div>

				<div className="product-showcase-footer">
					<p>Planned release: phased rollout with core invoicing, reconciliation, and reporting modules</p>
					<Link href="/products/accounting" className="btn btn-ghost btn-sm">See What Is Coming →</Link>
				</div>
			</div>

			{/* CTA */}
			<div className="momentum-panel reveal delay-2">
				<p className="eyebrow">Get Started</p>
				<h3>Ready to see it live?</h3>
				<p>
					Fluids is available for guided demos now. Accounting is in active
					development and open for launch updates.
				</p>
				<div className="hero-actions">
					<Link href="/demo" className="btn btn-primary">Request a Demo</Link>
					<Link href="/services" className="btn btn-ghost">Talk to Our Team</Link>
				</div>
			</div>

		</div>
	);
}

export { fluidsFeatures, fluidsModules, fluidsFaq, accountingFeatures, accountingModules, accountingFaq, FaqSection };
