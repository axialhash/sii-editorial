import React, { useState } from 'react';
import { SCHOLARS } from '../data/scholars';
import { Scholar } from '../types';
import { Mail, GraduationCap, ChevronRight } from 'lucide-react';

interface ScholarsDirectoryProps {
  onOpenFellowship: () => void;
}

export const ScholarsDirectory: React.FC<ScholarsDirectoryProps> = ({ onOpenFellowship }) => {
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);

  return (
    <section id="scholars" className="border-b border-hairline py-16 lg:py-24 bg-[#FAF7F0] dark:bg-[#161413] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-hairline">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780]">
              Faculty & Academic Senate · Addis Ababa Commons
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] tracking-tight">
              Resident Chairs & Visiting Fellows
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenFellowship}
              className="px-4 py-2 border border-[#1C1917] dark:border-[#EDEAE5] hover:bg-[#1C1917] dark:hover:bg-[#EDEAE5] hover:text-[#FBF9F5] dark:hover:text-[#121110] text-[#1C1917] dark:text-[#EDEAE5] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
            >
              Apply for 2026/27 Fellowship
            </button>
          </div>
        </div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {SCHOLARS.map((scholar) => (
            <div
              key={scholar.id}
              className="bg-white/80 dark:bg-[#1A1816]/90 border border-hairline p-7 flex flex-col justify-between hover:border-[#1C1917] dark:hover:border-[#EDEAE5] transition-all shadow-xs"
            >
              <div>
                <div className="text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64] uppercase tracking-wider mb-1">
                  {scholar.department}
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
                  {scholar.name}
                </h3>
                <div className="text-xs text-[#78716C] dark:text-[#8C8780] mt-1 font-serif italic">
                  {scholar.title}
                </div>
                <div className="text-[11px] text-[#A8A29E] dark:text-[#6E6A64] mt-0.5">
                  {scholar.origin}
                </div>

                <p className="mt-4 text-xs sm:text-[13px] text-[#44403C] dark:text-[#C7C3BB] leading-relaxed">
                  {scholar.bio}
                </p>

                <div className="mt-5 pt-4 border-t border-hairline-subtle">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-1 font-semibold">
                    Current Formal Inquiry
                  </div>
                  <div className="text-xs font-serif italic text-[#1C1917] dark:text-[#EDEAE5]">
                    &ldquo;{scholar.activeInquiry}&rdquo;
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-[#78716C] dark:text-[#8C8780]">
                <span className="font-mono text-[11px]">
                  {scholar.recentPublications.length} Monographs
                </span>
                <button
                  onClick={() => setSelectedScholar(scholar)}
                  className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] flex items-center gap-1 font-medium transition-colors cursor-pointer"
                >
                  <span>Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholar Detail Modal */}
        {selectedScholar && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-[#1C1917]/70 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-[#FBF9F5] dark:bg-[#161413] max-w-xl w-full border border-[#1C1917] dark:border-[#EDEAE5] p-8 shadow-2xl relative text-[#1C1917] dark:text-[#EDEAE5]">
              <button
                onClick={() => setSelectedScholar(null)}
                aria-label="Close Scholar Dossier"
                className="absolute top-5 right-5 text-sm font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
              >
                [ESC / CLOSE]
              </button>

              <div className="text-xs font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-1">
                Academic Dossier · Accession Record
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
                {selectedScholar.name}
              </h3>
              <div className="text-sm font-serif italic text-[#57534E] dark:text-[#A8A29E] mt-1">
                {selectedScholar.title}
              </div>
              <div className="text-xs text-[#78716C] dark:text-[#8C8780] mt-0.5">
                {selectedScholar.department} · {selectedScholar.origin}
              </div>

              <div className="mt-6 text-sm text-[#292524] dark:text-[#D6D3CD] leading-relaxed space-y-3">
                <p>{selectedScholar.bio}</p>
                <div className="p-3 bg-[#F2ECE1] dark:bg-[#201E1B] border-l-2 border-[#1C1917] dark:border-[#EDEAE5] text-xs">
                  <strong>Active Inquiry Track:</strong> {selectedScholar.activeInquiry}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-hairline">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-2 font-semibold">
                  Recent Institute Monographs
                </div>
                <ul className="space-y-1.5 text-xs font-serif text-[#44403C] dark:text-[#A8A29E]">
                  {selectedScholar.recentPublications.map((pub, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A8A29E] dark:text-[#6E6A64] font-mono">·</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between">
                <button
                  onClick={onOpenFellowship}
                  className="px-4 py-2 bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110] text-xs uppercase tracking-wider font-medium hover:bg-[#333] dark:hover:bg-white transition-colors cursor-pointer"
                >
                  Direct Inquiry to Chair
                </button>
                <button
                  onClick={() => setSelectedScholar(null)}
                  className="text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
                >
                  Return to Directory
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
