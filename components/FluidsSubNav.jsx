"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export const fluidsNav = [
  { href: "/products/fluids", label: "Overview" },
  { href: "/products/fluids/cylinder-operations", label: "Cylinder Operations" },
  { href: "/products/fluids/quality", label: "Quality & Lab" },
  { href: "/products/fluids/production", label: "Production & Machines" },
  { href: "/products/fluids/procurement", label: "Purchasing & Stock" },
  { href: "/products/fluids/finance", label: "Billing & GST" },
  { href: "/products/fluids/notifications", label: "Alerts & Reminders" },
  { href: "/products/fluids/platform", label: "Security & Branches" },
];

export default function FluidsSubNav({ current }) {
  // On a phone the sub-menu is a sideways-scrolling strip (globals.css), so the
  // page you are on can start out of view. Bring it into view once, without
  // moving the page vertically.
  const navRef = useRef(null);
  useEffect(() => {
    const nav = navRef.current;
    const active = nav && nav.querySelector("a.active");
    if (!nav || !active || nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
  }, [current]);

  return (
    <div className="reveal">
      <p className="crumb">
        <Link href="/products">Products</Link>
        <span>/</span>
        <Link href="/products/fluids">Fluids</Link>
      </p>
      <nav ref={navRef} className="sub-nav" aria-label="Fluids capability areas">
        {fluidsNav.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={l.href === current ? "active" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
