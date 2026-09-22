import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { ADMIN_PHONE, DISPLAY_PHONE, WA_CHANNEL_URL, INSTAGRAM_HANDLE, TIKTOK_HANDLE } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

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
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{t.footer.operatingHours}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#keamanan" className="hover:text-white transition-colors">
                  {t.nav.security}
                </a>
              </li>
              <li>
                <a href="#verifikasi" className="hover:text-white transition-colors">
                  {t.verifier.heading}
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">{t.footer.officialContactTitle}</h4>
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
                  <span>{t.footer.waChannel}</span>
                </a>
              </li>
              <li className="text-zinc-500">
                <span>Instagram: @{INSTAGRAM_HANDLE}</span>
              </li>
              <li className="text-zinc-500">
                <span>TikTok: @{TIKTOK_HANDLE}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-900 space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-[11px] text-zinc-500 leading-relaxed">
            <strong className="text-zinc-400">{t.footer.disclaimerTitle}</strong> {t.footer.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-[11px]">
            <p>{t.footer.copyright}</p>
            <p className="flex items-center gap-1">
              <span>{t.footer.priority}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
