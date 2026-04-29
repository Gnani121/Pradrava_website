import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pradrava",
  description: "End-to-End IT, AI & Cloud Solutions",
  applicationName: "Pradrava",
  metadataBase: new URL("https://pradrava.com"),
  keywords: [
    "global software development company",
    "AI automation services",
    "cloud engineering services",
    "product engineering company",
    "digital transformation partner",
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
    title: "Pradrava",
    description: "End-to-End IT, AI & Cloud Solutions",
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
    title: "Pradrava",
    description: "End-to-End IT, AI & Cloud Solutions",
    images: ["/og-image.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pradrava",
  url: "https://pradrava.com",
  logo: "https://pradrava.com/favicon.svg",
  description: "End-to-End IT, AI & Cloud Solutions",
  sameAs: [],
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
