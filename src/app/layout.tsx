import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { church, isDemo, pastor, siteUrl, weekly } from "@/lib/site";
import "./globals.css";

// Events expire on their own; re-render hourly so they drop off without a deploy.
export const revalidate = 3600;

// Fonts are self-hosted so the build never depends on reaching Google.
// DM Serif Display: big, warm headlines. Figtree: the clean sans of the sign.
const dmserif = localFont({
  src: [{ path: "../fonts/dmserif.woff2", weight: "400", style: "normal" }],
  variable: "--font-dmserif",
  display: "swap",
});

const dmserifItalic = localFont({
  src: [{ path: "../fonts/dmserif-italic.woff2", weight: "400", style: "italic" }],
  variable: "--font-dmserif-italic",
  display: "swap",
});

const figtree = localFont({
  src: [{ path: "../fonts/figtree.woff2", weight: "300 900", style: "normal" }],
  variable: "--font-figtree",
  display: "swap",
});

const description = `${church.name} on South Franklin Street in Eaton, Ohio. ${church.focus} Led by ${pastor.full}. Sunday School 10 am, Sunday Morning 11 am, Sunday Night 6 pm, Wednesday 7 pm.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${church.name} · Eaton, Ohio`,
    template: `%s · ${church.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: church.name,
    title: `The door is open · ${church.name}`,
    description,
  },
  twitter: { card: "summary_large_image" },
  appleWebApp: { capable: true, title: church.short },
  robots: isDemo ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#1f2d5c",
};

const dayMap: Record<string, string> = { Sunday: "https://schema.org/Sunday", Wednesday: "https://schema.org/Wednesday" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: church.name,
  url: siteUrl,
  description: church.focus,
  address: {
    "@type": "PostalAddress",
    streetAddress: church.street,
    addressLocality: church.city,
    addressRegion: church.stateCode,
    postalCode: church.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: church.geo.lat, longitude: church.geo.lng },
  event: weekly.map((w) => ({
    "@type": "Event",
    name: w.name,
    eventSchedule: { "@type": "Schedule", byDay: dayMap[w.day], startTime: w.time, scheduleTimezone: "America/New_York" },
    location: { "@type": "Place", name: church.name, address: `${church.street}, ${church.city}, ${church.stateCode} ${church.zip}` },
  })),
  sameAs: [church.facebook],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmserif.variable} ${dmserifItalic.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        {/* Scroll reveals only hide content once we know JavaScript is running. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
