import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Search, Filter } from 'lucide-react';
import { SERVICES_DATA, ADMIN_PHONE } from '../data';
import { ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const PricelistCatalog: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.options.some((opt) => opt.unit.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: t.catalog.categories.all },
    { id: 'level', label: t.catalog.categories.level },
    { id: 'mastery', label: t.catalog.categories.mastery },
    { id: 'belly', label: t.catalog.categories.belly },
    { id: 'fragment', label: t.catalog.categories.fragment },
    { id: 'special', label: t.catalog.categories.special },
  ];

  return (
    <section id="layanan" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              {t.catalog.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.catalog.heading}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              {t.catalog.subheading}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid or Empty State */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center space-y-4">
            <p className="text-zinc-400 text-sm">{t.catalog.noResults}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-all"
            >
              {t.catalog.resetFilter}
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  service.popular
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-red-900/50 shadow-xl shadow-red-950/20'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                        {t.catalog.popularBadge}
                      </span>
                    )}
                  </div>

                  {service.requirement && (
                    <p className="text-xs text-red-400 font-medium pb-2 border-b border-zinc-800/80">
                      {service.requirement}
                    </p>
                  )}

                  {/* Pricing List */}
                  <div className="space-y-3 pt-2">
                    {service.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/60 text-xs"
                      >
                        <div className="space-y-0.5">
                          <span className="font-semibold text-zinc-200">{opt.unit}</span>
                          {opt.notes && (
                            <p className="text-[10px] text-zinc-400">{opt.notes}</p>
                          )}
                        </div>
                        <span className="font-bold text-red-400 text-sm whitespace-nowrap">
                          Rp{opt.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Button for this service */}
                <div className="pt-6 mt-4 border-t border-zinc-800/80">
                  <a
                    href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
                      language === 'en'
                        ? `Hello Admin Kepinn Joki, I want to order package: ${service.name}. Please confirm the available boosting slot.`
                        : `Halo Admin Kepinn Joki, saya mau order paket: ${service.name}. Mohon info slot pengerjaannya.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-red-600 text-white transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.catalog.orderBtn}: {service.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
