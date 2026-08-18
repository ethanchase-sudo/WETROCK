import { useState, useEffect } from 'react';
import { Cloud, Moon, Thermometer } from 'lucide-react';

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const month = time.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = time.getDate();
  const hour = time.getHours();
  const isNight = hour >= 19 || hour < 5;

  const skyRating = isNight ? 'BORTLE 2 — EXCELLENT' : 'CLEAR';

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-30 border-b border-bone-300/5 bg-obsidian-950/60 backdrop-blur-sm">
      <div className="container-wide flex items-center justify-between h-8 text-[10px] md:text-[11px]">
        <div className="flex items-center gap-4 md:gap-6 font-mono uppercase tracking-widest text-bone-500">
          <span className="flex items-center gap-1.5">
            <span className="text-spring-400">●</span>
            MOAB · {month} {day}
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Thermometer size={11} className="text-solar-400" />
            82°F / 28°C
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <Cloud size={11} className="text-bone-400" />
            CLEAR SKY
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono uppercase tracking-widest text-spring-400">
          <Moon size={11} />
          <span className="hidden sm:inline">{skyRating}</span>
          <span className="sm:hidden">BORTLE 2</span>
        </div>
      </div>
    </div>
  );
}
