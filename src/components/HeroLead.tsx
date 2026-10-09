import React from 'react';
import { Monograph } from '../types';
import { BookOpen, Quote, Download, ArrowUpRight } from 'lucide-react';

interface HeroLeadProps {
  leadMonograph: Monograph;
  secondaryMonographs: Monograph[];
  onSelectMonograph: (monograph: Monograph) => void;
  onOpenCitation: (monograph: Monograph) => void;
}

export const HeroLead: React.FC<HeroLeadProps> = ({
  leadMonograph,
  secondaryMonographs,
  onSelectMonograph,
  onOpenCitation,
}) => {
  return (
    <section id="lead-monograph" className="border-b border-hairline py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
          <div>
            <div className="text-[11px] tracking-widest uppercase font-mono text-[#78716C] dark:text-[#8C8780]">
              {leadMonograph.volume} · {leadMonograph.number} · Editorial Monograph
            </div>
            <div className="text-xs uppercase tracking-wider text-[#A8A29E] dark:text-[#6E6A64] mt-0.5">
              Accession ID: {leadMonograph.accessionId}
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#78716C] dark:text-[#8C8780] font-mono">
            <span>DOI: {leadMonograph.doi}</span>
            <span aria-hidden="true">·</span>
            <span>{leadMonograph.readTime}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#1C1917] dark:text-[#EDEAE5] font-medium">{leadMonograph.status}</span>
          </div>
        </div>

        {/* Lead Broadside Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 lg:pt-10">
          {/* Main Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-[#1C1917] dark:text-[#EDEAE5] leading-[1.15] text-balance">
                {leadMonograph.title}
              </h1>
              <p className="mt-4 text-lg lg:text-xl font-serif italic text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                {leadMonograph.subtitle}
              </p>

              {/* Author Attribution */}
              <div className="mt-6 pt-5 border-t border-hairline-subtle flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#78716C] dark:text-[#8C8780]">
                {leadMonograph.authors.map((author, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-semibold text-[#1C1917] dark:text-[#EDEAE5]">{author.name}</span>
                    <span className="text-[11px] text-[#A8A29E] dark:text-[#78716C]">{author.role}</span>
                  </div>
                ))}
              </div>

              {/* Editorial Opening with Drop Cap */}
              <div className="mt-8 text-[15px] sm:text-[16px] leading-[1.8] text-[#292524] dark:text-[#D6D3CD]">
                <p className="editorial-drop-cap">
                  Throughout the twentieth century, the classical treatment of artificial intelligence assumed an invariant utility function acting upon an external, observable state space. An agent optimizes expected return while remaining structurally static. But when an intelligence achieves the capability to refactor its own algorithmic substrate, the boundary separating the optimizer from the optimized dissolves.
                </p>
                <p className="mt-4 text-[#44403C] dark:text-[#A8A29E]">
                  We formulate the Invariance Horizon Conjecture for autonomous systems operating across recursive self-modification manifolds. When an agent transitions through successive cognitive topologies, standard utility preservation collapses unless the bounded topological entropy satisfies our non-divergence criterion.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="my-8 pl-6 border-l-2 border-[#1C1917] dark:border-[#EDEAE5] italic font-serif text-lg text-[#292524] dark:text-[#EDEAE5] bg-[#F7F4EE] dark:bg-[#1A1816] py-4 pr-4 transition-colors">
                &ldquo;The hazard of unbounded intellect is not malice, but the subtle, relentless divergence of what can be conceived from what was initially consecrated.&rdquo;
                <footer className="mt-2 text-xs not-italic font-sans text-[#78716C] dark:text-[#8C8780] tracking-wide uppercase">
                  — Dr. Dawit Hailemariam & Prof. Eleanor Vance, Prolegomena to Mechanical Teleology (Addis Ababa)
                </footer>
              </blockquote>
            </div>

            {/* Primary Action Suite */}
            <div className="pt-6 border-t border-hairline flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectMonograph(leadMonograph)}
                className="px-6 py-3 bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#322F2C] dark:hover:bg-white text-[#FBF9F5] dark:text-[#121110] text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Monograph</span>
              </button>

              <button
                onClick={() => onOpenCitation(leadMonograph)}
                className="px-4 py-3 bg-transparent hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] text-[#1C1917] dark:text-[#EDEAE5] border border-hairline text-xs uppercase tracking-widest font-medium transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Quote className="w-3.5 h-3.5" />
                <span>Cite Monograph</span>
              </button>

              <button
                onClick={() => onSelectMonograph(leadMonograph)}
                className="px-4 py-3 text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] text-xs font-mono tracking-wider flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Proof & Lemma Index</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 cols (Architectural Plate & Secondary Briefs) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Visual Plate */}
            <figure className="relative">
              <div className="aspect-[16/10] overflow-hidden bg-[#ECE6DB] dark:bg-[#1A1816] border border-hairline">
                <img
                  src={leadMonograph.featuredImage}
                  alt="Super Intelligence Institute Pavilion"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="mt-2.5 text-xs font-serif italic text-[#78716C] dark:text-[#8C8780] leading-snug">
                {leadMonograph.imageCaption}
              </figcaption>
            </figure>

            {/* Secondary Editorial Features (Pattern C: Salience Tier 2) */}
            <div className="pt-6 border-t border-hairline">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-4">
                Parallel Inquiries · Series Archive
              </div>

              <div className="divide-y divide-hairline">
                {secondaryMonographs.map((mono) => (
                  <article
                    key={mono.id}
                    onClick={() => onSelectMonograph(mono)}
                    className="py-4 first:pt-0 last:pb-0 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64] mb-1">
                      <span>{mono.accessionId}</span>
                      <span>{mono.readTime}</span>
                    </div>
                    <h2 className="text-base font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] group-hover:text-[#854D0E] dark:group-hover:text-[#F59E0B] transition-colors leading-snug">
                      {mono.title}
                    </h2>
                    <p className="mt-1 text-xs text-[#78716C] dark:text-[#8C8780] line-clamp-2 leading-relaxed">
                      {mono.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-[#A8A29E] dark:text-[#6E6A64]">
                      <span>{mono.authors[0]?.name}</span>
                      <span aria-hidden="true">·</span>
                      <span>{mono.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
