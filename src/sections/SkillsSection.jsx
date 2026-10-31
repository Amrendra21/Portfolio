import SectionWrapper from '../components/SectionWrapper.jsx';
import {
  SiCplusplus, SiJavascript, SiPython, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiDocker, SiGit, SiGithub,
  SiHtml5, SiCss, SiFastapi, SiScikitlearn
} from 'react-icons/si';
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa';
import { CircleDot } from 'lucide-react';

const skills = [
  { name: 'C++',          icon: SiCplusplus },
  { name: 'C',            icon: CircleDot },
  { name: 'JavaScript',   icon: SiJavascript },
  { name: 'Python',       icon: SiPython },
  { name: 'Java',         icon: FaJava },
  { name: 'SQL',          icon: FaDatabase },
  { name: 'React',        icon: SiReact },
  { name: 'Node.js',      icon: SiNodedotjs },
  { name: 'Express',      icon: SiExpress },
  { name: 'FastAPI',      icon: SiFastapi },
  { name: 'MongoDB',      icon: SiMongodb },
  { name: 'MySQL',        icon: SiMysql },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'Docker',       icon: SiDocker },
  { name: 'AWS',          icon: FaAws },
  { name: 'Git',          icon: SiGit },
  { name: 'GitHub',       icon: SiGithub },
  { name: 'HTML',         icon: SiHtml5 },
  { name: 'CSS',          icon: SiCss },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="relative pt-6 pb-2">
        <div className="flex flex-wrap gap-2 w-full">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="grow flex items-center justify-center gap-2 px-3 py-1.5 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0a0a0a] dark:hover:bg-[#121214] border border-black/30 dark:border-white/[0.15] rounded-[6px] transition-colors duration-200 cursor-default"
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-zinc-500 opacity-80" />
                <span className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
