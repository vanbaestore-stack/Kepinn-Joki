import React from 'react';
import { X, ShieldCheck, AlertTriangle, CheckCircle2, FileText, Lock, Code2, TrendingUp } from 'lucide-react';
import { SECURITY_AUDIT_REPORT } from '../data';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-zinc-950 border border-zinc-800 max-w-3xl w-full rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Tutup laporan audit"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hasil Audit Keamanan & Rekomendasi Desain</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Laporan Audit Keamanan Siber & CRO
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Analisis menyeluruh atas kerentanan teknis, alur penyerahan kredensial akun game, dan optimasi konversi landing page Kepinn Joki.
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-semibold">Skor Post-Audit:</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
              {SECURITY_AUDIT_REPORT.summaryScore}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {SECURITY_AUDIT_REPORT.overview}
          </p>
        </div>

        {/* Findings List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Rincian Temuan & Solusi yang Telah Diterapkan:
          </h3>

          {SECURITY_AUDIT_REPORT.findings.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 rounded-xl p-4 sm:p-5 border border-zinc-800/80 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-zinc-400 font-mono">#{idx + 1} &bull; {item.category}</span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      item.severity === 'KRITIS'
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    Tingkat: {item.severity}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    Status: Diperbaiki
                  </span>
                </div>
              </div>

              <h4 className="text-base font-bold text-white">{item.title}</h4>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-lg text-zinc-300">
                  <strong className="text-red-400 block mb-1">Celah / Potensi Masalah:</strong>
                  {item.problem}
                </div>

                <div className="bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg text-zinc-300">
                  <strong className="text-emerald-400 block mb-1">Solusi & Perbaikan:</strong>
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors"
          >
            Tutup Laporan
          </button>
        </div>
      </div>
    </div>
  );
};
