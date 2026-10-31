import ProgressBar from './components/ProgressBar.jsx';
import IndexSidebar from './components/IndexSidebar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import GithubGraph from './components/GithubGraph.jsx';
import EducationSection from './sections/EducationSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ResearchSection from './sections/ResearchSection.jsx';
import CertificationsSection from './sections/CertificationsSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import { PERSONAL } from './data/portfolio.js';
import { useTheme } from './context/ThemeContext.jsx';

const DOTTED_MASK = 'repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)';
const DOTTED_MASK_V = 'repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)';

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Border & node colors based on theme
  const borderOpacity = isDark ? 'border-white/[0.15]' : 'border-black/30';
  const nodeColor = isDark ? 'bg-white/[0.25]' : 'bg-black/50';

  return (
    <div className={`min-h-screen w-full ${isDark ? 'bg-black' : 'bg-white'} relative overflow-x-hidden transition-colors duration-300`}>
      {/* Progress bar */}
      <ProgressBar />

      {/* Right INDEX sidebar */}
      <IndexSidebar />

      {/* ── Vertical dotted lines at left:30%, right:30% ── */}
      <div
        className={`absolute top-0 bottom-0 left-[30%] w-0 border-r ${borderOpacity} pointer-events-none hidden md:block`}
        style={{ maskImage: DOTTED_MASK_V, WebkitMaskImage: DOTTED_MASK_V }}
      />
      <div
        className={`absolute top-0 bottom-0 right-[30%] w-0 border-r ${borderOpacity} pointer-events-none hidden md:block`}
        style={{ maskImage: DOTTED_MASK_V, WebkitMaskImage: DOTTED_MASK_V }}
      />

      {/* ── Horizontal dotted lines ── */}
      <div
        className={`absolute left-0 right-0 top-[22vh] h-0 border-b ${borderOpacity} pointer-events-none`}
        style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
      />
      <div
        className={`absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b ${borderOpacity} pointer-events-none`}
        style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
      />

      {/* ── 4 intersection nodes ── */}
      {[
        { top: '22vh',              left: '30%',  tx: '-50%', ty: '-50%' },
        { top: '22vh',              right: '30%', tx: '50%',  ty: '-50%' },
        { top: 'calc(22vh+112px)',  left: '30%',  tx: '-50%', ty: '-50%' },
        { top: 'calc(22vh+112px)',  right: '30%', tx: '50%',  ty: '-50%' },
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-[2px] h-[2px] ${nodeColor} pointer-events-none z-10 hidden md:block`}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            transform: `translate(${pos.tx}, ${pos.ty})`,
          }}
        />
      ))}

      {/* ── Cell 1: Banner (real image from reference) ── */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] z-0 pointer-events-none overflow-hidden">
        {/* Dark banner */}
        <img
          src="/banner-dark.jpg"
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Light banner */}
        <img
          src="/banner-light.jpg"
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Edge fades */}
        <div className={`absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t ${isDark ? 'from-black/50 to-transparent' : 'from-white/90 to-transparent'}`} />
        <div className={`absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r ${isDark ? 'from-black/40 to-transparent' : 'from-white/90 to-transparent'}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l ${isDark ? 'from-black/40 to-transparent' : 'from-white/90 to-transparent'}`} />
      </div>

      {/* ── Cell 2: Profile ── */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">

          {/* Avatar + name */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Framed avatar */}
            <div className={`relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] ${isDark ? 'border-white/[0.15]' : 'border-black/30'} shrink-0`}>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className="h-full w-full origin-center translate-y-1 scale-[1.1] object-cover opacity-90 grayscale contrast-100"
                  style={{ mixBlendMode: isDark ? 'normal' : 'multiply' }}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center pt-8">
              <h1
                className="text-[20px] sm:text-[24px] font-bold tracking-tight leading-none mb-0.5 text-zinc-800 dark:text-zinc-100"
                style={{
                  textShadow: isDark
                    ? '-1.5px 0 0 rgba(0,200,255,0.6), 1.5px 0 0 rgba(255,80,0,0.6)'
                    : '-1.5px 0 0 rgba(0,200,255,0.3), 1.5px 0 0 rgba(255,80,0,0.3)'
                }}
              >
                {PERSONAL.name}
              </h1>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                {PERSONAL.tagline}
              </p>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="flex items-start justify-end gap-3 h-20 sm:h-24 py-3">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* ── Flowing content column ── */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">

        {/* ── About / Intro ── */}
        <div id="about" className="scroll-mt-24 pt-4">
          <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <strong className="font-semibold text-zinc-900 dark:text-white">AI Engineer / Full-Stack Developer.</strong> I build intelligent applications and love solving complex problems.
          </p>

          <ul className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 pl-4 space-y-1.5">
            <li className="flex gap-2">
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span>Passionate about <strong className="font-semibold text-zinc-900 dark:text-white">DSA, competitive programming, and problem-solving.</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span>Building with <strong className="font-semibold text-zinc-900 dark:text-white">Web Technologies, Machine Learning, and AI Engineering.</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span>Exploring <strong className="font-semibold text-zinc-900 dark:text-white">LLMs, RAG systems, and intelligent AI-powered applications.</strong></span>
            </li>
          </ul>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-100 dark:text-zinc-900 rounded-[6px] text-[13px] font-semibold transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View GitHub
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-[6px] bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.08] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 text-[12px] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send an email
            </button>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-[6px] bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-black/10 dark:border-white/[0.08] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 text-[12px] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Socials row */}
          <div className="mt-6 scroll-mt-24">
            <h2 className="text-[14px] text-zinc-500 mb-2">
              Here are my <span className="font-medium text-zinc-800 dark:text-zinc-200">socials</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'GitHub',   href: PERSONAL.github,                         handle: 'Amrendra21' },
                { name: 'LinkedIn', href: PERSONAL.linkedin,                        handle: 'amrendra21' },
                { name: 'LeetCode', href: 'https://leetcode.com/_amrendra21',       handle: '_amrendra21' },
                { name: 'Email',    href: `mailto:${PERSONAL.email}`,               handle: PERSONAL.email },
              ].map(({ name, href, handle }) => (
                <a
                  key={name}
                  href={href}
                  target={name === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-black/10 dark:border-white/[0.08] text-[12px] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-all duration-200 group"
                >
                  <span className="font-medium">{name}</span>
                  <span className="text-zinc-400 dark:text-zinc-700 group-hover:text-zinc-500 dark:group-hover:text-zinc-500 transition-colors text-[11px]">@{handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Education ── */}
        <EducationSection />

        {/* ── Projects ── */}
        <ProjectsSection />

        {/* ── GitHub Activity ── */}
        <GithubGraph />

        {/* ── Research ── */}
        <ResearchSection />

        {/* ── Certifications ── */}
        <CertificationsSection />

        {/* ── Skills ── */}
        <SkillsSection />

        {/* ── Contact ── */}
        <ContactSection />

        {/* ── Closing Quote ── */}
        <div className="mt-2 flex flex-col items-center justify-center relative py-6">
          <div className="max-w-[480px] w-full flex flex-col items-center">
            <h3 className="text-[16px] font-medium text-center leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 italic">
              &quot;Do so much work that it would be unreasonable<br className="hidden md:block" />
              for you to not be successful.&quot;
            </h3>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              ALEX HORMOZI
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* ── Fading grid footer ── */}
        <div className="flex-grow w-[calc(100%+32px)] -mx-4 h-[300px] relative mt-4">
          {/* Top line */}
          <div
            className={`absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t ${borderOpacity} pointer-events-none z-10`}
            style={{ maskImage: DOTTED_MASK, WebkitMaskImage: DOTTED_MASK }}
          />
          <div className={`absolute top-0 left-0 w-[2px] h-[2px] ${nodeColor} -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20`} />
          <div className={`absolute top-0 right-0 w-[2px] h-[2px] ${nodeColor} translate-x-1/2 -translate-y-1/2 pointer-events-none z-20`} />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: isDark
                ? 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)'
                : 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            }}
          />

          {/* Footer text */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1">
            <p className="text-[11px] text-zinc-300 dark:text-zinc-800 font-medium tracking-[0.15em] uppercase">
              {PERSONAL.name}
            </p>
            <p className="text-[10px] text-zinc-300 dark:text-zinc-800">
              {new Date().getFullYear()} · Built with React + Vite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
