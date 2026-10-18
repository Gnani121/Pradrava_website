import Link from "next/link";
import PriceEstimator from "@/components/PriceEstimator";
import {
  bands,
  bundles,
  tiers,
  services,
  supportPlans,
  pricingFaq,
  implementationPackages,
  bundlePrice,
  approx,
  gstNote,
  inr,
  launchOffer,
  offerOpen,
  offerAppliesTo,
} from "@/data/pricing";

// Re-render daily so the launch offer disappears on its own after it closes.
export const revalidate = 86400;

export const metadata = {
  title: "Pricing | Fluids",
  description:
    "Fluids pricing for industrial gas plants: cloud subscriptions from about ₹10,400 per branch a month, eight bundles, four plant sizes, and three ways to pay — cloud, dedicated database or a one-time licence. Approximate starting prices, GST excluded.",
  keywords: [
    "gas cylinder software price India",
    "gas plant software cost",
    "cylinder management software price",
    "gas cylinder billing software price",
    "industrial gas ERP pricing",
    "gas plant software subscription cost",
  ],
  alternates: { canonical: "/pricing" },
};

const liveFaq = () => pricingFaq.filter((f) => !f.offer || offerOpen());

const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: liveFaq().map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const smallest = bands[0];
const lakh = (n) => `₹${+(n / 100000).toFixed(1)} lakh`;

export default function PricingPage() {
  const offer = offerOpen();
  const offerPct = Math.round(launchOffer.pct * 100);
  return (
    <div className="container page-stack">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Pricing</p>
        <h1 className="hero-title">Priced by the size of your plant</h1>
        <p className="hero-subtitle">
          Choose how much of Fluids you need, how big your operation is, and how you want to pay.
          Cloud subscriptions start at about {inr(approx(bundlePrice(bundles[0], smallest, "shared")))} per
          branch a month.
        </p>
        <p className="pricing-disclaimer">
          These are approximate starting prices so you can see whether Fluids fits your budget. Your
          final figure comes in a written quote. {gstNote}
        </p>
      </div>

      {offer && (
        <div className="offer-banner reveal" role="region" aria-label={launchOffer.name}>
          <div>
            <p className="offer-eyebrow">{launchOffer.name} · until {launchOffer.endsLabel}</p>
            <h2>{offerPct}% off your first year on the cloud subscription</h2>
            <p>
              Sign a Fluids cloud subscription by {launchOffer.endsLabel} and the first year costs{" "}
              {offerPct}% less — any bundle, any size. It replaces the 10% annual-prepayment
              discount rather than adding to it. Implementation and services are priced as usual.
            </p>
          </div>
          <Link href="/contact?interest=launch-offer&source=pricing-offer" className="btn btn-primary">
            Claim the offer
          </Link>
        </div>
      )}

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Three ways to pay</p>
          <h2>Rent it, run it on your own database, or buy it outright</h2>
        </div>
        <div className="pricing-grid">
          {tiers.map((t) => (
            <article key={t.id} className={`plan-card${t.id === "shared" ? " plan-card-highlight" : ""}`}>
              {t.id === "shared" && <span className="plan-badge">Most plants start here</span>}
              <h2>{t.name}</h2>
              <p className="plan-tagline">{t.desc}</p>
              <div className="plan-price">
                <span className="plan-from">from</span>
                {offerAppliesTo(t.id) ? (
                  <>
                    <s className="plan-was">{inr(approx(bundlePrice(bundles[0], smallest, t.id)))}</s>
                    <strong>{inr(approx(bundlePrice(bundles[0], smallest, t.id) * (1 - launchOffer.pct)))}</strong>
                  </>
                ) : (
                  <strong>{inr(approx(bundlePrice(bundles[0], smallest, t.id)))}</strong>
                )}
                <span>{t.short}</span>
              </div>
              {offerAppliesTo(t.id) && (
                <p className="plan-offer">{launchOffer.name}: {offerPct}% off the first year, until {launchOffer.endsLabel}</p>
              )}
              <p className="plan-meta">{t.billing}</p>
              <p className="plan-meta">Best for: {t.bestFor}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Price list</p>
          <h2>Eight bundles, four sizes</h2>
          <p className="lead">
            Each bundle includes everything in the ones before it. Pick your size and way of paying to
            see the price, then work out a figure for your own plant.
          </p>
        </div>
        <PriceEstimator />
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Sizes</p>
          <h2>Which size are you?</h2>
        </div>
        <div className="features-grid">
          {bands.map((b) => (
            <article key={b.id} className="feature-tile">
              <h3>{b.name}</h3>
              <p>{b.who}</p>
              <p><strong>{b.cylinders}</strong> · {b.users} users included · extra user {inr(b.extraUser)}/month</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Implementation</p>
          <h2>Getting you live</h2>
          <p className="lead">
            A one-time package by the size of your plant, paid in stages from signing to go-live:{" "}
            {bands.map((b, i) => (
              <span key={b.id}>
                {i > 0 && (i === bands.length - 1 ? " and " : ", ")}
                {b.name.toLowerCase()} {implementationPackages[b.id] ? `about ${lakh(implementationPackages[b.id])}` : "quoted after a site visit"}
              </span>
            ))}
            . The services below are what a package is built from; anything beyond it is charged at these rates.
          </p>
        </div>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">What it covers</th>
                <th scope="col" className="num">From</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.name}>
                  <td><strong>{s.name}</strong></td>
                  <td>{s.note}</td>
                  <td className="num">{inr(s.price)}{s.unit ? ` ${s.unit}` : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Support</p>
          <h2>Support and maintenance</h2>
        </div>
        <div className="pricing-two">
          {supportPlans.map((p) => (
            <div key={p.name} className="feature-panel">
              <h3>{p.name}</h3>
              <p><strong>Response:</strong> {p.response}</p>
              <p><strong>Cloud or dedicated subscription:</strong> {p.subscription}</p>
              <p><strong>One-time licence:</strong> {p.perpetual}</p>
              <p style={{ marginTop: "0.6rem" }}>{p.covers}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">FAQ</p>
          <h2>Questions about pricing</h2>
        </div>
        <div className="faq-list">
          {liveFaq().map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p className="faq-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See it on a real plant before you decide</h3>
        <p>
          Try the live demo, or tell us your branches, users and number of cylinders and we will send
          a written quote.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Try a live demo</Link>
          <Link href="/contact?interest=pricing-quote" className="btn btn-ghost">Ask for a quote</Link>
        </div>
      </div>
    </div>
  );
}
