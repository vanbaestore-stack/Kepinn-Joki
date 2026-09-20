import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck, Menu, X } from 'lucide-react';
import { ADMIN_PHONE, DISPLAY_PHONE } from '../data';

interface NavbarProps {
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl'
          : 'bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo-link"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg group"
          aria-label="Beranda Kepinn Joki"
        >
          <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center p-1 group-hover:border-red-600 transition-colors shadow-lg shadow-red-950/40">
            <img
              src="/logo.svg"
              alt="Logo Kepinn Joki"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-red-400 transition-colors">
            KEPINN JOKI
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <a
            href="#keunggulan"
            className="text-zinc-400 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            Keunggulan
          </a>
          <a
            href="#kalkulator"
            className="text-red-400 hover:text-red-300 font-semibold transition-colors py-2 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Kalkulator Harga
          </a>
          <a
            href="#layanan"
            className="text-zinc-400 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            Daftar Layanan
          </a>
          <a
            href="#keamanan"
            className="text-zinc-400 hover:text-white transition-colors py-2 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            SOP Keamanan
          </a>
          <a
            href="#testimoni"
            className="text-zinc-400 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            Bukti Transaksi
          </a>
          <a
            href="#faq"
            className="text-zinc-400 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Primary WhatsApp CTA */}
          <a
            id="nav-wa-cta"
            href={`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(
              'Halo Admin Kepinn Joki, saya ingin konsultasi order joki Blox Fruits.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg shadow-lg shadow-red-950/50 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white" />
            <span>Hubungi Admin</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3"
        >
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-2 font-medium"
          >
            Keunggulan Kami
          </a>
          <a
            href="#kalkulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-red-400 hover:text-red-300 py-2 font-semibold"
          >
            Kalkulator Harga Instan
          </a>
          <a
            href="#layanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-2 font-medium"
          >
            Daftar Layanan & Paket
          </a>
          <a
            href="#keamanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-emerald-400 hover:text-emerald-300 py-2 font-medium flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            SOP Keamanan Akun
          </a>
          <a
            href="#testimoni"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-2 font-medium"
          >
            Bukti Transaksi & Testimoni
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white py-2 font-medium"
          >
            Tanya Jawab (FAQ)
          </a>
          <div className="pt-2 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">
              Admin Resmi: <span className="text-zinc-300 font-mono">{DISPLAY_PHONE}</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
