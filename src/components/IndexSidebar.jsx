import { useEffect, useState } from 'react';
import { INDEX_SECTIONS } from '../data/portfolio.js';

export default function IndexSidebar() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    INDEX_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none hidden lg:block">
      <nav
        className="absolute pointer-events-auto flex flex-col gap-4 mt-2"
        style={{ top: '22vh', left: 'calc(70% + 32px)' }}
      >
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">
          Index
        </h3>
        {INDEX_SECTIONS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ease-out flex items-center gap-3 text-left bg-transparent border-0 cursor-pointer p-0 ${
                isActive
                  ? 'text-zinc-800 dark:text-zinc-200'
                  : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400'
              }`}
            >
              <span className={`h-[1px] transition-all duration-300 ease-out ${
                isActive
                  ? 'w-3 bg-zinc-300 dark:bg-zinc-700'
                  : 'w-0 bg-transparent'
              }`} />
              {label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
