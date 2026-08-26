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

export const metadata: Metadata = {
  title: "Tazakka Group Service | Service HP, Laptop & PC Cakung, Jakarta Timur",
  description:
    "Tazakka Group Service (TGS) melayani perbaikan HP, Laptop, Komputer, dan Printer di area Cakung, Jakarta Timur hingga seluruh Jabodetabek. Pengerjaan cepat, transparan, dan bergaransi.",

  verification: {
    google: "Ix6MLUUFYl5d7E8kmIm9BZIpWTyELdvSNGdThI9waMA",
  },

  keywords: [
    "service hp cakung",
    "service laptop jakarta timur",
    "service pc jabodetabek",
    "rakit pc cakung",
    "tempat service hp terdekat",
    "service printer jakarta timur",
    "tazakka group service",
    "ganti lcd hp jakarta",
    "upgrade ssd laptop",
    "repair hp jakarta timur",
  ],
  openGraph: {
    title: "Tazakka Group Service | Service HP & Laptop Cakung, Jakarta Timur",
    description:
      "Layanan service profesional untuk HP, Laptop, PC & Printer di Cakung, Jakarta Timur. Tersedia layanan antar-jemput se-Jabodetabek. Bergaransi 100%.",
    type: "website",
    locale: "id_ID",
    siteName: "Tazakka Group Service",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tazakka Group Service Banner",
      },
    ],
  },
  alternates: {
    canonical: "https://tazakkagroup.vercel.app", // update to .com later
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tazakka Group Service",
  "image": "https://tazakkagroup.vercel.app/images/logo.png",
  "@id": "https://tazakkagroup.vercel.app",
  "url": "https://tazakkagroup.vercel.app",
  "telephone": "+6285135465355",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan",
    "addressLocality": "Kec. Cakung",
    "addressRegion": "Jakarta Timur",
    "postalCode": "13940",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088, // placeholder, update if exact known
    "longitude": 106.9242
  },
  "areaServed": [
    "Cakung",
    "Jakarta Timur",
    "Jabodetabek",
    "Jakarta",
    "Bekasi",
    "Depok"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "priceRange": "$$"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-plus-jakarta)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
