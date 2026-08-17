"use client";

import {
  Users,
  Calculator,
  ShieldCheck,
  MapPin,
  Clock,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: Users,
    title: "Teknisi Handal & Berpengalaman",
    desc: "Tim teknisi kami tersertifikasi dan berpengalaman menangani berbagai merek dan jenis kerusakan perangkat elektronik.",
  },
  {
    icon: Calculator,
    title: "Estimasi Biaya Jelas di Awal",
    desc: "Sebelum pengerjaan, kami memberikan estimasi biaya yang transparan. Tidak ada biaya tersembunyi, dijamin!",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Pengerjaan & Sparepart",
    desc: "Setiap pengerjaan dilengkapi garansi resmi. Sparepart original dan berkualitas tinggi untuk hasil terbaik.",
  },
  {
    icon: MapPin,
    title: "Lokasi Toko Strategis & Jelas",
    desc: "Toko fisik kami berlokasi strategis di Jakarta, mudah dijangkau dengan transportasi umum maupun pribadi.",
  },
  {
    icon: Clock,
    title: "Pengerjaan Cepat & Tepat Waktu",
    desc: "Kami menghargai waktu Anda. Pengerjaan dilakukan secepat mungkin tanpa mengorbankan kualitas hasil.",
  },
  {
    icon: Headphones,
    title: "Support & Konsultasi 24/7",
    desc: "Tim customer service kami siap membantu menjawab pertanyaan dan memberikan konsultasi kapan saja via WhatsApp.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Keunggulan Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
            Mengapa Memilih{" "}
            <span className="text-tgs-red">Tazakka Group Service?</span>
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan service terbaik dengan standar
            profesional dan kepuasan pelanggan sebagai prioritas utama.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group p-6 md:p-7 bg-tgs-gray rounded-2xl border border-transparent hover:border-tgs-red/20 hover:bg-tgs-red-light transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-tgs-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tgs-red group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-tgs-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-tgs-dark mb-2 group-hover:text-tgs-red transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-tgs-gray-text leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 md:mt-14 bg-gradient-to-r from-tgs-dark to-tgs-dark-light rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-tgs-red/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-24 h-24 bg-tgs-red/5 rounded-full translate-y-1/2" />

          <div className="relative text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
              Butuh Service Sekarang?
            </h3>
            <p className="text-sm md:text-base text-white/70 max-w-md">
              Hubungi kami via WhatsApp untuk konsultasi gratis dan estimasi
              biaya. Respon cepat dalam hitungan menit!
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20butuh%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-tgs-green hover:bg-tgs-green-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 whitespace-nowrap"
            >
              <Headphones className="w-4 h-4" />
              Chat WhatsApp
            </a>
            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30 whitespace-nowrap"
            >
              Booking Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
