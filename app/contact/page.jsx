"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const INTEREST_OPTIONS = [
  { value: "accounting-launch", label: "Accounting launch updates" },
  { value: "fluids-demo", label: "Fluids guided demo" },
  { value: "ai-forecast-demo", label: "AI Forecast Studio demo" },
  { value: "general-enquiry", label: "General enquiry" },
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const presetInterest = searchParams.get("interest") || "accounting-launch";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState(presetInterest);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const source = useMemo(() => searchParams.get("source") || "contact-page", [searchParams]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          interest,
          message,
          source,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to submit right now. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (submitError) {
      setStatus("error");
      setError(submitError.message);
    }
  }

  return (
    <section className="container page-stack">
      <div className="section-head reveal">
        <p className="eyebrow">Contact</p>
        <h1>Request Updates or a Guided Demo</h1>
      </div>
      <p className="lead reveal delay-1">
        Share your email and interest area. We will follow up with launch updates,
        roadmap milestones, or a tailored walkthrough.
      </p>

      <div className="modules-panel reveal delay-1" style={{ maxWidth: "760px" }}>
        <h2>Tell us what you need</h2>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.95rem" }}>
          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="field-input"
            />
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span>Email *</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="field-input"
              required
            />
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span>Interest *</span>
            <select
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="field-input"
              required
            >
              {INTEREST_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span>Message (optional)</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Anything specific you want us to cover?"
              className="field-input"
              rows={4}
            />
          </label>

          <div className="hero-actions" style={{ marginTop: "0.25rem" }}>
            <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit Request"}
            </button>
            <Link href="/products/accounting" className="btn btn-ghost">Back to Accounting</Link>
          </div>

          {status === "success" && (
            <p style={{ color: "#22c55e", marginTop: "0.2rem" }}>
              Request received. We will contact you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#ef4444", marginTop: "0.2rem" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
