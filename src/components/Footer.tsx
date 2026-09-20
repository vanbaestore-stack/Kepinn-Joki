import React from 'react';
import { ShieldCheck, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { ADMIN_PHONE, DISPLAY_PHONE, WA_CHANNEL_URL, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from '../data';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1">
                <img src="/logo.svg" alt="Kepinn Joki" className="w-full h-full object-contain" />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                KEPINN JOKI
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              Jasa joki Blox Fruits terpercaya dengan standar pengerjaan manual 100% di Private Server, jaminan keamanan akun berlapis dengan SOP Account PIN, dan harga transparan.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Jam Operasional: Setiap Hari 09:00 - 23:00 WIB</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Kalkulator Harga Instan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Daftar Layanan & Paket
                </a>
              </li>
              <li>
                <a href="#keamanan" className="hover:text-white transition-colors">
                  SOP Keamanan Akun
                </a>
              </li>
              <li>
                <a href="#verifikasi" className="hover:text-white transition-colors">
                  Cek Keaslian Admin
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">
                  Bukti Transaksi & Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts & Security Audit */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Saluran Resmi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${ADMIN_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {DISPLAY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={WA_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                  <span>Saluran WhatsApp Resmi</span>
                </a>
              </li>
              <li className="text-zinc-500">
                <span>Instagram: @{INSTAGRAM_HANDLE}</span>
              </li>
              <li className="text-zinc-500">
                <span>TikTok: @{TIKTOK_HANDLE}</span>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-2"
                >
                  Lihat Laporan Audit Keamanan
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-900 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-[11px] text-zinc-500 leading-relaxed">
            <strong className="text-zinc-400">Disclaimer Independen:</strong> Kepinn Joki / Vanbae Store adalah penyedia layanan independen yang membantu para gamer dalam mengoptimalkan waktu bermain. Semua aset, nama, dan merek dagang Blox Fruits dan Roblox adalah hak cipta dari Gamer Robot Inc. dan Roblox Corporation. Kami tidak berafiliasi secara resmi dengan pihak pengembang.
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-[11px]">
            <p>&copy; 2026 Kepinn Joki. Hak cipta dilindungi undang-undang.</p>
            <p className="flex items-center gap-1">
              <span>Keamanan akun pelanggan adalah prioritas nomor satu kami.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
