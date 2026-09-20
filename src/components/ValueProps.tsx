import React from 'react';
import { Shield, Zap, Coins, Eye, Lock, RefreshCw, Server, Award } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: Server,
      title: 'Private Server VIP',
      desc: 'Farming dilakukan di Private Server terisolasi. Akun Anda bebas dari serbuan bounty hunter dan terhindar dari report pemain publik.',
      badge: 'Aman & Tenang',
    },
    {
      icon: Lock,
      title: 'SOP Keamanan PIN & 2FA',
      desc: 'Kerahasiaan akun terjamin dengan protokol PIN Parental Control dan 2FA sekali pakai. Kami tidak meminta cookie browser (.ROBLOSECURITY).',
      badge: 'Anti-Hack',
    },
    {
      icon: Eye,
      title: 'Transparansi Pengerjaan',
      desc: 'Kondisi inventaris dicatat dan di-screenshot sebelum dan sesudah pengerjaan. Progress diupdate secara berkala via obrolan WhatsApp.',
      badge: 'Terverifikasi',
    },
    {
      icon: Coins,
      title: 'Harga Pas Tanpa Biaya Siluman',
      desc: 'Tarif yang tertera adalah harga final. Terdapat diskon otomatis untuk order grosir seperti Fragment diskon 50% dan paket combo.',
      badge: 'Best Value',
    },
    {
      icon: RefreshCw,
      title: 'Garansi Uang Kembali',
      desc: 'Jika terjadi kendala teknis atau pesanan gagal diselesaikan dalam batas waktu yang disepakati, saldo Anda dikembalikan 100%.',
      badge: 'Bebas Risiko',
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            Standar Profesionalisme Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Ratusan Gamer Memilih Kepinn Joki?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Kami mengutamakan keamanan akun jangka panjang, pengerjaan cepat, dan etika transaksi yang transparan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => {
            const IconComponent = v.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-900/50 hover:bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800/80 hover:border-red-900/40 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-400 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700 uppercase tracking-wider">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
