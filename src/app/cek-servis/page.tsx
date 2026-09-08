"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  Search,
  Loader2,
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
  Sparkles,
  Phone,
  Hash,
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

type StatusConfig = {
  icon: React.ReactNode;
  label: string;
  color: string;
  textColor: string;
  glow: string;
  ring: string;
  step: number; // 1-4
};

function getStatusConfig(status: string): StatusConfig {
  const lower = status.toLowerCase();

  if (lower.includes("selesai") || lower.includes("diambil")) {
    return {
      icon: <CheckCircle2 className="w-5 h-5" />,
      label: status,
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
      glow: "shadow-emerald-500/40",
      ring: "ring-emerald-500/30",
      step: 4,
    };
  }
  if (lower.includes("siap")) {
    return {
      icon: <Truck className="w-5 h-5" />,
      label: status,
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400",
      glow: "shadow-blue-500/40",
      ring: "ring-blue-500/30",
      step: 3,
    };
  }
  if (lower.includes("pengerjaan") || lower.includes("proses")) {
    return {
      icon: <Wrench className="w-5 h-5" />,
      label: status,
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-400",
      glow: "shadow-amber-500/40",
      ring: "ring-amber-500/30",
      step: 2,
    };
  }
  if (lower.includes("antri") || lower.includes("menunggu")) {
    return {
      icon: <Clock className="w-5 h-5" />,
      label: status,
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400",
      glow: "shadow-orange-500/40",
      ring: "ring-orange-500/30",
      step: 1,
    };
  }
  return {
    icon: <Wrench className="w-5 h-5" />,
    label: status,
    color: "from-slate-500 to-slate-600",
    textColor: "text-slate-400",
    glow: "shadow-slate-500/40",
    ring: "ring-slate-500/30",
    step: 1,
  };
}

const STEPS = [
  { label: "Antrian", icon: <Clock className="w-3.5 h-3.5" /> },
  { label: "Pengerjaan", icon: <Wrench className="w-3.5 h-3.5" /> },
  { label: "Siap Ambil", icon: <Truck className="w-3.5 h-3.5" /> },
  { label: "Selesai", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
];

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
      <main className="min-h-screen bg-[#0c0f1a] pb-16">
        {/* Dark Hero + Search Card — seamless */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#0c0f1a] via-[#101527] to-[#0f172a] pt-14 pb-10">
          {/* Ambient glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-tgs-red/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyMjIzMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none" />

          <div className="max-w-2xl mx-auto px-4 relative z-10">
            {/* Title block */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 text-white/60 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Sistem Tracking Real-Time
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                Cek Status Perbaikan
              </h1>
              <p className="text-sm text-slate-500">
                Pantau progress servis perangkat Anda kapan saja.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { icon: "⚡", text: "Real-Time Update" },
                { icon: "🔒", text: "Data Aman" },
                { icon: "📱", text: "Mobile Friendly" },
              ].map((chip) => (
                <div key={chip.text} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-400 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                  <span>{chip.icon}</span>
                  {chip.text}
                </div>
              ))}
            </div>

          {/* Search Card — dark glass */}
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 ring-1 ring-white/5">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="nomor-servis"
                className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2"
              >
                Nomor Nota / Servis
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    id="nomor-servis"
                    type="text"
                    value={nomorServis}
                    onChange={(e) => setNomorServis(e.target.value)}
                    placeholder="Contoh: TGS-12345"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold placeholder:text-slate-600 focus:outline-none focus:border-tgs-red/60 focus:ring-2 focus:ring-tgs-red/20 transition-all duration-200"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !nomorServis.trim()}
                  className="bg-gradient-to-r from-tgs-red to-red-700 hover:from-red-700 hover:to-tgs-red text-white px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-tgs-red/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Mencari...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Cek Status
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results Section */}
            {searched && !loading && (
              <div className="mt-6 animate-fade-in">
                {/* Error State */}
                {error && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-red-400 mb-0.5">
                        Data Tidak Ditemukan
                      </h3>
                      <p className="text-xs text-red-400/70">{error}</p>
                      <p className="text-xs text-slate-600 mt-1.5">
                        Pastikan nomor nota sudah benar atau hubungi CS kami.
                      </p>
                    </div>
                  </div>
                )}

                {/* Premium Dark Result Card */}
                {result && statusConfig && (
                  <div className="animate-slide-up">
                    {/* Dark Card */}
                    <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden ring-1 ring-white/10">
                      
                      {/* Gradient header bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${statusConfig.color}`} />

                      {/* Ambient glow inside card */}
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-r ${statusConfig.color} opacity-10 blur-3xl pointer-events-none`} />

                      <div className="relative p-5 md:p-6">
                        {/* Top row: Nomor Servis + Status Badge */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Nomor Servis</p>
                            <div className="flex items-center gap-1.5">
                              <Hash className="w-3.5 h-3.5 text-slate-400" />
                              <span className="text-sm font-mono font-bold text-white">{result.service_id}</span>
                            </div>
                          </div>
                          {/* Status badge */}
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${statusConfig.color} bg-opacity-20 px-3 py-1.5 rounded-full ring-1 ${statusConfig.ring} shadow-lg ${statusConfig.glow}`}>
                            <span className={`${statusConfig.textColor} [&>svg]:brightness-200`}>
                              {statusConfig.icon}
                            </span>
                            <span className="text-white text-xs font-bold">{statusConfig.label}</span>
                          </div>
                        </div>

                        {/* Progress Tracker */}
                        <div className="mb-5 bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Progress Perbaikan</p>
                          <div className="flex items-center gap-0">
                            {STEPS.map((step, i) => {
                              const active = i < statusConfig.step;
                              const current = i === statusConfig.step - 1;
                              return (
                                <div key={i} className="flex items-center flex-1 last:flex-none">
                                  <div className="flex flex-col items-center gap-1">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ring-2 ${
                                      current
                                        ? `bg-gradient-to-br ${statusConfig.color} ring-white/20 shadow-lg ${statusConfig.glow} animate-pulse-soft`
                                        : active
                                        ? `bg-gradient-to-br ${statusConfig.color} ring-transparent opacity-60`
                                        : "bg-white/10 ring-white/5 text-slate-600"
                                    }`}>
                                      <span className={`${active ? "text-white" : "text-slate-600"} [&>svg]:w-3 [&>svg]:h-3`}>
                                        {step.icon}
                                      </span>
                                    </div>
                                    <span className={`text-[9px] font-bold text-center leading-tight ${active ? "text-slate-300" : "text-slate-600"}`}>
                                      {step.label}
                                    </span>
                                  </div>
                                  {i < STEPS.length - 1 && (
                                    <div className={`flex-1 h-0.5 mx-1 mb-4 rounded-full transition-all duration-700 ${
                                      i < statusConfig.step - 1 ? `bg-gradient-to-r ${statusConfig.color}` : "bg-white/10"
                                    }`} />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Detail Info Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {/* Customer */}
                          <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3.5 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                            <div className="flex items-center gap-1.5 mb-2">
                              <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${statusConfig.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <User className="w-3 h-3 text-white" />
                              </div>
                              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Pelanggan</p>
                            </div>
                            <p className="text-xs font-bold text-white truncate">{result.customer_name}</p>
                          </div>

                          {/* Device */}
                          <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3.5 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                            <div className="flex items-center gap-1.5 mb-2">
                              <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${statusConfig.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <Monitor className="w-3 h-3 text-white" />
                              </div>
                              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Perangkat</p>
                            </div>
                            <p className="text-xs font-bold text-white line-clamp-2 leading-snug">{result.device_description}</p>
                          </div>

                          {/* Date */}
                          <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3.5 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                            <div className="flex items-center gap-1.5 mb-2">
                              <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${statusConfig.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <Calendar className="w-3 h-3 text-white" />
                              </div>
                              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Tgl Masuk</p>
                            </div>
                            <p className="text-xs font-bold text-white leading-snug">{formatDate(result.entry_date)}</p>
                          </div>
                        </div>

                        {/* Footer row */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                          <p className="text-[10px] text-slate-600">
                            🟢 Data real-time dari sistem bengkel
                          </p>
                          <a
                            href="https://wa.me/6285135465355"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            Tanya via WA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Help Section */}
            <div className="mt-5 pt-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  Butuh bantuan?
                </h4>
                <p className="text-xs text-slate-500">
                  Hubungi CS kami jika ada pertanyaan.
                </p>
              </div>
              <a
                href="https://wa.me/6285135465355"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
              >
                Chat via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
