import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowUpRight, Check, Search, Filter } from 'lucide-react';
import { SERVICES_DATA, ADMIN_PHONE } from '../data';
import { ServiceCategory } from '../types';

export const PricelistCatalog: React.FC = () => {
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

  return (
    <section id="layanan" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Katalog Lengkap & Terjangkau
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Daftar Harga Resmi Joki Blox Fruits
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
              Pilih paket sesuai target in-game kamu. Semua paket dikerjakan langsung oleh tim berpengalaman tanpa software ilegal.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Cari paket atau item..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8">
          {[
            { id: 'all', label: 'Semua Layanan' },
            { id: 'level', label: 'Joki Leveling' },
            { id: 'mastery', label: 'Mastery Senjata/Fruit' },
            { id: 'belly', label: 'Belly' },
            { id: 'fragment', label: 'Fragment (Diskon 50%)' },
            { id: 'special', label: 'Raid & Quest Khusus' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id as ServiceCategory)}
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

        {/* Services Grid */}
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
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">
                      <Sparkles className="w-3 h-3" />
                      Populer
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
                    `Halo Admin Kepinn Joki, saya mau order paket: ${service.name}. Mohon info slot pengerjaannya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-red-600 text-white transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Paket {service.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
