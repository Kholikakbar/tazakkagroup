import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { Search, ArrowRight, Activity, CheckCircle, Package } from "lucide-react";
import Link from "next/link";

export default function PanduanTrackingPage() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Masukkan Data",
      description: "Buka halaman Cek Status Perbaikan, lalu masukkan ID Perbaikan atau Nomor WhatsApp yang Anda daftarkan saat melakukan service.",
    },
    {
      icon: <Activity className="w-6 h-6 text-white" />,
      title: "Pantau Status",
      description: "Sistem akan menampilkan status terkini perangkat Anda (Menunggu Antrean, Sedang Dikerjakan, atau Menunggu Sparepart).",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Selesai Diperbaiki",
      description: "Jika status menunjukkan 'Selesai', berarti perangkat Anda sudah siap untuk diambil atau dikirim.",
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Pengambilan",
      description: "Ambil perangkat Anda di outlet kami dengan menunjukkan nota service, atau tunggu kurir kami mengantarkannya.",
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
              Cek Status Perbaikan
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Panduan lengkap cara memantau progres perbaikan perangkat Anda secara real-time.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-tgs-gray-medium/50 overflow-hidden p-8 md:p-12">
            
            <div className="grid sm:grid-cols-2 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-tgs-red flex items-center justify-center font-bold shadow-lg shadow-tgs-red/30">
                    {step.icon}
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
                <h4 className="text-lg font-bold text-tgs-dark mb-1">Cek perangkat Anda sekarang</h4>
                <p className="text-sm text-tgs-gray-text">Masukkan ID Perbaikan untuk melihat status terbaru.</p>
              </div>
              <Link href="/tracking" className="bg-tgs-red hover:bg-tgs-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-red/20 w-full sm:w-auto justify-center">
                Mulai Cek Status <ArrowRight className="w-4 h-4" />
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
