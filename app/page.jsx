import Hero from "@/components/Hero";
import { services } from "@/data/services";
import { demos } from "@/data/demos";
import ServiceCard from "@/components/ServiceCard";
import DemoCard from "@/components/DemoCard";

const differentiators = [
  {
    title: "Strategy to shipping in one team",
    desc: "Product strategy, engineering, AI and cloud delivery under one accountable partner."
  },
  {
    title: "Business-first technical decisions",
    desc: "Every architecture and feature choice maps to revenue, cost efficiency, or risk reduction."
  },
  {
    title: "Future-ready from day one",
    desc: "Security, scalability, integrations and analytics are built in from the first sprint."
  }
];

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Why Pradrava</p>
          <h2>Energy, clarity and execution your team can feel</h2>
        </div>
        <div className="pulse-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="pulse-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">What We Build</p>
          <h2>Services designed around outcomes</h2>
        </div>
        <div className="card-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </section>

      <section className="section-block reveal delay-1">
        <div className="section-head">
          <p className="eyebrow">Interactive Experiences</p>
          <h2>Explore what your future platform can feel like</h2>
        </div>
        <div className="card-grid">
          {demos.map((d, i) => (
            <DemoCard key={i} demo={d} />
          ))}
        </div>
      </section>

      <section className="momentum-panel reveal delay-2">
        <p className="eyebrow">Ready To Move</p>
        <h3>Bring your next idea. We will make it launch-ready.</h3>
        <p>
          Whether you are modernizing operations or launching a new digital product,
          we help you move from uncertainty to execution with speed.
        </p>
      </section>
    </div>
  );
}