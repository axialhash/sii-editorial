import React, { useState } from 'react';
import { Monograph } from '../types';
import { X, Copy, Check, Download } from 'lucide-react';

interface CitationModalProps {
  monograph: Monograph | null;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ monograph, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'bibtex' | 'apa' | 'chicago'>('bibtex');

  if (!monograph) return null;

  const authorBibtex = monograph.authors.map((a) => a.name.split(' ').slice(-1)[0] + ', ' + a.name.split(' ').slice(0, -1).join(' ')).join(' and ');
  const authorApa = monograph.authors.map((a) => a.name).join(', & ');

  const bibtex = `@article{${monograph.accessionId.replace(/[^a-zA-Z0-9]/g, '_')},
  title     = {${monograph.title}: ${monograph.subtitle}},
  author    = {${authorBibtex}},
  journal   = {Monographs of the Super Intelligence Institute},
  volume    = {${monograph.volume.replace('Vol. ', '')}},
  number    = {${monograph.number.replace('No. ', '')}},
  year      = {${monograph.year}},
  doi       = {${monograph.doi}},
  publisher = {Super Intelligence Institute Press (Addis Ababa)},
  url       = {https://sii.et/monographs/${monograph.id}}
}`;

  const apa = `${authorApa} (${monograph.year}). ${monograph.title}: ${monograph.subtitle}. Monographs of the Super Intelligence Institute, ${monograph.volume}(${monograph.number}). https://sii.et/monographs/${monograph.id} (DOI: ${monograph.doi})`;

  const chicago = `${authorApa}. "${monograph.title}: ${monograph.subtitle}." Monographs of the Super Intelligence Institute ${monograph.volume}, no. ${monograph.number} (${monograph.year}). Addis Ababa: SII Press. https://sii.et/monographs/${monograph.id}.`;

  const getActiveText = () => {
    if (activeTab === 'bibtex') return bibtex;
    if (activeTab === 'apa') return apa;
    return chicago;
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(getActiveText());
    setCopiedFormat(activeTab);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleDownloadBib = () => {
    const blob = new Blob([bibtex], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${monograph.accessionId}.bib`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#1C1917]/75 dark:bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="bg-[#FBF9F5] dark:bg-[#161413] max-w-xl w-full border border-[#1C1917] dark:border-[#EDEAE5] p-8 shadow-2xl relative text-[#1C1917] dark:text-[#EDEAE5] transition-colors">
        <button
          onClick={onClose}
          aria-label="Close Citation Dialog"
          className="absolute top-6 right-6 text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
        >
          [ESC / CLOSE]
        </button>

        <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-1">
          Archival Apparatus · Citation Generator
        </div>
        <h3 className="text-2xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
          Cite this Monograph
        </h3>
        <p className="mt-1 text-xs font-serif italic text-[#57534E] dark:text-[#A8A29E]">
          {monograph.title}
        </p>

        {/* Format Selector Tabs */}
        <div className="mt-6 flex items-center gap-2 border-b border-hairline pb-3">
          {(['bibtex', 'apa', 'chicago'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110]'
                  : 'text-[#78716C] dark:text-[#8C8780] hover:bg-[#EFE9DD] dark:hover:bg-[#201E1B]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="mt-4 p-4 bg-[#F2ECE1] dark:bg-[#1E1C1A] border border-hairline font-mono text-xs text-[#292524] dark:text-[#D6D3CD] overflow-x-auto whitespace-pre-wrap leading-relaxed select-all">
          {getActiveText()}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-hairline">
          <button
            onClick={handleDownloadBib}
            className="flex items-center gap-1.5 text-xs font-mono text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .bib File</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
            >
              Done
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#333] dark:hover:bg-white text-[#FBF9F5] dark:text-[#121110] text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              {copiedFormat ? <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat ? 'Copied to Clipboard' : 'Copy Citation'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
