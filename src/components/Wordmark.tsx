interface WordmarkProps {
  className?: string;
  showTagline?: boolean;
  onClick?: () => void;
}

export function Wordmark({ className = '', showTagline = false, onClick }: WordmarkProps) {
  return (
    <div
      className={`flex flex-col leading-none cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      <div className="flex items-baseline gap-[2px]">
        <span className="font-mono text-[10px] uppercase tracking-widest-2 text-spring-400">
          ◊
        </span>
        <span className="font-display text-xl md:text-2xl font-medium tracking-tight text-bone-100">
          Kit Inn
        </span>
        <span className="font-display text-xl md:text-2xl font-light italic tracking-tight text-bone-300">
          Wetrock
        </span>
      </div>
      {showTagline && (
        <span className="font-mono text-[9px] uppercase tracking-widest-2 text-bone-500 mt-1 pl-4">
          Control for Bias
        </span>
      )}
    </div>
  );
}
