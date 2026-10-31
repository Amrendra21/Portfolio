import { SectionTopLine } from '../components/DottedLine.jsx';

const DOTTED_MASK = 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)';

export function ViewAllButton({ href, label = 'View All', onClick }) {
  const inner = (
    <div className="relative flex items-center gap-1.5 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[6px] text-[13px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80">
      {label}
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  );

  return (
    <div className="flex justify-center -mt-[19px] pb-0 relative z-20">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="relative group block">
          <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
          {inner}
        </a>
      ) : (
        <button onClick={onClick} className="relative group block bg-transparent border-0 cursor-pointer p-0">
          <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
          {inner}
        </button>
      )}
    </div>
  );
}

export default function SectionWrapper({ id, title, viewAllHref, viewAllLabel, onViewAll, children, className = '' }) {
  return (
    <div id={id} className={`mt-6 flex flex-col relative z-10 scroll-mt-24 ${className}`}>
      {/* Top full-width dotted line + nodes */}
      <SectionTopLine />

      {/* Heading row */}
      <div className="py-2 relative mt-1">
        <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{title}</h2>
        {/* Bottom line below heading */}
        <div
          className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
          style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
        />
        <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
      </div>

      {/* Content */}
      {children}

      {/* View All + bottom line */}
      {(viewAllHref || onViewAll) && (
        <div className="py-4 px-4 -mx-4 flex justify-center relative hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors rounded-b-lg mt-0">
          <div
            className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
          />
          <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          <ViewAllButton href={viewAllHref} label={viewAllLabel} onClick={onViewAll} />
        </div>
      )}
    </div>
  );
}
