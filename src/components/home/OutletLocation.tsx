"use client";

import { useState } from "react";
import { MapPin, Navigation, Clock, Phone, Building2 } from "lucide-react";

interface Outlet {
  id: string;
  city: string;
  name: string;
  address: string;
  hours: string;
  closed: string;
  phone: string;
  phoneLink: string;
  mapsQuery: string;
  mapsSearch: string;
  embedUrl: string;
  streetViewLink?: string;
}

const outlets: Outlet[] = [
  {
    id: "jakarta",
    city: "Jakarta Timur",
    name: "TGS Jakarta",
    address:
      "Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13940",
    hours: "Senin - Sabtu: 09:00 - 21:00 WIB",
    closed: "Minggu: Tutup",
    phone: "0851-3546-5355",
    phoneLink: "6285135465355",
    mapsQuery: "Tazakka%20Group%20Service%20Jl.%20Kp.%20Jemb.%20Jl.%20Marzuki%202%20No.20",
    mapsSearch: "Tazakka+Group+Service+Cakung",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.754434348591!2d106.92710770966829!3d-6.213881320813007!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b687dd0be4f%3A0xd40c5c940ddd4512!2sTazakka%20Group%20Service!5e0!3m2!1sen!2sid!4v1789118631955!5m2!1sen!2sid",
  },
  {
    id: "bekasi",
    city: "Bekasi",
    name: "TGS Bekasi",
    address:
      "Jl. Raya Jatimekar No.1, RT.006/RW.012, Kp. Cakung, Jatimekar, Bekasi Kota, Jawa Barat 17422",
    hours: "Senin - Sabtu: 09:00 - 21:00 WIB",
    closed: "Minggu: Tutup",
    phone: "0851-3894-5861",
    phoneLink: "6285138945861",
    mapsQuery: "Tazakka%20Group%20Service%20Jatiasih",
    mapsSearch: "Tazakka+group+service+bekasi",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.813458686249!2d106.95389399999999!3d-6.2882335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d3fd9483ec5%3A0xa0bbf3c0c1442809!2sTazakka%20group%20service%20bekasi!5e0!3m2!1sid!2sid!4v1789117480265!5m2!1sid!2sid",
    streetViewLink: "https://maps.app.goo.gl/TYhYXFvRHXkZkTjZ6",
  },
];

export default function OutletLocation() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const outlet = outlets[activeTab] as Outlet;

  return (
    <section id="location" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center p-3 bg-tgs-red/10 rounded-2xl mb-4">
            <MapPin className="w-8 h-8 text-tgs-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tgs-dark mb-4">
            Kunjungi <span className="text-tgs-red">Outlet Kami</span>
          </h2>
          <p className="text-base text-tgs-gray-text">
            Bawa perangkat Anda langsung ke workshop kami untuk pengecekan dan perbaikan dengan teknisi handal. Kami juga melayani antar-jemput service untuk seluruh wilayah Jabodetabek.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mb-8">
          {outlets.map((o, idx) => (
            <button
              key={o.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer border ${activeTab === idx
                ? "bg-tgs-red text-white border-tgs-red shadow-lg shadow-tgs-red/20"
                : "bg-white text-tgs-dark border-tgs-gray-medium hover:border-tgs-red/40 hover:text-tgs-red"
                }`}
            >
              <Building2 className="w-4 h-4" />
              {o.city}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-tgs-gray-medium/30 overflow-hidden flex flex-col lg:flex-row">
          {/* Info Card */}
          <div className="lg:w-1/3 bg-tgs-dark text-white p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block px-2.5 py-0.5 bg-tgs-red/20 text-tgs-red text-xs font-bold rounded-lg uppercase tracking-wide">
                {outlet.city}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-6">{outlet.name}</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-tgs-red" />
                </div>
                <div>
                  <p className="font-semibold text-white/90 text-sm mb-1">Alamat Workshop</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {outlet.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-tgs-red" />
                </div>
                <div>
                  <p className="font-semibold text-white/90 text-sm mb-1">Jam Operasional</p>
                  <p className="text-sm text-white/70">
                    {outlet.hours}<br />{outlet.closed}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-tgs-red" />
                </div>
                <div>
                  <p className="font-semibold text-white/90 text-sm mb-1">Kontak Tersedia</p>
                  <p className="text-sm text-white/70">
                    {outlet.phone} (WA &amp; Telp)
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://maps.google.com/maps?q=${outlet.mapsSearch}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 bg-tgs-red hover:bg-tgs-red-hover text-white py-3.5 px-6 rounded-xl font-bold transition-all duration-300 group"
            >
              <Navigation className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Buka di Google Maps
            </a>
          </div>

          {/* Maps Iframe */}
          <div className="lg:w-2/3 min-h-[300px] md:min-h-[400px] relative">
            <iframe
              key={outlet.id}
              src={outlet.embedUrl}
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.1]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
