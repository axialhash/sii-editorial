import React, { useState } from 'react';
import { X, CheckCircle, Upload, ShieldCheck } from 'lucide-react';
import { PILLARS } from '../data/pillars';

interface FellowshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FellowshipModal: React.FC<FellowshipModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [selectedPillar, setSelectedPillar] = useState('formal-alignment');
  const [statement, setStatement] = useState('');
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [accessionReceipt, setAccessionReceipt] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const receiptId = `SII-FEL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setAccessionReceipt(receiptId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setInstitution('');
    setStatement('');
    setFileName('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#1C1917]/75 dark:bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
    >
      <div className="bg-[#FBF9F5] dark:bg-[#161413] max-w-2xl w-full border border-[#1C1917] dark:border-[#EDEAE5] p-8 md:p-10 shadow-2xl relative text-[#1C1917] dark:text-[#EDEAE5] my-8 transition-colors">
        <button
          onClick={onClose}
          aria-label="Close Fellowship Inquiry"
          className="absolute top-6 right-6 text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
        >
          [ESC / CLOSE]
        </button>

        {submitted ? (
          <div className="py-8 space-y-6">
            <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-400">
              <CheckCircle className="w-6 h-6" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                Inquiry Deposited with Academic Senate
              </span>
            </div>

            <h3 className="text-3xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
              Docket Receipt Issued
            </h3>

            <p className="text-sm font-serif text-[#44403C] dark:text-[#C7C3BB] leading-relaxed">
              Thank you, <strong className="text-[#1C1917] dark:text-[#EDEAE5]">{fullName}</strong>. Your statement of research intent for the Michaelmas 2026 / Trinity 2027 fellowship cycle has been entered into the registry under:
            </p>

            <div className="p-4 bg-[#F2ECE1] dark:bg-[#1E1C1A] border border-hairline font-mono text-sm text-center font-semibold text-[#1C1917] dark:text-[#EDEAE5]">
              {accessionReceipt}
            </div>

            <p className="text-xs text-[#78716C] dark:text-[#8C8780] leading-relaxed">
              The Academic Admissions Panel reviews theoretical submissions bi-weekly. Notice of preliminary evaluation will be transmitted to <strong className="text-[#1C1917] dark:text-[#EDEAE5]">{email}</strong> within 14 scholarly days.
            </p>

            <div className="pt-4 border-t border-hairline flex justify-end">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-[#1C1917] dark:bg-[#EDEAE5] text-[#FBF9F5] dark:text-[#121110] text-xs uppercase tracking-widest font-medium hover:bg-[#333] dark:hover:bg-white transition-colors cursor-pointer"
              >
                Return to Institute Portal
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] dark:text-[#8C8780] mb-1">
              Admissions & Endowed Fellowships · Cycle 2026–2027
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] dark:text-[#EDEAE5]">
              Fellowship Inquiry & Proposal Submission
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#78716C] dark:text-[#8C8780] font-serif leading-relaxed">
              The Super Intelligence Institute invites doctoral and post-doctoral theoreticians to submit proposals for residential and visiting fellowships at the Entoto Commons in Addis Ababa, Ethiopia (sii.et).
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                    Candidate Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Julian Vance"
                    className="w-full bg-[#F5F1E8] dark:bg-[#1E1C1A] border border-hairline px-3 py-2 text-xs text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="candidate@ox.ac.uk"
                    className="w-full bg-[#F5F1E8] dark:bg-[#1E1C1A] border border-hairline px-3 py-2 text-xs text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                    Current Affiliation / University *
                  </label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="e.g. Cambridge DAMTP / Stanford"
                    className="w-full bg-[#F5F1E8] dark:bg-[#1E1C1A] border border-hairline px-3 py-2 text-xs text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                    Target Research Pillar *
                  </label>
                  <select
                    value={selectedPillar}
                    onChange={(e) => setSelectedPillar(e.target.value)}
                    className="w-full bg-[#F5F1E8] dark:bg-[#1E1C1A] border border-hairline px-3 py-2 text-xs text-[#1C1917] dark:text-[#EDEAE5] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5] cursor-pointer"
                  >
                    {PILLARS.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#FBF9F5] dark:bg-[#1E1C1A]">
                        {p.numeral}. {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                  Brief Statement of Theoretical Inquiry *
                </label>
                <textarea
                  required
                  rows={4}
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  placeholder="Outline the mathematical, epistemological, or governance conjecture you propose to solve during your residency..."
                  className="w-full bg-[#F5F1E8] dark:bg-[#1E1C1A] border border-hairline p-3 text-xs text-[#1C1917] dark:text-[#EDEAE5] placeholder:text-[#A8A29E] dark:placeholder:text-[#6E6A64] focus:outline-hidden focus:border-[#1C1917] dark:focus:border-[#EDEAE5] leading-relaxed"
                />
              </div>

              {/* TeX / Draft Paper Attachment */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#78716C] dark:text-[#8C8780] mb-1">
                  Draft TeX / PDF Monograph Upload (Optional)
                </label>
                <div className="border border-dashed border-hairline p-4 text-center bg-[#F8F5EE] dark:bg-[#1A1816]">
                  <input
                    type="file"
                    id="paper-upload"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                  />
                  <label htmlFor="paper-upload" className="cursor-pointer text-xs text-[#78716C] dark:text-[#8C8780] flex items-center justify-center gap-2 hover:text-[#1C1917] dark:hover:text-[#EDEAE5]">
                    <Upload className="w-4 h-4" />
                    <span>{fileName ? `Attached: ${fileName}` : 'Attach TeX source or PDF draft (Max 25MB)'}</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-[#78716C] dark:text-[#8C8780]">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
                  <span>Submissions treated under strict academic embargo</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-2 text-xs font-mono text-[#78716C] dark:text-[#8C8780] hover:text-[#1C1917] dark:hover:text-[#EDEAE5] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#1C1917] dark:bg-[#EDEAE5] hover:bg-[#333] dark:hover:bg-white text-[#FBF9F5] dark:text-[#121110] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Deposit Proposal
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
