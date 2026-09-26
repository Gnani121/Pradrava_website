import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services",
  description:
    "Implementation, master data migration, workflow and module configuration, integration with your existing accounts package and GSP, role-based training backed by 80 written operating guides, custom modules, and support on defined SLAs.",
  keywords: [
    "ERP implementation services India",
    "master data migration industrial software",
    "GST GSP integration services",
    "operations workflow consulting",
    "enterprise software support SLA",
  ],
  alternates: { canonical: "/services" },
};

const rollout = [
  {
    n: "01",
    title: "Discover",
    desc: "We walk your plant and map how it actually runs — not how the org chart says it does.",
    items: [
      "Which sale types you use: full sale, gas-only refill, rental, quality check, service",
      "Whether you produce, import, or fill from bulk — this sets your plant profile",
      "How your branches and GSTINs relate, and what must never cross between them",
      "The workflows that currently live in a WhatsApp group",
    ],
  },
  {
    n: "02",
    title: "Migrate",
    desc: "Your real data goes in before anyone logs in, so day one is not a data-entry exercise.",
    items: [
      "Customers, vendors, gas compositions, capacities and product masters",
      "Cylinder serials with their tested dates, next test due and CCOE details",
      "Price lists loaded into the price book with tier and quantity bands",
      "Opening stock positions reconciled into the inventory ledger",
    ],
  },
  {
    n: "03",
    title: "Configure",
    desc: "Almost everything that matters is configuration, and we set it with your team in the room.",
    items: [
      "Plant profile, business mode and the module toggles per branch",
      "Roles assigned, with the permission set reviewed against who actually approves what",
      "Notification routing, SLA hours and escalation roles per stage hand-off",
      "Document series per GSTIN, print templates, and department email routing",
    ],
  },
  {
    n: "04",
    title: "Connect",
    desc: "The systems you already run stay in place.",
    items: [
      "Accounts hand-off configured against your existing package",
      "GSP connection for e-way bills, and IRN when you go live on e-invoicing",
      "Sales mailbox ingestion if you want enquiries pulled in automatically",
      "Anything else through a documented connection your own systems can use",
    ],
  },
  {
    n: "05",
    title: "Train",
    desc: "Each role learns its own screens, not a generic tour of the whole system.",
    items: [
      "Separate sessions for store, filling, lab, sales, purchase and accounts",
      "80 written operating guides across 10 categories ship with the product",
      "Kiosk and scanner setup for shop-floor staff who never touch a laptop",
      "An administrator session on the control panel, so you can change things yourself",
    ],
  },
  {
    n: "06",
    title: "Support and extend",
    desc: "The first month always finds something. That is expected, and it is included.",
    items: [
      "Named contact with agreed response times",
      "Configuration adjustments once real volume has run through",
      "Error and performance monitoring, so we often see an issue before you report it",
      "Custom modules built inside the same separation, permissions and record-keeping model",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Professional Services</p>
        <h1>Software this deep needs someone who knows it</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          Fluids has 28 modules, 13 roles and several hundred configuration decisions behind it.
          Handing you a login and a manual would be a poor way to start. We migrate your data,
          set the configuration to how your plant runs, connect what you already use, train each
          role separately, and stay on a defined SLA afterwards.
        </p>
      </div>

      <div className="card-grid reveal delay-1">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">How we work</p>
          <h2>Six stages from first call to steady state</h2>
        </div>
        <div className="flow-grid">
          {rollout.map((s) => (
            <div key={s.n} className="flow-card">
              <div className="step-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="flow-list">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="feature-panel reveal delay-2">
        <h3>What we will tell you honestly</h3>
        <p>
          Not every plant needs every module, and a rollout that switches everything on at once
          usually stalls. We will tell you which parts to start with, which to leave off until the
          first ones are habit, and where your current process is genuinely fine and does not need
          replacing. A shorter first phase that actually gets used beats a complete one that does
          not.
        </p>
      </div>

      <div className="momentum-panel reveal delay-2" style={{ marginTop: "2rem" }}>
        <p className="eyebrow">Have a specific need?</p>
        <h3>Let us talk about your setup</h3>
        <p>
          Whether you are starting fresh, replacing a system that no longer fits, or adding
          branches to an existing deployment — we will design the right engagement for it.
        </p>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <Link href="/contact" className="btn btn-primary">Contact us</Link>
          <Link href="/products/fluids" className="btn btn-ghost">Explore Fluids</Link>
        </div>
      </div>
    </div>
  );
}
