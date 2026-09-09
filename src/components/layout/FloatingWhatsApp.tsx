"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";

const branches = [
  {
    name: "Jakarta Timur",
    address: "Jl. Raya Pal Meriam, Cakung, Jakarta Timur",
    phone: "6285135465355",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Bekasi",
    address: "Jl. Raya Jatimekar No.1, Jatiasih, Bekasi",
    phone: "6285138945861",
    color: "from-blue-500 to-blue-600",
  },
];

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3" id="floating-whatsapp">
      
      {/* Chat Popup */}
      {isChatOpen && (
        <div className="animate-fade-in w-[340px] rounded-2xl shadow-2xl overflow-hidden border border-tgs-gray-medium/50 mb-2">
          {/* Header */}
          <div className="bg-[#075e54] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/30">
                <Image 
                  src="/images/logo.png" 
                  alt="Admin Tazakka" 
                  fill
                  className="object-cover p-1"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Admin Tazakka</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#25d366] rounded-full"></span>
                  <p className="text-white/70 text-xs">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Tutup chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div 
            className="p-4"
            style={{
              backgroundColor: "#e5ddd5",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c0b8' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {/* Chat Bubble */}
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] relative">
              <div className="absolute -top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent"></div>
              <p className="text-[13px] text-gray-800 leading-relaxed">
                Halo Kak! 👋<br />
                Selamat datang di <strong>Tazakka Group Service</strong>.<br />
                Silakan pilih cabang untuk mulai chat:
              </p>
              <p className="text-[10px] text-gray-400 text-right mt-1">
                {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          {/* Branch Selection */}
          <div className="bg-white px-4 py-3 border-t border-gray-200 space-y-2.5">
            <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider text-center">Pilih Cabang</p>
            {branches.map((branch) => (
              <a
                key={branch.name}
                href={`https://wa.me/${branch.phone}?text=Halo%20TGS%20${encodeURIComponent(branch.name)}%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full p-3 rounded-xl border border-gray-100 hover:border-[#25d366]/30 hover:bg-[#25d366]/5 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${branch.color} flex items-center justify-center shrink-0 shadow-sm`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-[#075e54] transition-colors">
                    {branch.name}
                  </p>
                  <p className="text-[11px] text-gray-400 truncate">
                    {branch.address}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`floating-wa w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
          isChatOpen 
            ? "bg-gray-500 hover:bg-gray-600 rotate-0" 
            : "bg-[#25d366] hover:bg-[#1ebe5b]"
        }`}
        aria-label="Chat WhatsApp"
      >
        {isChatOpen ? (
          <X className="w-7 h-7 md:w-8 md:h-8" />
        ) : (
          <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
