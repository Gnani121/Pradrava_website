import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand-mark" aria-label="Pradrava home">
            <span className="brand-logo">P</span>
            Pradrava<span className="dot">.</span>
          </Link>
          <p>
            Purpose-built software for operations that cannot stop. Industrial gas,
            manufacturing, and finance teams run cleaner, faster, and safer on Pradrava.
          </p>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <Link href="/products/fluids">Fluids</Link>
          <Link href="/products/accounting">Accounting</Link>
          <Link href="/products">All Products</Link>
          <Link href="/demo">Live Demos</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
          <a href="tel:+919738388683">+91 97383 88683</a>
          <a href="mailto:info@pradrava.com">info@pradrava.com</a>
        </div>

        <div className="footer-col">
          <h4>Head Office</h4>
          <p>Pradrava Private Limited</p>
          <p>4th Floor, Om Chambers, Indiranagar, Bengaluru, Karnataka 560038</p>
        </div>
      </div>

      <div className="container footer-row">
        <p>© {new Date().getFullYear()} Pradrava Private Limited. All rights reserved.</p>
        <p>Purpose-built products · Expert implementation · Real results.</p>
      </div>
    </footer>
  );
}
