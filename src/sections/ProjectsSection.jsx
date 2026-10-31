import { PROJECTS } from '../data/portfolio.js';
import SectionWrapper from '../components/SectionWrapper.jsx';

const DOTTED_MASK = 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)';

const STATUS_CONFIG = {
  Live:      { color: 'bg-emerald-500', shadow: 'shadow-[0_0_5px_rgba(34,197,94,0.8)]',    label: 'Live' },
  Building:  { color: 'bg-red-500',     shadow: 'shadow-[0_0_5px_rgba(239,68,68,0.8)]',    label: 'Building' },
  Research:  { color: 'bg-violet-400',  shadow: 'shadow-[0_0_5px_rgba(167,139,250,0.8)]',  label: 'Research' },
  Published: { color: 'bg-violet-400',  shadow: 'shadow-[0_0_5px_rgba(167,139,250,0.8)]',  label: 'Published' },
  WIP:       { color: 'bg-zinc-500',    shadow: '',                                          label: 'WIP' },
};

function ProjectCard({ project }) {
  const status = STATUS_CONFIG[project.status] || STATUS_CONFIG['WIP'];

  return (
    <div className="flex flex-col group cursor-default">
      <div className="relative w-full aspect-[1.25] rounded-xl border border-black/5 dark:border-white/5 bg-zinc-50/80 dark:bg-[#09090b]/80 shadow-sm p-3.5 pb-0 flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-200 hover:shadow-md hover:border-black/10 dark:hover:border-white/10 sm:aspect-[1.4] sm:p-4 sm:pb-0">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 opacity-[0.15] dark:opacity-20 bg-gradient-to-br ${project.gradient || 'from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-black'}`} />

        {/* Pin icon for research */}
        <div className="flex items-center justify-end z-10 min-h-[24px]">
          {project.isResearch && (
            <div className="w-6 h-6 rounded-[6px] bg-transparent border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17v5" /><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
              </svg>
            </div>
          )}
        </div>

        {/* Project name watermark */}
        <div className="flex-1 flex flex-col justify-center items-center z-10 relative">
          <p className="text-[22px] sm:text-[26px] font-bold text-zinc-400/20 dark:text-zinc-300/20 select-none tracking-tight text-center">
            {project.name}
          </p>
        </div>

        {/* Tech tags bottom */}
        <div className="relative z-10 flex flex-wrap gap-1.5 pb-3.5 sm:pb-4 mt-auto">
          {(project.tech || []).slice(0, 4).map((t) => (
            <span key={t} className="px-1.5 py-0.5 rounded-[3px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] text-zinc-500 dark:text-zinc-500">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Below card info */}
      <div className="mt-3 px-0.5">
        <div className="flex items-center gap-2 mb-1">
          <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${status.color} ${status.shadow}`} />
          <span className="text-[13px] font-semibold text-zinc-800 dark:text-zinc-200">{project.name}</span>
          <span className="text-[11px] text-zinc-400 dark:text-zinc-600">{status.label}</span>
        </div>
        <p className="text-[12px] text-zinc-500 leading-relaxed line-clamp-2 mb-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {(project.tech || []).slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] text-zinc-400 dark:text-zinc-600 px-1.5 py-0.5 rounded border border-black/[0.06] dark:border-white/[0.06]">{t}</span>
            ))}
          </div>
          {(project.github || project.live) && (
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              View Project
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const rows = [PROJECTS.slice(0, 2), PROJECTS.slice(2, 4)];

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      viewAllHref="https://github.com/Amrendra21"
      viewAllLabel="View All"
    >
      <div className="flex flex-col relative z-10 w-full pt-6 pb-2">
        {rows.map((row, ri) => (
          <div key={ri}>
            {ri > 0 && (
              <div className="relative w-full h-0 hidden md:block mb-6">
                <div
                  className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
                  style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
                />
                <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute top-0 left-1/2 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-0 pb-10 md:pb-6">
              {row.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
