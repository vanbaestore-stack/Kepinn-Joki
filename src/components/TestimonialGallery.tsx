import React, { useState } from 'react';
import { ShieldCheck, Star, ExternalLink, CheckCircle2, Eye, X } from 'lucide-react';
import { TESTIMONIALS_DATA, WA_CHANNEL_URL } from '../data';
import { TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialGallery: React.FC = () => {
  const [activeTesti, setActiveTesti] = useState<TestimonialItem | null>(null);
  const { language, t } = useLanguage();

  return (
    <section id="testimoni" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/60 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Tag & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {/* Customer quote */}
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-300 italic">
                  "{item.customerNote}"
                </div>

                {/* Stat Before & After Box */}
                <div className="space-y-2 text-xs bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>{t.testimonials.beforeLabel}</span>
                    <span className="font-mono text-zinc-300 font-medium">{item.beforeStat}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-400 font-semibold border-t border-zinc-800/60 pt-1.5">
                    <span>{t.testimonials.afterLabel}</span>
                    <span className="font-mono">{item.afterStat}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{item.paymentMethod}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTesti(item)}
                  className="text-xs font-bold text-red-400 hover:text-red-300 inline-flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.testimonials.detailBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Link Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-zinc-400">
            {t.testimonials.moreProof}{' '}
            <a
              href={WA_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-white underline underline-offset-4 font-semibold transition-colors inline-flex items-center gap-1 ml-1"
            >
              {t.testimonials.visitChannel}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>
      </div>

      {/* Modal Detail Testimonial */}
      {activeTesti && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-zinc-950 border border-zinc-800 max-w-lg w-full rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActiveTesti(null)}
              className="absolute right-4 top-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label={t.testimonials.modalClose}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-red-400">{activeTesti.tag}</span>
              <h3 className="text-xl font-bold text-white">{activeTesti.title}</h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="bg-zinc-900 p-3.5 rounded-xl border border-zinc-800 space-y-1">
                <span className="text-zinc-500 text-[11px] block">{t.testimonials.serviceDone}</span>
                <p className="font-semibold text-white">{activeTesti.serviceDetail}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                  <span className="text-zinc-500 text-[10px] block">{t.testimonials.beforeLabel}</span>
                  <span className="font-medium text-zinc-300 text-xs">{activeTesti.beforeStat}</span>
                </div>
                <div className="bg-zinc-900 p-3 rounded-xl border border-emerald-800/40 text-emerald-400">
                  <span className="text-zinc-500 text-[10px] block">{t.testimonials.afterLabel}</span>
                  <span className="font-semibold text-xs">{activeTesti.afterStat}</span>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">{t.testimonials.paymentMethodLabel}</span>
                <span className="font-medium text-white">{activeTesti.paymentMethod}</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.testimonials.privacyNote}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setActiveTesti(null)}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors"
              >
                {t.testimonials.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
