import Link from "next/link";
import Hero from "@/components/Hero";
import { products, fluidsFeatures } from "@/data/products";
import { painPoints, pillars, standards, personas, spreadsheetLimits } from "@/data/fluids";
import { demos } from "@/data/demos";
import DemoCard from "@/components/DemoCard";

export const metadata = {
  title: "Pradrava | Operations Software for Industrial Gas Plants",
  description:
    "Pradrava builds Fluids — cylinder lifecycle, sales, procurement, production, laboratory quality, dispatch and GST-correct invoicing on one set of live data. Multi-branch, ISO-grade quality records, and a compliance gate that blocks unsafe dispatch.",
  keywords: [
    "industrial gas ERP",
    "gas cylinder management software",
    "cylinder tracking software India",
    "gas plant operations software",
    "ISO 6141 certificate of analysis software",
    "GST invoicing software for gas plants",
    "cylinder rental and demurrage billing",
    "LIMS for industrial gas",
  ],
  alternates: {
    canonical: "/",
  },
};

const differentiators = [
  {
    icon: "🎯",
    title: "Built inside a working plant",
    desc: "Every screen exists because a real operation needed it — receiving inspection before spec capture, a billing watermark so rent is never double-billed, hazard classes on the storage bay. Not a generic ERP with a cylinder field added.",
  },
  {
    icon: "🧱",
    title: "You decide how much of it you take",
    desc: "28 modules and 45 sub-modules switch on or off per company and per branch. If you only fill cylinders, the item and manufacturing side genuinely is not there — not merely hidden from the menu. Start narrow and widen later, without moving your data.",
  },
  {
    icon: "🛡️",
    title: "The system stops you making the expensive mistakes",
    desc: "If a screen were ever left unprotected, it refuses to start rather than expose your data. One branch cannot see another's, because that is built into how the data is stored. And an invoice whose tax does not add up will not issue at all.",
  },
];

// The real order-to-delivery chain, each step the next desk's starting point.
const workflow = [
  { n: "01", title: "Order & quotation", desc: "An enquiry becomes a quotation, then a confirmed order — and stock is reserved the moment it is placed.", href: "/products/fluids/finance" },
  { n: "02", title: "Allocation & inventory", desc: "Cylinders are allocated with no double-claim; valves, caps and packing reserved against the order.", href: "/products/fluids/cylinder-operations" },
  { n: "03", title: "Production & filling", desc: "The refill queue records which cylinder gave gas to which, with the consumption costed.", href: "/products/fluids/production" },
  { n: "04", title: "Laboratory & quality", desc: "Gas is analysed and a certificate issued — results e-signed, instruments inside their calibration dates.", href: "/products/fluids/quality" },
  { n: "05", title: "Compliance gate", desc: "An out-of-test cylinder, or one missing its CCOE papers, is blocked before it reaches the vehicle.", href: "/products/fluids/quality" },
  { n: "06", title: "Dispatch & delivery", desc: "A challan is printed, the cylinder leaves the right bay, and delivery is confirmed with proof.", href: "/products/fluids/cylinder-operations" },
  { n: "07", title: "Invoice & accounts", desc: "A GST-correct invoice is raised from the delivery and handed to your accounts package.", href: "/products/fluids/finance" },
];

// Real screens from the running product (sample data, no customer information).
const productShots = [
  {
    src: "/screens/cylinder-360.jpg",
    alt: "Cylinder 360 showing a 128-cylinder fleet split by ownership",
    title: "Every cylinder, by who owns it and where",
    desc: "The fleet split into company stock, the customer's bottles in your plant, sold and on-rent — click any one for its full life history.",
    href: "/products/fluids/cylinder-operations",
  },
  {
    src: "/screens/certification-retest.jpg",
    alt: "Certification and retest intervals by gas service",
    title: "Test validity is built in, not a reminder",
    desc: "Hydro-test intervals by gas, and the expiry printed on every certificate — so an out-of-test bottle is caught before dispatch, never after.",
    href: "/products/fluids/quality",
  },
  {
    src: "/screens/certificate-of-analysis.jpg",
    alt: "Certificate of Analysis with ISO 6142 uncertainty budget",
    title: "Lab records an auditor will accept",
    desc: "ISO 6141 Certificates of Analysis with an ISO 6142 uncertainty budget computed per component — not a spreadsheet printout.",
    href: "/products/fluids/quality",
  },
  {
    src: "/screens/sales-invoices.jpg",
    alt: "Sales invoices with gapless numbering and payment status",
    title: "GST-correct invoices, numbered without a gap",
    desc: "Every invoice numbered without a gap per GSTIN and financial year, with due dates and payment tracked against each one.",
    href: "/products/fluids/finance",
  },
  {
    src: "/screens/plant-flow.jpg",
    alt: "Plant Flow live zone-by-zone command center",
    title: "Nothing sits idle without you knowing",
    desc: "A live zone-by-zone view of the plant that surfaces the cylinders standing still the longest — the work nobody is chasing.",
    href: "/products/fluids/production",
  },
];

export default function Home() {
  return (
    <div className="container page-stack">
      <Hero />

      {/* Trust strip */}
      <div className="trust-strip reveal">
        <span>Industrial Gas</span>
        <span>·</span>
        <span>Cylinder Fleets</span>
        <span>·</span>
        <span>Laboratory Quality</span>
        <span>·</span>
        <span>Statutory Compliance</span>
        <span>·</span>
        <span>Multi-Branch Groups</span>
      </div>

      {/* Product shot — see it running */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">See it running</p>
          <h2>The actual product, not a slide deck</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            This is the Command Center — every order, cylinder, overdue task and quality
            figure for the plant in one live view. Open the real thing with sample data.
          </p>
        </div>
        <figure className="product-hero-shot">
          <div className="shot-frame">
            <div className="shot-bar"><span /><span /><span /></div>
            <img
              src="/screens/command-center.jpg"
              alt="Fluids Command Center dashboard with live plant KPIs and a prioritised work queue"
              width={800}
              height={465}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            Live revenue, open orders, cylinders in the field and quality pass-rate — with the
            tasks that are overdue surfaced first.
          </figcaption>
        </figure>
        <div className="section-cta-row">
          <Link href="/demo" className="btn btn-primary">Book a live demo</Link>
        </div>
      </section>

      {/* The problems */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Why plants call us</p>
          <h2>Six problems that cost real money every month</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            These are the conversations we have on the first call. Each one has a specific
            answer in the product — not a dashboard that shows you the problem after it happened.
          </p>
        </div>
        <div className="pain-grid">
          {painPoints.map((p) => (
            <article key={p.problem} className="pain-card">
              <div className="pain-icon">{p.icon}</div>
              <h3>{p.problem}</h3>
              <p>{p.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* End-to-end workflow */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">How it connects</p>
          <h2>From customer order to final delivery — one connected workflow</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            No re-keying between desks. Each hand-off is the next desk's starting point, and the
            system carries the record — and the checks — all the way through.
          </p>
        </div>
        <ol className="flow-rail">
          {workflow.map((s) => (
            <li key={s.n} className="flow-step">
              <Link href={s.href} className="flow-card">
                <span className="flow-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Product screenshots grid */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">What you actually see</p>
          <h2>Real screens from the running product</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Not stock dashboards. Each screen below is live in the product, and each one does
            something a spreadsheet cannot — refuse, chase, or prove.
          </p>
        </div>
        <div className="shot-grid">
          {productShots.map((s) => (
            <article key={s.src} className="shot-card">
              <Link href={s.href} className="shot-frame shot-frame-link">
                <div className="shot-bar"><span /><span /><span /></div>
                <img src={s.src} alt={s.alt} width={800} height={398} loading="lazy" decoding="async" />
              </Link>
              <div className="shot-caption">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={s.href} className="inline-cta">Explore →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Capability pillars */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Inside Fluids</p>
          <h2>Six capability areas, one connected system</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            A sales order reserves stock, allocates cylinders, gates on quality, blocks on
            compliance, prints a challan, raises a compliant invoice and posts to your accounts.
            One chain, no re-keying.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((p) => (
            <article key={p.title} className="pillar-card">
              <div className="feature-tile-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="pillar-list">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link href={p.href} className="inline-cta">Explore {p.title}</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Standards band */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Compliance</p>
          <h2>Standards the product was built against</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Not a claim of certification — these are the frameworks the workflows, calculations
            and record formats are implemented to, so your own audit has something to stand on.
          </p>
        </div>
        <div className="standards-grid">
          {standards.map((s) => (
            <div key={s.code} className="standard-chip">
              <strong>{s.code}</strong>
              <span>{s.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Pradrava */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Why Pradrava</p>
          <h2>What makes this different from the last system you evaluated</h2>
        </div>
        <div className="pulse-grid">
          {differentiators.map((item) => (
            <article key={item.title} className="pulse-card">
              <div className="feature-tile-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Personas */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Who uses it</p>
          <h2>Every desk in the plant gets its own view</h2>
        </div>
        <div className="persona-grid">
          {personas.map((p) => (
            <article key={p.role} className="persona-card">
              <h3>{p.role}</h3>
              <p>{p.line}</p>
              <ul>
                {p.gets.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Highlight features */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Signature capabilities</p>
          <h2>The eight things people remember after the demo</h2>
        </div>
        <div className="features-grid">
          {fluidsFeatures.map((f) => (
            <article key={f.title} className="feature-tile">
              <div className="feature-tile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/products/fluids" className="btn btn-ghost">See the full module list</Link>
        </div>
      </section>

      {/* Not a spreadsheet */}
      <section className="modules-panel reveal">
        <p className="eyebrow">The difference</p>
        <h2 style={{ marginBottom: "0.6rem" }}>This is not a tracking spreadsheet with a login</h2>
        <p style={{ color: "rgba(226,232,240,0.72)", margin: 0, fontSize: "0.98rem", maxWidth: "62ch" }}>
          A spreadsheet records what already happened. It cannot refuse anything, it cannot
          chase anyone, and it cannot tell you it was wrong. Every line below is something a
          spreadsheet structurally cannot do — not something it does less prettily.
        </p>
        <div className="contrast-grid">
          {spreadsheetLimits.map((c) => (
            <article key={c.now} className="contrast-card">
              <p className="was">{c.was}</p>
              <p className="now">{c.now}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Our Products</p>
          <h2>What we build</h2>
        </div>
        <div className="card-grid">
          {products.map((p) => (
            <Link key={p.title} href={p.href} className="card service-card product-card-link">
              <div className="product-card-top">
                <span className="product-badge">{p.tag}</span>
                {p.status !== "Available" && (
                  <span className="product-status-badge">{p.status}</span>
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="inline-cta" style={{ marginTop: "1rem" }}>
                {p.status === "Available" ? "Explore" : "See where it stands"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Demos */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">See it running</p>
          <h2>Open the real product, not a slide deck</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            Demo access opens the live application with sample data, time-boxed and read-mostly,
            so you can click through the actual screens before you talk to anyone.
          </p>
        </div>
        <div className="card-grid">
          {demos.map((d) => (
            <DemoCard key={d.slug} demo={d} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-block reveal">
        <div className="section-head">
          <p className="eyebrow">Getting it live</p>
          <h2>Software this deep needs someone who knows it</h2>
        </div>
        <p className="lead">
          We migrate your masters, configure plant profile and module toggles to how your plant
          runs, connect your existing accounts package, train each role, and stay on a defined
          SLA afterwards. Eighty written operating guides ship with the product.
        </p>
        <div className="section-cta-row">
          <Link href="/services" className="btn btn-ghost">See our services</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="momentum-panel reveal">
        <p className="eyebrow">Get Started</p>
        <h3>Bring us your hardest workflow</h3>
        <p>
          Tell us the thing that currently takes three people and a WhatsApp group. We will show
          you the screen that does it, on live data, in the demo.
        </p>
        <div className="hero-actions">
          <Link href="/demo" className="btn btn-primary">Try a live demo</Link>
          <Link href="/contact?interest=fluids-demo" className="btn btn-ghost">Talk to us</Link>
        </div>
      </section>
    </div>
  );
}
