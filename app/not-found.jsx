import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page-stack" style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "5rem", fontWeight: "700", margin: "0 0 0.5rem", opacity: "0.9" }}>404</h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "rgba(255,255,255,0.7)" }}>Page not found</p>
        <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: "1.6" }}>
          We couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-ghost">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
