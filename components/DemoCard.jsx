import Link from "next/link";

export default function DemoCard({ demo }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg">{demo.title}</h3>
      <p className="text-gray-600">{demo.desc}</p>

      <Link
        href={`/demo/${demo.slug}`}
        className="text-blue-600 mt-2 inline-block"
      >
        Try Demo →
      </Link>
    </div>
  );
}