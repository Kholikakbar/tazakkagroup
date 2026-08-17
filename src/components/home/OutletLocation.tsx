import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export default function OutletLocation() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-tgs-red/10 rounded-2xl mb-4">
            <MapPin className="w-8 h-8 text-tgs-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-tgs-dark mb-4">
            Kunjungi Outlet Kami di <span className="text-tgs-red">Jakarta Timur</span>
          </h2>
          <p className="text-base text-tgs-gray-text">
            Bawa perangkat Anda langsung ke workshop kami di Cakung untuk pengecekan dan perbaikan dengan teknisi handal. Kami juga melayani antar-jemput service untuk seluruh wilayah Jabodetabek.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-tgs-gray-medium/30 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Card */}
          <div className="lg:w-1/3 bg-tgs-dark text-white p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Tazakka Group Service</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-tgs-red" />
                </div>
                <div>
                  <p className="font-semibold text-white/90 text-sm mb-1">Alamat Workshop</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Jl. Kp. Jemb. Jl. Marzuki 2 No.20, RT.6/RW.17, Penggilingan, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13940
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
                    Senin - Sabtu: 09:00 - 21:00 WIB<br/>
                    Minggu: Tutup
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
                    0851-3546-5355 (WA & Telp)
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/maps?q=Tazakka+Group+Service+Cakung" 
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
              src="https://maps.google.com/maps?q=Tazakka%20Group%20Service%20Jl.%20Kp.%20Jemb.%20Jl.%20Marzuki%202%20No.20&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.1]"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
