import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ColophonFooterProps {
  onOpenFellowship: () => void;
}

export const ColophonFooter: React.FC<ColophonFooterProps> = ({ onOpenFellowship }) => {
  const [dispatchEmail, setDispatchEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setDispatchEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1] border-t border-[#2E2A27] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#2E2A27]">
          {/* Brand & Charter Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-2xl font-serif text-[#FBF9F5] tracking-tight block">
                Super Intelligence Institute
              </span>
              <span className="text-xs text-[#A8A29E] tracking-wider font-serif mt-1 block">
                Addis Ababa, Ethiopia · Theoretical Commons
              </span>
            </div>
            <p className="text-xs sm:text-sm font-serif leading-relaxed text-[#A8A29E] max-w-md">
              An unaligned scholarly sanctuary based on Entoto Ridge in Addis Ababa, dedicated to mathematical value invariance, recursive cognitive topologies, and multilateral non-proliferation governance before the singular horizon.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#78716C] uppercase tracking-wider flex items-center gap-2">
              <span>Entoto Ridge Commons</span>
              <span aria-hidden="true">·</span>
              <span>Addis Ababa, Ethiopia</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#D6D3D1]">sii.et</span>
            </div>
          </div>

          {/* Archival Dispatch Subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#A8A29E]">
              Archival Dispatch Subscription · sii.et
            </div>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Bi-monthly theoretical digests, new monograph pre-prints, and colloquium transmissions from Addis Ababa.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#292524] border border-[#44403C] text-xs text-emerald-400 flex items-center gap-2 font-mono">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscription verified. Welcome to the reader docket at sii.et.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={dispatchEmail}
                  onChange={(e) => setDispatchEmail(e.target.value)}
                  placeholder="scholar@sii.et"
                  className="bg-[#292524] border border-[#44403C] px-3 py-2 text-xs text-[#FBF9F5] placeholder:text-[#78716C] focus:outline-hidden focus:border-[#D6D3D1] flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FBF9F5] text-[#1C1917] text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors cursor-pointer whitespace-nowrap"
                >
                  Join Docket
                </button>
              </form>
            )}
          </div>

          {/* Quick Registry Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#A8A29E] mb-3">
              Corpus & Navigation
            </div>
            <ul className="space-y-2 text-[#A8A29E]">
              <li>
                <a href="#lead-monograph" className="hover:text-white transition-colors">Lead Monograph</a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-white transition-colors">Four Research Pillars</a>
              </li>
              <li>
                <a href="#monographs" className="hover:text-white transition-colors">Monograph Library</a>
              </li>
              <li>
                <a href="#scholars" className="hover:text-white transition-colors">Resident Scholars</a>
              </li>
              <li>
                <a href="#symposium" className="hover:text-white transition-colors">Annual Symposium 2026</a>
              </li>
              <li>
                <button
                  onClick={onOpenFellowship}
                  className="hover:text-white transition-colors text-left text-amber-200/90 cursor-pointer"
                >
                  Apply for Fellowship
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Disclaimer & Non-Affiliation Notice */}
        <div className="py-6 border-b border-[#2E2A27]">
          <div className="p-4 sm:p-5 bg-[#141211] border border-[#2E2A27] rounded-none flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-amber-200/90">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
                <span>Institutional Notice & Non-Affiliation Disclaimer</span>
              </div>
              <p className="text-xs font-serif leading-relaxed text-[#A8A29E]">
                <strong className="font-semibold text-[#EDEAE5]">Super Intelligence Institute (sii.et)</strong> is an independent conceptual and placeholder project created for research demonstration, speculative design, and aesthetic inquiry. We are <span className="text-[#EDEAE5] underline decoration-amber-400/50 underline-offset-2">not affiliated with, endorsed by, nor attempting to impersonate</span> the <strong className="text-[#EDEAE5]">Ethiopian Artificial Intelligence Institute (EAII / aii.et)</strong>, the Government of Ethiopia, or any other official state, governmental, or commercial entity.
              </p>
              <p className="text-[11px] font-mono text-[#78716C]">
                All research monographs, curricula, and institutional dossiers displayed herein are speculative creative artifacts for academic demonstration and exploratory purposes.
              </p>
            </div>
            <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-2 border-t md:border-t-0 md:border-l border-[#2E2A27] pt-3 md:pt-0 md:pl-5 text-[11px] font-mono text-[#78716C]">
              <span className="text-stone-400">Independent Concept · sii.et</span>
              <span className="text-amber-200/70">Not affiliated with aii.et</span>
              <span className="text-stone-500">Placeholder Site</span>
            </div>
          </div>
        </div>

        {/* Colophon & Typography Attribution (Constitution pattern) */}
        <div className="pt-8 flex flex-col md:flex-row items-baseline justify-between gap-6 text-[11px] font-mono text-[#78716C]">
          <div className="space-y-1">
            <div>
              Typeset in <span className="text-[#A8A29E]">Newsreader</span> & <span className="text-[#A8A29E]">JetBrains Mono</span>. Designed under classical European broadsheet and Swiss typographic proportions.
            </div>
            <div>
              All monographs published under Creative Commons CC-BY-NC 4.0 Open Archival License.
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#A8A29E]">
            <span>Vol. IV Edition 2026</span>
            <span aria-hidden="true">·</span>
            <span>Non-Profit Research Trust</span>
            <span aria-hidden="true">·</span>
            <span>All Invariants Preserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
