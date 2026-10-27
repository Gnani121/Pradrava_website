import OwnerPage from "@/components/OwnerPage";
import { ownerPages } from "@/data/ownerPages";

export const metadata = {
  title: "Fluids | Operations Software for Industrial Gas Plants",
  description:
    "Fluids runs a gas plant on one set of live data: cylinders, sales, filling, the lab, dispatch, purchasing and GST-correct invoicing, across every branch, with nothing typed twice.",
  keywords: [
    "industrial gas ERP software",
    "gas cylinder management system",
    "cylinder lifecycle tracking",
    "gas plant quality management LIMS",
    "GST invoicing software for gas plants",
    "cylinder rental demurrage billing",
    "multi branch gas distribution software",
  ],
  alternates: {
    canonical: "/products/fluids",
  },
};

const page = ownerPages.overview;

const fluidsSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fluids",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Enterprise Resource Planning",
  operatingSystem: "Web",
  url: "https://pradrava.com/products/fluids",
  description:
    "Operations software for industrial gas plants: cylinders, sales, filling, laboratory quality, dispatch, purchasing and GST-correct invoicing on one set of live data.",
  brand: { "@type": "Brand", name: "Pradrava" },
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: page.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FluidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fluidsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OwnerPage page={page} current="/products/fluids" />
    </>
  );
}
