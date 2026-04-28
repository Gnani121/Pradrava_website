import Hero from "@/components/Hero";
import { services } from "@/data/services";
import { demos } from "@/data/demos";
import ServiceCard from "@/components/ServiceCard";
import DemoCard from "@/components/DemoCard";

export default function Home() {
  return (
    <main className="p-6 space-y-12">

      <Hero />

      {/* SERVICES */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </section>

      {/* DEMOS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Try Our Demos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {demos.map((d, i) => (
            <DemoCard key={i} demo={d} />
          ))}
        </div>
      </section>

    </main>
  );
}