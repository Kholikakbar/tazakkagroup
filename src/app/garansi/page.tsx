import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";

export default function GaransiPage() {
  const kebijakan = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-tgs-red" />,
      title: "Garansi Service 30 Hari",
      description: "Kami memberikan garansi service selama 30 hari untuk setiap perbaikan yang dilakukan oleh teknisi kami, terhitung sejak perangkat diambil."
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-tgs-red" />,
      title: "Kebijakan Pengembalian (Refund)",
      description: "Jika perangkat yang telah diservice mengalami kerusakan yang sama dan tidak dapat kami perbaiki ulang, kami akan mengembalikan biaya service (jasa) 100%."
    },
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-tgs-gray pb-16">
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              Garansi & Pengembalian
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Ketenangan pikiran Anda adalah prioritas kami. Pelajari kebijakan garansi dan pengembalian dana kami.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-tgs-gray-medium/50 overflow-hidden p-8 md:p-12">
            
            <div className="grid md:grid-cols-2 gap-8">
              {kebijakan.map((item, index) => (
                <div key={index} className="bg-tgs-gray/50 rounded-xl p-6 border border-tgs-gray-medium">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-tgs-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-tgs-gray-text leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-bold text-tgs-dark mb-4">Syarat & Ketentuan Klaim Garansi:</h3>
              <ul className="space-y-3 text-sm text-tgs-gray-text list-disc pl-5">
                <li>Wajib melampirkan nota service atau ID Perbaikan.</li>
                <li>Segel garansi dari Tazakka Group Service tidak boleh rusak atau robek.</li>
                <li>Garansi hanya berlaku untuk kerusakan yang sama seperti keluhan awal.</li>
                <li>Kerusakan akibat kelalaian pengguna (jatuh, kena air, dsb) tidak termasuk dalam garansi.</li>
                <li>Garansi sparepart mengikuti masa garansi dari distributor atau pabrik (berbeda-beda tergantung jenis sparepart).</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-tgs-gray-medium flex flex-col sm:flex-row items-center justify-between gap-6 bg-tgs-gray-light p-6 rounded-xl">
              <div>
                <h4 className="text-lg font-bold text-tgs-dark mb-1">Ada keluhan setelah perbaikan?</h4>
                <p className="text-sm text-tgs-gray-text">Hubungi tim kami untuk klaim garansi.</p>
              </div>
              <a href="https://wa.me/6285135465355" target="_blank" rel="noopener noreferrer" className="bg-tgs-green hover:bg-tgs-green-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-green/20 w-full sm:w-auto justify-center">
                Chat via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
