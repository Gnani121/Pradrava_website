import { demos } from "@/data/demos";

export default function DemoDetail({ params }) {
  const demo = demos.find(d => d.slug === params.slug);

  if (!demo) return <div>Demo not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{demo.title}</h1>
      <p className="text-gray-600 mb-6">{demo.desc}</p>

      {/* Replace this with real demo */}
      <div className="border p-6 rounded">
        <p>Demo UI goes here</p>
      </div>
    </div>
  );
}