/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MONOGRAPHS } from './data/monographs';
import { Monograph } from './types';
import { Navbar } from './components/Navbar';
import { OperationalRibbon } from './components/OperationalRibbon';
import { HeroLead } from './components/HeroLead';
import { ResearchPillars } from './components/ResearchPillars';
import { MonographCatalog } from './components/MonographCatalog';
import { ScholarsDirectory } from './components/ScholarsDirectory';
import { SymposiumSection } from './components/SymposiumSection';
import { ColophonFooter } from './components/ColophonFooter';
import { MonographReaderModal } from './components/MonographReaderModal';
import { CitationModal } from './components/CitationModal';
import { FellowshipModal } from './components/FellowshipModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [selectedMonograph, setSelectedMonograph] = useState<Monograph | null>(null);
  const [citationMonograph, setCitationMonograph] = useState<Monograph | null>(null);
  const [isFellowshipOpen, setIsFellowshipOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Night / Daylight reading mode state initialized from localStorage / prefers-color-scheme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('sii_theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sii_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sii_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const leadMonograph = MONOGRAPHS.find((m) => m.isLead) || MONOGRAPHS[0];
  const secondaryMonographs = MONOGRAPHS.filter((m) => !m.isLead).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#EDEAE5] selection:bg-[#EBE5D8] dark:selection:bg-[#2C2926] selection:text-[#141413] dark:selection:text-[#FAF8F5] flex flex-col font-sans transition-colors duration-200">
      {/* 1. Operational Masthead Ribbon */}
      <OperationalRibbon />

      {/* 2. Top Bar Navigation (Strict 3-zone contract with Night Mode toggle) */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFellowship={() => setIsFellowshipOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Lead Monograph & Frontispiece (Salience Tier 1 & 2) */}
        <HeroLead
          leadMonograph={leadMonograph}
          secondaryMonographs={secondaryMonographs}
          onSelectMonograph={(m) => setSelectedMonograph(m)}
          onOpenCitation={(m) => setCitationMonograph(m)}
        />

        {/* 4. The Four Scientific Pillars (Directory & Invariants) */}
        <ResearchPillars
          onSelectMonograph={(m) => setSelectedMonograph(m)}
        />

        {/* 5. Complete Monograph Series Catalog (Filterable & Searchable) */}
        <MonographCatalog
          onSelectMonograph={(m) => setSelectedMonograph(m)}
          onOpenCitation={(m) => setCitationMonograph(m)}
        />

        {/* 6. Scholars, Faculty & Visiting Chairs Directory */}
        <ScholarsDirectory
          onOpenFellowship={() => setIsFellowshipOpen(true)}
        />

        {/* 7. Annual Academic Symposium (Colloquium schedule & RSVP) */}
        <SymposiumSection
          onOpenFellowship={() => setIsFellowshipOpen(true)}
        />
      </main>

      {/* 8. Colophon & Archival Footer */}
      <ColophonFooter
        onOpenFellowship={() => setIsFellowshipOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <MonographReaderModal
        monograph={selectedMonograph}
        onClose={() => setSelectedMonograph(null)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenCitation={(m) => setCitationMonograph(m)}
      />

      <CitationModal
        monograph={citationMonograph}
        onClose={() => setCitationMonograph(null)}
      />

      <FellowshipModal
        isOpen={isFellowshipOpen}
        onClose={() => setIsFellowshipOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMonograph={(m) => setSelectedMonograph(m)}
      />
    </div>
  );
}
