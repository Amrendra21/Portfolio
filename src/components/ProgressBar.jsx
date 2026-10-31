import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{ width: `${width}%` }}
      className="fixed top-0 left-0 h-[1.5px] bg-white/60 z-[100] transition-[width] duration-75 ease-linear pointer-events-none"
    />
  );
}
