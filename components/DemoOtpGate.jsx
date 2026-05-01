"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoOtpGate() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("request");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function requestOtp(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/demo-auth/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to send OTP right now.");
      }

      setStep("verify");
      setStatus("idle");
    } catch (requestError) {
      setStatus("idle");
      setError(requestError.message);
    }
  }

  async function verifyOtp(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/demo-auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to verify OTP right now.");
      }

      const payload = await response.json().catch(() => ({}));
      if (payload.redirectUrl) {
        window.location.href = payload.redirectUrl;
        return;
      }

      router.refresh();
    } catch (verifyError) {
      setStatus("idle");
      setError(verifyError.message);
    }
  }

  return (
    <div className="otp-gate reveal delay-1">
      <p className="eyebrow">Demo Access</p>
      <h2>Login with Email OTP</h2>
      <p>
        Enter your email to receive a one-time passcode. You need OTP verification to view
        live demo screens.
      </p>

      <form onSubmit={step === "request" ? requestOtp : verifyOtp} className="contact-form">
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

        {step === "verify" && (
          <label>
            <span>OTP *</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              placeholder="Enter 6-digit OTP"
              className="field-input"
              required
            />
          </label>
        )}

        <div className="hero-actions" style={{ marginTop: "0.25rem" }}>
          <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
            {status === "submitting"
              ? "Please wait..."
              : step === "request"
                ? "Send OTP"
                : "Verify OTP"}
          </button>
          {step === "verify" && (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setStep("request");
                setOtp("");
                setError("");
              }}
            >
              Change Email
            </button>
          )}
        </div>

        {step === "verify" && !error && (
          <p className="contact-success">OTP sent successfully. Check your inbox.</p>
        )}
        {error && <p className="contact-error">{error}</p>}
      </form>
    </div>
  );
}
