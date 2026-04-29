import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | Pradrava",
  description: "Product engineering, AI automation, cloud infrastructure, digital transformation advisory, team enablement, and ready-to-deploy platforms.",
  keywords: [
    "software development services",
    "AI automation consulting",
    "cloud architecture services",
    "digital transformation advisory",
    "team enablement",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Capabilities</p>
        <h1>Our Services</h1>
      </div>
      <div className="card-grid reveal delay-1">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
