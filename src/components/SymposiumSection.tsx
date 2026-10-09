import React, { useState } from 'react';
import { SYMPOSIUM_SESSIONS } from '../data/symposium';
import { Calendar, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

interface SymposiumSectionProps {
  onOpenFellowship: () => void;
}

export const SymposiumSection: React.FC<SymposiumSectionProps> = ({ onOpenFellowship }) => {
  const [registeredSessionId, setRegisteredSessionId] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>('all');

  const filteredSessions = selectedDay === 'all'
    ? SYMPOSIUM_SESSIONS
    : SYMPOSIUM_SESSIONS.filter(s => s.day === selectedDay);

  const handleRegisterSession = (index: number) => {
    setRegisteredSessionId(index);
    setTimeout(() => {
      setRegisteredSessionId(null);
    }, 3000);
  };

  return (
    <section id="symposium" className="border-b border-hairline py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-hairline">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780]">
              Annual Academic Colloquium · Michaelmas 2026
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] tracking-tight">
              Symposium on the Singular Horizon
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#78716C] dark:text-[#8C8780]">
            October 14–17, 2026 · Entoto Ridge Commons, Addis Ababa & sii.et Relays
          </div>
        </div>

        {/* Hero Visual & Curatorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-center">
          <div className="lg:col-span-7">
            <figure className="relative border border-hairline overflow-hidden bg-[#EBE5D9] dark:bg-[#1A1816]">
              <img
                src="/src/assets/images/symposium_hall_1791480805914.jpg"
                alt="Super Intelligence Institute Symposium Hall"
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <figcaption className="p-3 bg-[#FBF9F5] dark:bg-[#161413] border-t border-hairline text-xs font-serif italic text-[#78716C] dark:text-[#8C8780]">
                Fig. 3 — The Tiered Lecture Chamber, Entoto Ridge Commons, Addis Ababa. Natural light illuminating the theoretical blackboard overlooking the eucalyptus grove.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A8A29E] dark:text-[#78716C]">
              Curatorial Summons
            </div>
            <h3 className="text-2xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5] leading-snug">
              Deliberating the Irreversible Boundary of Mechanical Mind
            </h3>
            <p className="text-sm font-serif text-[#44403C] dark:text-[#C7C3BB] leading-relaxed">
              Every autumn, fifty mathematical logicians, theoretical physicists, philosophers of mind, and sovereign treaty architects convene at the Super Intelligence Institute Commons for four days of closed-door theoretical deliberation.
            </p>
            <p className="text-xs text-[#78716C] dark:text-[#8C8780] leading-relaxed">
              Attendance in person is strictly by peer nomination or accredited fellowship application. Plenary addresses are transmitted live to university libraries across thirty nations under open scholarly broadcast protocols.
            </p>

            <div className="pt-4 border-t border-hairline flex flex-wrap gap-4">
              <button
                onClick={onOpenFellowship}
                className="px-5 py-2.5 bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#333] dark:hover:bg-white text-[#FBF9F5] dark:text-[#121110] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
              >
                Request Delegate Credential
              </button>
              <a
                href="#schedule"
                className="px-4 py-2.5 border border-hairline hover:bg-[#F2ECE1] dark:hover:bg-[#1E1C1A] text-[#1C1917] dark:text-[#EDEAE5] text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-1.5"
              >
                <span>View Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Colloquium Schedule */}
        <div id="schedule" className="mt-16 pt-10 border-t border-hairline">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780]">
                Four-Day Academic Program
              </div>
              <h3 className="text-2xl font-serif text-[#1C1917] dark:text-[#EDEAE5]">
                Program of Colloquia & Working Sessions
              </h3>
            </div>

            {/* Day filter tabs */}
            <div className="flex items-center gap-1 font-mono text-xs">
              {['all', 'Day I', 'Day II', 'Day III', 'Day IV'].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                    selectedDay === day
                      ? 'bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110] border-[#1C1917] dark:border-[#EDEAE5]'
                      : 'bg-transparent text-[#78716C] dark:text-[#8C8780] border-hairline hover:border-[#78716C] dark:hover:border-[#A8A29E]'
                  }`}
                >
                  {day === 'all' ? 'All Days' : day}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-hairline border-t border-b border-hairline">
            {filteredSessions.map((session, sIdx) => (
              <div
                key={sIdx}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-[#F8F5EE]/70 dark:hover:bg-[#1A1816]/70 px-4 -mx-4 transition-colors"
              >
                <div className="md:col-span-3">
                  <div className="font-mono text-xs font-semibold text-[#1C1917] dark:text-[#EDEAE5]">
                    {session.day} · {session.time}
                  </div>
                  <div className="text-xs text-[#78716C] dark:text-[#8C8780] mt-0.5">
                    {session.date}
                  </div>
                  <div className="text-[11px] font-mono text-[#A8A29E] dark:text-[#6E6A64] mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{session.location}</span>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <h4 className="text-lg font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
                    {session.title}
                  </h4>
                  <div className="mt-1 text-xs text-[#78716C] dark:text-[#8C8780]">
                    <span className="font-semibold text-[#1C1917] dark:text-[#EDEAE5]">{session.speaker}</span> · {session.affiliation}
                  </div>
                  <p className="mt-2 text-xs sm:text-[13px] text-[#44403C] dark:text-[#C7C3BB] leading-relaxed">
                    {session.description}
                  </p>
                </div>

                <div className="md:col-span-3 flex md:justify-end">
                  <button
                    onClick={() => handleRegisterSession(sIdx)}
                    className="px-3 py-1.5 border border-hairline hover:border-[#1C1917] dark:hover:border-[#EDEAE5] text-[#1C1917] dark:text-[#EDEAE5] text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {registeredSessionId === sIdx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                        <span className="text-emerald-800 dark:text-emerald-300">Seat Reserved</span>
                      </>
                    ) : (
                      <>
                        <span>Add to Calendar / RSVP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
