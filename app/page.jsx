import Hero from "@/components/Hero";
import { services } from "@/data/services";
import { demos } from "@/data/demos";
import ServiceCard from "@/components/ServiceCard";
import DemoCard from "@/components/DemoCard";

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">What We Build</p>
          <h2>Services with business outcomes</h2>
        </div>
        <div className="card-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </section>

      <section className="section-block reveal delay-1">
        <div className="section-head">
          <p className="eyebrow">Interactive Lab</p>
          <h2>Try live product demos</h2>
        </div>
        <div className="card-grid">
          {demos.map((d, i) => (
            <DemoCard key={i} demo={d} />
          ))}
        </div>
      </section>
    </div>
  );
}