import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaraBookingPage() {
  const steps = [
    {
      title: "Pilih Jenis Layanan",
      description: "Tentukan jenis perangkat Anda (HP, Laptop, PC, atau Printer) dan masalah yang dialami.",
    },
    {
      title: "Isi Formulir Booking",
      description: "Masukkan data diri, nomor WhatsApp, dan deskripsi keluhan di halaman Booking.",
    },
    {
      title: "Kirim via WhatsApp",
      description: "Sistem akan secara otomatis membuatkan format pesan untuk Anda kirimkan ke tim kami melalui WhatsApp.",
    },
    {
      title: "Konfirmasi Jadwal",
      description: "Tim kami akan segera membalas dan mengonfirmasi jadwal kedatangan atau penjemputan perangkat Anda.",
    }
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-tgs-gray pb-16">
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              Cara Booking Service
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Ikuti langkah-langkah mudah berikut untuk menjadwalkan perbaikan perangkat Anda tanpa harus antre lama.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-tgs-gray-medium/50 overflow-hidden p-8 md:p-12">
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-tgs-red text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-tgs-red/30">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-tgs-dark mb-2">{step.title}</h3>
                    <p className="text-tgs-gray-text leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-tgs-gray-medium flex flex-col sm:flex-row items-center justify-between gap-6 bg-tgs-gray-light p-6 rounded-xl">
              <div>
                <h4 className="text-lg font-bold text-tgs-dark mb-1">Sudah paham caranya?</h4>
                <p className="text-sm text-tgs-gray-text">Mulai jadwalkan perbaikan Anda sekarang juga.</p>
              </div>
              <Link href="/booking" className="bg-tgs-red hover:bg-tgs-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-red/20 w-full sm:w-auto justify-center">
                Mulai Booking <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
