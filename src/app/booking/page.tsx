"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { CalendarCheck, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    kategori: "",
    tanggal: "",
    keluhan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const kategoriLabel: Record<string, string> = {
    hp: "Service HP / Smartphone",
    laptop: "Service Laptop",
    pc: "Service PC / Rakit PC",
    printer: "Service Printer",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the WhatsApp message with form data
    const lines = [
      `Halo TGS, saya ingin *booking service*.`,
      ``,
      `📋 *Data Booking:*`,
      `👤 Nama: ${formData.nama}`,
      `📱 No. WA: ${formData.whatsapp}`,
      `🔧 Layanan: ${kategoriLabel[formData.kategori] || formData.kategori}`,
      `📅 Rencana Tanggal: ${formData.tanggal}`,
      ``,
      `📝 *Keluhan:*`,
      formData.keluhan || "(Tidak disebutkan)",
      ``,
      `Mohon konfirmasi jadwal dan estimasi biaya. Terima kasih! 🙏`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/6285135465355?text=${message}`;

    // Small delay for UX
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  const isFormValid =
    formData.nama.trim() !== "" &&
    formData.whatsapp.trim() !== "" &&
    formData.kategori !== "" &&
    formData.tanggal !== "" &&
    formData.keluhan.trim() !== "";

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-tgs-gray pb-16">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block bg-tgs-red/20 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Jadwalkan Service
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              Booking Service Online
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Hemat waktu Anda! Booking sekarang untuk mendapatkan prioritas
              antrean dan estimasi biaya lebih awal.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-tgs-gray-medium/50 overflow-hidden flex flex-col md:flex-row">
            {/* Info Section */}
            <div className="bg-tgs-dark text-white p-8 md:w-1/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Kenapa Booking?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tgs-red">1</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Bebas antre saat tiba di toko
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tgs-red">2</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Prioritas pengerjaan oleh teknisi
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-tgs-red">3</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Estimasi biaya transparan dari awal
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-10 space-y-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-tgs-red" />
                  <div className="text-sm">
                    <p className="font-semibold text-white/90">
                      Jam Operasional
                    </p>
                    <p className="text-white/60">
                      Senin - Sabtu (09:00 - 21:00)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-tgs-red" />
                  <div className="text-sm">
                    <p className="font-semibold text-white/90">
                      Lokasi Workshop
                    </p>
                    <p className="text-white/60">
                      1. Penggilingan, Cakung, Jakarta Timur
                    </p>
                    <p className="text-white/60">
                      2. Jatimekar, Jatiasih, Bekasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-8 md:w-2/3">
              <div className="flex items-center gap-3 mb-6">
                <CalendarCheck className="w-6 h-6 text-tgs-red" />
                <h2 className="text-xl font-extrabold text-tgs-dark">
                  Formulir Booking
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="nama"
                      className="text-sm font-semibold text-tgs-dark"
                    >
                      Nama Lengkap <span className="text-tgs-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-4 py-2.5 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="whatsapp"
                      className="text-sm font-semibold text-tgs-dark"
                    >
                      No. WhatsApp <span className="text-tgs-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Contoh: 0851..."
                      required
                      className="w-full px-4 py-2.5 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="kategori"
                      className="text-sm font-semibold text-tgs-dark"
                    >
                      Kategori Layanan <span className="text-tgs-red">*</span>
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      value={formData.kategori}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all text-tgs-dark"
                    >
                      <option value="">Pilih Kategori...</option>
                      <option value="hp">Service HP / Smartphone</option>
                      <option value="laptop">Service Laptop</option>
                      <option value="pc">Service PC / Rakit PC</option>
                      <option value="printer">Service Printer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="tanggal"
                      className="text-sm font-semibold text-tgs-dark"
                    >
                      Rencana Tanggal <span className="text-tgs-red">*</span>
                    </label>
                    <input
                      type="date"
                      id="tanggal"
                      name="tanggal"
                      value={formData.tanggal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all text-tgs-dark"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="keluhan"
                    className="text-sm font-semibold text-tgs-dark"
                  >
                    Keluhan / Detail Kerusakan{" "}
                    <span className="text-tgs-red">*</span>
                  </label>
                  <textarea
                    id="keluhan"
                    name="keluhan"
                    rows={4}
                    value={formData.keluhan}
                    onChange={handleChange}
                    placeholder="Ceritakan kendala pada perangkat Anda..."
                    required
                    className="w-full px-4 py-2.5 bg-tgs-gray border border-tgs-gray-medium rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-tgs-red/20 focus:border-tgs-red/40 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      Lanjut Booking via WhatsApp
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
