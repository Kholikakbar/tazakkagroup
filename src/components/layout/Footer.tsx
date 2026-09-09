"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowUp,
  Wrench,
  MessageCircle,
  MapPin,
  Mail
} from "lucide-react";

const tentangKamiLinks = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Outlet Kami", href: "/#location" },
  { label: "Layanan Service", href: "/layanan" },
];

const layananLinks = [
  { label: "Cara Booking Service", href: "/cara-booking" },
  { label: "Garansi & Pengembalian", href: "/garansi" },
  { label: "Cek Status Perbaikan", href: "/cek-servis" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-tgs-dark font-sans" id="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Column 1: Logo & Contacts */}
          <div className="space-y-8 lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <Image 
                src="/images/logo.png" 
                alt="Tazakka Group Logo" 
                width={48}
                height={48}
                className="h-10 w-auto object-contain" 
              />
              <div>
                <h3 className="text-xl font-extrabold leading-tight animate-shimmer-text">
                  TazakkaGroup
                </h3>
                <p className="text-xs text-tgs-gray-text font-medium">Service Center</p>
              </div>
            </div>

            {/* Contacts */}
            <div className="space-y-5">
              <div>
                <p className="text-sm text-tgs-gray-text mb-2">WhatsApp</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-tgs-gray-text text-sm">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <a href="https://wa.me/6285135465355" target="_blank" rel="noopener noreferrer" className="hover:text-tgs-red transition-colors duration-200">
                      0851-3546-5355 <span className="text-xs text-tgs-gray-text/70">(Jakarta Timur)</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-tgs-gray-text text-sm">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <a href="https://wa.me/6285138945861" target="_blank" rel="noopener noreferrer" className="hover:text-tgs-red transition-colors duration-200">
                      0851-3894-5861 <span className="text-xs text-tgs-gray-text/70">(Bekasi)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-tgs-gray-text mb-2">Telepon</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-tgs-gray-text text-sm">
                    <Phone className="w-4 h-4 shrink-0" />
                    <a href="tel:+6285135465355" className="hover:text-tgs-red transition-colors duration-200">
                      0851-3546-5355 <span className="text-xs text-tgs-gray-text/70">(Jakarta Timur)</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-tgs-gray-text text-sm">
                    <Phone className="w-4 h-4 shrink-0" />
                    <a href="tel:+6285138945861" className="hover:text-tgs-red transition-colors duration-200">
                      0851-3894-5861 <span className="text-xs text-tgs-gray-text/70">(Bekasi)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-tgs-gray-text mb-1">Email</p>
                <div className="flex items-center gap-2 text-tgs-gray-text text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:tazakkagroupservice@gmail.com" className="hover:text-tgs-red transition-colors duration-200">
                    tazakkagroupservice@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Tentang Kami */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-tgs-dark mb-6">
              Tentang Kami
            </h4>
            <ul className="space-y-4">
              {tentangKamiLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-tgs-gray-text hover:text-tgs-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Penjualan / Layanan */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-tgs-dark mb-6">
              Penjualan & Layanan
            </h4>
            <ul className="space-y-4">
              {layananLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-tgs-gray-text hover:text-tgs-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Payment & Shipping */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col gap-3">
              {/* Payment Methods */}
              <div>
                <h4 className="text-base font-bold text-tgs-dark mb-2">
                  Metode Pembayaran
                </h4>
                <div className="w-full max-w-[280px]">
                  <Image
                    src="/images/payment-methods.png"
                    alt="Metode Pembayaran"
                    width={280}
                    height={186}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Shipping Partners */}
              <div>
                <h4 className="text-base font-bold text-tgs-dark mb-2">
                  Metode Pengiriman
                </h4>
                <div className="relative w-full max-w-[280px] h-12 overflow-hidden">
                  <Image
                    src="/images/shipping-methods.png"
                    alt="Metode Pengiriman"
                    width={280}
                    height={280}
                    className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* SEO Text Block */}
        <div className="mt-12 pt-8 border-t border-tgs-gray-medium/50 text-xs text-tgs-gray-text leading-relaxed text-justify md:text-left">
          <h4 className="font-bold text-tgs-dark mb-2">Tazakka Group Service - Pusat Service HP, Laptop &amp; PC Terbaik di Jakarta Timur &amp; Bekasi</h4>
          <p>
            Tazakka Group Service (TGS) adalah pusat layanan perbaikan dan penjualan sparepart terpercaya dengan dua lokasi workshop: di <strong>Cakung, Jakarta Timur</strong> dan <strong>Jatiasih, Bekasi</strong>. Kami memiliki teknisi profesional yang berpengalaman dalam menangani berbagai kerusakan perangkat elektronik seperti HP/Smartphone, Laptop, Komputer (PC), dan Printer. Kami bangga melayani pelanggan dari seluruh area <strong>Jakarta Timur, Jakarta, Bekasi, Depok, dan seluruh wilayah Jabodetabek</strong>. Nikmati layanan antar-jemput perangkat (pickup &amp; delivery) se-Jabodetabek dan layanan pengiriman dari seluruh Indonesia. Ganti LCD HP, upgrade SSD laptop, rakit PC custom, hingga perbaikan mati total — semuanya dikerjakan secara transparan, cepat, dan bergaransi.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#e5e5e5] relative mt-10 md:mt-0">
        {/* Scroll to top circle button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-5 right-8 md:right-12 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-tgs-gray-text hover:text-tgs-red transition-colors z-20 border border-gray-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-sm text-tgs-gray-text font-medium text-center md:text-left flex flex-col sm:flex-row sm:gap-2">
            <span>© {new Date().getFullYear()} Tazakka Group Service. All Rights Reserved.</span>
            <Link href="/#cookie" className="text-tgs-red hover:underline mt-1 sm:mt-0">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
