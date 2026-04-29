import Link from "next/link";

export default function Navbar() {
  return (
    <header className="top-nav">
      <nav className="container nav-row">
        <Link href="/" className="brand-mark">
          Pradrava
        </Link>

        <div className="nav-links">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/demo" className="nav-link">Demos</Link>
          <Link href="/demo" className="btn btn-sm nav-demo-btn">See Demos</Link>
          <Link href="/demo" className="nav-demo-chip">Demo</Link>
        </div>
      </nav>
    </header>
  );
}
