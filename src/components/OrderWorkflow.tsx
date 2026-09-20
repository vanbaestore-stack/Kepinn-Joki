import React from 'react';
import { Calculator, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const OrderWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Calculator,
      title: 'Hitung & Tentukan Paket',
      desc: 'Pilih layanan yang kamu perlukan di Kalkulator Harga (Level, Mastery, Belly, atau Fragment) untuk melihat total biaya dan estimasi waktu.',
    },
    {
      num: '02',
      icon: MessageSquare,
      title: 'Konfirmasi Slot via WhatsApp',
      desc: 'Klik tombol order untuk mengirim pesan otomatis ke admin. Admin akan mengecek ketersediaan slot pengerjaan dan mengirimkan QRIS/rekening resmi.',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Terapkan SOP Keamanan Akun',
      desc: 'Kunci email akun dengan 4-digit Account PIN Roblox, gunakan password sementara, dan berikan kode 2FA sekali pakai saat login pertama.',
    },
    {
      num: '04',
      icon: CheckCircle2,
      title: 'Pengerjaan & Verifikasi Hasil',
      desc: 'Tim kami farming di Private Server hingga target selesai. Begitu selesai, Anda wajib klik "Log Out Other Sessions" dan ganti password kembali.',
    },
  ];

  return (
    <section id="alur" className="py-24 bg-zinc-900/40 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            Alur Pemesanan Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cara Order yang Aman & Mudah
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Proses pemesanan dirancang dengan perlindungan keamanan akun berlapis dari awal hingga akhir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 relative flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-black text-zinc-700">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
