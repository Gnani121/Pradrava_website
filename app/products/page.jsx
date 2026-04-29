import Link from "next/link";

const products = [
	{
		name: "Fluids",
		tagline: "Operations intelligence for fluid-driven workflows",
		description:
			"Monitor usage, improve planning and reduce operational loss with live dashboards, smarter alerts and decision-ready analytics.",
		highlights: [
			"Live monitoring and analytics",
			"Role-based workflows and approvals",
			"Integration-ready APIs"
		]
	},
	{
		name: "Accounting",
		tagline: "Modern finance operations for growing teams",
		description:
			"Automate invoices, expenses and reconciliations with reliable reporting that keeps leadership and auditors aligned.",
		highlights: [
			"Fast invoicing and payment tracking",
			"Real-time financial reports",
			"Audit-friendly controls"
		]
	}
];

export default function ProductsPage() {
	return (
		<section className="container page-stack">
			<div className="section-head reveal">
				<p className="eyebrow">Products</p>
				<h1>Products that move business forward</h1>
			</div>
			<p className="lead reveal delay-1">
				Choose the platform that fits your growth stage today, then scale into
				enterprise workflows without switching systems later.
			</p>

			<div className="product-grid reveal delay-1">
				{products.map((product) => (
					<article key={product.name} className="product-card">
						<p className="eyebrow">{product.name}</p>
						<h3>{product.tagline}</h3>
						<p>{product.description}</p>
						<ul className="product-points">
							{product.highlights.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<div className="feature-panel reveal delay-2">
				<h3>Built for customer confidence</h3>
				<p>
					Every product is designed for quick onboarding, clean user journeys and
					clear business ROI, so buyers can say yes faster.
				</p>
				<div className="hero-actions">
					<Link href="/demo" className="btn btn-primary">See Live Demo</Link>
					<Link href="/services" className="btn btn-ghost">Talk to Our Team</Link>
				</div>
			</div>
		</section>
	);
}
