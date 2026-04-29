import { demos } from "@/data/demos";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export function generateMetadata({ params }) {
  const demo = demos.find((entry) => entry.slug === params.slug);

  if (!demo) {
    return {
      title: "Demo Not Found | Pradrava",
      description: "The requested demo page is not available.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${demo.title} | Demo | Pradrava`,
    description: demo.desc,
    keywords: [
      demo.title,
      "interactive demo",
      "guided walkthrough",
      "product showcase",
      "Pradrava",
    ],
    alternates: {
      canonical: `/demo/${demo.slug}`,
    },
  };
}

export default function DemoDetail({ params }) {
  const demo = demos.find((entry) => entry.slug === params.slug);

  if (!demo) {
    notFound();
  }

  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Interactive Demo</p>
        <h1>{demo.title}</h1>
      </div>
      <p className="lead reveal delay-1">{demo.intro}</p>

      <div className="feature-panel reveal delay-1">
        <h3>What you will see</h3>
        <p>{demo.desc}</p>
        <ul className="flow-list" style={{ marginTop: "0.9rem" }}>
          {demo.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="modules-panel reveal delay-2">
        <h2>Guided Walkthrough</h2>
        <ul className="modules-checklist">
          {demo.walkthrough.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Best For</p>
        <h3>{demo.audience}</h3>
        <p>
          Need a deeper walkthrough tailored to your workflow? Our team can guide you through
          this demo in a live session.
        </p>
        <div className="hero-actions">
          <Link href="/services" className="btn btn-primary">Talk to Our Team</Link>
          <Link href={demo.relatedPath} className="btn btn-ghost">{demo.relatedLabel}</Link>
          <Link href="/demo" className="btn btn-ghost">Back to All Demos</Link>
        </div>
      </div>
    </section>
  );
}