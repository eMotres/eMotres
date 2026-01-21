import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "eMotres | High-Performance Electric Motors",
    template: "%s | eMotres",
  },
  description: "eMotres designs and manufactures high-performance axial flux electric motors for drones, aviation, and marine applications. Custom engineering solutions.",
  keywords: ["electric motors", "aviation motors", "drone motors", "axial flux", "high torque density", "custom motor design"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emotres.com/",
    title: "eMotres | High-Performance Electric Motors",
    description: "Developing top-tier electric motors for aviation and drones.",
    siteName: "eMotres",
    images: [
      {
        url: "https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp", // Fallback to provided image
        width: 1200,
        height: 630,
        alt: "eMotres Electric Motor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eMotres | High-Performance Electric Motors",
    description: "Developing top-tier electric motors for aviation and drones.",
    images: ["https://emotres.com/wp-content/uploads/2024/08/electric-motor.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
