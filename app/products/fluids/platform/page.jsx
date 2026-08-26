import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";
import { platformProof, automations } from "@/data/fluids";

export const metadata = {
  title: "Platform & Security | Fluids | Pradrava",
  description:
    "Several companies and branches on one system that genuinely cannot see each other's data, 13 roles and 67 permission keys, modules switched on or off per company and branch, saves that cannot be duplicated by a double-tap, deadlines with automatic escalation, full audit logging, and cloud hosting in the Mumbai region.",
  keywords: [
    "multi tenant ERP branch isolation",
    "role based access control ERP",
    "SLA escalation workflow software",
    "audit log compliance software",
    "feature toggle per branch enterprise software",
    "idempotent API writes",
    "secure cloud ERP India",
  ],
  alternates: { canonical: "/products/fluids/platform" },
};

const access = [
  {
    label: "13 roles, at three levels of reach",
    value:
      "A global support role, a company-level super administrator that spans every branch, and eleven branch-scoped roles: administrator, branch manager, accountant, sales, purchase, production, inventory, quality control, inspection, service and viewer. The list in the code and the list in the database are checked against each other automatically, so they cannot drift.",
  },
  {
    label: "Four independent authorisation axes",
    value:
      "Role, module and sub-module permission, business mode and plant capability are all evaluated and combined. All of them fail closed — an unrecognised permission is denied, not allowed.",
  },
  {
    label: "67 enforced permission keys",
    value:
      "Generated from a single source and shipped to the browser as well as enforced on the server, so the interface and the API cannot disagree about what a user may do.",
  },
  {
    label: "A disabled feature says so",
    value:
      "Turning a module off returns an explicit feature-disabled response rather than a 404 or a generic error, so a user is told they do not have it instead of being told something is broken.",
  },
  {
    label: "Session policy",
    value:
      "Cookie-based sessions with a single active session per user, a password-verified way to log out your other device, sixty-minute idle logout, and every authentication failure recorded.",
  },
];

const tenancy = [
  {
    title: "Every table declares its scope",
    desc: "All 239 tables in the database are registered against an explicit scoping axis — branch, company, location, inherited from a parent, or genuinely global. A global table has to state a reason. Continuous integration fails if a table exists without an entry.",
  },
  {
    title: "The query cannot forget",
    desc: "Database access is constructed from that registry per request, so a query is scoped by construction rather than by a developer remembering to add a filter. Architecture tests fail the build if an unscoped tenant query appears.",
  },
  {
    title: "Cross-branch is a workflow, not a leak",
    desc: "Moving stock between branches goes through requested, approved, dispatched and received states, visible to both ends. There is no other path by which one branch sees another branch's data.",
  },
  {
    title: "Row-level security as a backstop",
    desc: "Database policies sit underneath the application as a second line of defence, so a mistake at the application layer does not become a data exposure.",
  },
];

const control = [
  {
    icon: "🎛️",
    title: "Module Control Panel",
    desc: "28 top-level modules and 48 sub-modules switched on or off at global, customer or branch scope, with the more specific scope winning and inherited-versus-overridden shown clearly. Turning a parent off cascades to its children. Core modules are always on, so an administrator cannot lock everybody out.",
  },
  {
    icon: "🏭",
    title: "Plant profiles",
    desc: "Four presets — full plant, on-site production, import and fill, bulk fill — expanding into capability flags for gas sourcing, bulk storage, mandatory quality control and servicing. The company sets the ceiling; a branch may narrow it but never widen it.",
  },
  {
    icon: "⚗️",
    title: "Business mode",
    desc: "Gas only, item only, or both — enforced on writes at the line level, not merely hidden in the navigation. A disabled line type cannot be created even by an API call.",
  },
  {
    icon: "🖨️",
    title: "Print Center",
    desc: "17 document types with per-branch, per-document template configuration, section toggles, administrator-authored header and footer, a live preview and server-rendered PDF. Eight starter templates ship configured.",
  },
  {
    icon: "✉️",
    title: "Email Center",
    desc: "Sender identity and recipient routing configured per branch and per department across eleven departments, each with its own mail server settings and an enable toggle. Credentials are referenced by name and never stored in the configuration.",
  },
  {
    icon: "🎨",
    title: "Nine interface themes",
    desc: "Five dark and four light, chosen live and remembered per user. A small thing — but a shift working under plant lighting at 2am notices.",
  },
];

const sla = [
  {
    label: "30 tracked stages",
    value:
      "Events across the system — enquiry created, production queued, inspection placed on hold, refill inwarded, sales return available and twenty-five more — are emitted as tracking events rather than left implicit.",
  },
  {
    label: "Rules are data",
    value:
      "For each stage you configure which role is notified, who else is copied, the SLA in hours, how long before escalation, which role it escalates to, the priority, and whether the rule is branch-specific. All from an admin screen, with no deployment.",
  },
  {
    label: "Escalation actually fires",
    value:
      "A scheduled job promotes overdue items to the escalation role. If the nominated role has nobody staffed, it falls back to the branch manager rather than notifying no one.",
  },
  {
    label: "An inbox people will use",
    value:
      "Unread and escalated tabs, per-user read state, priority and due dates, pagination for older items, refresh on tab focus, mark-all-read, and a branch switcher for users who cover more than one site.",
  },
];

const audit = [
  "Every mutating request logged with the user and the branch",
  "Every unauthorised and forbidden response recorded, not just the successful ones",
  "Session heartbeat and duration tracked for security review",
  "Database-level change triggers with a viewer interface over the change log",
  "Quality result edits written to a separate record that nobody can go back and change",
  "Every e-way bill and IRN call recorded as an event with its response",
  "Module configuration changes audited with who changed what and when",
  "Every dunning attempt logged whether or not it was delivered",
];

const runtime = [
  { label: "Hosting", value: "Managed cloud infrastructure in the Mumbai region, with a managed PostgreSQL database. Nothing to run or patch in your plant." },
  { label: "Hardening", value: "Security headers with content security policy and strict transport security, a fail-closed cross-origin allowlist that refuses cross-origin requests in production if it is empty, and three-tier rate limiting across authentication, write and read traffic." },
  { label: "Observability", value: "Error tracking and structured logging on the server, plus error and performance monitoring in the browser, so a problem is usually seen before it is reported." },
  { label: "Reliability of writes", value: "Every write carries a key that identifies it: a retry replays the original response, and a duplicate arriving while the first is still running is rejected rather than duplicated." },
  { label: "Documentation", value: "80 written operating guides across 10 categories ship with the product, generated from the specifications and checked for freshness in continuous integration." },
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/platform" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Platform &amp; Security</h1>
        <p className="hero-subtitle">
          The part your IT person will ask about, and the reason the rest of it can be trusted.
          Isolation, permissions and correctness are structural properties here — enforced by the
          build and the database, not by developer discipline.
        </p>
      </div>

      <div className="modules-panel reveal delay-1">
        <p className="eyebrow">Four guarantees</p>
        <h2 style={{ marginBottom: "0.4rem" }}>Enforced, not intended</h2>
        <div className="proof-grid">
          {platformProof.map((p) => (
            <article key={p.title} className="proof-card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Tenancy</p>
          <h2>Multi-company and multi-branch, done properly</h2>
        </div>
        <div className="pain-grid">
          {tenancy.map((t) => (
            <article key={t.title} className="pain-card">
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Access control</p>
          <h2>Who can do what, and how it is proven</h2>
        </div>
        <dl className="spec-list">
          {access.map((a) => (
            <div key={a.label} className="spec-row">
              <dt>{a.label}</dt>
              <dd>{a.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Configuration</p>
          <h2>Change the product without changing the code</h2>
        </div>
        <div className="features-grid">
          {control.map((c) => (
            <article key={c.title} className="feature-tile">
              <div className="feature-tile-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Hand-offs</p>
          <h2>The SLA engine</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            The most common failure in a plant is not a wrong decision — it is a correct decision
            that nobody was told about. This is the part of Fluids that fixes that.
          </p>
        </div>
        <dl className="spec-list">
          {sla.map((s) => (
            <div key={s.label} className="spec-row">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Scheduled work</p>
          <h2>Eight jobs that run whether anyone remembers or not</h2>
        </div>
        <dl className="spec-list">
          {automations.map((a) => (
            <div key={a.name} className="spec-row">
              <dt>{a.name}</dt>
              <dd>{a.desc}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="modules-panel reveal delay-2">
        <h2>What gets audited</h2>
        <ul className="modules-checklist">
          {audit.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Runtime</p>
          <h2>How it is hosted and kept standing</h2>
        </div>
        <dl className="spec-list">
          {runtime.map((r) => (
            <div key={r.label} className="spec-row">
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Get Started</p>
        <h3>Send us your IT questionnaire</h3>
        <p>
          We would rather answer the security and architecture questions early than discover them
          at contract stage. Ask us anything on this page in detail.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/products/fluids" className="btn btn-ghost">← Back to Fluids</Link>
        </div>
      </div>
    </div>
  );
}
