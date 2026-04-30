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
        <p className="eyebrow">Contact Us</p>
        <h1>Let us plan your rollout</h1>
      </div>
      <p className="lead reveal delay-1">
        Tell us whether you need Fluids, Accounting updates, or a product walkthrough.
        Our team will respond with next steps and a tailored plan.
      </p>

      <div className="contact-main-stack reveal delay-1">
        <div className="contact-form-panel">
          <h2>Head Office & Business Contacts</h2>
          <div className="contact-main-details">
            <p className="contact-office-name">PRADRAVA PRIVATE LIMITED</p>
            <p className="contact-office-address">
              4th Floor, Om Chambers, 648/A, 1st Stage, Binnamangala, Stage 1,
              Indiranagar, Bengaluru, Karnataka 560038
            </p>

            <div className="contact-people-grid">
              <article>
                <h3>Vishwas R</h3>
                <p>Business Development Manager</p>
                <a href="tel:+919738388683">+91 97383 88683</a>
              </article>
              <article>
                <h3>Gnanendra A</h3>
                <p>Principle Consultant</p>
                <a href="tel:+918310084720">+91 83100 84720</a>
              </article>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2>Tell us what you need</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="field-input"
              />
            </label>

            <label>
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

            <label>
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

            <label>
              <span>Message (optional)</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us about your team size, process gaps, or target timeline."
                className="field-input"
                rows={4}
              />
            </label>

            <div className="hero-actions" style={{ marginTop: "0.25rem" }}>
              <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Submit Request"}
              </button>
              <Link href="/products" className="btn btn-ghost">Back to Products</Link>
            </div>

            {status === "success" && (
              <p className="contact-success">
                Request received. We will contact you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-error">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
