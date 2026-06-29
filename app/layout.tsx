import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { site, serviceAreas } from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Kárpittisztítás Orosháza | Kanapé-, szőnyeg- és matractisztítás – Asztalos Tibor",
    template: "%s | Asztalos Tibor Kárpittisztítás",
  },
  description:
    "Professzionális kárpittisztítás Orosházán és környékén. Ülőgarnitúra, kanapé, szőnyeg és matrac mélytisztítása helyszínen, kíméletes szerekkel. Ingyenes árajánlat – hívjon: " +
    site.phoneDisplay,
  keywords: [
    "kárpittisztítás Orosháza",
    "kanapétisztítás Orosháza",
    "ülőgarnitúra tisztítás Orosháza",
    "szőnyegtisztítás Orosháza",
    "matractisztítás Orosháza",
    "kárpittisztító Békés vármegye",
    "bútortisztítás Orosháza",
    "kárpittisztítás Gyopárosfürdő",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: site.url,
    siteName: site.name,
    title:
      "Kárpittisztítás Orosháza – Kanapé, szőnyeg és matrac mélytisztítása",
    description:
      "Helyszíni kárpittisztítás Orosházán és környékén. Ingyenes, kötelezettségmentes árajánlat. Hívjon: " +
      site.phoneDisplay,
    // Az og:image-et az app/opengraph-image.tsx generálja (1200×630)
  },
  twitter: {
    card: "summary_large_image",
    title: "Kárpittisztítás Orosháza – Asztalos Tibor",
    description:
      "Kanapé-, szőnyeg- és matractisztítás Orosházán. Ingyenes árajánlat.",
    // A twitter:image is az opengraph-image.tsx-ből öröklődik
  },
  category: "business",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  image: `${site.url}/profilkep.png`,
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  priceRange: site.priceRange,
  description:
    "Professzionális kárpittisztítás, kanapé-, ülőgarnitúra-, szőnyeg- és matractisztítás Orosházán és Békés vármegyében.",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ülőgarnitúra és kanapé tisztítás",
      },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Szőnyegtisztítás" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Matractisztítás" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "27",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hu"
      className={`${bricolage.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
