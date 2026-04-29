"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container page-stack" style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "700", margin: "0 0 0.5rem", opacity: "0.9" }}>Something went wrong</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: "1.6" }}>
          An unexpected error occurred. Our team has been notified and we&apos;re working to fix it.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary"
            style={{ cursor: "pointer" }}
          >
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
