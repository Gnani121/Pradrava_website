"use client";

import { useState } from "react";
import Link from "next/link";
import {
  bands,
  bundles,
  tiers,
  bundlePrice,
  approx,
  inr,
  ADDITIONAL_BRANCH_FACTOR,
  AMC_STANDARD,
  PERPETUAL_YEARS,
  ANNUAL_PREPAY_DISCOUNT,
  implementationPackages,
} from "@/data/pricing";

// The price grid for a chosen size band and way of paying, plus an estimate for
// a real plant. Everything is computed from data/pricing.js with the workbook's
// own formula, so the table and the estimate can never disagree.
export default function PriceEstimator() {
  const [bandId, setBandId] = useState("S");
  const [tierId, setTierId] = useState("shared");
  const [bundleId, setBundleId] = useState("B5");
  const [branches, setBranches] = useState(1);
  const [users, setUsers] = useState(10);

  const band = bands.find((b) => b.id === bandId) || bands[0];
  const tier = tiers.find((t) => t.id === tierId) || tiers[0];
  const bundle = bundles.find((b) => b.id === bundleId) || bundles[0];

  const nBranches = Math.max(1, Math.min(50, Number(branches) || 1));
  const nUsers = Math.max(1, Math.min(5000, Number(users) || 1));
  const extraUsers = Math.max(0, nUsers - band.users);

  const first = bundlePrice(bundle, band, tierId);
  const licence = first * (1 + ADDITIONAL_BRANCH_FACTOR * (nBranches - 1));
  const perpetual = tierId === "perpetual";
  const extraUserCost = perpetual ? extraUsers * band.extraUser * 12 * PERPETUAL_YEARS : extraUsers * band.extraUser;
  const hosting = tierId === "dedicated" ? band.hosting : 0;
  const recurring = licence + extraUserCost + hosting;
  const setup = implementationPackages[band.id];
  const prepayPct = Math.round(ANNUAL_PREPAY_DISCOUNT * 100);

  return (
    <div className="estimator">
      <div className="estimator-inputs">
        <label>
          <span>Size of your operation</span>
          <select value={bandId} onChange={(e) => { setBandId(e.target.value); const b = bands.find((x) => x.id === e.target.value); if (b) setUsers(b.users); }}>
            {bands.map((b) => (
              <option key={b.id} value={b.id}>{b.name} — {b.cylinders}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Way of paying</span>
          <select value={tierId} onChange={(e) => setTierId(e.target.value)}>
            {tiers.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="price-table-wrap">
        <table className="price-table">
          <caption>
            {band.name} ({band.cylinders}, {band.users} users included) · {tier.name}, {tier.short}
          </caption>
          <thead>
            <tr>
              <th scope="col">Bundle</th>
              <th scope="col">What it adds</th>
              <th scope="col" className="num">Approx. price</th>
            </tr>
          </thead>
          <tbody>
            {bundles.map((b) => (
              <tr key={b.id} className={b.id === bundleId ? "selected" : undefined} onClick={() => setBundleId(b.id)}>
                <td><strong>{b.name}</strong>{b.popular && <span className="price-pop">Popular</span>}</td>
                <td>{b.adds}</td>
                <td className="num">{inr(approx(bundlePrice(b, band, tierId)))}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="estimator-note">
          Each bundle includes everything above it.
          {tierId === "dedicated" && ` Managed hosting for this size is ${inr(band.hosting)} a month on top.`}
          {perpetual && ` Annual maintenance (AMC) is ${Math.round(AMC_STANDARD * 100)}% of the licence a year from year two.`}
          {" "}Extra users beyond {band.users}: {inr(band.extraUser)} each a month.
        </p>
      </div>

      <h3 className="estimator-heading">Estimate for your plant</h3>
      <div className="estimator-inputs">
        <label>
          <span>Bundle</span>
          <select value={bundleId} onChange={(e) => setBundleId(e.target.value)}>
            {bundles.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Branches</span>
          <input type="number" min={1} max={50} value={branches} onChange={(e) => setBranches(e.target.value)} />
        </label>
        <label>
          <span>Named users in total</span>
          <input type="number" min={1} max={5000} value={users} onChange={(e) => setUsers(e.target.value)} />
        </label>
      </div>

      <div className="estimator-result" aria-live="polite">
        {perpetual ? (
          <>
            <div>
              <span>One-time licence</span>
              <strong>{inr(approx(recurring))}</strong>
              <small>{breakdown(nBranches, first, extraUsers)}</small>
            </div>
            <div>
              <span>Maintenance (AMC) from year two</span>
              <strong>{inr(approx(recurring * AMC_STANDARD))} / year</strong>
              <small>Standard, {Math.round(AMC_STANDARD * 100)}% of the licence</small>
            </div>
          </>
        ) : (
          <>
            <div>
              <span>Per month</span>
              <strong>{inr(approx(recurring))}</strong>
              <small>{breakdown(nBranches, first, extraUsers)}{hosting ? ` + hosting ${inr(hosting)}` : ""}</small>
            </div>
            <div>
              <span>Per year, paid in advance</span>
              <strong>{inr(approx(recurring * 12 * (1 - ANNUAL_PREPAY_DISCOUNT)))}</strong>
              <small>{prepayPct}% off {inr(approx(recurring * 12))} for paying a year up front</small>
            </div>
          </>
        )}
        <div>
          <span>Implementation</span>
          <strong>{setup ? `about ${inr(setup)}` : "Quoted"}</strong>
          <small>{setup ? `one-time package for a ${band.name.toLowerCase()} plant` : "one-time; quoted after a site visit"}</small>
        </div>
      </div>

      <p className="estimator-note">
        An approximate estimate, excluding GST. <Link href="/contact?interest=pricing-quote">Ask for a quote</Link> for the exact figure.
      </p>
    </div>
  );
}

function breakdown(nBranches, first, extraUsers) {
  const parts = [`first branch ${inr(approx(first))}`];
  if (nBranches > 1) parts.push(`${nBranches - 1} more at 60%`);
  if (extraUsers > 0) parts.push(`${extraUsers} extra user${extraUsers === 1 ? "" : "s"}`);
  return parts.join(" + ");
}
