import React from 'react';
import { LogOut, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SecurityCenter: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="keamanan" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-950/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            {t.security.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.security.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.security.subheading}
          </p>
        </div>

        {/* 4-Step SOP Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.security.checklist.map((step) => {
            return (
              <div
                key={step.step}
                className="bg-zinc-900/70 rounded-2xl p-6 border border-zinc-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 font-bold text-sm flex items-center justify-center">
                      0{step.step}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      {language === 'en' ? `Step ${step.step}` : `Langkah ${step.step}`}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="flex items-start gap-2 text-[11px] text-emerald-400/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step.criticalTip}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Cybersecurity Do's & Don'ts Banner */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h4 className="text-lg font-bold text-white">
                  {t.security.cookieWarning.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.security.cookieWarning.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-400">
                {t.security.cookieWarning.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-950 p-5 rounded-xl border border-zinc-800 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/70 border border-emerald-800/40 text-emerald-400 flex items-center justify-center">
                  <LogOut className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">{t.security.cookieWarning.cardBadge}</p>
                  <p className="text-sm font-bold text-white">{t.security.cookieWarning.cardTitle}</p>
                </div>
              </div>
              <p className="text-[11px] text-zinc-400">
                {t.security.cookieWarning.cardDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
