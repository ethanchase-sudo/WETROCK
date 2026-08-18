import { ArrowRight, Clock, Users, DollarSign, Calendar } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { useReveal } from '@/lib/useReveal';
import { experiences } from '@/lib/content';

interface ExperiencesProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Experiences({ onNavigate, onBookClick }: ExperiencesProps) {
  const { ref, visible } = useReveal();

  return (
    <div>
      <PageHeader
        code="EXPERIENCES"
        label="Experience"
        title="Science you can walk through"
        subtitle="Each experience is built around a real system — hydrology, astronomy, ecology, geology. You do not read about it. You move through it."
        image="https://images.pexels.com/photos/1488087/pexels-photo-1488087.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="mb-12">
            <p className="label-mono text-spring-400 mb-3">◊ All Experiences</p>
            <h2 className="display-md text-bone-100">Six ways to move through science</h2>
          </div>

          <div className="space-y-px bg-bone-300/10 border border-bone-300/10">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-obsidian-900 hover:bg-obsidian-800 transition-colors duration-500 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden card-frame aspect-square">
                      <img src={exp.image} alt={exp.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mb-2">{exp.code} · {exp.category}</p>
                    <h3 className="font-display text-xl md:text-2xl text-bone-100 mb-2">{exp.name}</h3>
                    <p className="text-bone-400 text-sm font-light leading-relaxed">{exp.tagline}</p>
                  </div>
                  <div className="md:col-span-3 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-bone-500" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-bone-500" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">{exp.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-bone-500" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">{exp.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-bone-500" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">{exp.season}</span>
                    </div>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <button
                      onClick={() => exp.id === 'stargazing' ? onNavigate('/stargazing') : onBookClick()}
                      className="inline-flex items-center gap-1 font-mono text-xs text-spring-400 uppercase tracking-widest group-hover:gap-2 transition-all"
                    >
                      {exp.price.includes('Included') ? 'Explore' : 'Book'}
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="label-mono text-spring-400 mb-4">◊ How Experiences Work</p>
            <h2 className="display-md text-bone-100 mb-8 text-balance">Add them to any stay</h2>
            <p className="body-lg text-bone-300 leading-[1.7] mb-8">
              Self-guided experiences — the spring walk and the solar-system walk — are included with every stay. Guided experiences are booked per person and can be added during the reservation process or arranged after you arrive. Weather-dependent sessions are rescheduled or refunded if conditions do not cooperate.
            </p>
            <button onClick={onBookClick} className="btn-primary">
              Check Availability
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
