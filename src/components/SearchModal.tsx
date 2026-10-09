import React, { useState, useEffect } from 'react';
import { MONOGRAPHS } from '../data/monographs';
import { SCHOLARS } from '../data/scholars';
import { PILLARS } from '../data/pillars';
import { Monograph, Scholar } from '../types';
import { Search, BookOpen, User, Compass, ArrowRight, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMonograph: (monograph: Monograph) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMonograph,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredMonographs = MONOGRAPHS.filter(
    (m) =>
      m.title.toLowerCase().includes(query.toLowerCase()) ||
      m.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      m.abstract.toLowerCase().includes(query.toLowerCase()) ||
      m.accessionId.toLowerCase().includes(query.toLowerCase()) ||
      m.authors.some((a) => a.name.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredScholars = SCHOLARS.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase()) ||
      s.activeInquiry.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPillars = PILLARS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.latinName.toLowerCase().includes(query.toLowerCase()) ||
      p.coreQuestion.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#1C1917]/75 dark:bg-black/85 backdrop-blur-xs flex items-start justify-center p-4 sm:p-12 overflow-y-auto animate-fade-in"
    >
      <div className="bg-[#FBF9F5] dark:bg-[#161413] max-w-2xl w-full border border-[#1C1917] dark:border-[#EDEAE5] shadow-2xl relative text-[#1C1917] dark:text-[#EDEAE5] mt-8 transition-colors">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-hairline flex items-center gap-3">
          <Search className="w-5 h-5 text-[#78716C] dark:text-[#8C8780]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, theorems, scholars, or pillars..."
            className="w-full bg-transparent text-base sm:text-lg font-serif text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
          >
            [ESC]
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-hairline">
          {/* Monographs results */}
          {filteredMonographs.length > 0 && (
            <div className="pb-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3 h-3" />
                <span>Monographs ({filteredMonographs.length})</span>
              </div>
              <div className="space-y-3">
                {filteredMonographs.map((mono) => (
                  <div
                    key={mono.id}
                    onClick={() => {
                      onSelectMonograph(mono);
                      onClose();
                    }}
                    className="p-3 hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] transition-colors cursor-pointer group rounded-xs"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64]">
                      <span>{mono.accessionId}</span>
                      <span>{mono.date}</span>
                    </div>
                    <div className="font-serif text-base font-medium text-[#1C1917] dark:text-[#EDEAE5] group-hover:text-[#854D0E] dark:group-hover:text-[#F59E0B] transition-colors">
                      {mono.title}
                    </div>
                    <div className="text-xs text-[#78716C] dark:text-[#8C8780] line-clamp-1">
                      {mono.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scholars results */}
          {filteredScholars.length > 0 && (
            <div className="py-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-3 flex items-center gap-1.5">
                <User className="w-3 h-3" />
                <span>Scholars & Chairs ({filteredScholars.length})</span>
              </div>
              <div className="space-y-2">
                {filteredScholars.map((sch) => (
                  <div key={sch.id} className="p-3 hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] transition-colors rounded-xs">
                    <div className="font-serif text-sm font-semibold text-[#1C1917] dark:text-[#EDEAE5]">
                      {sch.name}
                    </div>
                    <div className="text-xs text-[#78716C] dark:text-[#8C8780]">
                      {sch.title} · {sch.department}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pillars results */}
          {filteredPillars.length > 0 && (
            <div className="pt-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-3 flex items-center gap-1.5">
                <Compass className="w-3 h-3" />
                <span>Research Pillars ({filteredPillars.length})</span>
              </div>
              <div className="space-y-2">
                {filteredPillars.map((pil) => (
                  <a
                    key={pil.id}
                    href="#pillars"
                    onClick={onClose}
                    className="block p-3 hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] transition-colors rounded-xs"
                  >
                    <div className="font-serif text-sm font-semibold text-[#1C1917] dark:text-[#EDEAE5]">
                      Pillar {pil.numeral}: {pil.title}
                    </div>
                    <div className="text-xs font-serif italic text-[#78716C] dark:text-[#8C8780]">
                      {pil.latinName}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {filteredMonographs.length === 0 &&
            filteredScholars.length === 0 &&
            filteredPillars.length === 0 && (
              <div className="py-12 text-center text-xs font-serif italic text-[#78716C] dark:text-[#8C8780]">
                No accessions found matching &ldquo;{query}&rdquo;.
              </div>
            )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F5F1E8] dark:bg-[#181614] border-t border-hairline flex items-center justify-between text-[11px] font-mono text-[#78716C] dark:text-[#8C8780] transition-colors">
          <span>Navigate using arrow keys or mouse</span>
          <span>Super Intelligence Institute Corpus · sii.et</span>
        </div>
      </div>
    </div>
  );
};
