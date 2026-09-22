import React from 'react';
import { Server, Lock, Eye, Coins, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ValueProps: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Server, Lock, Eye, Coins, RefreshCw];

  return (
    <section id="keunggulan" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {t.valueProps.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.valueProps.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.valueProps.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.valueProps.items.map((v, idx) => {
            const IconComponent = icons[idx % icons.length];
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
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
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
