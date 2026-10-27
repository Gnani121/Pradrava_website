"use client";

import { useState } from "react";
import Link from "next/link";
import { inr } from "@/data/pricing";

// What the leaks in a plant cost, worked out from the VISITOR'S OWN figures.
// Every box starts empty on purpose: there are no default or example numbers,
// because any figure we put here would be a claim we cannot back. The page
// claims nothing; the visitor's own arithmetic does the persuading.
const WEEKS_PER_MONTH = 52 / 12;

const num = (v) => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function Field({ label, value, onChange, prefix }) {
  return (
    <label>
      <span>{label}</span>
      <span className="savings-field">
        {prefix && <i aria-hidden="true">{prefix}</i>}
        <input
          type="number"
          inputMode="decimal"
          min="0"
          placeholder="Your figure"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </span>
    </label>
  );
}

export default function SavingsCalculator() {
  const [lostCyl, setLostCyl] = useState("");
  const [cylCost, setCylCost] = useState("");
  const [unbilledCyl, setUnbilledCyl] = useState("");
  const [unbilledDays, setUnbilledDays] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [hours, setHours] = useState("");
  const [hourCost, setHourCost] = useState("");
  const [other, setOther] = useState("");

  const rows = [
    {
      key: "lost",
      title: "Cylinders that never come back",
      hint: "Bottles that go missing at customers or in the yard each month.",
      fields: [
        { label: "Cylinders lost a month", value: lostCyl, set: setLostCyl },
        { label: "Cost to replace one", value: cylCost, set: setCylCost, prefix: "₹" },
      ],
      monthly: num(lostCyl) * num(cylCost),
    },
    {
      key: "rent",
      title: "Rent that never gets billed",
      hint: "Cylinders out with customers past the free period that nobody invoices.",
      fields: [
        { label: "Cylinders not billed", value: unbilledCyl, set: setUnbilledCyl },
        { label: "Days a month each", value: unbilledDays, set: setUnbilledDays },
        { label: "Rent per day", value: rentPerDay, set: setRentPerDay, prefix: "₹" },
      ],
      monthly: num(unbilledCyl) * num(unbilledDays) * num(rentPerDay),
    },
    {
      key: "time",
      title: "Time spent chasing",
      hint: "Phone calls, registers and WhatsApp to find where an order or a cylinder is.",
      fields: [
        { label: "Hours a week, whole team", value: hours, set: setHours },
        { label: "Cost of one hour", value: hourCost, set: setHourCost, prefix: "₹" },
      ],
      monthly: num(hours) * num(hourCost) * WEEKS_PER_MONTH,
    },
    {
      key: "other",
      title: "Anything else you lose",
      hint: "Rejected loads, penalties, wrong invoices re-issued — your own estimate.",
      fields: [{ label: "Amount a month", value: other, set: setOther, prefix: "₹" }],
      monthly: num(other),
    },
  ];

  const monthly = rows.reduce((s, r) => s + r.monthly, 0);
  const filled = rows.filter((r) => r.monthly > 0);

  return (
    <div className="estimator savings">
      <div className="savings-rows">
        {rows.map((r) => (
          <fieldset key={r.key} className="savings-row">
            <legend>{r.title}</legend>
            <p className="savings-hint">{r.hint}</p>
            <div className="estimator-inputs">
              {r.fields.map((f) => (
                <Field key={f.label} label={f.label} value={f.value} onChange={f.set} prefix={f.prefix} />
              ))}
            </div>
            <p className="savings-sub" aria-live="polite">
              {r.monthly > 0 ? <>{inr(r.monthly)} a month</> : <span>Fill in the boxes to see this line</span>}
            </p>
          </fieldset>
        ))}
      </div>

      <div className="estimator-result" aria-live="polite">
        <div>
          <span>What it costs you, a month</span>
          <strong>{filled.length ? inr(monthly) : "—"}</strong>
          <small>{filled.length ? `From ${filled.length} of the ${rows.length} lines you filled in` : "Fill in any line above"}</small>
        </div>
        <div>
          <span>Over a year</span>
          <strong>{filled.length ? inr(monthly * 12) : "—"}</strong>
          <small>The same figure, twelve times</small>
        </div>
      </div>

      <p className="estimator-note">
        These are your numbers, not ours. Set them beside the subscription estimate above, and if you
        would like us to check them against how your plant actually runs,{" "}
        <Link href="/contact?interest=fluids-demo&source=savings-calculator">talk to us</Link>.
      </p>
    </div>
  );
}
