import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://tazakkagroup.vercel.app"),

  title: {
    default:
      "Tazakka Group Service | Service HP, Laptop, Komputer & Printer Cakung",
    template: "%s | Tazakka Group Service",
  },

  description:
    "Tazakka Group Service melayani service HP, laptop, komputer, PC, dan printer di Cakung, Jakarta Timur. Melayani ganti LCD, upgrade SSD, cleaning, perbaikan, instalasi Windows, dan berbagai kebutuhan komputer.",

  keywords: [
    "service hp cakung",
    "service hp jakarta timur",
    "service laptop cakung",
    "service laptop jakarta timur",
    "service komputer cakung",
    "service komputer jakarta timur",
    "service printer cakung",
    "service printer jakarta timur",
    "service pc cakung",
    "rakit pc cakung",
    "service hp terdekat",
    "service laptop terdekat",
    "service komputer terdekat",
    "ganti lcd hp cakung",
    "ganti lcd hp jakarta timur",
    "upgrade ssd laptop",
    "upgrade ssd cakung",
    "repair hp jakarta timur",
    "tazakka group service",
  ],

  authors: [
    {
      name: "Tazakka Group Service",
    },
  ],

  creator: "Tazakka Group Service",
  publisher: "Tazakka Group Service",

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

  verification: {
    google: "Ix6MLUUFYl5d7E8kmIm9BZIpWTyELdvSNGdThI9waMA",
  },

  alternates: {
    canonical: "https://tazakkagroup.vercel.app/",
  },

  openGraph: {
    title:
      "Tazakka Group Service | Service HP, Laptop, Komputer & Printer Cakung",
    description:
      "Service HP, laptop, komputer, PC dan printer di Cakung, Jakarta Timur. Pengerjaan transparan, profesional dan bergaransi.",

    url: "https://tazakkagroup.vercel.app/",
    siteName: "Tazakka Group Service",
    locale: "id_ID",
    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tazakka Group Service - Service HP Laptop Komputer Printer Cakung",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tazakka Group Service | Service HP, Laptop, Komputer & Printer Cakung",
    description:
      "Service HP, laptop, komputer, PC dan printer di Cakung, Jakarta Timur.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================
   LOCAL BUSINESS SCHEMA
========================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Tazakka Group Service",

  url: "https://tazakkagroup.vercel.app/",

  "@id": "https://tazakkagroup.vercel.app/#business",

  image: [
    "https://tazakkagroup.vercel.app/images/logo.png",
    "https://tazakkagroup.vercel.app/images/og-image.png",
  ],

  telephone: "+6285135465355",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan",
    addressLocality: "Cakung",
    addressRegion: "Jakarta Timur",
    postalCode: "13940",
    addressCountry: "ID",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Cakung",
    },
    {
      "@type": "AdministrativeArea",
      name: "Jakarta Timur",
    },
    {
      "@type": "AdministrativeArea",
      name: "Jakarta",
    },
    {
      "@type": "AdministrativeArea",
      name: "Bekasi",
    },
    {
      "@type": "AdministrativeArea",
      name: "Depok",
    },
    {
      "@type": "Place",
      name: "Jabodetabek",
    },
  ],

  serviceType: [
    "Service HP",
    "Service Laptop",
    "Service Komputer",
    "Service PC",
    "Service Printer",
    "Ganti LCD HP",
    "Upgrade SSD Laptop",
    "Install Windows",
    "Cleaning Laptop",
    "Cleaning Komputer",
    "Rakit PC",
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-plus-jakarta)]">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
