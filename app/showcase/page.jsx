import Link from "next/link";
import PosterBoard from "@/components/PosterBoard";

export const metadata = {
  title: "Poster Set | Fluids",
  description:
    "Six print-ready posters on what Fluids actually does — the SLA engine, the compliance gate, the cylinder trace passport, the GST engine, order to cash, and rental billing. Download as vector or image.",
  alternates: { canonical: "/showcase" },
};

export default function ShowcasePage() {
  return (
    <div className="container page-stack">
      <p className="crumb">
        <Link href="/products">Products</Link>
        <span>/</span>
        <Link href="/products/fluids">Fluids</Link>
        <span>/</span>
        <span>Poster set</span>
      </p>

      <div className="product-page-hero fluids-hero reveal">
        <p className="eyebrow">Fluids · Poster set</p>
        <h1 className="hero-title">Six posters, six facts</h1>
        <p className="hero-subtitle">
          One idea each, no stock photography, and every number on them measured from the
          running product rather than rounded up for a brochure. Built as vector, so they hold
          up on a stand at an exhibition and on a wall in the plant office.
        </p>
        <div className="hero-actions">
          <Link href="/products/fluids" className="btn btn-primary">See the product</Link>
          <Link href="/demo" className="btn btn-ghost">Try a live demo</Link>
        </div>
      </div>

      <div className="feature-panel reveal delay-1">
        <h3>How to use these</h3>
        <p>
          Download the SVG for print — it is true vector at any size, and an A2 or A1 blow-up
          stays sharp. Download the PNG for a deck, a LinkedIn post or a WhatsApp forward. The
          proportions are the A-series ratio, so A4, A3, A2 and A1 all crop to nothing.
        </p>
      </div>

      <PosterBoard />

      <div className="momentum-panel reveal delay-2">
        <p className="eyebrow">Want one on your own numbers?</p>
        <h3>We will build the poster for your plant</h3>
        <p>
          Your cylinder count, your branches, your fill volumes, your certification. Tell us
          what the exhibition needs and we will set it.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">Talk to us</Link>
          <Link href="/products/fluids/notifications" className="btn btn-ghost">
            Notifications &amp; SLA →
          </Link>
        </div>
      </div>
    </div>
  );
}
