import React, { useState, useMemo } from 'react';
import { MessageCircle, Copy, Check, Sparkles, AlertCircle, ArrowRight, ShieldCheck, Plus, Minus, ArrowUpRight, Compass } from 'lucide-react';
import { ADMIN_PHONE } from '../data';
import { useLanguage } from '../context/LanguageContext';

type TabType = 'level' | 'mastery' | 'belly' | 'fragment' | 'special';

// Helper to determine Blox Fruits Sea info
function getSeaInfo(level: number, isEn: boolean) {
  if (level < 700) {
    return {
      name: isEn ? 'Sea 1 (First Sea)' : 'Sea 1 (Lautan Pertama)',
      short: 'Sea 1',
      textClass: 'text-sky-400',
    };
  }
  if (level < 1500) {
    return {
      name: isEn ? 'Sea 2 (Second Sea)' : 'Sea 2 (Lautan Kedua)',
      short: 'Sea 2',
      textClass: 'text-amber-400',
    };
  }
  return {
    name: isEn ? 'Sea 3 (Third Sea)' : 'Sea 3 (Lautan Ketiga)',
    short: 'Sea 3',
    textClass: 'text-rose-400',
  };
}

// Proportional, transparent level price formula matching catalog rates
function calculateLevelPrice(diff: number, isEn: boolean): { price: number; discountNote: string } {
  if (diff <= 0) return { price: 0, discountNote: '' };

  let price = 0;
  let discountNote = '';

  if (diff <= 100) {
    price = Math.max(2500, Math.round((diff * 50) / 500) * 500);
    discountNote = isEn
      ? (diff === 100 ? 'Official 100-Level Package Rate' : `Custom rate: Rp50/Lv (${diff} Levels)`)
      : (diff === 100 ? 'Tarif Resmi Paket 100 Level' : `Tarif kustom: Rp50/Lv (${diff} Level)`);
  } else if (diff <= 300) {
    const base = 5000;
    const additional = (diff - 100) * 35;
    price = Math.round((base + additional) / 500) * 500;
    const normal = diff * 50;
    const saved = Math.max(0, normal - price);
    discountNote = isEn
      ? `Save Rp${saved.toLocaleString('id-ID')} vs retail rate`
      : `Hemat Rp${saved.toLocaleString('id-ID')} vs tarif eceran normal`;
  } else if (diff <= 500) {
    const base = 12000;
    const additional = (diff - 300) * 15;
    price = Math.round((base + additional) / 500) * 500;
    const normal = diff * 50;
    const saved = Math.max(0, normal - price);
    discountNote = isEn
      ? `Best Deal: Save Rp${saved.toLocaleString('id-ID')} (Package Discount)`
      : `Best Deal: Hemat Rp${saved.toLocaleString('id-ID')} (Diskon Paket)`;
  } else if (diff <= 700) {
    const base = 15000;
    const additional = (diff - 500) * 25;
    price = Math.round((base + additional) / 500) * 500;
    const normal = diff * 50;
    const saved = Math.max(0, normal - price);
    discountNote = isEn
      ? `Package Deal: Save Rp${saved.toLocaleString('id-ID')}`
      : `Paket Hemat: Hemat Rp${saved.toLocaleString('id-ID')}`;
  } else if (diff <= 1000) {
    const base = 20000;
    const additional = (diff - 700) * 33.33;
    price = Math.round((base + additional) / 500) * 500;
    const normal = diff * 50;
    const saved = Math.max(0, normal - price);
    discountNote = isEn
      ? `Bulk Deal: Save Rp${saved.toLocaleString('id-ID')}`
      : `Paket Borongan: Hemat Rp${saved.toLocaleString('id-ID')}`;
  } else {
    const base = 30000;
    const additional = (diff - 1000) * 25;
    price = Math.round((base + additional) / 500) * 500;
    const normal = diff * 50;
    const saved = Math.max(0, normal - price);
    discountNote = isEn
      ? `Sultan Wholesale Rate: Save Rp${saved.toLocaleString('id-ID')}`
      : `Tarif Grosir Sultan: Hemat Rp${saved.toLocaleString('id-ID')}`;
  }

  return { price, discountNote };
}

export const PriceCalculator: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('level');

  // Level Calculator States (Strings permit unrestricted free editing without premature clamp resets)
  const [currentLevelInput, setCurrentLevelInput] = useState<string>('1');
  const [targetLevelInput, setTargetLevelInput] = useState<string>('1000');

  // Derived Parsed Integers for Level
  const parsedCurrentLevel = parseInt(currentLevelInput, 10);
  const parsedTargetLevel = parseInt(targetLevelInput, 10);
  const currentLevel = isNaN(parsedCurrentLevel) ? 1 : Math.max(1, Math.min(2600, parsedCurrentLevel));
  const targetLevel = isNaN(parsedTargetLevel) ? 1 : Math.max(1, Math.min(2600, parsedTargetLevel));

  // Stepper handlers for level
  const stepCurrentLevel = (delta: number) => {
    const cur = isNaN(parsedCurrentLevel) ? 1 : parsedCurrentLevel;
    const next = Math.max(1, Math.min(2600, cur + delta));
    setCurrentLevelInput(next.toString());
  };

  const stepTargetLevel = (delta: number) => {
    const cur = isNaN(parsedTargetLevel) ? (currentLevel + 100) : parsedTargetLevel;
    const next = Math.max(1, Math.min(2600, cur + delta));
    setTargetLevelInput(next.toString());
  };

  // Mastery States
  const [masteryType, setMasteryType] = useState<string>('Devil Fruit (Kitsune / Dough / etc)');
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
    const isEn = language === 'en';
    let price = 0;
    let details = '';
    let discountNote = '';
    let bonusNote = '';

    if (activeTab === 'level') {
      const diff = targetLevel - currentLevel;
      if (diff <= 0) {
        price = 0;
        details = isEn
          ? `Starting level (${currentLevel}) >= Target level (${targetLevel}). Please enter a higher target level.`
          : `Level awal (${currentLevel}) >= Target level (${targetLevel}). Silakan masukkan target level yang lebih tinggi.`;
        bonusNote = isEn
          ? 'Tip: Use the quick presets below (+100 Lv, +500 Lv, or Max 2600).'
          : 'Tips: Gunakan tombol pilihan cepat di bawah (+100 Lv, +500 Lv, atau Max 2600).';
      } else {
        const result = calculateLevelPrice(diff, isEn);
        price = result.price;
        discountNote = result.discountNote;
        const startSea = getSeaInfo(currentLevel, isEn);
        const targetSea = getSeaInfo(targetLevel, isEn);
        details = isEn
          ? `${diff} Levels (Lv ${currentLevel} [${startSea.short}] → Lv ${targetLevel} [${targetSea.short}])`
          : `${diff} Level (Lv ${currentLevel} [${startSea.short}] → Lv ${targetLevel} [${targetSea.short}])`;
        bonusNote = isEn
          ? 'Free bonus: 100% of Belly, Fruit spawns & Item drops collected during boosting remain on your account'
          : 'Bonus gratis: 100% Belly, Buah & Item drop selama proses joki tetap utuh di akun Anda';
      }
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
    const waMessage = isEn
      ? `Hello Admin Kepinn Joki, I would like to order Blox Fruits boosting:
- Service: ${activeTab.toUpperCase()}
- Details: ${details}
- Estimated Price: Rp${price.toLocaleString('id-ID')}
- Note: ${discountNote || 'Order via website'}

Is there a slot available today? Thank you!`
      : `Halo Admin Kepinn Joki, saya mau pesan joki Blox Fruits:
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
  }, [activeTab, currentLevel, targetLevel, masteryType, currentMastery, targetMastery, bellyAmount, fragmentAmount, specialItem, language]);

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
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
            {t.calculator.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.calculator.heading}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.calculator.subheading}
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
                {t.calculator.tabs.level}
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
                {t.calculator.tabs.mastery}
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
                {t.calculator.tabs.belly}
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
                {t.calculator.tabs.fragment}
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
                {t.calculator.tabs.special}
              </button>
            </div>

            {/* Tab 1: Joki Level Controls (Flexible free editing for start & target level) */}
            {activeTab === 'level' && (
              <div className="space-y-6 pt-2">
                <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{t.calculator.levelTab.customFreeEditTip}</span>
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Start Level Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="input-current-level" className="text-xs font-bold text-zinc-200">
                        {t.calculator.levelTab.startLevel}
                      </label>
                      <span className={`text-xs font-semibold ${getSeaInfo(currentLevel, language === 'en').textClass}`}>
                        {getSeaInfo(currentLevel, language === 'en').name}
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        id="input-current-level"
                        type="number"
                        min={1}
                        max={2600}
                        value={currentLevelInput}
                        placeholder="1 - 2600"
                        onChange={(e) => setCurrentLevelInput(e.target.value)}
                        onBlur={() => {
                          const val = parseInt(currentLevelInput, 10);
                          if (isNaN(val) || val < 1) {
                            setCurrentLevelInput('1');
                          } else if (val > 2600) {
                            setCurrentLevelInput('2600');
                          }
                        }}
                        className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-xl px-4 py-3 text-white font-extrabold text-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-500 pointer-events-none">
                        Lv
                      </span>
                    </div>

                    {/* Steppers for Start Level */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {t.calculator.levelTab.stepperLabel}
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[-100, -10, 10, 100].map((step) => (
                          <button
                            key={step}
                            type="button"
                            onClick={() => stepCurrentLevel(step)}
                            className="py-1.5 px-2 rounded-lg text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center gap-0.5 active:scale-95"
                          >
                            {step > 0 ? `+${step}` : step}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Starting Sea Shortcuts */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {t.calculator.levelTab.quickJumpSea}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { label: 'Sea 1 (Lv 1)', level: 1 },
                          { label: 'Sea 2 (Lv 700)', level: 700 },
                          { label: 'Sea 3 (Lv 1500)', level: 1500 },
                        ].map((sea) => (
                          <button
                            key={sea.level}
                            type="button"
                            onClick={() => setCurrentLevelInput(sea.level.toString())}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                              currentLevel === sea.level
                                ? 'bg-red-600/30 border-red-500 text-white font-bold'
                                : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                            }`}
                          >
                            {sea.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Target Level Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="input-target-level" className="text-xs font-bold text-zinc-200">
                        {t.calculator.levelTab.targetLevel}
                      </label>
                      <span className={`text-xs font-semibold ${getSeaInfo(targetLevel, language === 'en').textClass}`}>
                        {getSeaInfo(targetLevel, language === 'en').name}
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        id="input-target-level"
                        type="number"
                        min={1}
                        max={2600}
                        value={targetLevelInput}
                        placeholder="1 - 2600"
                        onChange={(e) => setTargetLevelInput(e.target.value)}
                        onBlur={() => {
                          const val = parseInt(targetLevelInput, 10);
                          if (isNaN(val) || val < 1) {
                            setTargetLevelInput(Math.min(2600, currentLevel + 100).toString());
                          } else if (val > 2600) {
                            setTargetLevelInput('2600');
                          }
                        }}
                        className="w-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-xl px-4 py-3 text-white font-extrabold text-xl focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-500 pointer-events-none">
                        Lv
                      </span>
                    </div>

                    {/* Steppers for Target Level */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {t.calculator.levelTab.stepperLabel}
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[-100, -10, 10, 100].map((step) => (
                          <button
                            key={step}
                            type="button"
                            onClick={() => stepTargetLevel(step)}
                            className="py-1.5 px-2 rounded-lg text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center gap-0.5 active:scale-95"
                          >
                            {step > 0 ? `+${step}` : step}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Presets for Target Level */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] text-zinc-400 font-medium">
                        {t.calculator.levelTab.quickAddTarget}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { label: '+50', add: 50 },
                          { label: '+100', add: 100 },
                          { label: '+300', add: 300 },
                          { label: '+500 (Best)', add: 500 },
                          { label: '+1000', add: 1000 },
                          { label: 'Sea 2 (700)', setExact: 700 },
                          { label: 'Sea 3 (1500)', setExact: 1500 },
                          { label: 'Max (2600)', setExact: 2600 },
                        ].map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              if (preset.setExact !== undefined) {
                                setTargetLevelInput(preset.setExact.toString());
                              } else if (preset.add !== undefined) {
                                const base = isNaN(parsedCurrentLevel) ? 1 : parsedCurrentLevel;
                                setTargetLevelInput(Math.min(2600, base + preset.add).toString());
                              }
                            }}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                              preset.setExact === 2600 && targetLevel === 2600
                                ? 'bg-red-600 text-white border-red-500 font-bold shadow-md shadow-red-950/40'
                                : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Level Journey Visualizer or Alert Banner */}
                {targetLevel <= currentLevel ? (
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-300">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{t.calculator.levelTab.invalidRange}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTargetLevelInput(Math.min(2600, currentLevel + 100).toString())}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold border border-amber-500/40 transition-colors shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t.calculator.levelTab.autoFixBtn}</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-2 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-400">{t.calculator.levelTab.levelGap}:</span>
                        <span className="font-extrabold text-red-400 text-sm">
                          +{targetLevel - currentLevel} Level
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <span>{getSeaInfo(currentLevel, language === 'en').name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                        <span className="text-white font-semibold">{getSeaInfo(targetLevel, language === 'en').name}</span>
                      </div>
                    </div>

                    {/* Progress track towards Max Level 2600 */}
                    <div className="space-y-1">
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden flex">
                        <div
                          className="bg-zinc-600 h-full transition-all duration-300"
                          style={{ width: `${(currentLevel / 2600) * 100}%` }}
                        ></div>
                        <div
                          className="bg-gradient-to-r from-red-500 to-amber-400 h-full transition-all duration-300"
                          style={{ width: `${Math.min(100 - (currentLevel / 2600) * 100, ((targetLevel - currentLevel) / 2600) * 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-zinc-500">
                        <span>Lv 1 (Sea 1)</span>
                        <span>Lv 700 (Sea 2)</span>
                        <span>Lv 1500 (Sea 3)</span>
                        <span>Lv 2600 (Max Cap)</span>
                      </div>
                    </div>
                  </div>
                )}
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
                {t.calculator.summary.title}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.calculator.summary.officialRate}
              </span>
            </div>

            {/* Big Price Display */}
            <div>
              <span className="text-xs text-zinc-400">{t.calculator.summary.totalEstimate}</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1 flex items-baseline gap-2">
                <span>Rp{calculationResult.price.toLocaleString('id-ID')}</span>
                <span className="text-xs text-zinc-500 font-normal">{t.calculator.summary.perOrder}</span>
              </div>
              <p className="text-xs text-red-400 font-semibold mt-1">
                {calculationResult.details}
              </p>
            </div>

            {/* Highlights & Bonuses (Pure text, no card containers) */}
            {(calculationResult.discountNote || calculationResult.bonusNote) && (
              <div className="space-y-1.5 py-1 text-xs">
                {calculationResult.discountNote && (
                  <p className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{calculationResult.discountNote}</span>
                  </p>
                )}
                {calculationResult.bonusNote && (
                  <p className="flex items-center gap-1.5 text-zinc-400">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{calculationResult.bonusNote}</span>
                  </p>
                )}
              </div>
            )}

            {/* Generated WhatsApp Message Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-semibold">{t.calculator.summary.waMsgLabel}</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">{t.calculator.summary.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.calculator.summary.copyTemplate}</span>
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
              <span>{t.calculator.summary.orderWaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-center text-zinc-500">
              {t.calculator.summary.securityNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
