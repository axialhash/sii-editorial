import React, { useState, useEffect } from 'react';
import { Monograph, MarginalNote } from '../types';
import { X, Volume2, VolumeX, Play, Pause, Bookmark, Quote, Share2, Check, ZoomIn, Info, Sun, Moon } from 'lucide-react';

interface MonographReaderModalProps {
  monograph: Monograph | null;
  onClose: () => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenCitation: (monograph: Monograph) => void;
}

export const MonographReaderModal: React.FC<MonographReaderModalProps> = ({
  monograph,
  onClose,
  darkMode = false,
  onToggleDarkMode,
  onOpenCitation,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [showMarginalia, setShowMarginalia] = useState<boolean>(true);
  const [activeProofStep, setActiveProofStep] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioPlaybackSpeed, setAudioPlaybackSpeed] = useState<number>(1.0);
  const [audioProgress, setAudioProgress] = useState<number>(14);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Audio timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500 / audioPlaybackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioPlaybackSpeed]);

  if (!monograph) return null;

  const content = monograph.fullContent;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1C1917]/80 dark:bg-black/85 backdrop-blur-sm flex justify-center p-0 md:p-6 lg:p-10 animate-fade-in"
    >
      <div className="relative w-full max-w-5xl bg-[#FBF9F5] dark:bg-[#141211] shadow-2xl min-h-screen md:min-h-0 border-x md:border border-hairline flex flex-col text-[#1C1917] dark:text-[#EDEAE5] transition-colors">
        {/* Sticky Utility Masthead */}
        <div className="sticky top-0 z-30 bg-[#FBF9F5]/95 dark:bg-[#141211]/95 backdrop-blur border-b border-hairline px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase text-[#78716C] dark:text-[#8C8780]">
              {monograph.accessionId}
            </span>
            <span aria-hidden="true" className="text-[#D6D3D1] dark:text-[#44403C]">|</span>
            <span className="font-serif italic text-xs text-[#57534E] dark:text-[#A8A29E] hidden sm:inline truncate max-w-xs">
              {monograph.title}
            </span>
          </div>

          {/* Reading Controls */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Night / Day toggle within reader */}
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                aria-label={darkMode ? 'Switch to daylight parchment mode' : 'Switch to night obsidian reading mode'}
                title={darkMode ? 'Day Reading Mode' : 'Night Reading Mode'}
                className="p-1.5 text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] border border-transparent hover:border-hairline rounded transition-colors cursor-pointer"
              >
                {darkMode ? (
                  <span className="flex items-center gap-1 font-mono text-[11px] text-amber-300">
                    <Sun className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Day</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-mono text-[11px] text-[#57534E]">
                    <Moon className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Night</span>
                  </span>
                )}
              </button>
            )}

            {/* Font Size Toggle */}
            <div className="hidden sm:flex items-center border border-hairline rounded p-0.5 bg-[#F5F1E8] dark:bg-[#201E1B]">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 text-xs font-serif ${fontSize === 'normal' ? 'bg-white dark:bg-[#2C2926] shadow-xs font-medium text-[#1C1917] dark:text-[#EDEAE5]' : 'text-[#78716C] dark:text-[#8C8780]'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 text-sm font-serif ${fontSize === 'large' ? 'bg-white dark:bg-[#2C2926] shadow-xs font-medium text-[#1C1917] dark:text-[#EDEAE5]' : 'text-[#78716C] dark:text-[#8C8780]'}`}
              >
                A+
              </button>
            </div>

            {/* Marginalia Toggle */}
            <button
              onClick={() => setShowMarginalia(!showMarginalia)}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 border border-hairline rounded transition-colors ${showMarginalia ? 'bg-[#EFE9DC] dark:bg-[#252320] text-[#1C1917] dark:text-[#EDEAE5]' : 'text-[#78716C] dark:text-[#8C8780]'}`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Marginalia {showMarginalia ? 'On' : 'Off'}</span>
            </button>

            {/* Citation */}
            <button
              onClick={() => onOpenCitation(monograph)}
              className="flex items-center gap-1 text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors cursor-pointer"
            >
              <Quote className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cite</span>
            </button>

            {/* Share */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Monograph Chamber"
              className="p-1.5 hover:bg-[#EAE4D7] dark:hover:bg-[#201E1B] rounded text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Dispatch Bar */}
        <div className="bg-[#F3EFE6] dark:bg-[#181614] border-b border-hairline px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs transition-colors">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="w-7 h-7 rounded-full bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110] flex items-center justify-center hover:bg-[#3E3A37] dark:hover:bg-white transition-colors cursor-pointer"
              aria-label={isPlayingAudio ? 'Pause synthesized reading' : 'Play synthesized reading'}
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#1C1917] dark:text-[#EDEAE5] font-medium">
                Scholarly Audio Reading (Synthesis)
              </span>
              <span className="text-[10px] text-[#78716C] dark:text-[#8C8780]">
                Voiced by Entoto Theoretical Archive (Addis Ababa) · Chapter 1
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-xs">
            <div className="w-full bg-[#DFD9CC] dark:bg-[#2A2724] h-1.5 rounded-full overflow-hidden relative cursor-pointer">
              <div
                className="bg-[#1C1917] dark:bg-[#EDEAE5] h-full transition-all duration-300"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-[#78716C] dark:text-[#8C8780] tabular-nums">
              {Math.floor(audioProgress * 0.28)}m
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span className="text-[#A8A29E] dark:text-[#6E6A64]">Speed:</span>
            {[1.0, 1.25, 1.5].map((spd) => (
              <button
                key={spd}
                onClick={() => setAudioPlaybackSpeed(spd)}
                className={`px-1.5 py-0.5 rounded cursor-pointer ${audioPlaybackSpeed === spd ? 'bg-[#1C1917] dark:bg-[#EDEAE5] text-white dark:text-[#121110]' : 'text-[#78716C] dark:text-[#8C8780] hover:bg-[#DFD9CC] dark:hover:bg-[#2A2724]'}`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Paper Header */}
        <div className="px-6 md:px-14 pt-12 pb-8 border-b border-hairline">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#78716C] dark:text-[#8C8780] mb-2">
            {monograph.volume} · {monograph.number} · {monograph.date} · {monograph.pillarName}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1C1917] dark:text-[#EDEAE5] leading-tight">
            {monograph.title}
          </h1>
          <p className="mt-3 text-lg font-serif italic text-[#57534E] dark:text-[#A8A29E]">
            {monograph.subtitle}
          </p>

          <div className="mt-6 pt-5 border-t border-hairline flex flex-wrap gap-8 text-xs text-[#78716C] dark:text-[#8C8780]">
            {monograph.authors.map((author, i) => (
              <div key={i}>
                <div className="font-semibold text-[#1C1917] dark:text-[#EDEAE5]">{author.name}</div>
                <div>{author.role}</div>
                <div className="text-[#A8A29E] dark:text-[#78716C] font-serif italic">{author.institution}</div>
              </div>
            ))}
          </div>

          {/* Abstract callout */}
          <div className="mt-8 p-5 bg-[#F5F0E4] dark:bg-[#1A1816] border-l-2 border-[#1C1917] dark:border-[#EDEAE5] text-xs sm:text-sm text-[#44403C] dark:text-[#C7C3BB] leading-relaxed">
            <div className="font-mono text-[10px] tracking-wider uppercase text-[#78716C] dark:text-[#8C8780] mb-1 font-semibold">
              Abstract & Teleological Summary
            </div>
            {monograph.abstract}
          </div>
        </div>

        {/* Reading Canvas: Asymmetric Grid (70% Body / 30% Margin Notes) */}
        <div className="px-6 md:px-14 py-10 flex-1">
          <div className={`grid grid-cols-1 ${showMarginalia ? 'lg:grid-cols-12' : 'max-w-2xl mx-auto'} gap-12`}>
            {/* Main Narrative Column */}
            <div className={`${showMarginalia ? 'lg:col-span-8' : 'w-full'} space-y-10`}>
              {content?.openingQuote && (
                <blockquote className="my-6 pl-5 border-l-2 border-[#1C1917] dark:border-[#EDEAE5] italic font-serif text-lg text-[#292524] dark:text-[#EDEAE5] py-2">
                  &ldquo;{content.openingQuote.text}&rdquo;
                  <footer className="mt-2 text-xs not-italic font-sans text-[#78716C] dark:text-[#8C8780] uppercase tracking-wider">
                    — {content.openingQuote.source}
                  </footer>
                </blockquote>
              )}

              {content?.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] tracking-tight">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <div className="text-xs uppercase tracking-wider text-[#78716C] dark:text-[#8C8780] font-mono mt-1">
                        {section.subheading}
                      </div>
                    )}
                  </div>

                  <div className={`space-y-5 text-[#292524] dark:text-[#D6D3CD] leading-[1.8] ${fontSize === 'large' ? 'text-lg leading-loose' : 'text-[15px]'}`}>
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className={sIdx === 0 && pIdx === 0 ? 'editorial-drop-cap' : ''}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Interactive Theorem Box */}
                  {section.theoremBox && (
                    <div className="my-8 border border-hairline bg-[#F8F5EE] dark:bg-[#1A1816] p-6 shadow-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4">
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1C1917] dark:text-[#EDEAE5]">
                          {section.theoremBox.label}
                        </span>
                        <span className="text-[11px] font-mono text-[#78716C] dark:text-[#8C8780] bg-[#ECE6DB] dark:bg-[#252320] px-2 py-0.5 rounded">
                          Constructive Proof Verified
                        </span>
                      </div>

                      <div className="font-serif italic text-base text-[#1C1917] dark:text-[#EDEAE5] mb-4 leading-relaxed">
                        {section.theoremBox.statement}
                      </div>

                      <div className="p-3 bg-[#EFE9DD] dark:bg-[#252320] font-mono text-sm text-[#1C1917] dark:text-[#EDEAE5] text-center rounded my-3 border border-hairline overflow-x-auto">
                        {section.theoremBox.formalNotation}
                      </div>

                      <div className="mt-4 pt-3 border-t border-hairline text-xs text-[#57534E] dark:text-[#A8A29E]">
                        <span className="font-semibold text-[#1C1917] dark:text-[#EDEAE5]">Proof Synopsis: </span>
                        {section.theoremBox.proofSynopsis}
                      </div>

                      {/* Interactive Proof Lemma Accordion */}
                      <div className="mt-4 pt-3 border-t border-hairline-subtle">
                        <button
                          onClick={() => setActiveProofStep(activeProofStep === sIdx ? null : sIdx)}
                          className="text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>{activeProofStep === sIdx ? 'Hide Formal Derivation Steps' : 'Inspect Step-by-Step Derivation Lemmata'}</span>
                        </button>

                        {activeProofStep === sIdx && (
                          <div className="mt-3 p-4 bg-white/70 dark:bg-[#22201D] border border-hairline rounded space-y-3 font-mono text-xs text-[#44403C] dark:text-[#C7C3BB]">
                            <div>
                              <strong className="text-[#1C1917] dark:text-[#EDEAE5]">Lemma 1.1a (Bounded Ergodicity):</strong> Let the dynamical system (M, Φ, μ) be mixing. Then for every ε &gt; 0, the set of diverging observables has Measure zero under the Haar volume.
                            </div>
                            <div>
                              <strong className="text-[#1C1917] dark:text-[#EDEAE5]">Lemma 1.1b (Homomorphic Stability):</strong> The projection π*: H_∞ → H_0 satisfies the isometric Lipschitz condition with constant L ≤ 1 + O(N^(-1/2)).
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Citations & Bibliography */}
              {content?.citations && content.citations.length > 0 && (
                <div className="mt-14 pt-8 border-t border-hairline">
                  <h3 className="text-lg font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] mb-4">
                    Archival References & Apparatus
                  </h3>
                  <ol className="divide-y divide-hairline-subtle text-xs text-[#78716C] dark:text-[#8C8780] font-serif">
                    {content.citations.map((cite, i) => (
                      <li key={i} className="py-2.5 flex gap-3">
                        <span className="font-mono text-[11px] text-[#A8A29E] dark:text-[#6E6A64] shrink-0">[{i + 1}]</span>
                        <span>{cite.reference}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Asymmetric Marginalia Column (30%) */}
            {showMarginalia && (
              <aside className="lg:col-span-4 border-l border-hairline pl-6 space-y-8">
                <div className="sticky top-20 space-y-8">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] pb-2 border-b border-hairline">
                    Curatorial Marginalia & Notes
                  </div>

                  {content?.marginalia && content.marginalia.length > 0 ? (
                    content.marginalia.map((note) => (
                      <div
                        key={note.id}
                        className="p-4 bg-[#F7F3E9] dark:bg-[#1A1816] border border-hairline rounded-none text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed shadow-xs"
                      >
                        <div className="flex items-center justify-between font-mono text-[10px] text-[#A8A29E] dark:text-[#6E6A64] mb-1.5 uppercase">
                          <span className="font-semibold text-[#1C1917] dark:text-[#EDEAE5]">{note.author}</span>
                          <span className="italic">{note.type} note</span>
                        </div>
                        <p className="font-serif italic text-[13px] text-[#292524] dark:text-[#EDEAE5]">
                          &ldquo;{note.note}&rdquo;
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-[#A8A29E] dark:text-[#6E6A64] italic font-serif">
                      No marginal notes appended to this accession record.
                    </div>
                  )}

                  {/* Archival diagram insert */}
                  <div className="border border-hairline bg-white dark:bg-[#1A1816] p-3">
                    <img
                      src="/src/assets/images/monograph_diagram_1791480793827.jpg"
                      alt="Monograph topology manifold diagram"
                      className="w-full aspect-[3/4] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="mt-2 text-[11px] font-serif italic text-[#78716C] dark:text-[#8C8780]">
                      Plate IV: High-dimensional manifold topology & fibration mapping. SII Press (Addis Ababa).
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F5F1E8] dark:bg-[#181614] border-t border-hairline px-6 py-4 flex flex-wrap items-center justify-between text-xs text-[#78716C] dark:text-[#8C8780] transition-colors">
          <div className="font-mono text-[11px]">
            Super Intelligence Institute · Open Scientific Monograph Archive · sii.et
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenCitation(monograph)}
              className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] underline underline-offset-2 cursor-pointer"
            >
              Export BibTeX
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#1C1917] dark:bg-[#EDEAE5] text-white dark:text-[#121110] hover:bg-[#333] dark:hover:bg-white transition-colors cursor-pointer"
            >
              Close Chamber
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
