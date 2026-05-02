import Link from "next/link";

export default function Navbar() {
  return (
    <header className="top-nav">
      <nav className="container nav-row">
        <Link href="/" className="brand-mark">
          Pradrava
        </Link>

        <div className="nav-links">
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/demo" className="nav-link">Demos</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
