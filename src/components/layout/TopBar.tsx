"use client";

import { Clock, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-tgs-dark text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-1 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0">
        {/* Announcement */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <MapPin className="w-3.5 h-3.5 text-tgs-red shrink-0 hidden md:block" />
          <p className="text-white/90">
            <span className="font-semibold text-white">Pusat Service & Upgrade</span>{" "}
            HP, Laptop, Komputer & Printer Terpercaya{" "}
            <span className="text-tgs-red font-semibold">Jabodetabek & Indonesia</span>
          </p>
        </div>

        {/* Right side: Social + Hours */}
        <div className="flex items-center gap-4">
          {/* Operating Hours */}
          <div className="hidden lg:flex items-center gap-1.5 text-white/70">
            <Clock className="w-3.5 h-3.5" />
            <span>Senin - Sabtu: 09:00 - 21:00 WIB</span>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-4 bg-white/20" />

          {/* Social Media */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/tazakkagroupservice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-tgs-red transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61569961438204"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-tgs-red transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* TikTok (custom SVG since Lucide doesn't have it) */}
            <a
              href="https://www.tiktok.com/@tazakkakomputer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-tgs-red transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
