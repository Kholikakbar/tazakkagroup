"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  Search,
  Loader2,
  Package,
  User,
  Calendar,
  Monitor,
  AlertCircle,
  CheckCircle2,
  Clock,
  Wrench,
  Truck,
  ArrowRight,
  FileText,
} from "lucide-react";

interface ServiceData {
  service_id: string;
  status: string;
  device_description: string;
  customer_name: string;
  entry_date: string;
}

const SUPABASE_URL = "https://ymbjvwpadbsepxcagbob.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltYmp2d3BhZGJzZXB4Y2FnYm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NzEyOTcsImV4cCI6MjA3NDA0NzI5N30.HKDSaWuKTZphvx37UF_cu5ZuremA6bcipxI6lHRRC7M";

function getStatusConfig(status: string) {
  const lower = status.toLowerCase();

  if (lower.includes("selesai") || lower.includes("diambil")) {
    return {
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      ring: "ring-emerald-500/20",
      dot: "bg-emerald-500",
    };
  }
  if (lower.includes("siap")) {
    return {
      icon: <Truck className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      ring: "ring-blue-500/20",
      dot: "bg-blue-500",
    };
  }
  if (lower.includes("pengerjaan") || lower.includes("proses")) {
    return {
      icon: <Wrench className="w-6 h-6" />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      ring: "ring-amber-500/20",
      dot: "bg-amber-500",
    };
  }
  if (lower.includes("antri") || lower.includes("menunggu")) {
    return {
      icon: <Clock className="w-6 h-6" />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      ring: "ring-orange-500/20",
      dot: "bg-orange-500",
    };
  }
  // default
  return {
    icon: <Package className="w-6 h-6" />,
    color: "text-tgs-gray-text",
    bg: "bg-tgs-gray",
    border: "border-tgs-gray-medium",
    ring: "ring-tgs-gray-text/20",
    dot: "bg-tgs-gray-text",
  };
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default function CekServisPage() {
  const [nomorServis, setNomorServis] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ServiceData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = nomorServis.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setSearched(true);

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/get_service_status_by_number`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ p_service_number: trimmed }),
        }
      );
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setResult(data[0]);
      } else {
        setError("Nomor Servis tidak ditemukan.");
      }
    } catch {
      setError(
        "Terjadi kesalahan saat menghubungi server. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  const statusConfig = result ? getStatusConfig(result.status) : null;

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-tgs-gray pb-16">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              Cek Status Perbaikan
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Masukkan nomor nota/servis Anda untuk mengetahui status perbaikan
              perangkat secara real-time.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 -mt-8 relative z-10">
          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-tgs-gray-medium/50 overflow-hidden p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="nomor-servis"
                className="block text-sm font-semibold text-tgs-dark mb-1"
              >
                Nomor Nota / Servis
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tgs-gray-text pointer-events-none" />
                  <input
                    id="nomor-servis"
                    type="text"
                    value={nomorServis}
                    onChange={(e) => setNomorServis(e.target.value)}
                    placeholder="Contoh: TGS-12345"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-tgs-gray-medium bg-tgs-gray text-tgs-dark font-medium placeholder:text-tgs-gray-text/60 focus:outline-none focus:border-tgs-red focus:ring-4 focus:ring-tgs-red/10 transition-all duration-200"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !nomorServis.trim()}
                  className="bg-tgs-red hover:bg-tgs-red-hover text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-red/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none sm:w-auto w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Mencari...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      Cek Status
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results Section */}
            {searched && !loading && (
              <div className="mt-8 animate-fade-in">
                {/* Error State */}
                {error && (
                  <div className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-red-700 mb-1">
                        Data Tidak Ditemukan
                      </h3>
                      <p className="text-sm text-red-600/80">{error}</p>
                      <p className="text-xs text-red-500/60 mt-2">
                        Pastikan nomor nota yang Anda masukkan sudah benar.
                        Jika masalah berlanjut, silakan hubungi Customer Service
                        kami.
                      </p>
                    </div>
                  </div>
                )}

                {/* Success State */}
                {result && statusConfig && (
                  <div className="relative mt-10 animate-slide-up">
                    {/* Background Glow */}
                    <div className={`absolute -inset-1 ${statusConfig.dot} opacity-20 blur-xl rounded-3xl transition-all duration-700`}></div>
                    
                    <div className="relative bg-white border border-tgs-gray-medium/60 rounded-3xl shadow-2xl overflow-hidden">
                      {/* Top Accent Line */}
                      <div className={`h-2 w-full ${statusConfig.dot}`}></div>

                      <div className="p-5 md:p-6">
                        {/* Status Header */}
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-lg ${statusConfig.bg} ring-2 ${statusConfig.ring} animate-bounce-gentle`}>
                            <div className={`scale-100 ${statusConfig.color}`}>
                              {statusConfig.icon}
                            </div>
                          </div>
                          <p className="text-xs font-bold text-tgs-gray-text tracking-widest uppercase mb-1">
                            Status Servis
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${statusConfig.dot} animate-pulse-soft shadow-sm`} />
                            <h2 className={`text-xl md:text-2xl font-black tracking-tight ${statusConfig.color}`}>
                              {result.status}
                            </h2>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-tgs-gray-medium to-transparent flex-1"></div>
                          <Package className="w-4 h-4 text-tgs-gray-text opacity-50" />
                          <div className="h-px bg-gradient-to-r from-transparent via-tgs-gray-medium to-transparent flex-1"></div>
                        </div>

                        {/* Detail Items */}
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="bg-gradient-to-br from-tgs-gray/80 to-white rounded-2xl p-4 border border-tgs-gray-medium/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-tgs-gray-medium/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                              <User className="w-5 h-5 text-tgs-red" />
                            </div>
                            <p className="text-[10px] font-bold text-tgs-gray-text uppercase tracking-wider mb-1">Nama Pelanggan</p>
                            <p className="text-sm md:text-base font-bold text-tgs-dark">{result.customer_name}</p>
                          </div>

                          <div className="bg-gradient-to-br from-tgs-gray/80 to-white rounded-2xl p-4 border border-tgs-gray-medium/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-tgs-gray-medium/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                              <Monitor className="w-5 h-5 text-tgs-red" />
                            </div>
                            <p className="text-[10px] font-bold text-tgs-gray-text uppercase tracking-wider mb-1">Perangkat</p>
                            <p className="text-sm md:text-base font-bold text-tgs-dark">{result.device_description}</p>
                          </div>

                          <div className="bg-gradient-to-br from-tgs-gray/80 to-white rounded-2xl p-4 border border-tgs-gray-medium/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-tgs-gray-medium/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                              <Calendar className="w-5 h-5 text-tgs-red" />
                            </div>
                            <p className="text-[10px] font-bold text-tgs-gray-text uppercase tracking-wider mb-1">Tanggal Masuk</p>
                            <p className="text-sm md:text-base font-bold text-tgs-dark">{formatDate(result.entry_date)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Help Section */}
            <div className="mt-10 pt-8 border-t border-tgs-gray-medium flex flex-col sm:flex-row items-center justify-between gap-6 bg-tgs-gray/30 p-6 rounded-xl">
              <div>
                <h4 className="text-lg font-bold text-tgs-dark mb-1">
                  Butuh bantuan?
                </h4>
                <p className="text-sm text-tgs-gray-text">
                  Hubungi Customer Service kami jika ada pertanyaan.
                </p>
              </div>
              <a
                href="https://wa.me/6285135465355"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tgs-green hover:bg-tgs-green-dark text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-green/20 w-full sm:w-auto justify-center"
              >
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
