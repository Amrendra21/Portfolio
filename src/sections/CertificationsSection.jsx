import { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolio.js';
import SectionWrapper from '../components/SectionWrapper.jsx';
import Lightbox from '../components/Lightbox.jsx';

export default function CertificationsSection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <SectionWrapper id="certifications" title="Certifications">
        <div className="pt-4 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.02] overflow-hidden hover:border-black/[0.14] dark:hover:border-white/[0.14] transition-colors shadow-sm shadow-black/5 dark:shadow-none"
              >
                {/* Certificate image — click to zoom */}
                <div
                  className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 cursor-zoom-in overflow-hidden group"
                  onClick={() => setLightbox({ src: cert.image, alt: cert.title })}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 rounded-full p-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M8 11h6M11 8v6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-[13px] font-semibold text-zinc-800 dark:text-zinc-200">{cert.title}</p>
                      {cert.subtitle && <p className="text-[11px] text-zinc-500">{cert.subtitle}</p>}
                    </div>
                    <span className="text-[10px] font-bold text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/20 px-2 py-0.5 rounded flex-shrink-0">
                      {cert.exam}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] mb-3">
                    <div><span className="text-zinc-400">Score </span><span className="text-zinc-700 dark:text-zinc-300 font-medium">{cert.score}</span></div>
                    <div><span className="text-zinc-400">Issued </span><span className="text-zinc-500 dark:text-zinc-400">{cert.issued}</span></div>
                    <div><span className="text-zinc-400">Expires </span><span className="text-zinc-500 dark:text-zinc-400">{cert.expires}</span></div>
                  </div>

                  <p className="text-[10px] text-zinc-400 dark:text-zinc-700 font-mono break-all mb-3">{cert.validation}</p>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verify Credential ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
