"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/demo", label: "Demos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="top-nav">
      <nav className="container nav-row">
        <Link href="/" className="brand-mark" aria-label="Pradrava home">
          <span className="brand-logo">P</span>
          Pradrava<span className="dot">.</span>
        </Link>

        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link href="/demo" className="btn btn-primary btn-sm nav-cta-desktop">
            Try a Demo
          </Link>
          <button
            type="button"
            className={`nav-toggle${open ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
