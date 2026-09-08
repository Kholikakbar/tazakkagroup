import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import {
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Service & Daftar Harga | Tazakka Group Service",
  description:
    "Daftar lengkap harga layanan service HP, Laptop, PC/Rakit PC, dan Printer di Tazakka Group Service. Pengerjaan profesional dan bergaransi.",
};

const allServices = [
  {
    id: "laptop",
    icon: Laptop,
    title: "Service Laptop",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
    categories: [
      {
        name: "SOFTWARE",
        items: [
          { name: "Cek Kerusakan (Bongkar)", price: "Rp100.000" },
          { name: "Cek Kerusakan (Tanpa Bongkar)", price: "GRATIS" },
          { name: "Install Windows 10 / 11", price: "Rp250.000" },
          { name: "Install Microsoft Office", price: "Rp150.000 - Rp250.000" },
          { name: "Install Driver", price: "Rp50.000" },
          { name: "Install Aplikasi", price: "Rp50.000 - Rp150.000" },
          { name: "Backup Data", price: "Rp50.000" },
          { name: "Recovery Data", price: "Rp500.000 - Rp10.000.000" },
        ]
      },
      {
        name: "HARDWARE",
        items: [
          { name: "Cleaning Laptop", price: "Rp150.000 - Rp350.000" },
          { name: "Ganti Keyboard (Termasuk Keyboard)", price: "Rp350.000 - Rp550.000" },
          { name: "Ganti LCD (Termasuk LCD)", price: "Rp650.000 - Rp1.500.000" },
          { name: "Service Engsel Laptop", price: "Rp350.000" },
          { name: "Ganti Baterai (Termasuk Baterai)", price: "Rp350.000 - Rp650.000" },
          { name: "Ganti Charger (Termasuk Charger)", price: "Rp250.000 - Rp450.000" },
          { name: "Ganti SSD (Jasa Pemasangan)", price: "Rp150.000" },
          { name: "Ganti HDD (Jasa Pemasangan)", price: "Rp150.000" },
          { name: "Upgrade RAM (Termasuk RAM)", price: "Rp150.000 - Rp4.200.000" },
          { name: "Upgrade SSD (Termasuk SSD)", price: "Rp700.000 - Rp2.250.000" },
          { name: "Ganti Wi-Fi Card (Termasuk Wi-Fi Card)", price: "Rp350.000" },
          { name: "Ganti Speaker (Termasuk Speaker)", price: "Rp350.000 - Rp450.000" },
          { name: "Ganti Touchpad (Termasuk Touchpad)", price: "Rp350.000 - Rp500.000" },
        ]
      },
      {
        name: "SERVICE MAINBOARD",
        items: [
          { name: "Service Ringan", price: "Rp350.000 - Rp700.000" },
          { name: "Service Berat", price: "Rp800.000 - Rp1.500.000" },
        ]
      }
    ],
  },
  {
    id: "printer",
    icon: Printer,
    title: "Service Printer",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    categories: [
      {
        name: "SOFTWARE",
        items: [
          { name: "Cek Kerusakan (Bongkar)", price: "Rp100.000" },
          { name: "Cek Kerusakan (Tanpa Bongkar)", price: "GRATIS" },
          { name: "Install Driver Printer", price: "Rp50.000" },
          { name: "Install Printer", price: "Rp100.000" },
          { name: "Setting Sharing Printer", price: "Rp150.000" },
          { name: "Setting Printer Jaringan (LAN/Wi-Fi)", price: "Rp150.000" },
          { name: "Reset Printer", price: "Rp150.000 - Rp250.000" },
          { name: "Update Firmware Printer", price: "Rp250.000" },
        ]
      },
      {
        name: "HARDWARE",
        items: [
          { name: "Cleaning Printer", price: "Rp150.000 - Rp350.000" },
          { name: "Isi Tinta (Black)", price: "Rp75.000" },
          { name: "Isi Tinta (Color)", price: "Rp100.000" },
          { name: "Ganti Cartridge (Termasuk Cartridge)", price: "Rp250.000 - Rp750.000" },
          { name: "Ganti Head Printer (Termasuk Head)", price: "Rp450.000 - Rp2.500.000" },
          { name: "Ganti Roller (Termasuk Roller)", price: "Rp250.000 - Rp500.000" },
          { name: "Ganti Sensor (Termasuk Sensor)", price: "Rp350.000 - Rp700.000" },
          { name: "Ganti Power Supply (Termasuk PSU)", price: "Rp350.000 - Rp850.000" },
          { name: "Ganti Mainboard (Termasuk Mainboard)", price: "Rp600.000 - Rp2.000.000" },
        ]
      },
      {
        name: "SERVICE PRINTER",
        items: [
          { name: "Service Paper Jam", price: "Rp250.000 - Rp500.000" },
          { name: "Service Hasil Bergaris", price: "Rp250.000 - Rp700.000" },
          { name: "Service Tinta Tidak Keluar", price: "Rp350.000 - Rp900.000" },
          { name: "Service Error Berkedip", price: "Rp250.000 - Rp700.000" },
          { name: "Service Head Mampet", price: "Rp350.000 - Rp900.000" },
          { name: "Service Mainboard", price: "Rp600.000 - Rp2.000.000" },
          { name: "Service Ringan", price: "Rp250.000 - Rp500.000" },
          { name: "Service Berat", price: "Rp600.000 - Rp2.000.000" },
        ]
      }
    ],
  },
  {
    id: "hp",
    icon: Smartphone,
    title: "Service HP / Smartphone",
    color: "bg-red-500",
    textColor: "text-red-600",
    categories: [
      {
        name: "SOFTWARE",
        items: [
          { name: "Cek Kerusakan (Bongkar)", price: "Rp75.000" },
          { name: "Cek Kerusakan (Tanpa Bongkar)", price: "GRATIS" },
          { name: "Flash / Install Ulang", price: "Rp150.000" },
          { name: "Update / Downgrade Sistem", price: "Rp150.000" },
          { name: "Unlock FRP (Google Account)", price: "Rp150.000" },
          { name: "Instalasi Aplikasi", price: "Rp25.000" },
        ]
      },
      {
        name: "HARDWARE",
        items: [
          { name: "Ganti LCD", price: "Rp285.000 - Rp350.000" },
          { name: "Ganti Baterai", price: "Rp200.000" },
          { name: "Ganti Port Charger", price: "Rp125.000 - Rp200.000" },
          { name: "Ganti Speaker", price: "Rp125.000" },
          { name: "Ganti Mikrofon", price: "Rp125.000" },
          { name: "Ganti Kamera", price: "Rp200.000" },
          { name: "Ganti Tombol Power & Volume", price: "Rp125.000" },
          { name: "Ganti Backdoor", price: "Rp75.000" },
          { name: "Ganti Frame", price: "Rp125.000" },
        ]
      },
      {
        name: "SERVICE MESIN",
        items: [
          { name: "Service IC Charging", price: "Rp550.000 - Rp650.000" },
          { name: "Service IC Power", price: "Rp550.000 - Rp650.000" },
          { name: "Service IC CPU", price: "Rp550.000 - Rp650.000" },
          { name: "Service IC Audio", price: "Rp550.000 - Rp650.000" },
          { name: "Service IC Sinyal / RF", price: "Rp550.000 - Rp650.000" },
          { name: "Service IC eMMC", price: "Rp550.000 - Rp650.000" },
          { name: "Reball CPU / eMMC (Sesuai Kerusakan)", price: "Rp550.000 - Rp650.000" },
        ]
      }
    ],
  },
  {
    id: "pc",
    icon: Monitor,
    title: "Service Komputer / PC",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    categories: [
      {
        name: "SOFTWARE",
        items: [
          { name: "Cek Kerusakan (Bongkar)", price: "Rp150.000" },
          { name: "Cek Kerusakan (Tanpa Bongkar)", price: "GRATIS" },
          { name: "Install Windows 10 / 11", price: "Rp250.000" },
          { name: "Install Microsoft Office", price: "Rp150.000 - Rp250.000" },
          { name: "Install Driver", price: "Rp50.000" },
          { name: "Install Aplikasi", price: "Rp50.000 - Rp150.000" },
          { name: "Backup Data", price: "Rp50.000" },
          { name: "Recovery Data", price: "Rp500.000" },
          { name: "Install Jaringan LAN", price: "Rp150.000" },
          { name: "Setting Sharing Printer", price: "Rp150.000" },
        ]
      },
      {
        name: "HARDWARE",
        items: [
          { name: "Cleaning CPU", price: "Rp150.000 - Rp350.000" },
          { name: "Ganti Power Supply (Termasuk PSU)", price: "Rp450.000 - Rp1.500.000" },
          { name: "Ganti Motherboard (Termasuk Motherboard)", price: "Rp400.000 - Rp1.000.000" },
          { name: "Ganti Processor (Termasuk Processor)", price: "Rp800.000 - Rp8.000.000" },
          { name: "Ganti RAM (Termasuk RAM)", price: "Rp250.000 - Rp4.500.000" },
          { name: "Upgrade RAM (Termasuk RAM)", price: "Rp250.000 - Rp4.500.000" },
          { name: "Ganti SSD (Termasuk SSD)", price: "Rp700.000 - Rp2.500.000" },
          { name: "Ganti HDD (Termasuk HDD)", price: "Rp650.000 - Rp2.000.000" },
          { name: "Ganti VGA Card (Termasuk VGA)", price: "Rp1.500.000 - Rp5.000.000" },
          { name: "Ganti Casing (Termasuk Casing)", price: "Rp500.000 - Rp2.000.000" },
          { name: "Ganti Fan CPU (Termasuk Fan)", price: "Rp200.000 - Rp2.000.000" },
          { name: "Ganti Fan Casing (Termasuk Fan)", price: "Rp200.000 - Rp900.000" },
        ]
      },
      {
        name: "SERVICE HARDWARE & RAKIT",
        items: [
          { name: "Service Power Supply", price: "Rp350.000 - Rp700.000" },
          { name: "Service Motherboard", price: "Rp700.000 - Rp2.500.000" },
          { name: "Service VGA Card", price: "Rp750.000 - Rp2.500.000" },
          { name: "Service BIOS", price: "Rp350.000 - Rp700.000" },
          { name: "Service Ringan", price: "Rp350.000 - Rp700.000" },
          { name: "Service Berat", price: "Rp800.000 - Rp2.000.000" },
          { name: "Rakit Komputer Office", price: "Rp1.800.000 - Rp3.800.000" },
          { name: "Rakit Komputer Gaming", price: "Rp3.500.000 - Rp16.000.000" },
        ]
      }
    ],
  },
];

export default function LayananPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fa] pb-10">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-tgs-dark to-tgs-dark-light py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block bg-tgs-red/20 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Daftar Layanan & Harga
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
              Price List Service
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto">
              Estimasi biaya transparan untuk perbaikan Laptop, Printer, HP, dan Komputer/PC. Harga "Termasuk" berarti sudah satu paket dengan sparepart.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 space-y-16">
          {allServices.map((device) => (
            <section key={device.id} id={device.id} className="scroll-mt-28">
              {/* Device Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-tgs-gray-medium/50 pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${device.color} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
                    <device.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-tgs-dark">
                      {device.title}
                    </h2>
                    <p className="text-sm text-tgs-gray-text mt-1">
                      Daftar harga dan layanan {device.title.toLowerCase()}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(device.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-tgs-dark hover:bg-tgs-red text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 group"
                >
                  Konsultasi {device.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Sub Categories (Software, Hardware, dll) */}
              <div className="flex flex-col gap-10">
                {device.categories.map((subcat, idx) => (
                  <div key={idx}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 bg-[#FFC107] px-6 py-2.5 rounded-r-3xl -ml-4 shadow-sm">
                        <device.icon className="w-5 h-5 text-black" />
                        <h3 className="text-lg font-extrabold text-black uppercase tracking-wider">{subcat.name}</h3>
                      </div>
                      <div className="bg-black text-white px-8 py-2 rounded-t-xl rounded-b-sm text-sm font-bold hidden sm:block">
                        Harga
                      </div>
                    </div>
                    {/* List Items */}
                    <div className="pl-4 pr-2 md:pr-4">
                      <ul className="space-y-0">
                        {subcat.items.map((item, i) => (
                          <li key={i} className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-4 py-2.5 border-b border-dotted border-gray-400">
                            <div className="flex items-center gap-3 shrink-0 relative top-[2px] sm:top-0">
                              <div className="w-4 h-4 rounded-full bg-[#FFC107] flex items-center justify-center shrink-0">
                                <ArrowRight className="w-2.5 h-2.5 text-black" />
                              </div>
                              <span className="text-sm font-medium text-tgs-dark">{item.name}</span>
                            </div>
                            <span className={`text-sm font-bold shrink-0 ${item.price === 'GRATIS' ? 'text-[#e5a900]' : 'text-tgs-dark'}`}>
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Notes */}
          <div className="bg-tgs-gray rounded-2xl p-6 border border-tgs-gray-medium/30">
            <h4 className="text-sm font-bold text-tgs-dark mb-3">Catatan Penting:</h4>
            <ul className="list-disc list-inside text-sm text-tgs-gray-text space-y-1">
              <li>Harga dapat berubah sewaktu-waktu sesuai merek, tipe perangkat, dan tingkat kerusakan.</li>
              <li>Harga yang bertanda <strong>"Termasuk"</strong> berarti sudah satu paket dengan harga sparepart.</li>
              <li>Harga <strong>"Jasa Pemasangan"</strong> belum termasuk biaya pembelian sparepart.</li>
              <li>Biaya Recovery Data menyesuaikan dengan ukuran dan tingkat kerusakan penyimpanan.</li>
              <li>Garansi service berlaku selama 1 bulan sejak perangkat diambil.</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
