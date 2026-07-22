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

      {/* Engagement process */}
      <div className="reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">How We Work</p>
          <h2>A clear path from first call to full rollout</h2>
        </div>
        <div className="flow-grid">
          <div className="flow-card">
            <div className="step-number">01</div>
            <h3>Discover</h3>
            <p>We map your current workflows, data, and pain points to understand exactly how your operation runs today.</p>
          </div>
          <div className="flow-card">
            <div className="step-number">02</div>
            <h3>Configure</h3>
            <p>We tailor modules, roles, and integrations to match your process — not force your process to match the software.</p>
          </div>
          <div className="flow-card">
            <div className="step-number">03</div>
            <h3>Onboard</h3>
            <p>Guided data migration and role-specific training get every user productive, with reference material for each level.</p>
          </div>
          <div className="flow-card">
            <div className="step-number">04</div>
            <h3>Support &amp; Grow</h3>
            <p>Ongoing support with defined SLAs, plus feature extensions and new modules as your operations expand.</p>
          </div>
        </div>
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
