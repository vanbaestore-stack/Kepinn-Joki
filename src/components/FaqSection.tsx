import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: 'Apakah akun Roblox saya aman dari banned dan exploit?',
    a: 'Sangat aman. Kami menggunakan metode pengerjaan 100% manual oleh player berpengalaman langsung di Private Server (VIP Server). Kami sama sekali tidak menggunakan inject script, macro berbahaya, atau software pihak ketiga yang melanggar sistem anti-cheat Roblox (Byfron).',
  },
  {
    q: 'Mengapa saya wajib memasang 4-Digit Account PIN Roblox?',
    a: 'Account PIN di Roblox Settings (Parental Controls) mengunci pengaturan sensitif seperti email pemulihan, nomor telepon, dan password utama. Dengan mengaktifkan PIN dan tidak memberitahukannya kepada kami, akun Anda secara teknis mustahil untuk dibajak atau diubah kepemilikannya oleh siapapun.',
  },
  {
    q: 'Bagaimana cara verifikasi 2FA jika saya menggunakan Authenticator App?',
    a: 'Saat tim kami pertama kali login melalui aplikasi resmi Roblox, sistem akan meminta 6-digit kode verifikasi 2FA. Anda cukup mengirimkan satu kode yang muncul saat itu juga melalui WhatsApp. Kami tidak pernah meminta session cookie browser (.ROBLOSECURITY).',
  },
  {
    q: 'Apa yang terjadi jika saya login ke akun saat proses joki sedang berlangsung?',
    a: 'Sangat dilarang untuk login (istilahnya "nabrak akun") saat proses joki sedang berjalan. Hal ini akan memutuskan koneksi pengerja kami dan berisiko membatalkan atau mereset progres quest in-game yang sedang diselesaikan. Kami selalu memberikan notifikasi langsung lewat WhatsApp segera setelah order selesai.',
  },
  {
    q: 'Metode pembayaran apa saja yang diterima?',
    a: 'Kami menerima pembayaran melalui QRIS (Semua E-Wallet & Mobile Banking Indonesia seperti DANA, GoPay, OVO, ShopeePay, BCA, Mandiri, BRI) serta DuitNow QR untuk pelanggan dari Malaysia.',
  },
  {
    q: 'Berapa lama estimasi waktu pengerjaannya?',
    a: 'Untuk paket 100-300 Level biasanya selesai dalam 1-3 jam tergantung kondisi antrean server. Untuk paket Sultan 1000 Level atau Awakening Full Skill umumnya memakan waktu 6-12 jam. Admin kami akan selalu menginfokan estimasi waktu sebelum pengerjaan dimulai.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-900/30 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Seputar Joki</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Semua yang perlu Anda ketahui mengenai keamanan, alur pembayaran, dan prosedur pengerjaan joki di Kepinn Joki.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-950 rounded-2xl border border-zinc-800/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
