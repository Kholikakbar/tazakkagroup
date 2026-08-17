"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  MessageCircle,
  Phone,
  ShoppingBag,
  CalendarCheck,
  ClipboardList,
  Home,
  Wrench,

} from "lucide-react";

const serviceDropdownItems = [
  {
    icon: Smartphone,
    label: "Service HP / Smartphone",
    desc: "LCD, Baterai, Mati Total, Bypass",
    href: "/layanan#hp",
  },
  {
    icon: Laptop,
    label: "Service Laptop",
    desc: "Deep Cleaning, Re-Pasta, Upgrade, Engsel",
    href: "/layanan#laptop",
  },
  {
    icon: Monitor,
    label: "Service PC / Rakit PC",
    desc: "Custom Build, Troubleshoot, Upgrade",
    href: "/layanan#pc",
  },
  {
    icon: Printer,
    label: "Service Printer",
    desc: "Catridge, Head, Infus Tinta, Paper Jam",
    href: "/layanan#printer",
  },
];

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Layanan Service", href: "/layanan", icon: Wrench, hasDropdown: true },
  { label: "Produk & Sparepart", href: "/produk", icon: ShoppingBag },
  { label: "Booking Service", href: "/booking", icon: CalendarCheck },
  { label: "Cek Status Perbaikan", href: "/cek-servis", icon: ClipboardList },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/produk?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServiceOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main navbar row */}
        <div className="flex items-center justify-between h-12 md:h-14 gap-4 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" id="navbar-logo">
            <Image 
              src="/images/logo.png" 
              alt="Tazakka Group Logo" 
              width={48}
              height={48}
              className="h-7 md:h-8 w-auto object-contain group-hover:opacity-90 transition-opacity" 
            />
            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-extrabold leading-tight tracking-tight animate-shimmer-text">
                TazakkaGroup
              </h1>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-tgs-gray-text font-medium -mt-0.5">
                Service Center
              </p>
            </div>
          </Link>

          {/* Search Bar — Always visible */}
          <div className="flex flex-1 max-w-xl ml-3 mr-2 md:mx-6">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-2.5 md:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-4.5 md:h-4.5 text-tgs-gray-text" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari produk..."
                className="w-full pl-8 md:pl-11 pr-3 md:pr-4 py-1.5 md:py-2 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-xs md:text-sm text-tgs-dark placeholder:text-tgs-gray-text/60 focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all"
                id="search-bar"
              />
            </form>
          </div>

          {/* Right actions — far right corner */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-tgs-green hover:bg-tgs-green-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              id="cta-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-tgs-gray transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-tgs-dark" />
              ) : (
                <Menu className="w-5 h-5 text-tgs-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation links — Desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-2 -mt-1" id="desktop-nav">
          {navLinks.map((link) => (
            <div key={link.label} className="relative nav-item group">
              <Link
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-tgs-dark/80 hover:text-tgs-red rounded-lg hover:bg-tgs-red-light transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

              {/* Dropdown for Layanan Service */}
              {link.hasDropdown && (
                <div className="nav-dropdown absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-xl border border-tgs-gray-medium/50 p-2 z-50">
                  {serviceDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-tgs-red-light transition-all duration-200 group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-tgs-gray flex items-center justify-center group-hover/item:bg-tgs-red group-hover/item:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-tgs-dark group-hover/item:text-tgs-red transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-tgs-gray-text">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>

    {/* Mobile Menu */}
    <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`relative w-4/5 max-w-sm h-full bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Nav Links */}
          <nav className="p-3">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                      className="w-full flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-tgs-dark rounded-lg hover:bg-tgs-gray transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <link.icon className="w-4.5 h-4.5 text-tgs-red" />
                        {link.label}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isMobileServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isMobileServiceOpen && (
                      <div className="pl-4 pb-2 animate-slide-down">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-tgs-dark/80 rounded-lg hover:bg-tgs-red-light transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-tgs-gray-text" />
                            <div>
                              <p className="font-medium">{item.label}</p>
                              <p className="text-xs text-tgs-gray-text">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-tgs-dark rounded-lg hover:bg-tgs-gray transition-colors"
                  >
                    <link.icon className="w-4.5 h-4.5 text-tgs-red" />
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-4 border-t border-tgs-gray-medium mt-4 space-y-3">
            <a
              href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20ingin%20konsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-tgs-green hover:bg-tgs-green-dark text-white w-full py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi Gratis via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </>
  );
}
