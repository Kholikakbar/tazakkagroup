"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama estimasi waktu pengerjaan service?",
    answer:
      "Waktu pengerjaan bervariasi tergantung jenis kerusakan. Service ringan (ganti LCD, baterai, install software) biasanya selesai dalam 1-3 jam. Service berat (mainboard, IC, recovery data) membutuhkan 1-7 hari kerja. Kami akan menginformasikan estimasi waktu sebelum pengerjaan dimulai.",
  },
  {
    question: "Apakah bisa mengirim perangkat dari luar kota?",
    answer:
      "Tentu bisa! Kami menerima pengiriman dari seluruh Indonesia melalui JNE, J&T, SiCepat, dan ekspedisi lainnya. Kirim perangkat ke alamat workshop kami di Penggilingan, Cakung, Jakarta Timur. Pastikan packing aman dan sertakan catatan keluhan. Hubungi CS kami via WhatsApp untuk koordinasi lebih lanjut.",
  },
  {
    question: "Bagaimana cara klaim garansi service?",
    answer:
      "Garansi berlaku 30 hari sejak perangkat diambil. Untuk klaim, hubungi CS kami via WhatsApp dengan menyertakan nota service atau ID Tiket perbaikan. Pastikan segel garansi tidak rusak/robek. Garansi berlaku untuk kerusakan yang sama dengan keluhan awal (bukan kerusakan baru atau akibat kelalaian pengguna).",
  },
  {
    question: "Apakah ada biaya pengecekan/diagnosa?",
    answer:
      "Pengecekan tanpa bongkar perangkat GRATIS. Jika diperlukan pembongkaran untuk diagnosa lebih lanjut, dikenakan biaya mulai Rp75.000 - Rp150.000 tergantung jenis perangkat. Biaya diagnosa akan dipotong dari total biaya service jika Anda setuju untuk melanjutkan perbaikan.",
  },
  {
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima pembayaran tunai (cash), transfer bank (BCA, BRI, Mandiri, BNI), e-wallet (GoPay, OVO, DANA, ShopeePay), dan QRIS. Untuk service dengan biaya besar, kami juga menyediakan opsi pembayaran bertahap (hubungi CS untuk info lebih lanjut).",
  },
  {
    question: "Apakah sparepart yang digunakan original?",
    answer:
      "Kami menggunakan sparepart original dan berkualitas tinggi (OEM grade A). Sebelum penggantian, kami akan menginformasikan jenis dan kualitas sparepart yang akan digunakan beserta garansinya. Anda bebas memilih sesuai budget dan kebutuhan.",
  },
  {
    question: "Bagaimana cara memantau status perbaikan?",
    answer:
      'Anda bisa memantau status perbaikan secara real-time melalui halaman "Cek Status Perbaikan" di website kami. Masukkan nomor Tiket (ID Perbaikan) atau nomor WhatsApp yang terdaftar. Status akan diupdate oleh teknisi setiap ada perkembangan.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-tgs-red/20 shadow-md shadow-red-500/5"
          : "border-tgs-gray-medium/50 hover:border-tgs-gray-medium"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span
          className={`text-sm md:text-base font-semibold transition-colors ${
            isOpen ? "text-tgs-red" : "text-tgs-dark"
          }`}
        >
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? "bg-tgs-red text-white rotate-180" : "bg-tgs-gray text-tgs-gray-text"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            <div className="h-px bg-tgs-gray-medium/50 mb-4" />
            <p className="text-sm text-tgs-gray-text leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20 bg-tgs-gray" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-tgs-red/10 text-tgs-red text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tgs-dark mb-3">
            Pertanyaan yang{" "}
            <span className="text-tgs-red">Sering Ditanyakan</span>
          </h2>
          <p className="text-sm md:text-base text-tgs-gray-text max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar layanan service kami.
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-tgs-gray-text mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <a
            href="https://wa.me/6285135465355?text=Halo%20TGS%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tgs-green hover:bg-tgs-green-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
          >
            <MessageCircle className="w-4 h-4" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
