import Link from "next/link";
import FluidsSubNav from "@/components/FluidsSubNav";
import { standards } from "@/data/fluids";

export const metadata = {
  title: "Quality & Compliance | Fluids",
  description:
    "A laboratory information system inside your gas ERP: ISO 6141 Certificates of Analysis, ISO 6142 measurement uncertainty, ISO/IEC 17025 analyzer calibration, ISO 2859-1 AQL sampling, SPC control charts, NCR and CAPA, and e-signed results with an append-only audit trail.",
  keywords: [
    "ISO 6141 certificate of analysis software",
    "ISO 6142 measurement uncertainty",
    "ISO 17025 calibration register software",
    "LIMS for gas quality testing",
    "AQL sampling plan ISO 2859-1 software",
    "NCR CAPA quality management software",
    "SPC control chart manufacturing",
  ],
  alternates: { canonical: "/products/fluids/quality" },
};

const capabilities = [
  {
    icon: "📜",
    title: "Certificate of Analysis — ISO 6141",
    desc: "Issue a certificate against the standard your customers audit you on, with a registry of every certificate issued and the payload preserved as it was signed. Not a Word template with the numbers pasted in.",
  },
  {
    icon: "📐",
    title: "Measurement Uncertainty — ISO 6142",
    desc: "Expanded uncertainty at k=2 calculated per component of the mixture, attached to the certificate. The number your customer's quality department will ask for, computed rather than quoted.",
  },
  {
    icon: "🔬",
    title: "Analyzer Register — ISO/IEC 17025",
    desc: "Every analyzer registered with its calibration history and validity window. A result recorded on an out-of-calibration instrument is caught, and due dates raise alerts before they expire.",
  },
  {
    icon: "🧾",
    title: "Calibration Certificates You Can Print",
    desc: "Record what the instrument read before and after adjustment, point by point, against the reference you used. The pass or fail is worked out from the readings, not ticked — a calibration with no readings cannot pass — and the finalised record prints as a calibration certificate on your letterhead.",
  },
  {
    icon: "🔗",
    title: "Traceability You Can Walk",
    desc: "Every reference standard carries its route back to a national standard: a bought-in certificate traceable to NPL India or NIST, or one of your own certified cylinders traced through its certificate, its weighed batch and the balance it was weighed on. Any missing link is named, never hidden.",
  },
  {
    icon: "⚖️",
    title: "Gravimetric Blending — ISO 6142",
    desc: "Make calibration mixtures by weight. Each addition is weighed on a calibrated balance, purity is applied, and the mole fraction and its uncertainty are worked out as you go — so a wrong addition shows up before the cylinder is finished. The certificate then quotes the prepared composition beside the analysed one.",
  },
  {
    icon: "⏳",
    title: "Retest Dates and Shelf Life",
    desc: "Set the hydrostatic retest interval once per gas service and the next due date is worked out for the whole fleet. Each mixture's shelf life gives every certificate an expiry, and QC and the branch manager are told before a cylinder falls due or a mixture expires. Gas made for your own use is kept out of it.",
  },
  {
    icon: "📬",
    title: "Reminders to Your Customers' Instruments",
    desc: "If you calibrate instruments for clients, register them against the customer who owns them. When one comes due, the customer is sent one letter listing everything of theirs that needs re-certifying.",
  },
  {
    icon: "✍️",
    title: "Electronic Signature and Audit",
    desc: "Analyst signs, reviewer countersigns. Every edit to a result after entry is written to a separate audit table that the application cannot rewrite. Test methods are versioned, so you know which SOP a two-year-old result was produced under.",
  },
  {
    icon: "📊",
    title: "SPC and Trend",
    desc: "Control charts and stability trending over your own results, so drift is visible as drift rather than as a run of individually acceptable numbers.",
  },
  {
    icon: "🎯",
    title: "AQL Sampling — ISO 2859-1",
    desc: "39 sampling plans seeded — inspection level II, normal severity, single sampling, AQL 1.0, 2.5 and 4.0, code letters A through N — applied to production lots with accept and reject numbers computed for the lot size. Replaceable with your own QA standard.",
  },
  {
    icon: "🚫",
    title: "NCR and CAPA",
    desc: "Non-conformances raised manually or automatically from receiving and inspection, with root cause, disposition, corrective action and closure. They feed the vendor scorecard, so a supplier's quality shows up in their next evaluation.",
  },
  {
    icon: "📈",
    title: "Quality Economics",
    desc: "Cost of quality, first-pass yield and defect Pareto — the numbers that turn a quality argument into a financial one.",
  },
];

const testDetail = [
  { label: "Components", value: "Declared and measured concentration per component of the mixture, with tolerance." },
  { label: "Impurities", value: "Impurity limits and measured values, recorded against the specification the customer bought." },
  { label: "Physical", value: "Physical property measurements captured alongside the compositional analysis." },
  { label: "Stability", value: "Stability observations supporting shelf life and re-test intervals." },
  { label: "Compliance", value: "Explicit pass or fail against the applicable specification, not left to interpretation." },
  { label: "Instruments used", value: "Which analyzers produced the result, so calibration validity can be checked against the test date." },
];

const gates = [
  {
    title: "A failed test raises work, not an email",
    desc: "A failed quality check automatically raises a rework production job and creates a child re-test that carries a reference to its parent, so the chain from failure to resolution is a record rather than a memory.",
  },
  {
    title: "Receiving inspection auto-raises NCRs",
    desc: "Goods received that fail inspection raise a non-conformance without anyone remembering to. The vendor's scorecard reflects it at the next period close.",
  },
  {
    title: "Final inspection gates dispatch",
    desc: "The pre-dispatch inspection captures photographic evidence and annotated defects, and its result drives the dispatch-readiness board — ready, partial or blocked.",
  },
  {
    title: "Instrument data can come straight from the instrument",
    desc: "Results can be batch-imported from analyzer output with a review-and-apply step, tagged by source. The endpoint already accepts PLC and SCADA sourced data for when you connect the floor.",
  },
];

export default function Page() {
  return (
    <div className="container page-stack">
      <FluidsSubNav current="/products/fluids/quality" />

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids capability</p>
        <h1 className="hero-title">Quality &amp; Compliance</h1>
        <p className="hero-subtitle">
          This is the part of Fluids that surprises people. It is not a quality checkbox on a
          dispatch screen — it is a laboratory information system with certificates, uncertainty
          calculation, calibration control, sampling plans and an audit trail, sitting inside the
          same system as your orders and your invoices.
        </p>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>The test it has to pass</h3>
        <p>
          A customer's quality department rejects your certificate. An auditor asks which
          instrument produced a result from eighteen months ago and whether it was in
          calibration that day. A specification changes and you need to know which lots were
          released under the old one. If your answer to any of those is a folder and a phone
          call, this is the module that changes it.
        </p>
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Standards</p>
          <h2>Implemented to, not merely mentioned</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            These are the frameworks the calculations and record formats follow. Certification
            is yours to hold — this gives your audit something to stand on.
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
      </div>

      <div className="section-block reveal delay-1">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Capabilities</p>
          <h2>What the lab module actually does</h2>
        </div>
        <div className="features-grid">
          {capabilities.map((c) => (
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
          <p className="eyebrow">Test record</p>
          <h2>Six detail sets behind every gas quality test</h2>
        </div>
        <dl className="spec-list">
          {testDetail.map((t) => (
            <div key={t.label} className="spec-row">
              <dt>{t.label}</dt>
              <dd>{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="section-block reveal delay-2">
        <div className="section-head" style={{ marginBottom: "1.2rem" }}>
          <p className="eyebrow">Consequence</p>
          <h2>Quality results change what happens next</h2>
          <p className="lead" style={{ marginTop: "0.9rem" }}>
            A result that only lands in a report is a filing exercise. In Fluids a result moves
            the operation.
          </p>
        </div>
        <div className="pain-grid">
          {gates.map((g) => (
            <article key={g.title} className="pain-card">
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Next</p>
        <h3>See how a compliant invoice comes out the other end</h3>
        <p>
          Passing quality is one gate. Correct GST on the document and gapless numbering are the next.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids/finance" className="btn btn-primary">Finance &amp; GST →</Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>
    </div>
  );
}
