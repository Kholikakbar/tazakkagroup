"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Eye,
  Award,
  ArrowRight,
} from "lucide-react";

interface ContentSlide {
  type: "content";
  image: string;
  title: string;
  highlight: string;
  subtitle: string;
  desc: string;
  cta: string;
  ctaLink: string;
}

interface BannerSlide {
  type: "banner";
  image: string;
  alt: string;
  link: string;
}

type Slide = ContentSlide | BannerSlide;

const slides: Slide[] = [
  {
    type: "content",
    image: "/images/hero-banner-1.png",
    title: "SOLUSI TEPAT SERVICE",
    highlight: "HP, LAPTOP, PC & PRINTER",
    subtitle: "Layanan Cepat, Transparan & Bergaransi",
    desc: "Teknisi berpengalaman siap menangani berbagai kerusakan perangkat Anda dengan pengerjaan profesional dan estimasi biaya jelas di awal.",
    cta: "Lihat Semua Layanan",
    ctaLink: "/layanan",
  },
  {
    type: "content",
    image: "/images/lcd.png",
    title: "LAYAR HP PECAH?",
    highlight: "GANTI LCD SEKARANG",
    subtitle: "Promo Spesial Mulai Rp 285.000",
    desc: "Layar retak, blank, atau bergaris? Kembalikan kondisi HP Anda seperti baru lagi! Pengerjaan cepat, sentuhan layar responsif, dan pastinya bergaransi.",
    cta: "Klaim Promo LCD",
    ctaLink: "https://wa.me/6285135465355?text=Halo%20Admin,%20saya%20mau%20klaim%20promo%20Ganti%20LCD%20Mulai%20285rb",
  },
  {
    type: "content",
    image: "/images/hdd.png",
    title: "LAPTOP MULAI LEMOT?",
    highlight: "UPGRADE SSD SEKARANG",
    subtitle: "Paket Promo Mulai Rp 700.000",
    desc: "Tingkatkan performa laptop hingga 10x lebih kencang! Booting instan, anti-lag, sudah termasuk install ulang OS, aplikasi, dan backup data Anda.",
    cta: "Klaim Promo Upgrade",
    ctaLink: "https://wa.me/6285135465355?text=Halo%20Admin,%20saya%20mau%20tanya%20Paket%20Upgrade%20HDD%20ke%20SSD",
  },
  {
    type: "content",
    image: "/images/hero-banner-2.png",
    title: "RAKIT PC & UPGRADE LAPTOP",
    highlight: "ANTI RIBET",
    subtitle: "Free Konsultasi & Install Software",
    desc: "Custom build PC gaming, office, atau workstation sesuai kebutuhan Anda. Upgrade RAM, SSD, dan thermal paste laptop dengan harga terjangkau.",
    cta: "Konsultasi Sekarang",
    ctaLink: "https://wa.me/6285135465355",
  },
];

const valueBadges = [
  { icon: Eye, text: "Pengerjaan Transparan" },
  { icon: Award, text: "Sparepart Original & Bergaransi" },
  { icon: Truck, text: "Layanan Antar-Jemput Jabodetabek" },
  { icon: ShieldCheck, text: "Kirim & Service dari Seluruh Indonesia" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance in px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide(); // swipe left → next
      } else {
        prevSlide(); // swipe right → prev
      }
    }
  };

  return (
    <section id="hero-section">
      {/* Hero Slider */}
      <div
        className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden bg-tgs-dark"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
              }`}
          >
            {slide.type === "banner" ? (
              /* ===== BANNER SLIDE (Full image, no text overlay) ===== */
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
              </a>
            ) : (
              /* ===== CONTENT SLIDE (With text overlay) ===== */
              <>
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-tgs-dark/90 via-tgs-dark/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-tgs-dark/40 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
                  <div
                    className={`max-w-xl transition-all duration-700 delay-200 ${index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                      }`}
                  >
                    <div className="inline-block bg-tgs-red/90 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-3 md:mb-4 uppercase tracking-wider">
                      Tazakka Group Service
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-1 md:mb-2">
                      {slide.title}
                    </h2>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-tgs-red leading-tight mb-3 md:mb-4">
                      {slide.highlight}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white/90 font-semibold mb-2">
                      {slide.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 mb-5 md:mb-7 max-w-md leading-relaxed hidden sm:block">
                      {slide.desc}
                    </p>
                    <a
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white px-5 md:px-7 py-2.5 md:py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30 group"
                    >
                      {slide.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slider-dot h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-6 bg-tgs-red active"
                : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Value Badges */}
      <div className="bg-white border-b border-tgs-gray-medium">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {valueBadges.map((badge, index) => (
              <div
                key={index}
                className="value-badge flex items-center gap-2.5 bg-tgs-gray rounded-xl px-3 md:px-4 py-2.5 md:py-3 hover:bg-tgs-red-light transition-all duration-300 cursor-default group"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-tgs-red/10 flex items-center justify-center shrink-0 group-hover:bg-tgs-red group-hover:text-white transition-all">
                  <badge.icon className="w-4 h-4 md:w-4.5 md:h-4.5 text-tgs-red group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-tgs-dark/80">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
