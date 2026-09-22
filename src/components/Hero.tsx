import React from 'react';
import { CheckCircle2, MessageCircle, Calculator, ChevronRight } from 'lucide-react';
import { ADMIN_PHONE } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="hero-section" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic Pattern & Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        {/* Atmospheric Crimson Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-red-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-7">
          {/* Eyebrow */}
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {t.hero.categoryLabel}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            {t.hero.headlinePart1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">
              {t.hero.headlinePart2}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            {t.hero.subheadline}
          </p>

          {/* Trust Highlights Checklist */}
          <div className="grid sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.hero.highlightPrivateServer}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.hero.highlightSecuritySop}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.hero.highlightAccountGuarantee}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#kalkulator"
              id="hero-calc-cta"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-red-950/60 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            >
              <Calculator className="w-5 h-5" />
              <span>{t.hero.calculateBtn}</span>
              <ChevronRight className="w-4 h-4 text-red-200" />
            </a>

            <a
              href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(t.hero.waGreeting)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-wa-cta"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold px-6 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>{t.hero.waConsultBtn}</span>
            </a>
          </div>

          {/* Live Operational Status */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-t border-zinc-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>
                {language === 'en'
                  ? 'Admin Active: 09:00 - 23:00 GMT+7'
                  : 'Admin Online: 09:00 - 23:00 WIB'}
              </span>
            </div>
            <span>&bull;</span>
            <div>
              {language === 'en'
                ? 'Payment: QRIS, DANA, GoPay, OVO, Bank Transfer, DuitNow QR (Malaysia)'
                : 'Pembayaran: QRIS, DANA, GoPay, OVO, Bank Transfer, DuitNow QR (Malaysia)'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
