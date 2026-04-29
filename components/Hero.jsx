import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <p className="eyebrow">Engineering + Intelligence</p>
      <h1 className="hero-title">End-to-end IT, AI and cloud solutions</h1>
      <p className="hero-subtitle">
        Build, scale and transform your business with products and platforms designed
        for reliability, speed and measurable impact.
      </p>

      <div className="hero-actions">
        <Link href="/demo" className="btn btn-primary">
          Request Demo
        </Link>
        <Link href="/services" className="btn btn-ghost">
          Explore Services
        </Link>
      </div>
    </section>
  );
}