import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#ea580c',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "eMotres | High-Performance Electric Motors",
    template: "%s | eMotres",
  },
  description:
    "eMotres designs and manufactures high-performance electric motors built on the patented AeroStator Core™ architecture — tangential magnet polarization and rectangular copper windings for the highest torque density on the market. For drones, UAVs, aviation and marine.",
  keywords: [
    "electric motors",
    "drone motors",
    "UAV motors",
    "aviation motors",
    "high torque density",
    "AeroStator Core",
    "tangential magnet polarization",
    "inrunner motor",
    "BLDC motor",
    "custom motor design",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "eMotres | High-Performance Electric Motors",
    description:
      "High-performance electric motors built on the patented AeroStator Core™ architecture — the highest torque density on the market, for drones, UAVs and aviation.",
    siteName: "eMotres",
    images: [
      {
        url: "/images/electric-motor.webp",
        width: 1200,
        height: 630,
        alt: "eMotres AeroStator Core electric motor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eMotres | High-Performance Electric Motors",
    description:
      "High-performance electric motors built on the patented AeroStator Core™ architecture — the highest torque density on the market.",
    images: ["/images/electric-motor.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eMotres",
  legalName: "MOTRES D.O.O",
  url: SITE_URL,
  logo: `${SITE_URL}/images/electric-motor.webp`,
  email: "sales@emotres.com",
  vatID: "SI22399933",
  description:
    "eMotres designs and manufactures high-performance electric motors built on the patented AeroStator Core™ architecture for drones, UAVs, aviation and marine applications.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kotnikova 34",
    addressLocality: "Ljubljana",
    postalCode: "1000",
    addressCountry: "SI",
  },
  sameAs: ["https://www.linkedin.com/company/motres/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6BEVZ36QEB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6BEVZ36QEB'); // Google Analytics (GA4)
            gtag('config', 'AW-796970697'); // Google Ads
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
