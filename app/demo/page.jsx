import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export const metadata = {
  title: "Demo Platform | Interactive Showcase | Pradrava",
  description: "Explore live product experiences: Fluids Intelligence Workspace, AI Forecast Studio. See what your future platform can feel like.",
  keywords: [
    "product demos",
    "interactive software demo",
    "AI forecast demo",
    "industrial operations demo",
    "Pradrava demos",
  ],
  alternates: {
    canonical: "/demo",
  },
};

export default function DemoPage() {
  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Interactive Showcase</p>
        <h1>Demo Platform</h1>
      </div>

      <div className="card-grid reveal delay-1">
        {demos.map((d) => (
          <DemoCard key={d.slug} demo={d} />
        ))}
      </div>
    </section>
  );
}