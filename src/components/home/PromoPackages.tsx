"use client";

import { Flame, Star, Zap, ArrowRight, Check, Tag } from "lucide-react";

const packages = [
  {
    id: "ganti-lcd-hp",
    badge: "POPULER",
    badgeIcon: Flame,
    badgeColor: "bg-tgs-red",
    title: "Ganti LCD HP / Smartphone",
    desc: "Layar pecah, bergaris, atau blank? Ganti LCD + Touchscreen cepat dan bergaransi.",
    price: "Mulai Rp 285.000",
    originalPrice: "",
    features: [
      "Termasuk LCD & Pemasangan",
      "Tes Fungsi Touchscreen",
      "Pengerjaan Cepat",
      "Garansi 1 Bulan",
    ],
    cta: "Booking Sekarang",
  },
  {
    id: "cleaning-laptop",
    badge: "BEST SELLER",
    badgeIcon: Star,
    badgeColor: "bg-yellow-500",
    title: "Cleaning Laptop / CPU",
    desc: "Perangkat panas atau bising? Bersihkan debu dan ganti thermal paste agar suhu kembali normal.",
    price: "Mulai Rp 150.000",
    originalPrice: "",
    features: [
      "Bongkar & Cleaning Menyeluruh",
      "Ganti Thermal Paste",
      "Cek Suhu & Performa",
      "Mencegah Overheat",
    ],
    cta: "Booking Sekarang",
  },
  {
    id: "install-windows",
    badge: "REKOMENDASI",
    badgeIcon: Zap,
    badgeColor: "bg-tgs-green",
    title: "Install Windows 10 / 11",
    desc: "Laptop lambat, banyak virus, atau error? Install ulang Windows agar kembali fresh dan kencang.",
    price: "Rp 250.000",
    originalPrice: "",
    features: [
      "OS Windows 10 / 11",
      "Pembersihan Virus",
      "Laptop Kembali Cepat",
      "Tersedia Install Aplikasi",
    ],
    cta: "Booking Sekarang",
  },
  {
    id: "rakit-pc-office",
    badge: "HEMAT",
    badgeIcon: Tag,
    badgeColor: "bg-blue-500",
    title: "Rakit Komputer Office",
    desc: "Butuh PC untuk kerja atau admin? Kami rakitkan PC office handal sesuai budget Anda, terima beres.",
    price: "Mulai Rp 1.800.000",
    originalPrice: "",
    features: [
      "Konsultasi Spesifikasi",
      "Komponen Berkualitas",
      "Gratis Rakit",
      "Siap Pakai",
    ],
    cta: "Konsultasi Spek",
  },
];

export default function PromoPackages() {
  return (
    <section className="py-12 md:py-20 bg-tgs-gray" id="promo-packages">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Promo & Paket Service
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
            Paket Service{" "}
            <span className="text-tgs-red">Populer</span>
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text max-w-2xl mx-auto">
            Hemat lebih banyak dengan paket layanan pilihan kami. Semua paket sudah
            termasuk garansi pengerjaan.
          </p>
        </div>

        {/* Package Cards / Mobile Slider */}
        <div className="flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:-mx-4 max-sm:px-4 max-sm:pb-6 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="service-card group bg-white rounded-2xl border border-tgs-gray-medium/60 overflow-hidden flex flex-col hover:border-tgs-red/30 max-sm:w-[85vw] max-sm:snap-center shrink-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className="relative p-5 pb-3">
                <div
                  className={`promo-badge inline-flex items-center gap-1.5 ${pkg.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                >
                  <pkg.badgeIcon className="w-3 h-3" />
                  {pkg.badge}
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-3 flex-1">
                <h3 className="text-base md:text-lg font-bold text-tgs-dark mb-2 group-hover:text-tgs-red transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-xs md:text-sm text-tgs-gray-text leading-relaxed mb-4">
                  {pkg.desc}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl md:text-2xl font-extrabold text-tgs-red">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-xs text-tgs-gray-text line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-sm text-tgs-dark/80"
                    >
                      <Check className="w-4 h-4 text-tgs-green shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-5 pt-0 mt-auto">
                <a
                  href={`https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-tgs-dark hover:bg-tgs-red text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group/cta"
                >
                  {pkg.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
