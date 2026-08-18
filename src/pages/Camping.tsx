import { ArrowRight, Moon, Tent, Star, Flame } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { StatReadout } from '@/components/StatReadout';
import { useReveal } from '@/lib/useReveal';
import { rooms } from '@/lib/content';

interface CampingProps {
  onNavigate: (path: string) => void;
  onBookClick: (roomId: string) => void;
}

export function Camping({ onNavigate, onBookClick }: CampingProps) {
  const camp = rooms.find((r) => r.id === 'camp-spot')!;
  const { ref, visible } = useReveal();

  return (
    <div>
      <PageHeader
        code="C-01"
        label="Stay / Camping"
        title="Sleep where the sky is loudest"
        subtitle="A luxury camp spot on the property, far enough from the main house that the only light is starlight. Real beds, real comfort, unreal sky."
        image="https://images.pexels.com/photos/5717775/pexels-photo-5717775.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ The Dark Sky</p>
              <h2 className="display-lg text-bone-100 mb-8 text-balance">
                Bortle 2. One of the darkest skies in the lower 48.
              </h2>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                Moab sits beneath some of the darkest sky in the continental United States. The camp spots at Wetrock are positioned along the solar-system walk, far enough from the main house that light pollution is effectively zero.
              </p>
              <p className="body-lg text-bone-300 leading-[1.7] mb-8">
                Each spot has a raised platform, a real mattress, and a canvas shelter. This is not roughing it — it is choosing to sleep where the sky is loudest. The Milky Way casts a shadow here.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 border border-bone-300/10">
                  <Moon size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Sky quality</p>
                  <p className="font-display text-lg text-bone-100">Bortle 2</p>
                </div>
                <div className="p-5 border border-bone-300/10">
                  <Star size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Visible objects</p>
                  <p className="font-display text-lg text-bone-100">Milky Way shadow</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <AnnotatedImage
                src="https://images.pexels.com/photos/17877136/pexels-photo-17877136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Desert under starlit sky"
                caption="The view from a camp spot — the only light is starlight"
                coordinate="NIGHT · 02:00"
                aspect="video"
              />
              <AnnotatedImage
                src="https://images.pexels.com/photos/18717287/pexels-photo-18717287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Luxury glamping tents in desert"
                caption="Raised platform, real mattress, canvas shelter"
                coordinate="CAMP · DAY"
                aspect="video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="mb-8">
            <p className="label-mono text-spring-400 mb-3">◊ What is Provided</p>
            <h2 className="display-md text-bone-100">Everything you need, nothing you do not</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10">
            {[
              { icon: Tent, title: 'Canvas Shelter', desc: 'A weatherproof canvas tent over a raised wooden platform.' },
              { icon: Star, title: 'Real Mattress', desc: 'A proper mattress with linens and pillows. Not a cot.' },
              { icon: Moon, title: 'Stargazing Pad', desc: 'A reclining pad outside the tent for unobstructed sky viewing.' },
              { icon: Flame, title: 'Fire Pit', desc: 'A shared campfire pit with firewood provided.' },
            ].map((item, i) => (
              <div key={i} className="bg-obsidian-900 p-6">
                <item.icon size={24} className="text-spring-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-base text-bone-100 mb-2">{item.title}</h3>
                <p className="text-sm text-bone-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <StatReadout
            stats={[
              { label: 'Sleeps', value: String(camp.sleeps), unit: 'guests' },
              { label: 'Bed', value: 'Platform' },
              { label: 'Rate from', value: `$${camp.rateFrom}`, unit: '/night' },
              { label: 'Sky', value: 'Bortle 2' },
            ]}
          />
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button onClick={() => onBookClick(camp.id)} className="btn-primary">
              Check Availability
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('/stargazing')} className="btn-secondary">
              Learn about stargazing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
