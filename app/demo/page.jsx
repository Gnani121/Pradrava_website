import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export default function DemoPage() {
  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Interactive Showcase</p>
        <h1>Demo Platform</h1>
      </div>

      <div className="card-grid reveal delay-1">
        {demos.map((d, i) => (
          <DemoCard key={i} demo={d} />
        ))}
      </div>
    </section>
  );
}