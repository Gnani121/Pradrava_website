"use client";

import { useRef, useState } from "react";

/* =====================================================================
   Pradrava poster set — Fluids.
   Six A-series posters (1000 × 1414, √2 ratio) rendered as inline SVG so
   they stay crisp at any size and download as vector.
   Every number on them is measured from the live product.
   ===================================================================== */

const W = 1000;
const H = 1414;

const SANS = "'Plus Jakarta Sans', 'Segoe UI', Helvetica, Arial, sans-serif";
const DISPLAY = "'Sora', 'Plus Jakarta Sans', 'Segoe UI', Helvetica, Arial, sans-serif";

/* Shared background: deep navy with two brand orbs. */
function Backdrop({ id, a = "#4f46e5", b = "#06b6d4", base = "#070c1a" }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-o1`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={a} stopOpacity="0.55" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-o2`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={b} stopOpacity="0.45" />
          <stop offset="100%" stopColor={b} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-txt`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
        <linearGradient id={`${id}-rule`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={base} />
      <circle cx="120" cy="140" r="520" fill={`url(#${id}-o1)`} />
      <circle cx="920" cy="1180" r="560" fill={`url(#${id}-o2)`} />
      <rect
        x="44"
        y="44"
        width={W - 88}
        height={H - 88}
        rx="26"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
      />
    </>
  );
}

function Eyebrow({ text, y = 150, fill = "#7dd3fc" }) {
  return (
    <text
      x="96"
      y={y}
      fill={fill}
      fontFamily={SANS}
      fontSize="21"
      fontWeight="800"
      letterSpacing="4.4"
    >
      {text}
    </text>
  );
}

function Footer({ id, line = "pradrava.com/products/fluids" }) {
  return (
    <>
      <rect x="96" y={H - 168} width={W - 192} height="1" fill="rgba(255,255,255,0.16)" />
      <text
        x="96"
        y={H - 116}
        fill="#ffffff"
        fontFamily={DISPLAY}
        fontSize="30"
        fontWeight="800"
        letterSpacing="-0.6"
      >
        PRADRAVA
        <tspan fill={`url(#${id}-rule)`}> · FLUIDS</tspan>
      </text>
      <text
        x={W - 96}
        y={H - 116}
        textAnchor="end"
        fill="rgba(226,232,240,0.62)"
        fontFamily={SANS}
        fontSize="20"
        fontWeight="600"
      >
        {line}
      </text>
    </>
  );
}

/* Wrap long copy without measuring text: caller supplies the lines. */
function Copy({ lines, x = 96, y, size = 26, fill = "rgba(226,232,240,0.78)", lh = 40, weight = 500 }) {
  return (
    <text x={x} y={y} fill={fill} fontFamily={SANS} fontSize={size} fontWeight={weight}>
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : lh}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

/* ── 1. Alerts ─────────────────────────────────────────────── */
function PosterSla() {
  const id = "p1";
  const ladder = [
    { t: "Now", l: "Gas test fails", c: "#f87171" },
    { t: "Late", l: "Production told", c: "#fbbf24" },
    { t: "Later", l: "Manager told", c: "#7dd3fc" },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An owner for every step in your plant">
      <Backdrop id={id} />
      <Eyebrow text="ALERTS · REMINDERS" />

      <text
        x="96"
        y="470"
        fill={`url(#${id}-txt)`}
        fontFamily={DISPLAY}
        fontSize="300"
        fontWeight="800"
        letterSpacing="-14"
      >
        1
      </text>
      <text x="96" y="560" fill="#ffffff" fontFamily={DISPLAY} fontSize="62" fontWeight="700" letterSpacing="-1.6">
        owner for every
      </text>
      <text x="96" y="628" fill="#ffffff" fontFamily={DISPLAY} fontSize="62" fontWeight="700" letterSpacing="-1.6">
        step in your plant.
      </text>

      <Copy
        y="712"
        lines={[
          "Every hand-off in the plant gets an owner and a time to be",
          "done by. When it waits too long, their manager is told.",
        ]}
      />

      {/* escalation ladder */}
      <g transform="translate(96, 880)">
        <rect x="0" y="0" width={W - 192} height="230" rx="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <text x="36" y="52" fill="rgba(226,232,240,0.55)" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
          WHEN A GAS TEST FAILS
        </text>
        {ladder.map((s, i) => (
          <g key={s.t} transform={`translate(${36 + i * 250}, 96)`}>
            <circle cx="14" cy="14" r="13" fill="none" stroke={s.c} strokeWidth="3" />
            <circle cx="14" cy="14" r="5" fill={s.c} />
            {i < ladder.length - 1 && (
              <rect x="34" y="12" width="196" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
            )}
            <text x="0" y="76" fill={s.c} fontFamily={DISPLAY} fontSize="40" fontWeight="800" letterSpacing="-1">
              {s.t}
            </text>
            <text x="0" y="112" fill="rgba(226,232,240,0.72)" fontFamily={SANS} fontSize="20" fontWeight="600">
              {s.l}
            </text>
          </g>
        ))}
      </g>

      <Copy
        y="1206"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={["Not one line of it is written in code. You change it on a Tuesday afternoon."]}
      />
      <Footer id={id} line="pradrava.com/products/fluids/notifications" />
    </svg>
  );
}

/* ── 2. The compliance gate ────────────────────────────────────────── */
function PosterGate() {
  const id = "p2";
  const blocks = [
    "Hydro-test date has passed",
    "No CCOE / PESO licence on file",
    "Final inspection not passed",
    "Flammable gas, inert-only bay",
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="No — the compliance gate">
      <Backdrop id={id} a="#b45309" b="#f59e0b" base="#0a0704" />
      <Eyebrow text="COMPLIANCE GATE" fill="#fbbf24" />

      <text
        x="96"
        y="520"
        fill="#ffffff"
        fontFamily={DISPLAY}
        fontSize="290"
        fontWeight="800"
        letterSpacing="-12"
      >
        NO.
      </text>

      <text x="96" y="620" fill="#fbbf24" fontFamily={DISPLAY} fontSize="52" fontWeight="700" letterSpacing="-1.2">
        A word your dispatch
      </text>
      <text x="96" y="682" fill="#fbbf24" fontFamily={DISPLAY} fontSize="52" fontWeight="700" letterSpacing="-1.2">
        screen has never said.
      </text>

      <Copy
        y="770"
        lines={[
          "A spreadsheet will let you send out a cylinder whose test",
          "expired in March. It has no opinion. Fluids refuses — at the",
          "gate, before the bottle reaches the vehicle.",
        ]}
      />

      <g transform="translate(96, 886)">
        {blocks.map((b, i) => (
          <g key={b} transform={`translate(0, ${i * 74})`}>
            <rect x="0" y="0" width={W - 192} height="58" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(245,158,11,0.28)" />
            <g transform="translate(24, 15)">
              <circle cx="14" cy="14" r="13" fill="none" stroke="#f87171" strokeWidth="3" />
              <path d="M7 7 L21 21 M21 7 L7 21" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
            </g>
            <text x="76" y="37" fill="rgba(255,255,255,0.88)" fontFamily={SANS} fontSize="24" fontWeight="600">
              {b}
            </text>
            <text x={W - 216} y="37" textAnchor="end" fill="#fbbf24" fontFamily={SANS} fontSize="19" fontWeight="800" letterSpacing="2.4">
              BLOCKED
            </text>
          </g>
        ))}
      </g>

      <Copy
        y="1206"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={["A hard block, not a warning banner someone has learned to click past."]}
      />
      <Footer id={id} line="pradrava.com/products/fluids/cylinder-operations" />
    </svg>
  );
}

/* ── 3. Cylinder lifecycle ring ────────────────────────────────────── */
function PosterCylinder() {
  const id = "p3";
  const stops = [
    "Received", "Inspected", "Allocated", "Filled", "Tested",
    "Certified", "Dispatched", "Delivered", "Returned", "Serviced",
  ];
  const cx = 500;
  const cy = 828;
  const r = 228;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Every cylinder has a story">
      <Backdrop id={id} a="#0ea5e9" b="#06b6d4" />
      <Eyebrow text="CYLINDER LIFECYCLE" />

      <text x="96" y="278" fill="#ffffff" fontFamily={DISPLAY} fontSize="78" fontWeight="800" letterSpacing="-2.4">
        Every cylinder
      </text>
      <text x="96" y="358" fill={`url(#${id}-txt)`} fontFamily={DISPLAY} fontSize="78" fontWeight="800" letterSpacing="-2.4">
        has a story.
      </text>
      <Copy
        y="424"
        size="25"
        lines={["Who filled it, who tested it, who holds it, how long it has been idle,"]}
      />
      <Copy y="458" size="25" lines={["and what it is worth. One screen. Any bottle. Any date."]} />

      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r - 54} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />

      {stops.map((s, i) => {
        const ang = (i / stops.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(ang) * r;
        const y = cy + Math.sin(ang) * r;
        const lx = cx + Math.cos(ang) * (r + 54);
        const ly = cy + Math.sin(ang) * (r + 54);
        const anchor = Math.abs(Math.cos(ang)) < 0.25 ? "middle" : Math.cos(ang) > 0 ? "start" : "end";
        return (
          <g key={`${s}-${i}`}>
            <circle cx={x} cy={y} r="11" fill="#06b6d4" />
            <circle cx={x} cy={y} r="19" fill="none" stroke="rgba(6,182,212,0.35)" strokeWidth="2" />
            <text
              x={lx}
              y={ly + 7}
              textAnchor={anchor}
              fill="rgba(226,232,240,0.86)"
              fontFamily={SANS}
              fontSize="22"
              fontWeight="700"
            >
              {s}
            </text>
          </g>
        );
      })}

      <text x={cx} y={cy - 16} textAnchor="middle" fill="#ffffff" fontFamily={DISPLAY} fontSize="92" fontWeight="800" letterSpacing="-3">
        360°
      </text>
      <text x={cx} y={cy + 30} textAnchor="middle" fill="rgba(226,232,240,0.6)" fontFamily={SANS} fontSize="21" fontWeight="700" letterSpacing="2.4">
        TRACE PASSPORT
      </text>

      <Copy
        y="1206"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={["Assembled from every module at once — not stitched together from four reports."]}
      />
      <Footer id={id} line="pradrava.com/products/fluids/cylinder-operations" />
    </svg>
  );
}

/* ── 4. GST ─────────────────────────────────────────────── */
function PosterTax() {
  const id = "p4";
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GST right on every invoice">
      <Backdrop id={id} a="#4338ca" b="#0ea5e9" />
      <Eyebrow text="INDIA GST" />

      <text x="96" y="300" fill="#ffffff" fontFamily={DISPLAY} fontSize="70" fontWeight="800" letterSpacing="-2">
        GST right
      </text>
      <text x="96" y="378" fill="#ffffff" fontFamily={DISPLAY} fontSize="70" fontWeight="800" letterSpacing="-2">
        on every invoice.
      </text>
      <text x="96" y="456" fill={`url(#${id}-txt)`} fontFamily={DISPLAY} fontSize="70" fontWeight="800" letterSpacing="-2">
        First time.
      </text>

      <Copy
        y="536"
        lines={[
          "Worked out from the two states involved, so the customer",
          "gets the right split without anyone checking by hand.",
        ]}
      />

      {/* two panels agreeing */}
      <g transform="translate(96, 640)">
        {[
          { t: "SAME STATE", v: "CGST + SGST", s: "split equally" },
          { t: "OTHER STATE", v: "IGST", s: "one line, full rate" },
        ].map((p, i) => (
          <g key={p.t} transform={`translate(${i * 424}, 0)`}>
            <rect x="0" y="0" width="384" height="212" rx="20" fill="rgba(255,255,255,0.06)" stroke="rgba(125,211,252,0.28)" />
            <text x="32" y="52" fill="rgba(226,232,240,0.55)" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
              {p.t}
            </text>
            <text x="32" y="132" fill="#ffffff" fontFamily={DISPLAY} fontSize="44" fontWeight="800" letterSpacing="-1.2">
              {p.v}
            </text>
            <text x="32" y="172" fill="rgba(226,232,240,0.6)" fontFamily={SANS} fontSize="21" fontWeight="600">
              {p.s}
            </text>
          </g>
        ))}
        <g transform="translate(384, 92)">
          <circle cx="20" cy="20" r="19" fill="#0b1220" stroke="rgba(125,211,252,0.5)" strokeWidth="2" />
          <text x="20" y="29" textAnchor="middle" fill="#7dd3fc" fontFamily={DISPLAY} fontSize="24" fontWeight="800">
            or
          </text>
        </g>
      </g>

      <g transform="translate(96, 900)">
        <rect x="0" y="0" width={W - 192} height="180" rx="20" fill="rgba(248,113,113,0.09)" stroke="rgba(248,113,113,0.3)" />
        <text x="32" y="54" fill="#f87171" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
          AND IF SOMETHING DOES NOT ADD UP
        </text>
        <text x="32" y="112" fill="#ffffff" fontFamily={DISPLAY} fontSize="40" fontWeight="700" letterSpacing="-1">
          The invoice does not issue.
        </text>
        <text x="32" y="152" fill="rgba(226,232,240,0.7)" fontFamily={SANS} fontSize="22" fontWeight="500">
          Nor does one whose customer state is missing.
        </text>
      </g>

      <Copy
        y="1172"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={[
          "Invoice numbers that never skip, branch by branch and year by year.",
          "Every invoice right when it is raised, not fixed in a month of reconciliation.",
        ]}
        lh={34}
      />
      <Footer id={id} line="pradrava.com/products/fluids/finance" />
    </svg>
  );
}

/* ── 5. Order to cash ──────────────────────────────────────────────── */
function PosterChain() {
  const id = "p5";
  const steps = [
    "Enquiry", "Quotation", "Sales order", "Reservation", "Cylinder allocation",
    "Filling", "Quality test", "Final inspection", "Compliance gate",
    "Dispatch", "Proof of delivery", "GST invoice", "E-way bill", "Accounts",
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fourteen steps, nothing re-keyed">
      <Backdrop id={id} a="#4f46e5" b="#22d3ee" />
      <Eyebrow text="ORDER TO CASH" />

      <text x="96" y="272" fill="#ffffff" fontFamily={DISPLAY} fontSize="82" fontWeight="800" letterSpacing="-2.6">
        Fourteen steps.
      </text>
      <text x="96" y="356" fill={`url(#${id}-txt)`} fontFamily={DISPLAY} fontSize="82" fontWeight="800" letterSpacing="-2.6">
        Nothing re-keyed.
      </text>

      <Copy
        y="424"
        size="25"
        lines={["From the first phone call to the voucher in your accounts system,"]}
      />
      <Copy y="458" size="25" lines={["typed once and carried the whole way."]} />

      <g transform="translate(120, 516)">
        <rect x="13" y="10" width="4" height={steps.length * 46 - 32} fill={`url(#${id}-rule)`} opacity="0.55" />
        {steps.map((s, i) => (
          <g key={s} transform={`translate(0, ${i * 46})`}>
            <circle cx="15" cy="13" r="14" fill="#070c1a" stroke={`url(#${id}-rule)`} strokeWidth="3" />
            <circle cx="15" cy="13" r="5" fill="#22d3ee" />
            <text x="56" y="21" fill="rgba(255,255,255,0.9)" fontFamily={SANS} fontSize="25" fontWeight="600">
              {s}
            </text>
            <text
              x={W - 240}
              y="21"
              textAnchor="end"
              fill="rgba(226,232,240,0.35)"
              fontFamily={DISPLAY}
              fontSize="20"
              fontWeight="800"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </g>

      <Copy
        y="1206"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={["Procure to pay is the other chain — requisition to vendor payment, eleven steps."]}
      />
      <Footer id={id} />
    </svg>
  );
}

/* ── 6. Rental billing ─────────────────────────────────────────────── */
function PosterRent() {
  const id = "p6";
  const days = Array.from({ length: 28 }, (_, i) => i);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rent that bills itself">
      <Backdrop id={id} a="#7c3aed" b="#06b6d4" />
      <Eyebrow text="RENTAL · DEMURRAGE · DEPOSITS" />

      <text x="96" y="290" fill="#ffffff" fontFamily={DISPLAY} fontSize="84" fontWeight="800" letterSpacing="-2.6">
        Rent that
      </text>
      <text x="96" y="376" fill={`url(#${id}-txt)`} fontFamily={DISPLAY} fontSize="84" fontWeight="800" letterSpacing="-2.6">
        bills itself.
      </text>

      <Copy
        y="452"
        lines={[
          "Rent starts after the free period and is billed monthly",
          "and on return, so the same day is never billed twice,",
          "and never quietly skipped.",
        ]}
      />

      {/* day strip */}
      <g transform="translate(96, 640)">
        <text x="0" y="0" fill="rgba(226,232,240,0.55)" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
          GRACE PERIOD
        </text>
        <text x="352" y="0" fill="#a78bfa" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
          ACCRUING
        </text>
        <text x={W - 192} y="0" textAnchor="end" fill="#22d3ee" fontFamily={SANS} fontSize="18" fontWeight="800" letterSpacing="3">
          BILLED TO HERE
        </text>
        {days.map((d) => {
          const grace = d < 10;
          const billed = d >= 10 && d < 22;
          return (
            <rect
              key={d}
              x={d * 29}
              y="22"
              width="21"
              height={grace ? 44 : billed ? 78 : 60}
              rx="5"
              fill={grace ? "rgba(255,255,255,0.13)" : billed ? "#7c3aed" : "rgba(34,211,238,0.45)"}
            />
          );
        })}
        <rect x="638" y="10" width="3" height="112" fill="#22d3ee" />
      </g>

      <g transform="translate(96, 890)">
        {[
          { k: "Free period", v: "Set per contract, not per memory" },
          { k: "Already billed", v: "Never billed again" },
          { k: "Deposits", v: "Per customer, per cylinder" },
          { k: "Monthly run", v: "On a schedule, whether anyone remembers or not" },
        ].map((r, i) => (
          <g key={r.k} transform={`translate(0, ${i * 74})`}>
            <rect x="0" y="0" width={W - 192} height="58" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
            <text x="26" y="37" fill="#ffffff" fontFamily={SANS} fontSize="23" fontWeight="800">
              {r.k}
            </text>
            <text x={W - 218} y="37" textAnchor="end" fill="rgba(226,232,240,0.68)" fontFamily={SANS} fontSize="21" fontWeight="500">
              {r.v}
            </text>
          </g>
        ))}
      </g>

      <Copy
        y="1206"
        size="23"
        fill="rgba(226,232,240,0.55)"
        lines={["The revenue most gas plants lose is not stolen. It is simply never invoiced."]}
      />
      <Footer id={id} line="pradrava.com/products/fluids/finance" />
    </svg>
  );
}

const POSTERS = [
  { id: "alerts", title: "An owner for every step", tag: "Alerts & Reminders", Comp: PosterSla },
  { id: "compliance-gate", title: "NO. — the compliance gate", tag: "Cylinder Operations", Comp: PosterGate },
  { id: "cylinder-360", title: "Every cylinder has a story", tag: "Trace Passport", Comp: PosterCylinder },
  { id: "gst", title: "GST right, first time", tag: "Billing & GST", Comp: PosterTax },
  { id: "order-to-cash", title: "Fourteen steps, nothing re-keyed", tag: "End to end", Comp: PosterChain },
  { id: "rental-billing", title: "Rent that bills itself", tag: "Rental & demurrage", Comp: PosterRent },
];

function svgMarkup(node) {
  const clone = node.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(W));
  clone.setAttribute("height", String(H));
  return new XMLSerializer().serializeToString(clone);
}

function save(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export default function PosterBoard() {
  const refs = useRef({});
  const [busy, setBusy] = useState(null);

  function downloadSvg(id) {
    const node = refs.current[id]?.querySelector("svg");
    if (!node) return;
    save(new Blob([svgMarkup(node)], { type: "image/svg+xml;charset=utf-8" }), `pradrava-${id}.svg`);
  }

  function downloadPng(id, scale = 2) {
    const node = refs.current[id]?.querySelector("svg");
    if (!node) return;
    setBusy(id);
    const src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgMarkup(node));
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = W * scale;
      canvas.height = H * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) save(blob, `pradrava-${id}.png`);
        setBusy(null);
      }, "image/png");
    };
    img.onerror = () => setBusy(null);
    img.src = src;
  }

  return (
    <div className="poster-grid">
      {POSTERS.map(({ id, title, tag, Comp }) => (
        <figure key={id} className="poster-card">
          <div
            className="poster-frame"
            ref={(el) => {
              refs.current[id] = el;
            }}
          >
            <Comp />
          </div>
          <figcaption>
            <p className="poster-tag">{tag}</p>
            <h3>{title}</h3>
            <div className="poster-actions">
              <button type="button" className="btn btn-sm btn-primary" onClick={() => downloadSvg(id)}>
                Download SVG
              </button>
              <button
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={() => downloadPng(id)}
                disabled={busy === id}
              >
                {busy === id ? "Rendering…" : "Download PNG"}
              </button>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
