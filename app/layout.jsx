import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Pradrava | Operations Software for Industrial Gas Plants",
    template: "%s | Pradrava",
  },
  description:
    "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-branch.",
  applicationName: "Pradrava",
  metadataBase: new URL("https://pradrava.com"),
  keywords: [
    "gas cylinder management software",
    "gas cylinder tracking software",
    "cylinder tracking software India",
    "industrial gas plant software",
    "gas plant ERP India",
    "gas filling plant software",
    "oxygen plant software",
    "gas cylinder billing software",
    "GST billing software for gas cylinders",
    "cylinder rental management software",
    "gas cylinder inventory software",
    "medical gas cylinder software",
    "cylinder management software for gas agency",
    "gas distribution software",
    "LIMS for industrial gas",
    "Fluids",
    "Pradrava",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pradrava | Operations Software for Industrial Gas Plants",
    description: "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-branch.",
    url: "https://pradrava.com",
    siteName: "Pradrava",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pradrava",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradrava | Operations Software for Industrial Gas Plants",
    description: "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-branch.",
    images: ["/og-image.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pradrava",
  url: "https://pradrava.com",
  logo: "https://pradrava.com/favicon.svg",
  description: "Operations software for industrial gas plants",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Om Chambers, Indiranagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-97383-88683",
    email: "info@pradrava.com",
    contactType: "sales",
    areaServed: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pradrava",
  url: "https://pradrava.com",
  inLanguage: "en",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fluids",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "ERP for industrial gas plants",
  operatingSystem: "Web",
  url: "https://pradrava.com/products/fluids",
  description:
    "Fluids runs an industrial gas plant end to end — cylinder tracking, filling, laboratory quality, dispatch and GST-correct billing on one system.",
  publisher: { "@type": "Organization", name: "Pradrava", url: "https://pradrava.com" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "10400",
    description: "Cloud subscription, per branch per month (approximate starting price, excludes GST).",
    url: "https://pradrava.com/pricing",
  },
  areaServed: "IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
