import { ACADEMICS, PROFILES } from '../data/portfolio.js';
import SectionWrapper from '../components/SectionWrapper.jsx';

function EducationItem({ item }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-black/5 dark:border-white/5 last:border-b-0">
      <div className="w-10 h-10 rounded-[8px] bg-zinc-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex-shrink-0 flex items-center justify-center text-lg">
        🎓
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[14px] font-semibold text-zinc-800 dark:text-zinc-200 leading-tight">{item.degree}</p>
            <p className="text-[13px] text-zinc-500 dark:text-zinc-500 mt-0.5">{item.institution}</p>
            {item.university && (
              <p className="text-[11px] text-zinc-400 dark:text-zinc-600 mt-0.5">{item.university}</p>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            {item.timeline && (
              <p className="text-[12px] text-zinc-500">{item.timeline}</p>
            )}
            {item.cgpa && (
              <p className="text-[12px] font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">{item.cgpa} CGPA</p>
            )}
            {item.score && (
              <p className="text-[12px] font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">{item.score}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      viewAllHref="https://github.com/Amrendra21"
      viewAllLabel="View Profiles"
    >
      <div className="pt-2">
        {ACADEMICS.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
        <div className="flex flex-wrap gap-2 pt-4 pb-2">
          {PROFILES.map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.08] text-[12px] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all duration-200"
            >
              <span className="font-medium">{p.label}</span>
              <span className="text-zinc-400 dark:text-zinc-600">@{p.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
