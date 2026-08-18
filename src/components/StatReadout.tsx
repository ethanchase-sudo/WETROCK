import { useReveal } from '@/lib/useReveal';

interface StatReadoutProps {
  stats: { label: string; value: string; unit?: string }[];
  columns?: 2 | 3 | 4;
}

export function StatReadout({ stats, columns = 4 }: StatReadoutProps) {
  const { ref, visible } = useReveal();
  const colClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[columns];

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid ${colClass} gap-px bg-bone-300/10 border border-bone-300/10`}>
      {stats.map((stat, i) => (
        <div key={i} className="bg-obsidian-900 p-5 md:p-6">
          <p className="label-mono text-bone-500 mb-2">{stat.label}</p>
          <p className="font-display text-2xl md:text-3xl text-bone-100 leading-none">
            {stat.value}
            {stat.unit && (
              <span className="font-mono text-sm text-bone-500 ml-1">{stat.unit}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
