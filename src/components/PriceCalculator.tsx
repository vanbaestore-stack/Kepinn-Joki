import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, Copy, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ADMIN_PHONE } from '../data';

type TabType = 'level' | 'mastery' | 'belly' | 'fragment' | 'special';

export const PriceCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('level');

  // Level Calculator States
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [targetLevel, setTargetLevel] = useState<number>(500);

  // Mastery States
  const [masteryType, setMasteryType] = useState<string>('Fruit (Kitsune / Dough / etc)');
  const [currentMastery, setCurrentMastery] = useState<number>(1);
  const [targetMastery, setTargetMastery] = useState<number>(300);

  // Belly States
  const [bellyAmount, setBellyAmount] = useState<number>(5000000);

  // Fragment States
  const [fragmentAmount, setFragmentAmount] = useState<number>(10000);

  // Special States
  const [specialItem, setSpecialItem] = useState<string>('Awakening Full Skill (Semua Move)');

  // Copy Feedback state
  const [copied, setCopied] = useState<boolean>(false);

  // Price Calculation Logic
  const calculationResult = useMemo(() => {
    let price = 0;
    let details = '';
    let discountNote = '';
    let bonusNote = '';

    if (activeTab === 'level') {
      const diff = Math.max(0, targetLevel - currentLevel);
      if (diff === 0) {
        price = 0;
        details = 'Level awal dan target sama';
      } else if (diff <= 100) {
        price = 5000;
        details = `${diff} Level (Paket 100 Level)`;
      } else if (diff <= 300) {
        price = 12000;
        details = `${diff} Level (Paket 300 Level)`;
        discountNote = 'Hemat Rp3.000 vs tarif normal';
      } else if (diff <= 500) {
        price = 15000;
        details = `${diff} Level (Paket 500 Level - Best Deal)`;
        discountNote = 'Hemat Rp10.000 vs tarif normal';
      } else if (diff <= 700) {
        price = 20000;
        details = `${diff} Level (Paket 700 Level)`;
        discountNote = 'Hemat Rp15.000 vs tarif normal';
      } else if (diff <= 1000) {
        price = 30000;
        details = `${diff} Level (Paket 1000 Level Sultan)`;
        discountNote = 'Hemat Rp20.000 vs tarif normal';
      } else {
        // Multiplier for > 1000
        const thousandBlocks = Math.floor(diff / 1000);
        const remainder = diff % 1000;
        let remPrice = 0;
        if (remainder > 0 && remainder <= 100) remPrice = 5000;
        else if (remainder > 100 && remainder <= 300) remPrice = 12000;
        else if (remainder > 300 && remainder <= 500) remPrice = 15000;
        else if (remainder > 500 && remainder <= 700) remPrice = 20000;
        else if (remainder > 700) remPrice = 30000;

        price = thousandBlocks * 30000 + remPrice;
        details = `${diff} Level (${thousandBlocks * 1000} + ${remainder} Level)`;
        discountNote = 'Paket Combo Jumbo Hemat Maksimal';
      }
      bonusNote = 'Bonus 100% Belly & Item Drop selama leveling gratis';
    } else if (activeTab === 'mastery') {
      const diff = Math.max(0, targetMastery - currentMastery);
      if (diff <= 100) {
        price = 5000;
        details = `${masteryType}: ${currentMastery} -> ${targetMastery} (100 Mastery)`;
      } else if (diff <= 300) {
        price = 12000;
        details = `${masteryType}: ${currentMastery} -> ${targetMastery} (300 Mastery)`;
        discountNote = 'Hemat Rp3.000';
      } else {
        price = 18000;
        details = `${masteryType}: ${currentMastery} -> ${targetMastery} (600 Mastery Max)`;
        discountNote = 'Hemat Rp12.000 (Full Maxed Stat)';
      }
      bonusNote = 'Syarat akun: Minimal Level 2100';
    } else if (activeTab === 'belly') {
      if (bellyAmount === 1000000) {
        price = 4000;
        details = '1.000.000 Belly (1 Juta)';
      } else if (bellyAmount === 5000000) {
        price = 15000;
        details = '5.000.000 Belly (5 Juta)';
        discountNote = 'Hemat Rp5.000';
      } else if (bellyAmount === 10000000) {
        price = 25000;
        details = '10.000.000 Belly (10 Juta)';
        discountNote = 'Hemat Rp15.000';
      } else {
        price = Math.round((bellyAmount / 1000000) * 2500);
        details = `${(bellyAmount / 1000000).toLocaleString('id-ID')} Juta Belly`;
      }
      bonusNote = 'Khusus akun Sea 2 & Sea 3';
    } else if (activeTab === 'fragment') {
      if (fragmentAmount === 1000) {
        price = 3000;
        details = '1.000 Fragment';
      } else if (fragmentAmount === 5000) {
        price = 12000;
        details = '5.000 Fragment';
        discountNote = 'Hemat Rp3.000';
      } else if (fragmentAmount === 10000) {
        price = 15000;
        details = '10.000 Fragment';
        discountNote = 'PROMO DISKON 50% (Normal Rp30.000)';
      } else if (fragmentAmount === 20000) {
        price = 30000;
        details = '20.000 Fragment';
        discountNote = 'PROMO DISKON 50% (Normal Rp60.000)';
      } else {
        price = Math.round((fragmentAmount / 1000) * 1500);
        details = `${fragmentAmount.toLocaleString('id-ID')} Fragment`;
        discountNote = 'Diskon 50% Grosir';
      }
      bonusNote = 'Syarat akun: Minimal Level 2100';
    } else if (activeTab === 'special') {
      if (specialItem.includes('Awakening')) {
        price = 20000;
        details = 'Awakening Full Skill (Z, X, C, V, F)';
      } else if (specialItem.includes('Advanced')) {
        price = 5000;
        details = 'Raid Advanced per Chip (Dough / Phoenix / Buddha)';
      } else if (specialItem.includes('Normal')) {
        price = 3000;
        details = 'Raid Normal per Chip (Flame, Ice, Light, dll)';
      } else {
        price = 15000;
        details = 'Bahan Fighting Style / Special Quest';
      }
      bonusNote = 'Dikerjakan di VIP Server Private';
    }

    // Generate formatted WhatsApp message text
    const waMessage = `Halo Admin Kepinn Joki, saya mau pesan joki Blox Fruits:
- Layanan: ${activeTab.toUpperCase()}
- Rincian: ${details}
- Estimasi Biaya: Rp${price.toLocaleString('id-ID')}
- Catatan: ${discountNote || 'Order via website'}

Apakah slot masih tersedia untuk hari ini? Terima kasih!`;

    return {
      price,
      details,
      discountNote,
      bonusNote,
      waMessage,
      waUrl: `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(waMessage)}`,
    };
  }, [activeTab, currentLevel, targetLevel, masteryType, currentMastery, targetMastery, bellyAmount, fragmentAmount, specialItem]);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(calculationResult.waMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kalkulator" className="py-20 bg-zinc-900/60 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Estimasi Biaya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hitung Biaya Joki Secara Transparan
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Sesuaikan kebutuhan akun kamu. Sistem akan menghitung estimasi biaya resmi secara otomatis tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl space-y-6">
            {/* Tab Selector */}
            <div className="flex flex-wrap gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
              <button
                type="button"
                onClick={() => setActiveTab('level')}
                className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeTab === 'level'
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                Joki Level
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('mastery')}
                className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeTab === 'mastery'
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                Joki Mastery
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('belly')}
                className={`flex-1 min-w-[90px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeTab === 'belly'
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                Joki Belly
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fragment')}
                className={`flex-1 min-w-[90px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeTab === 'fragment'
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                Fragment (-50%)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('special')}
                className={`flex-1 min-w-[90px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeTab === 'special'
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                Raid / Quest
              </button>
            </div>

            {/* Tab 1: Joki Level Controls */}
            {activeTab === 'level' && (
              <div className="space-y-6 pt-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400">Level Saat Ini</label>
                    <input
                      type="number"
                      min={1}
                      max={2549}
                      value={currentLevel}
                      onChange={(e) => {
                        const val = Math.max(1, Math.min(2549, Number(e.target.value) || 1));
                        setCurrentLevel(val);
                        if (val >= targetLevel) setTargetLevel(Math.min(2600, val + 100));
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <span className="text-[11px] text-zinc-500">Mulai dari Sea 1 / 2 / 3</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400">Target Level</label>
                    <input
                      type="number"
                      min={currentLevel + 1}
                      max={2600}
                      value={targetLevel}
                      onChange={(e) => {
                        const val = Math.max(currentLevel + 1, Math.min(2600, Number(e.target.value) || currentLevel + 50));
                        setTargetLevel(val);
                      }}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <span className="text-[11px] text-zinc-500">Maksimal Level: 2600 (Max Level Saat Ini)</span>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-zinc-400">Pilihan Cepat Target Level:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: '+100 Level', add: 100 },
                      { label: '+300 Level', add: 300 },
                      { label: '+500 Level (Populer)', add: 500 },
                      { label: '+1000 Level (Sultan)', add: 1000 },
                      { label: 'Langsung Max (2600)', setMax: true },
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          if (preset.setMax) {
                            setTargetLevel(2600);
                          } else if (preset.add) {
                            setTargetLevel(Math.min(2600, currentLevel + preset.add));
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Mastery Controls */}
            {activeTab === 'mastery' && (
              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400">Jenis Item / Senjata</label>
                  <select
                    value={masteryType}
                    onChange={(e) => setMasteryType(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white font-medium text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  >
                    <option value="Devil Fruit (Kitsune / Dough / Leopard)">Devil Fruit (Kitsune, Dough, Leopard, T-Rex, dll)</option>
                    <option value="Sword (Cursed Dual Katana / True Triple Katana)">Sword (CDK, TTK, Saber, Bisento, dll)</option>
                    <option value="Fighting Style (Godhuman / Sanguine Art)">Fighting Style (Godhuman, Sanguine, Sharkman, dll)</option>
                    <option value="Gun (Soul Guitar / Kabucha)">Gun (Soul Guitar, Kabucha, Acidum Rifle)</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400">Mastery Sekarang</label>
                    <input
                      type="number"
                      min={1}
                      max={599}
                      value={currentMastery}
                      onChange={(e) => setCurrentMastery(Math.max(1, Math.min(599, Number(e.target.value) || 1)))}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white font-bold text-base focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400">Target Mastery</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[100, 300, 600].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setTargetMastery(lvl)}
                          className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${
                            targetMastery === lvl
                              ? 'bg-red-600/30 border-red-500 text-white'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {lvl} {lvl === 600 ? '(MAX)' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Belly Controls */}
            {activeTab === 'belly' && (
              <div className="space-y-4 pt-2">
                <label className="text-xs font-semibold text-zinc-400">Pilih Jumlah Belly (Uang In-Game)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { amount: 1000000, label: '1 Juta (1M)', price: 'Rp4.000' },
                    { amount: 5000000, label: '5 Juta (5M)', price: 'Rp15.000' },
                    { amount: 10000000, label: '10 Juta (10M)', price: 'Rp25.000' },
                    { amount: 20000000, label: '20 Juta (20M)', price: 'Rp48.000' },
                  ].map((pkg) => (
                    <button
                      key={pkg.amount}
                      type="button"
                      onClick={() => setBellyAmount(pkg.amount)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        bellyAmount === pkg.amount
                          ? 'bg-red-600/20 border-red-500 text-white ring-1 ring-red-500'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{pkg.label}</div>
                      <div className="text-xs text-red-400 font-semibold mt-1">{pkg.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Fragment Controls */}
            {activeTab === 'fragment' && (
              <div className="space-y-4 pt-2">
                <div className="bg-red-950/40 border border-red-800/50 rounded-xl p-3.5 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong className="text-white">PROMO SPESIAL:</strong> Pembelian minimal 10.000 Fragment otomatis mendapatkan <span className="text-red-400 font-bold">Diskon 50%</span>!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { amount: 1000, label: '1.000 Frag', price: 'Rp3.000', badge: 'Normal' },
                    { amount: 5000, label: '5.000 Frag', price: 'Rp12.000', badge: 'Hemat' },
                    { amount: 10000, label: '10.000 Frag', price: 'Rp15.000', badge: 'Diskon 50%' },
                    { amount: 20000, label: '20.000 Frag', price: 'Rp30.000', badge: 'Diskon 50%' },
                  ].map((pkg) => (
                    <button
                      key={pkg.amount}
                      type="button"
                      onClick={() => setFragmentAmount(pkg.amount)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        fragmentAmount === pkg.amount
                          ? 'bg-red-600/20 border-red-500 text-white ring-1 ring-red-500'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-white">{pkg.label}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-amber-400 font-semibold border border-zinc-700">
                          {pkg.badge}
                        </span>
                      </div>
                      <div className="text-sm text-red-400 font-bold mt-2">{pkg.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Special Raid & Quest Controls */}
            {activeTab === 'special' && (
              <div className="space-y-4 pt-2">
                <label className="text-xs font-semibold text-zinc-400">Pilih Layanan Khusus</label>
                <div className="space-y-2.5">
                  {[
                    'Awakening Full Skill (Semua Move)',
                    'Raid Advanced per Chip (Dough / Buddha / Phoenix)',
                    'Raid Normal per Chip (Flame, Ice, Light, dll)',
                    'Bahan Fighting Style / Special Quest (CDK, Godhuman)',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSpecialItem(item)}
                      className={`w-full p-3.5 rounded-xl text-left border text-sm font-medium transition-all ${
                        specialItem === item
                          ? 'bg-red-600/20 border-red-500 text-white ring-1 ring-red-500'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Result Card & Instant Order Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-2xl border border-red-900/40 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Ringkasan Order
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                Tarif Resmi
              </span>
            </div>

            {/* Big Price Display */}
            <div>
              <span className="text-xs text-zinc-400">Total Estimasi Biaya</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1 flex items-baseline gap-2">
                <span>Rp{calculationResult.price.toLocaleString('id-ID')}</span>
                <span className="text-xs text-zinc-500 font-normal">/ pesanan</span>
              </div>
              <p className="text-xs text-red-400 font-semibold mt-1">
                {calculationResult.details}
              </p>
            </div>

            {/* Highlights & Bonuses */}
            <div className="space-y-2 py-2">
              {calculationResult.discountNote && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/30">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{calculationResult.discountNote}</span>
                </div>
              )}
              {calculationResult.bonusNote && (
                <div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900/90 p-2.5 rounded-lg border border-zinc-800">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{calculationResult.bonusNote}</span>
                </div>
              )}
            </div>

            {/* Generated WhatsApp Message Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-semibold">Format Pesan WhatsApp:</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Teks</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 text-[11px] font-mono text-zinc-300 leading-relaxed whitespace-pre-wrap select-all">
                {calculationResult.waMessage}
              </div>
            </div>

            {/* Direct WhatsApp Submit Button */}
            <a
              id="calc-order-whatsapp-btn"
              href={calculationResult.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-red-950/60 transition-all hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Pesan via WhatsApp Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-center text-zinc-500">
              Admin akan langsung membalas untuk konfirmasi slot pengerjaan dan mengirimkan invoice pembayaran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
