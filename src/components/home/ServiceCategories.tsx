"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "hp",
    title: "Service HP / Smartphone",
    image: "/images/service-hp.png",
    color: "from-red-500 to-rose-600",
    items: [
      "Ganti Layar / LCD",
      "Ganti Baterai",
      "Ganti Casing / Frame",
      "Mati Total (Matot)",
      "Bypass / FRP Unlock",
      "Software & Flashing",
    ],
    href: "/layanan#hp",
  },
  {
    id: "laptop",
    title: "Service Laptop",
    image: "/images/service-laptop.png",
    color: "from-blue-500 to-indigo-600",
    items: [
      "Deep Cleaning & Re-Pasta",
      "Upgrade SSD / RAM",
      "Ganti Engsel / Casing",
      "Reball / Service Motherboard",
      "Install OS & Software",
      "Ganti Keyboard / Touchpad",
    ],
    href: "/layanan#laptop",
  },
  {
    id: "pc",
    title: "Service PC / Rakit PC",
    image: "/images/service-pc.png",
    color: "from-purple-500 to-violet-600",
    items: [
      "Rakit PC Custom (Gaming/Office)",
      "Upgrade RAM / SSD / GPU",
      "Deep Cleaning PC",
      "Ganti Power Supply (PSU)",
      "Troubleshooting & Diagnosa",
      "Install OS & Driver",
    ],
    href: "/layanan#pc",
  },
  {
    id: "printer",
    title: "Service Printer",
    image: "/images/service-printer.png",
    color: "from-orange-500 to-amber-600",
    items: [
      "Service Catridge",
      "Cek & Cleaning Head",
      "Infus Tinta Printer",
      "Paper Jam / Roller",
      "Reset Counter",
      "Ganti Drum / Toner",
    ],
    href: "/layanan#printer",
  },
];

export default function ServiceCategories() {
  return (
    <section className="py-12 md:py-20 bg-white" id="service-categories">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Layanan Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
            4 Pilar Utama{" "}
            <span className="text-tgs-red">Tazakka Group Service</span>
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text max-w-2xl mx-auto leading-relaxed">
            Kami menyediakan layanan service profesional untuk berbagai
            perangkat elektronik Anda dengan teknisi berpengalaman dan sparepart
            berkualitas.
          </p>
        </div>

        {/* Service Cards Grid / Mobile Slider */}
        <div className="flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:-mx-4 max-sm:px-4 max-sm:pb-6 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group bg-white rounded-2xl border border-tgs-gray-medium/60 overflow-hidden hover:border-tgs-red/30 max-sm:w-[85vw] max-sm:snap-center shrink-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-base md:text-lg font-bold text-tgs-dark mb-3 group-hover:text-tgs-red transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-1.5 mb-5">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs md:text-sm text-tgs-gray-text"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-tgs-red shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-tgs-red hover:text-tgs-red-hover group/link transition-colors"
                >
                  Lihat Layanan
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
