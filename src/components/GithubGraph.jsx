import { useState, useEffect, useMemo } from 'react';
import initialContributions from '../data/github-contributions.json';
import { useTheme } from '../context/ThemeContext.jsx';
import { PERSONAL } from '../data/portfolio.js';

const DOTTED_MASK = 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)';

export default function GithubGraph() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [data, setData] = useState(initialContributions);
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/Amrendra21?y=last')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json();
      })
      .then((json) => {
        if (json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      })
      .catch((err) => {
        // Fallback to static data if offline or blocked
        console.warn('Using cached GitHub contributions data:', err.message);
      });
  }, []);

  // Split into columns of 7 days
  const weeks = useMemo(() => {
    const list = data?.contributions || [];
    const cols = [];
    for (let i = 0; i < list.length; i += 7) {
      cols.push(list.slice(i, i + 7));
    }
    return cols;
  }, [data]);

  const totalContributions = data?.total?.lastYear ?? 110;

  // Level color mapping
  const getCellColor = (level) => {
    if (isDark) {
      switch (level) {
        case 1: return 'bg-[#0e4429]';
        case 2: return 'bg-[#006d32]';
        case 3: return 'bg-[#26a641]';
        case 4: return 'bg-[#39d353]';
        default: return 'bg-[#161b22]';
      }
    } else {
      switch (level) {
        case 1: return 'bg-[#9be9a8]';
        case 2: return 'bg-[#40c463]';
        case 3: return 'bg-[#30a14e]';
        case 4: return 'bg-[#216e39]';
        default: return 'bg-[#ebedf0]';
      }
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="mt-6 flex flex-col relative z-10 scroll-mt-24">
      {/* Top line */}
      <div
        className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
      />
      <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
      <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

      {/* Heading */}
      <div className="py-2 relative mt-1 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          GitHub Activity
        </h2>
        <span className="text-[12px] text-zinc-500 font-medium">
          {totalContributions} contributions in the last year
        </span>

        <div
          className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
          style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
        />
        <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
      </div>

      <div className="pt-4 pb-4 overflow-x-auto relative">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          title="View GitHub profile"
          className="block"
        >
          <div className="flex gap-[3px]" style={{ minWidth: 'max-content' }}>
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((item, di) => (
                  <div
                    key={di}
                    className={`w-[10px] h-[10px] rounded-[2px] ${getCellColor(item.level)} hover:ring-1 hover:ring-zinc-400 dark:hover:ring-white transition-all cursor-pointer`}
                    onMouseEnter={() => setHoveredCell(item)}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </a>

        {/* Footer info: Legend & Active Hover Tooltip */}
        <div className="flex items-center justify-between mt-3 text-[11px] text-zinc-500">
          <div className="min-h-[18px]">
            {hoveredCell ? (
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                {hoveredCell.count} contribution{hoveredCell.count === 1 ? '' : 's'} on {formatDate(hoveredCell.date)}
              </span>
            ) : (
              <span>@Amrendra21 on GitHub</span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-zinc-500 dark:text-zinc-600">Less</span>
            {[0, 1, 2, 3, 4].map((lvl) => (
              <div key={lvl} className={`w-[10px] h-[10px] rounded-[2px] ${getCellColor(lvl)}`} />
            ))}
            <span className="text-[10px] text-zinc-500 dark:text-zinc-600">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

