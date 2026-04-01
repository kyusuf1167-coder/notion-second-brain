import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://secondbrainvault.com";
const OG_IMAGE = `${SITE_URL}/og`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  "The Ultimate 2026 Notion Second Brain & Productivity Dashboard — $49",
    template: "%s | Second Brain",
  },
  description:
    "Stop drowning in tabs and to-dos. Get 12 Notion dashboards, 50+ templates, and a full GTD system built for 2026. One-time $49 — instant access, lifetime updates.",
  keywords: [
    "Notion template",
    "Notion second brain",
    "best Notion template 2026",
    "Notion productivity system",
    "GTD Notion template",
    "Notion dashboard bundle",
    "second brain Notion",
    "personal knowledge management Notion",
    "Notion habit tracker",
    "Notion goal tracker",
    "Notion finance dashboard",
    "Notion project manager",
    "Notion life os",
    "Notion all in one workspace",
    "notion template bundle",
  ],
  authors: [{ name: "SecondBrainVault" }],
  creator: "SecondBrainVault",
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    title:       "The Ultimate 2026 Notion Second Brain — 12 Dashboards, 50+ Templates",
    description: "One Notion workspace to capture everything, forget nothing, and ship what matters. $49 one-time — no subscription.",
    siteName:    "SecondBrainVault",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "The Ultimate 2026 Notion Second Brain Dashboard Preview",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "The Ultimate 2026 Notion Second Brain — $49",
    description: "12 dashboards, 50+ templates, one workspace. Capture everything, forget nothing.",
    images:      [OG_IMAGE],
    creator:     "@secondbrainson",
  },
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Product schema for SEO rich results
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Ultimate 2026 Notion Second Brain & Productivity Dashboard",
  description:
    "12 pre-built Notion dashboards, 50+ templates, and a full GTD productivity system for 2026. Includes goals tracker, project hub, habit tracker, CRM, finance dashboard, and more.",
  image: OG_IMAGE,
  brand: { "@type": "Brand", name: "SecondBrain.so" },
  offers: {
    "@type":         "Offer",
    price:           "49.00",
    priceCurrency:   "USD",
    availability:    "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    url:             SITE_URL,
  },
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.9",
    reviewCount:   "2400",
    bestRating:    "5",
    worstRating:   "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Product schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="min-h-screen bg-dark-bg antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
