import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Pradrava | Operations Software for Industrial Gas Plants",
    template: "%s | Pradrava",
  },
  description:
    "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-company and multi-branch.",
  applicationName: "Pradrava",
  metadataBase: new URL("https://pradrava.com"),
  keywords: [
    "industrial gas ERP",
    "gas cylinder management software",
    "cylinder tracking software India",
    "gas plant operations software",
    "GST invoicing software for gas plants",
    "LIMS for industrial gas",
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
    description: "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-company and multi-branch.",
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
    description: "Pradrava builds Fluids — cylinder lifecycle, laboratory quality, procurement, production, dispatch and GST-correct invoicing on one set of live data, multi-company and multi-branch.",
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
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
