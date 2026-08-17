import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  ShieldCheck,
  Users,
  Target,
  Eye,
  Heart,
  Wrench,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Award,
  Zap,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Tazakka Group Service",
  description:
    "Kenali lebih dekat Tazakka Group Service (TGS) — pusat jasa service HP, Laptop, PC & Printer terpercaya. Visi, misi, dan nilai-nilai yang kami pegang.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Kejujuran",
    desc: "Transparan dalam diagnosa, estimasi biaya, dan proses pengerjaan. Tidak ada biaya tersembunyi.",
  },
  {
    icon: Award,
    title: "Kualitas",
    desc: "Menggunakan sparepart terbaik dan teknik pengerjaan profesional untuk hasil yang optimal.",
  },
  {
    icon: Zap,
    title: "Kecepatan",
    desc: "Pengerjaan tepat waktu tanpa mengorbankan kualitas. Kami menghargai waktu pelanggan.",
  },
  {
    icon: Handshake,
    title: "Kepuasan",
    desc: "Kepuasan pelanggan adalah prioritas utama. Garansi 30 hari untuk setiap service.",
  },
];

const milestones = [
  { year: "2023", event: "Tazakka Group Service didirikan di Jakarta Timur" },
  { year: "2024", event: "Mulai menerima service dari luar kota via ekspedisi" },
  { year: "2025", event: "Memperluas layanan ke Rakit PC Custom & Service Printer" },
  { year: "2026", event: "Meluncurkan website resmi dengan fitur tracking real-time" },
];

export default function TentangKamiPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-14 md:py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tgs-red/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-tgs-red/5 rounded-full translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <div className="inline-block bg-tgs-red/20 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Tentang Kami
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Tazakka Group Service
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              Pusat jasa repair & penjualan sparepart HP, Laptop, Komputer, dan
              Printer terpercaya di Jakarta dan seluruh Indonesia.
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  Siapa Kami
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-tgs-dark mb-4">
                  Solusi Terpercaya untuk{" "}
                  <span className="text-tgs-red">Perangkat Elektronik</span>{" "}
                  Anda
                </h2>
                <div className="space-y-4 text-sm md:text-base text-tgs-gray-text leading-relaxed">
                  <p>
                    <strong className="text-tgs-dark">
                      Tazakka Group Service (TGS)
                    </strong>{" "}
                    adalah pusat service dan penjualan sparepart elektronik yang
                    berdiri sejak 2023 di Jakarta Timur. Kami hadir sebagai
                    solusi bagi masyarakat yang membutuhkan layanan perbaikan
                    perangkat elektronik dengan kualitas terbaik dan harga yang
                    transparan.
                  </p>
                  <p>
                    Dengan tim teknisi yang berpengalaman dan terus mengikuti
                    perkembangan teknologi terbaru, kami mampu menangani berbagai
                    jenis kerusakan mulai dari yang ringan hingga berat — untuk
                    perangkat HP/Smartphone, Laptop, Komputer/PC, dan Printer.
                  </p>
                  <p>
                    Kami percaya bahwa setiap pelanggan berhak mendapatkan
                    pelayanan yang jujur, profesional, dan bergaransi. Itulah
                    mengapa kami selalu memberikan estimasi biaya di awal,
                    menggunakan sparepart berkualitas, dan memberikan garansi 30
                    hari untuk setiap pengerjaan.
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-tgs-gray rounded-2xl p-5 md:p-6 text-center border border-tgs-gray-medium/50">
                  <div className="w-12 h-12 bg-tgs-red/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-tgs-red" />
                  </div>
                  <div className="text-2xl font-extrabold text-tgs-dark">
                    500+
                  </div>
                  <p className="text-xs text-tgs-gray-text mt-1">
                    Perangkat Diperbaiki
                  </p>
                </div>
                <div className="bg-tgs-gray rounded-2xl p-5 md:p-6 text-center border border-tgs-gray-medium/50">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="text-2xl font-extrabold text-tgs-dark">
                    300+
                  </div>
                  <p className="text-xs text-tgs-gray-text mt-1">
                    Pelanggan Puas
                  </p>
                </div>
                <div className="bg-tgs-gray rounded-2xl p-5 md:p-6 text-center border border-tgs-gray-medium/50">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-2xl font-extrabold text-tgs-dark">
                    Jakarta
                  </div>
                  <p className="text-xs text-tgs-gray-text mt-1">
                    Lokasi Workshop
                  </p>
                </div>
                <div className="bg-tgs-gray rounded-2xl p-5 md:p-6 text-center border border-tgs-gray-medium/50">
                  <div className="w-12 h-12 bg-tgs-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck className="w-6 h-6 text-tgs-green" />
                  </div>
                  <div className="text-2xl font-extrabold text-tgs-dark">
                    30 Hari
                  </div>
                  <p className="text-xs text-tgs-gray-text mt-1">
                    Garansi Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-12 md:py-20 bg-tgs-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Visi */}
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-tgs-gray-medium/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-tgs-red/10 rounded-2xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-tgs-red" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-tgs-dark mb-4">
                  Visi
                </h3>
                <p className="text-sm md:text-base text-tgs-gray-text leading-relaxed">
                  Menjadi pusat service elektronik terpercaya dan terdepan di
                  Indonesia, yang mengutamakan kualitas, transparansi, dan
                  kepuasan pelanggan di setiap layanan yang kami berikan.
                </p>
              </div>

              {/* Misi */}
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-tgs-gray-medium/50 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-tgs-dark mb-4">
                  Misi
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-tgs-gray-text">
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-tgs-red shrink-0 mt-1" />
                    <span>
                      Memberikan layanan service berkualitas tinggi dengan harga
                      yang transparan dan kompetitif.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-tgs-red shrink-0 mt-1" />
                    <span>
                      Menggunakan sparepart original dan berkualitas untuk setiap
                      perbaikan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-tgs-red shrink-0 mt-1" />
                    <span>
                      Terus meningkatkan keahlian dan pengetahuan teknisi
                      mengikuti perkembangan teknologi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ArrowRight className="w-4 h-4 text-tgs-red shrink-0 mt-1" />
                    <span>
                      Membangun hubungan jangka panjang dengan pelanggan
                      melalui pelayanan yang jujur dan profesional.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                Nilai-Nilai Kami
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
                Prinsip yang Kami{" "}
                <span className="text-tgs-red">Pegang Teguh</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 md:p-7 bg-tgs-gray rounded-2xl border border-transparent hover:border-tgs-red/20 hover:bg-tgs-red-light transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 text-center"
                >
                  <div className="w-14 h-14 bg-tgs-red/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-tgs-red group-hover:text-white transition-all duration-300">
                    <item.icon className="w-7 h-7 text-tgs-red group-hover:text-white transition-colors" />
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
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-20 bg-tgs-gray">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                Perjalanan Kami
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark">
                Milestone <span className="text-tgs-red">TGS</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-tgs-gray-medium" />

              <div className="space-y-6">
                {milestones.map((item, index) => (
                  <div key={index} className="flex items-start gap-5 relative">
                    {/* Dot */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 text-xs font-bold ${
                        index === milestones.length - 1
                          ? "bg-tgs-red text-white shadow-lg shadow-red-500/30"
                          : "bg-white border-2 border-tgs-gray-medium text-tgs-dark"
                      }`}
                    >
                      {item.year}
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-xl p-5 border border-tgs-gray-medium/50 flex-1 hover:shadow-md transition-shadow">
                      <p className="text-sm font-medium text-tgs-dark">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-tgs-dark to-tgs-dark-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-tgs-red/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-tgs-red/5 rounded-full translate-y-1/2" />

          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Siap Memperbaiki Perangkat Anda?
            </h2>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto mb-8">
              Hubungi kami sekarang untuk konsultasi gratis. Tim kami siap
              membantu 24/7 melalui WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-tgs-green hover:bg-tgs-green-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi via WhatsApp
              </a>
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30"
              >
                Booking Service Online
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
