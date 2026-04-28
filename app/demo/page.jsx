import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export default function DemoPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Demo Platform</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {demos.map((d, i) => (
          <DemoCard key={i} demo={d} />
        ))}
      </div>
    </div>
  );
}