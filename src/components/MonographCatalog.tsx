import React, { useState, useMemo } from 'react';
import { MONOGRAPHS } from '../data/monographs';
import { Monograph, PillarCategory } from '../types';
import { Search, Quote, BookOpen, ArrowUpRight, Filter } from 'lucide-react';

interface MonographCatalogProps {
  onSelectMonograph: (monograph: Monograph) => void;
  onOpenCitation: (monograph: Monograph) => void;
}

export const MonographCatalog: React.FC<MonographCatalogProps> = ({
  onSelectMonograph,
  onOpenCitation,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredMonographs = useMemo(() => {
    return MONOGRAPHS.filter((mono) => {
      const matchesSearch =
        searchQuery === '' ||
        mono.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mono.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mono.authors.some((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        mono.accessionId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPillar = selectedPillar === 'all' || mono.pillar === selectedPillar;
      const matchesYear = selectedYear === 'all' || mono.year.toString() === selectedYear;

      return matchesSearch && matchesPillar && matchesYear;
    });
  }, [searchQuery, selectedPillar, selectedYear]);

  return (
    <section id="monographs" className="border-b border-hairline py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-hairline">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780]">
              Repository & Corpus
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] tracking-tight">
              The Monograph Series Archive
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#78716C] dark:text-[#8C8780]">
            Total Accessions: <span className="text-[#1C1917] dark:text-[#EDEAE5] font-semibold">{MONOGRAPHS.length}</span> Monographs · Index Updated Michaelmas 2026
          </div>
        </div>

        {/* Filter Controls Bar (Buttons & Segmented Controls - Allowed per constitution) */}
        <div className="py-6 border-b border-hairline flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E] dark:text-[#6E6A64]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, theorist, concept, or DOI..."
              className="w-full bg-[#F5F1E8] dark:bg-[#1A1816] border border-hairline pl-10 pr-4 py-2 text-xs text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#78716C] dark:text-[#8C8780] mr-1 hidden sm:inline">Pillar:</span>
            {[
              { id: 'all', label: 'All Volumes' },
              { id: 'formal-alignment', label: 'I. Alignment' },
              { id: 'recursive-cognition', label: 'II. Cognition' },
              { id: 'geopolitical-governance', label: 'III. Governance' },
              { id: 'posthuman-epistemology', label: 'IV. Epistemology' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPillar(tab.id)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors border cursor-pointer whitespace-nowrap ${
                  selectedPillar === tab.id
                    ? 'bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110] border-[#1C1917] dark:border-[#EDEAE5]'
                    : 'bg-transparent text-[#78716C] dark:text-[#8C8780] border-hairline hover:border-[#78716C] dark:hover:border-[#A8A29E]'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              aria-label="Filter monographs by publication year"
              className="bg-[#F5F1E8] dark:bg-[#1A1816] border border-hairline px-3 py-1.5 text-xs font-mono text-[#1C1917] dark:text-[#EDEAE5] focus:outline-hidden cursor-pointer ml-1"
            >
              <option value="all">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
        </div>

        {/* Monograph Catalog List */}
        {filteredMonographs.length > 0 ? (
          <div className="divide-y divide-hairline">
            {filteredMonographs.map((mono) => (
              <article
                key={mono.id}
                className="py-8 group transition-colors hover:bg-[#F8F5EE]/60 dark:hover:bg-[#1A1816]/70 px-4 -mx-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  {/* Accession & Pillar (3 cols) */}
                  <div className="lg:col-span-3">
                    <div className="font-mono text-xs text-[#78716C] dark:text-[#8C8780] tracking-wide">
                      {mono.accessionId}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#A8A29E] dark:text-[#6E6A64] font-medium mt-1">
                      {mono.pillarName}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#78716C] dark:text-[#8C8780] mt-2 font-mono">
                      <span>{mono.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{mono.readTime}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64] mt-1">
                      DOI: {mono.doi}
                    </div>
                  </div>

                  {/* Title, Subtitle & Abstract (7 cols) */}
                  <div className="lg:col-span-7">
                    <h3
                      onClick={() => onSelectMonograph(mono)}
                      className="text-xl sm:text-2xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] group-hover:text-[#854D0E] dark:group-hover:text-[#F59E0B] transition-colors cursor-pointer leading-snug"
                    >
                      {mono.title}
                    </h3>
                    <p className="mt-1 text-sm font-serif italic text-[#57534E] dark:text-[#A8A29E]">
                      {mono.subtitle}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#78716C] dark:text-[#8C8780]">
                      {mono.authors.map((author, aIdx) => (
                        <span key={aIdx}>
                          <strong className="text-[#1C1917] dark:text-[#EDEAE5] font-semibold">{author.name}</strong> ({author.role})
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs sm:text-[13px] text-[#44403C] dark:text-[#C7C3BB] leading-relaxed line-clamp-3">
                      {mono.abstract}
                    </p>
                  </div>

                  {/* Actions (2 cols) */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3">
                    <button
                      onClick={() => onSelectMonograph(mono)}
                      className="px-3.5 py-2 bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#333] dark:hover:bg-white text-[#FBF9F5] dark:text-[#121110] text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Text</span>
                    </button>

                    <button
                      onClick={() => onOpenCitation(mono)}
                      className="px-3 py-1.5 border border-hairline hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] text-xs font-mono tracking-wider transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <Quote className="w-3 h-3" />
                      <span>Citation</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[#78716C]">
            <p className="font-serif italic text-lg">
              No monographs match the query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPillar('all');
                setSelectedYear('all');
              }}
              className="mt-4 px-4 py-2 border border-hairline text-xs font-mono text-[#1C1917] dark:text-[#EDEAE5] hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] transition-colors cursor-pointer"
            >
              Reset Archive Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
