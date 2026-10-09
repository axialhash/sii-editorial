import React from 'react';
import { Search, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenSearch: () => void;
  onOpenFellowship: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenSearch,
  onOpenFellowship,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 dark:bg-[#121110]/95 backdrop-blur-md border-b border-hairline transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl md:text-2xl font-serif tracking-tight text-[#1C1917] dark:text-[#EDEAE5] hover:text-[#44403C] dark:hover:text-white transition-colors whitespace-nowrap"
        >
          Super Intelligence Institute
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase text-[#78716C] dark:text-[#A8A29E] font-medium">
          <a
            href="#lead-monograph"
            className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors pb-0.5 border-b border-transparent hover:border-[#1C1917] dark:hover:border-[#EDEAE5]"
          >
            Dispatch
          </a>
          <a
            href="#pillars"
            className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors pb-0.5 border-b border-transparent hover:border-[#1C1917] dark:hover:border-[#EDEAE5]"
          >
            Research Pillars
          </a>
          <a
            href="#monographs"
            className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors pb-0.5 border-b border-transparent hover:border-[#1C1917] dark:hover:border-[#EDEAE5]"
          >
            Monographs
          </a>
          <a
            href="#scholars"
            className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors pb-0.5 border-b border-transparent hover:border-[#1C1917] dark:hover:border-[#EDEAE5]"
          >
            Scholars
          </a>
          <a
            href="#symposium"
            className="hover:text-[#1C1917] dark:hover:text-[#EDEAE5] transition-colors pb-0.5 border-b border-transparent hover:border-[#1C1917] dark:hover:border-[#EDEAE5]"
          >
            Symposium 2026
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Night / Day Reading Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to daylight parchment mode' : 'Switch to night obsidian reading mode'}
            title={darkMode ? 'Day Reading Mode' : 'Night Reading Mode'}
            className="p-2 text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] border border-transparent hover:border-hairline rounded transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#57534E]" />
            )}
          </button>

          <button
            onClick={onOpenSearch}
            aria-label="Search Monograph Archive"
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] transition-colors rounded border border-transparent hover:border-hairline whitespace-nowrap cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline font-mono text-[10px] px-1 bg-[#EBE5D8] dark:bg-[#2A2724] rounded text-[#57534E] dark:text-[#A8A29E]">⌘K</kbd>
          </button>

          <button
            onClick={onOpenFellowship}
            className="px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#FBF9F5] dark:text-[#121110] bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#2E2A27] dark:hover:bg-white transition-colors rounded-none whitespace-nowrap cursor-pointer"
          >
            Fellowship Inquiry
          </button>
        </div>
      </div>
    </header>
  );
};
