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
            Operations software for industrial gas. Cylinder lifecycle, laboratory quality,
            procurement, production and GST compliance on one set of live data — multi-company
            and multi-branch from the first day.
          </p>
        </div>

        <div className="footer-col">
          <h4>Fluids</h4>
          <Link href="/products/fluids">Overview</Link>
          <Link href="/products/fluids/cylinder-operations">Cylinder Operations</Link>
          <Link href="/products/fluids/quality">Quality &amp; Compliance</Link>
          <Link href="/products/fluids/production">Production &amp; Machines</Link>
          <Link href="/products/fluids/procurement">Procurement &amp; Inventory</Link>
          <Link href="/products/fluids/finance">Finance &amp; GST</Link>
          <Link href="/products/fluids/platform">Platform &amp; Security</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/products">All Products</Link>
          <Link href="/products/accounting">Accounting</Link>
          <Link href="/services">Services</Link>
          <Link href="/demo">Live Demos</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href="tel:+919738388683">+91 97383 88683</a>
          <a href="mailto:info@pradrava.com">info@pradrava.com</a>
          <p style={{ marginTop: "0.6rem" }}>Pradrava Private Limited</p>
          <p>4th Floor, Om Chambers, Indiranagar, Bengaluru, Karnataka 560038</p>
        </div>
      </div>

      <div className="container footer-row">
        <p>© {new Date().getFullYear()} Pradrava Private Limited. All rights reserved.</p>
        <p>Built for plants that cannot stop.</p>
      </div>
    </footer>
  );
}
