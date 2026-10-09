import React, { useState } from 'react';
import { PILLARS } from '../data/pillars';
import { MONOGRAPHS } from '../data/monographs';
import { ResearchPillar, Monograph } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface ResearchPillarsProps {
  onSelectMonograph: (monograph: Monograph) => void;
}

export const ResearchPillars: React.FC<ResearchPillarsProps> = ({ onSelectMonograph }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PILLARS[0].id);

  const activePillar = PILLARS.find((p) => p.id === selectedPillarId) || PILLARS[0];
  const relatedMonographs = MONOGRAPHS.filter((m) => activePillar.recentPaperIds.includes(m.id));

  return (
    <section id="pillars" className="border-b border-hairline py-16 lg:py-24 bg-[#FAF7F0] dark:bg-[#161413] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-hairline">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780]">
              Programmatic Structure · Quadrivium
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] tracking-tight">
              Four Invariant Research Pillars
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#78716C] dark:text-[#8C8780] max-w-md font-serif italic">
            Autonomous scientific groups structured to formulate mathematical truth before sovereign non-biological intellect crosses irreversible cognitive thresholds.
          </p>
        </div>

        {/* Pillar Selector: Clean editorial navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-hairline pt-6">
          {PILLARS.map((pillar, idx) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`text-left p-6 transition-all border-b-2 sm:border-b-0 sm:border-r last:border-r-0 border-hairline cursor-pointer ${
                  isSelected
                    ? 'bg-[#F2ECE1] dark:bg-[#201E1B] border-b-[#1C1917] dark:border-b-[#EDEAE5] sm:border-t-2 sm:border-t-[#1C1917] dark:sm:border-t-[#EDEAE5]'
                    : 'bg-transparent hover:bg-[#F6F1E7] dark:hover:bg-[#1A1816]'
                }`}
              >
                <div className="font-mono text-xs text-[#A8A29E] dark:text-[#6E6A64] tracking-widest uppercase mb-1">
                  Pillar {pillar.numeral}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1C1917] dark:text-[#EDEAE5] leading-snug">
                  {pillar.title}
                </h3>
                <div className="mt-2 text-[11px] font-serif italic text-[#78716C] dark:text-[#8C8780]">
                  {pillar.latinName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Editorial Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
          {/* Left Column: Scope & Core Invariants */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A8A29E] dark:text-[#78716C]">
                Lead Chair: <span className="text-[#1C1917] dark:text-[#EDEAE5] font-semibold">{activePillar.leadChair}</span>
              </div>
              <h4 className="mt-2 text-2xl font-serif text-[#1C1917] dark:text-[#EDEAE5]">
                {activePillar.title}
              </h4>
              <p className="mt-3 text-base text-[#44403C] dark:text-[#C7C3BB] leading-relaxed font-serif">
                {activePillar.synopsis}
              </p>
            </div>

            <div className="p-5 bg-[#F5EFE3] dark:bg-[#1E1C1A] border-l-2 border-[#1C1917] dark:border-[#EDEAE5]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-1">
                The Foundational Open Inquiry
              </div>
              <p className="font-serif italic text-base text-[#1C1917] dark:text-[#EDEAE5]">
                &ldquo;{activePillar.coreQuestion}&rdquo;
              </p>
            </div>

            {/* Formal mathematical invariant */}
            <div className="p-4 bg-white/70 dark:bg-[#1A1816]/80 border border-hairline rounded-none">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-2 flex items-center justify-between">
                <span>Governing Formal Mathematical Invariant</span>
                <span className="text-[10px] text-[#A8A29E] dark:text-[#6E6A64]">TeX Formulation</span>
              </div>
              <div className="font-mono text-sm sm:text-base text-[#1C1917] dark:text-[#EDEAE5] bg-[#EFE9DD] dark:bg-[#252320] p-3 text-center border border-hairline-subtle overflow-x-auto">
                {activePillar.formalInvariant}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-3">
                Active Theoretic Proofs & Lemmata Under Ratification
              </div>
              <ul className="space-y-2 text-xs font-mono text-[#57534E] dark:text-[#A8A29E]">
                {activePillar.activeTheorems.map((thm, tIdx) => (
                  <li key={tIdx} className="flex items-baseline gap-2 py-1.5 border-b border-hairline-subtle">
                    <span className="text-[#A8A29E] dark:text-[#6E6A64]">§ {tIdx + 1}.</span>
                    <span className="text-[#1C1917] dark:text-[#EDEAE5]">{thm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Published Papers in Pillar */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-hairline lg:pl-10 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716C] dark:text-[#8C8780]">
              Monographs Published Under Pillar {activePillar.numeral}
            </div>

            <div className="space-y-4">
              {relatedMonographs.length > 0 ? (
                relatedMonographs.map((mono) => (
                  <div
                    key={mono.id}
                    onClick={() => onSelectMonograph(mono)}
                    className="p-5 bg-white/80 dark:bg-[#1A1816]/90 border border-hairline hover:border-[#1C1917] dark:hover:border-[#EDEAE5] transition-colors cursor-pointer group shadow-xs"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64] mb-1">
                      <span>{mono.accessionId}</span>
                      <span>{mono.date}</span>
                    </div>
                    <h5 className="font-serif text-lg font-medium text-[#1C1917] dark:text-[#EDEAE5] group-hover:text-[#854D0E] dark:group-hover:text-[#F59E0B] transition-colors">
                      {mono.title}
                    </h5>
                    <p className="mt-1.5 text-xs text-[#78716C] dark:text-[#8C8780] line-clamp-2">
                      {mono.abstract}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-hairline-subtle">
                      <span className="text-[#A8A29E] dark:text-[#6E6A64]">{mono.authors[0]?.name}</span>
                      <span className="text-[#1C1917] dark:text-[#EDEAE5] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Monograph <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-[#78716C] dark:text-[#8C8780] italic font-serif">
                  Working papers currently restricted to internal peer review prior to public deposit.
                </div>
              )}
            </div>

            {/* Archival Callout */}
            <div className="p-4 bg-[#F2ECE1] dark:bg-[#1E1C1A] border border-hairline text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] mb-1 font-semibold">
                Institute Open Access Policy
              </div>
              All monographs published by the Super Intelligence Institute are deposited without paywalls under perpetual CC-BY-NC archival covenants at sii.et.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
