import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
	return (
		<section className="container page-stack">
			<div className="section-head reveal">
				<p className="eyebrow">Capabilities</p>
				<h1>Our Services</h1>
			</div>
			<div className="card-grid reveal delay-1">
				{services.map((service, i) => (
					<ServiceCard key={i} service={service} />
				))}
			</div>
		</section>
	);
}
