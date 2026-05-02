import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | Pradrava",
  description: "Implementation, onboarding, custom integrations, workflow consulting, and ongoing support to maximize the value of your Pradrava products.",
  keywords: [
    "software implementation services",
    "product onboarding support",
    "custom integration services",
    "operations workflow consulting",
    "enterprise software support",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Professional Services</p>
        <h1>We help you get the most from our products</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          Great software only delivers value when it fits your operations perfectly.
          Our services team works alongside you — from initial setup through long-term growth —
          so nothing gets lost between the product and your workflow.
        </p>
      </div>

      <div className="card-grid reveal delay-1">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <div className="momentum-panel reveal delay-2" style={{ marginTop: "2rem" }}>
        <p className="eyebrow">Have a specific need?</p>
        <h3>Let&apos;s talk about your setup</h3>
        <p>
          Whether you are starting fresh or need to extend an existing deployment,
          our team will design the right engagement for your situation.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          <Link href="/products" className="btn btn-ghost">View Products</Link>
        </div>
      </div>
    </div>
  );
}
