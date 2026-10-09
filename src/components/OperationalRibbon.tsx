import React from 'react';

export const OperationalRibbon: React.FC = () => {
  return (
    <div className="border-b border-hairline bg-[#F5F1E8] dark:bg-[#181614] text-[#57534E] dark:text-[#A8A29E] text-[11px] tracking-wider uppercase transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-y-1.5">
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#78716C] dark:text-[#8C8780]">
          <span>Vol. IV</span>
          <span aria-hidden="true">·</span>
          <span>Monograph Series 2026</span>
          <span aria-hidden="true">·</span>
          <span className="hidden sm:inline">Addis Ababa & Entoto Commons</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="text-[#1C1917] dark:text-[#EDEAE5] font-semibold">sii.et</span>
          <span aria-hidden="true">·</span>
          <span className="text-[10px] bg-[#EBE5D8] dark:bg-[#2A2724] text-[#78716C] dark:text-[#A8A29E] px-1.5 py-0.5 rounded-xs tracking-normal normal-case">Independent / Not Affiliated with aii.et</span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[#1C1917] dark:text-[#EDEAE5] font-medium">Michaelmas Term 2026</span>
          <span aria-hidden="true">·</span>
          <a href="#symposium" className="hover:text-[#1C1917] dark:hover:text-white transition-colors underline decoration-dotted underline-offset-2">
            Entoto Colloquium Oct 14–17
          </a>
          <span aria-hidden="true" className="hidden md:inline">·</span>
          <span className="hidden md:inline font-mono text-[10px] text-[#A8A29E] dark:text-[#6E6A64]">ACC. TRUST NO. ET-4081-AA</span>
        </div>
      </div>
    </div>
  );
};
