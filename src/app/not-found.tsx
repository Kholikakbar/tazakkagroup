import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft, MessageCircle, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-[70vh] bg-tgs-gray flex items-center justify-center px-4">
        <div className="text-center max-w-lg py-16 md:py-24">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[160px] font-extrabold text-tgs-gray-medium/50 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-tgs-red/10 rounded-full flex items-center justify-center animate-pulse-soft">
                <Search className="w-10 h-10 text-tgs-red" />
              </div>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-xl md:text-2xl font-extrabold text-tgs-dark mb-3">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text mb-8 max-w-md mx-auto leading-relaxed">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            Silakan kembali ke halaman utama atau hubungi kami jika butuh
            bantuan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30"
            >
              <Home className="w-4 h-4" />
              Ke Halaman Utama
            </Link>
            <a
              href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20butuh%20bantuan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border border-tgs-gray-medium text-tgs-dark hover:border-tgs-green hover:text-tgs-green px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
