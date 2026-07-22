import Link from "next/link";

export default function DemoCard({ demo }) {
  return (
    <article className="card demo-card">
      <span className="product-badge">Interactive</span>
      <h3>{demo.title}</h3>
      <p>{demo.desc}</p>

      <Link href={`/demo/${demo.slug}`} className="inline-cta">
        Open Demo
      </Link>
    </article>
  );
}
