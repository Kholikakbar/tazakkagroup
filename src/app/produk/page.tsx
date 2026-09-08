import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProdukPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-tgs-gray flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-tgs-gray-medium/50 p-8 md:p-12 text-center animate-fade-in relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-tgs-red/5 rounded-bl-full -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-tgs-dark/5 rounded-tr-full -z-0"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-tgs-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-tgs-red" />
            </div>
            
            <div className="inline-block bg-tgs-dark/5 text-tgs-dark text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Coming Soon
            </div>
            
            <h1 className="text-3xl font-extrabold text-tgs-dark mb-4">
              Toko Online <span className="text-tgs-red">Tazakka</span>
            </h1>
            
            <p className="text-tgs-gray-text text-base mb-8 leading-relaxed">
              Kami sedang menyiapkan katalog produk dan sparepart original untuk melengkapi kebutuhan perbaikan perangkat Anda. Nantikan kehadirannya!
            </p>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-tgs-dark hover:bg-tgs-red text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-tgs-dark/20 hover:shadow-tgs-red/30 hover:-translate-y-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
