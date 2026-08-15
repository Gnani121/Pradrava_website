import Link from "next/link";

export const fluidsNav = [
  { href: "/products/fluids", label: "Overview" },
  { href: "/products/fluids/cylinder-operations", label: "Cylinder Operations" },
  { href: "/products/fluids/quality", label: "Quality & Compliance" },
  { href: "/products/fluids/production", label: "Production & Machines" },
  { href: "/products/fluids/procurement", label: "Procurement & Inventory" },
  { href: "/products/fluids/finance", label: "Finance & GST" },
  { href: "/products/fluids/platform", label: "Platform & Security" },
];

export default function FluidsSubNav({ current }) {
  return (
    <div className="reveal">
      <p className="crumb">
        <Link href="/products">Products</Link>
        <span>/</span>
        <Link href="/products/fluids">Fluids</Link>
      </p>
      <nav className="sub-nav" aria-label="Fluids capability areas">
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
