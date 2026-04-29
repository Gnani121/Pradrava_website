import { demos } from "@/data/demos";
import Link from "next/link";

export default function DemoDetail({ params }) {
  const demo = demos.find(d => d.slug === params.slug);

  if (!demo) {
    return (
      <section className="container page-stack">
        <h1>Demo not found</h1>
        <Link href="/demo" className="inline-cta">Back to all demos</Link>
      </section>
    );
  }

  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Live Demo</p>
        <h1>{demo.title}</h1>
      </div>
      <p className="lead reveal delay-1">{demo.desc}</p>

      <div className="feature-panel reveal delay-2">
        <p>Demo UI goes here</p>
      </div>

      <Link href="/demo" className="inline-cta reveal delay-2">Back to all demos</Link>
    </section>
  );
}