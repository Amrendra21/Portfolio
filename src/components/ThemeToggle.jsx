import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`relative z-50 flex h-[18px] w-[18px] cursor-pointer items-center justify-center transition-all duration-300 active:scale-95
        ${isDark
          ? 'text-zinc-600 hover:text-zinc-300'
          : 'text-zinc-500 hover:text-zinc-900'
        } ${className}`}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}

