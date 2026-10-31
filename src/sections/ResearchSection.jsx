import { useState } from 'react';
import { RESEARCH } from '../data/portfolio.js';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Lightbox from '../components/Lightbox.jsx';

export default function ResearchSection() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const paper = RESEARCH[0];

  return (
    <>
      <SectionWrapper id="research" title="Research">
        <div className="pt-4 pb-4 space-y-6">
          {/* Published paper */}
          <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/80 dark:bg-white/[0.02] p-5 hover:border-black/[0.14] dark:hover:border-white/[0.14] transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-[8px] bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex-shrink-0 flex items-center justify-center text-lg">
                📄
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-500/15 border border-violet-300 dark:border-violet-500/20 text-[10px] font-semibold text-violet-700 dark:text-violet-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 shadow-[0_0_5px_rgba(167,139,250,0.8)]" />
                    Published
                  </span>
                  <span className="text-[10px] text-zinc-500">{paper.date}</span>
                </div>
                <h3 className="text-[14px] font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                  {paper.title}
                </h3>
              </div>
            </div>

            <div className="space-y-2 ml-1">
              <p className="text-[12px] text-zinc-600 dark:text-zinc-500">
                <span className="text-zinc-700 dark:text-zinc-400 font-medium">Venue:</span> {paper.venue}
              </p>
              <p className="text-[12px] text-zinc-600 dark:text-zinc-500">
                <span className="text-zinc-700 dark:text-zinc-400 font-medium">Publisher:</span> {paper.publisher}
              </p>
              <p className="text-[12px] text-zinc-600 dark:text-zinc-500">
                <span className="text-zinc-700 dark:text-zinc-400 font-medium">Authors:</span> {paper.authors.join(', ')}
              </p>
              <p className="text-[12px] text-zinc-500 dark:text-zinc-600 leading-relaxed mt-2">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {paper.keywords.map((kw) => (
                  <span key={kw} className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100 dark:bg-zinc-900 text-[10px] text-zinc-500 dark:text-zinc-400">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <a
                  href={paper.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.08] text-[12px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  View Paper (DOI)
                </a>
                {paper.proofImage && (
                  <button
                    onClick={() => setLightboxSrc(paper.proofImage)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.08] text-[12px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    View Publication Proof
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Ongoing research */}
          <div className="rounded-xl border border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/50 dark:bg-white/[0.01] p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex-shrink-0 flex items-center justify-center text-lg">
                🔬
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-[10px] font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400" />
                    Ongoing
                  </span>
                </div>
                <h3 className="text-[14px] font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                  Dual-Axis OOD Detection in Molecular ML
                </h3>
                <p className="text-[12px] text-zinc-500 mt-1">
                  Curating a benchmark dataset that separates covariate shift from semantic shift in molecular property prediction — developing evaluation frameworks to audit OOD robustness independently along both axes.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Molecular ML', 'OOD Detection', 'Graph Neural Networks', 'Benchmarking'].map((kw) => (
                    <span key={kw} className="px-2 py-0.5 rounded-[4px] border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100 dark:bg-zinc-900 text-[10px] text-zinc-500 dark:text-zinc-400">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt="Research publication proof" onClose={() => setLightboxSrc(null)} />
      )}
    </>
  );
}
