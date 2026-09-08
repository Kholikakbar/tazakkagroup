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
    // =====================================================
    // BRAND & UTAMA
    // =====================================================
    "tazakka group service",
    "tazakka group service bekasi",
    "tazakka group service jakarta timur",
    "tazakka service",
    "service tazakka jakarta timur",
    "service tazakka bekasi",

    // =====================================================
    // SERVICE HP - UMUM
    // =====================================================
    "service hp cakung",
    "service hp jakarta timur",
    "service hp jakarta",
    "service hp bekasi",
    "service hp terdekat",
    "service hp terdekat jakarta timur",
    "service hp terdekat bekasi",
    "service hp panggilan jakarta",
    "service hp panggilan jakarta timur",
    "service hp panggilan bekasi",
    "repair hp jakarta",
    "repair hp jakarta timur",
    "repair hp bekasi",

    // =====================================================
    // SERVICE LAPTOP - UMUM
    // =====================================================
    "service laptop cakung",
    "service laptop jakarta timur",
    "service laptop jakarta",
    "service laptop bekasi",
    "service laptop terdekat",
    "service laptop terdekat jakarta timur",
    "service laptop terdekat bekasi",
    "service laptop panggilan jakarta",
    "service laptop panggilan jakarta timur",
    "service laptop panggilan bekasi",

    // =====================================================
    // SERVICE KOMPUTER - UMUM
    // =====================================================
    "service komputer cakung",
    "service komputer jakarta timur",
    "service komputer jakarta",
    "service komputer bekasi",
    "service komputer terdekat",
    "service komputer terdekat jakarta timur",
    "service komputer terdekat bekasi",
    "jasa service komputer jakarta",
    "jasa service komputer jakarta timur",
    "jasa service komputer bekasi",

    // =====================================================
    // SERVICE PC
    // =====================================================
    "service pc cakung",
    "service pc jakarta timur",
    "service pc jakarta",
    "service pc bekasi",
    "service pc terdekat jakarta timur",
    "service pc terdekat bekasi",

    // =====================================================
    // SERVICE PRINTER
    // =====================================================
    "service printer cakung",
    "service printer jakarta timur",
    "service printer jakarta",
    "service printer bekasi",
    "service printer terdekat jakarta timur",
    "service printer terdekat bekasi",

    // =====================================================
    // RAKIT PC
    // =====================================================
    "rakit pc cakung",
    "rakit pc jakarta timur",
    "rakit pc jakarta",
    "rakit pc bekasi",

    // =====================================================
    // LCD HP
    // =====================================================
    "ganti lcd hp cakung",
    "ganti lcd hp jakarta timur",
    "ganti lcd hp jakarta",
    "ganti lcd hp bekasi",
    "ganti lcd hp jatiasih",
    "ganti lcd hp jatimekar",

    // =====================================================
    // SSD / UPGRADE
    // =====================================================
    "upgrade ssd laptop",
    "upgrade ssd cakung",
    "upgrade ssd jakarta",
    "upgrade ssd jakarta timur",
    "upgrade ssd bekasi",
    "upgrade ssd jatiasih",
    "upgrade ssd jatimekar",

    // =====================================================
    // IPHONE & MACBOOK
    // =====================================================
    "service iphone jakarta",
    "service iphone jakarta timur",
    "service iphone bekasi",
    "service iphone jatiasih",
    "service iphone jatimekar",

    "service macbook jakarta",
    "service macbook jakarta timur",
    "service macbook bekasi",
    "service macbook jatiasih",
    "service macbook jatimekar",

    // =====================================================
    // ELEKTRONIK
    // =====================================================
    "service elektronik jakarta",
    "service elektronik jakarta timur",
    "service elektronik bekasi",
    "service elektronik jatiasih",
    "service elektronik jatimekar",
    "tempat service elektronik terdekat",

    // =====================================================
    // JAKARTA TIMUR - KECAMATAN
    // =====================================================

    // Cakung
    "service hp cakung",
    "service laptop cakung",
    "service komputer cakung",
    "service printer cakung",
    "service pc cakung",
    "rakit pc cakung",
    "repair hp cakung",

    // Ciracas
    "service hp ciracas",
    "service laptop ciracas",
    "service komputer ciracas",
    "service printer ciracas",
    "service pc ciracas",
    "rakit pc ciracas",
    "repair hp ciracas",

    // Cipayung
    "service hp cipayung",
    "service laptop cipayung",
    "service komputer cipayung",
    "service printer cipayung",
    "service pc cipayung",
    "rakit pc cipayung",
    "repair hp cipayung",

    // Duren Sawit
    "service hp duren sawit",
    "service laptop duren sawit",
    "service komputer duren sawit",
    "service printer duren sawit",
    "service pc duren sawit",
    "rakit pc duren sawit",
    "repair hp duren sawit",

    // Jatinegara
    "service hp jatinegara",
    "service laptop jatinegara",
    "service komputer jatinegara",
    "service printer jatinegara",
    "service pc jatinegara",
    "rakit pc jatinegara",
    "repair hp jatinegara",

    // Kramat Jati
    "service hp kramat jati",
    "service laptop kramat jati",
    "service komputer kramat jati",
    "service printer kramat jati",
    "service pc kramat jati",
    "rakit pc kramat jati",
    "repair hp kramat jati",

    // Makasar
    "service hp makasar jakarta timur",
    "service laptop makasar jakarta timur",
    "service komputer makasar jakarta timur",
    "service printer makasar jakarta timur",
    "service pc makasar jakarta timur",
    "rakit pc makasar jakarta timur",
    "repair hp makasar jakarta timur",

    // Matraman
    "service hp matraman",
    "service laptop matraman",
    "service komputer matraman",
    "service printer matraman",
    "service pc matraman",
    "rakit pc matraman",
    "repair hp matraman",

    // Pasar Rebo
    "service hp pasar rebo",
    "service laptop pasar rebo",
    "service komputer pasar rebo",
    "service printer pasar rebo",
    "service pc pasar rebo",
    "rakit pc pasar rebo",
    "repair hp pasar rebo",

    // Pulo Gadung
    "service hp pulo gadung",
    "service laptop pulo gadung",
    "service komputer pulo gadung",
    "service printer pulo gadung",
    "service pc pulo gadung",
    "rakit pc pulo gadung",
    "repair hp pulo gadung",

    // =====================================================
    // AREA PENGGILINGAN
    // =====================================================
    "service hp penggilingan",
    "service laptop penggilingan",
    "service komputer penggilingan",
    "service printer penggilingan",
    "service pc penggilingan",
    "rakit pc penggilingan",
    "repair hp penggilingan",
    "ganti lcd hp penggilingan",
    "upgrade ssd penggilingan",

    // =====================================================
    // JATIASIH - BEKASI
    // =====================================================
    "service hp jatiasih",
    "service laptop jatiasih",
    "service komputer jatiasih",
    "service printer jatiasih",
    "service pc jatiasih",
    "rakit pc jatiasih",
    "repair hp jatiasih",
    "ganti lcd hp jatiasih",
    "upgrade ssd jatiasih",
    "service iphone jatiasih",
    "service macbook jatiasih",
    "service elektronik jatiasih",
    "tempat service hp jatiasih",
    "tempat service laptop jatiasih",
    "tempat service komputer jatiasih",

    // =====================================================
    // JATIMEKAR - BEKASI
    // =====================================================
    "service hp jatimekar",
    "service laptop jatimekar",
    "service komputer jatimekar",
    "service printer jatimekar",
    "service pc jatimekar",
    "rakit pc jatimekar",
    "repair hp jatimekar",
    "ganti lcd hp jatimekar",
    "upgrade ssd jatimekar",
    "service iphone jatimekar",
    "service macbook jatimekar",
    "service elektronik jatimekar",
    "tempat service hp jatimekar",
    "tempat service laptop jatimekar",
    "tempat service komputer jatimekar",

    // =====================================================
    // BEKASI - UMUM
    // =====================================================
    "service hp bekasi",
    "service laptop bekasi",
    "service komputer bekasi",
    "service printer bekasi",
    "service pc bekasi",
    "rakit pc bekasi",
    "repair hp bekasi",
    "ganti lcd hp bekasi",
    "upgrade ssd bekasi",
    "jasa service hp bekasi",
    "jasa service laptop bekasi",
    "jasa service komputer bekasi",
    "tempat service hp bekasi",
    "tempat service laptop bekasi",
    "tempat service komputer bekasi",

    // =====================================================
    // BRAND HP
    // =====================================================
    "service hp samsung jakarta timur",
    "service hp oppo jakarta timur",
    "service hp vivo jakarta timur",
    "service hp xiaomi jakarta timur",
    "service hp realme jakarta timur",
    "service hp infinix jakarta timur",
    "service hp poco jakarta timur",
    "service iphone jakarta timur",

    "service samsung bekasi",
    "service oppo bekasi",
    "service vivo bekasi",
    "service xiaomi bekasi",
    "service realme bekasi",
    "service infinix bekasi",
    "service poco bekasi",
    "service iphone bekasi",

    // =====================================================
    // SERVICE PANGGILAN
    // =====================================================
    "service hp panggilan cakung",
    "service laptop panggilan cakung",
    "service komputer panggilan cakung",

    "service hp panggilan penggilingan",
    "service laptop panggilan penggilingan",
    "service komputer panggilan penggilingan",

    "service hp panggilan jatiasih",
    "service laptop panggilan jatiasih",
    "service komputer panggilan jatiasih",

    "service hp panggilan jatimekar",
    "service laptop panggilan jatimekar",
    "service komputer panggilan jatimekar",

    "service hp panggilan bekasi",
    "service laptop panggilan bekasi",
    "service komputer panggilan bekasi"
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
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

/* =========================
   LOCAL BUSINESS SCHEMA
========================= */

const jsonLd = [
  /* ============================
     1. LOCAL BUSINESS (Cakung)
  ============================ */
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tazakka Group Service",
    url: "https://tazakkagroup.vercel.app/",
    "@id": "https://tazakkagroup.vercel.app/#business",
    image: [
      "https://tazakkagroup.vercel.app/images/logo.png",
      "https://tazakkagroup.vercel.app/images/og-image.png",
    ],
    logo: "https://tazakkagroup.vercel.app/images/logo.png",
    telephone: "+6285135465355",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan",
      addressLocality: "Cakung",
      addressRegion: "Jakarta Timur",
      postalCode: "13940",
      addressCountry: "ID",
    },
    hasMap: "https://maps.google.com/maps?q=Tazakka+Group+Service+Cakung",
    department: [
      {
        "@type": "LocalBusiness",
        name: "Tazakka Group Service - Outlet Jakarta Timur",
        telephone: "+6285135465355",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan",
          addressLocality: "Cakung",
          addressRegion: "Jakarta Timur",
          postalCode: "13940",
          addressCountry: "ID",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Tazakka Group Service - Outlet Bekasi",
        telephone: "+6285138945861",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Raya Jatimekar No.1, RT.006/RW.012, Kp. Cakung, Jatimekar",
          addressLocality: "Jatiasih",
          addressRegion: "Bekasi",
          postalCode: "17422",
          addressCountry: "ID",
        },
      },
    ],
    areaServed: [
      { "@type": "City", name: "Cakung" },
      { "@type": "AdministrativeArea", name: "Jakarta Timur" },
      { "@type": "AdministrativeArea", name: "Jakarta" },
      { "@type": "AdministrativeArea", name: "Bekasi" },
      { "@type": "AdministrativeArea", name: "Jatiasih" },
      { "@type": "AdministrativeArea", name: "Jatimekar" },
      { "@type": "Place", name: "Jabodetabek" },
    ],
    serviceType: [
      "Service HP", "Service Laptop", "Service Komputer", "Service PC",
      "Service Printer", "Ganti LCD HP", "Upgrade SSD Laptop",
      "Install Windows", "Cleaning Laptop", "Cleaning Komputer", "Rakit PC",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
  },

  /* ============================
     2. SITENAVIGATION ELEMENT
     (Helps Google generate Sitelinks)
  ============================ */
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Menu Utama Tazakka Group Service",
    itemListElement: [
      {
        "@type": "SiteLinksSearchBox",
        url: "https://tazakkagroup.vercel.app/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://tazakkagroup.vercel.app/cek-servis?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ListItem",
        position: 1,
        name: "Layanan Service",
        url: "https://tazakkagroup.vercel.app/layanan",
        description: "Layanan service HP, laptop, komputer, printer, dan PC terpercaya",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outlet Kami",
        url: "https://tazakkagroup.vercel.app/#location",
        description: "Lokasi outlet Tazakka Group Service di Jakarta Timur dan Bekasi",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Produk & Sparepart",
        url: "https://tazakkagroup.vercel.app/produk",
        description: "Jual sparepart laptop, HP, dan komputer berkualitas",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Cek Status Perbaikan",
        url: "https://tazakkagroup.vercel.app/cek-servis",
        description: "Cek status perbaikan perangkat Anda secara real-time",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Booking Service",
        url: "https://tazakkagroup.vercel.app/booking",
        description: "Booking service online mudah dan cepat",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Garansi Service",
        url: "https://tazakkagroup.vercel.app/garansi",
        description: "Informasi garansi layanan service Tazakka Group",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Tentang Kami",
        url: "https://tazakkagroup.vercel.app/tentang-kami",
        description: "Profil dan sejarah Tazakka Group Service",
      },
    ],
  },
];

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

        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </body>
    </html>
  );
}
