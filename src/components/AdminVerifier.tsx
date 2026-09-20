import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, CheckCircle2, Search, ExternalLink, Instagram, Phone } from 'lucide-react';
import { ADMIN_PHONE, DISPLAY_PHONE, WA_CHANNEL_URL, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from '../data';

export const AdminVerifier: React.FC = () => {
  const [inputNumber, setInputNumber] = useState<string>('');
  const [result, setResult] = useState<'idle' | 'valid' | 'invalid'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputNumber.trim()) return;

    // Sanitize input (remove spaces, dashes, plus)
    const sanitized = inputNumber.replace(/[^0-9]/g, '');
    const officialSanitized = ADMIN_PHONE; // 6282112834450
    const localSanitized = '082112834450';

    if (
      sanitized === officialSanitized ||
      sanitized === localSanitized ||
      sanitized.endsWith('82112834450')
    ) {
      setResult('valid');
    } else {
      setResult('invalid');
    }
  };

  return (
    <section id="verifikasi" className="py-16 bg-zinc-900/40 border-y border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Anti-Impersonation Tool
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Verifikasi Nomor Admin Resmi
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Banyak akun peniru di TikTok/Instagram yang mengatasnamakan Kepinn Joki. Masukkan nomor kontak untuk memastikan Anda bertransaksi dengan admin sah.
              </p>
            </div>
          </div>

          {/* Form Check */}
          <form onSubmit={handleVerify} className="pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Contoh: 082112834450 atau +62 821..."
                  value={inputNumber}
                  onChange={(e) => {
                    setInputNumber(e.target.value);
                    if (result !== 'idle') setResult('idle');
                  }}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shrink-0 min-h-[44px]"
              >
                Cek Keaslian
              </button>
            </div>

            {/* Validation Feedback */}
            {result === 'valid' && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">NOMOR RESMI KEPINN JOKI TERVERIFIKASI</p>
                  <p className="mt-0.5 text-zinc-300">
                    Nomor ini adalah kontak resmi admin kami ({DISPLAY_PHONE}). Anda aman melanjutkan transaksi dan konsultasi akun.
                  </p>
                </div>
              </div>
            )}

            {result === 'invalid' && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-700/60 text-red-300 text-xs sm:text-sm flex items-start gap-3">
                <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">PERINGATAN: BUKAN NOMOR RESMI KEPINN JOKI</p>
                  <p className="mt-0.5 text-zinc-300">
                    Nomor yang Anda masukkan tidak terdaftar dalam database kami. Jangan mengirimkan uang atau data login Roblox Anda ke nomor tersebut!
                  </p>
                </div>
              </div>
            )}
          </form>

          {/* Official Channel Links */}
          <div className="pt-6 mt-6 border-t border-zinc-800/80 grid sm:grid-cols-3 gap-4 text-xs">
            <a
              href={`https://wa.me/${ADMIN_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
            >
              <div>
                <span className="text-[10px] text-zinc-500 block">WhatsApp Admin</span>
                <span className="font-mono font-semibold">{DISPLAY_PHONE}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <a
              href={WA_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
            >
              <div>
                <span className="text-[10px] text-zinc-500 block">Saluran WhatsApp</span>
                <span className="font-semibold text-emerald-400">Saluran Resmi</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-zinc-300">
              <div>
                <span className="text-[10px] text-zinc-500 block">Sosial Media Resmi</span>
                <span className="font-semibold text-zinc-300">IG: {INSTAGRAM_HANDLE} &bull; TikTok: {TIKTOK_HANDLE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
