import { ArrowRight, Moon, Telescope, Star, Cloud, Eye } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { useReveal } from '@/lib/useReveal';

interface StargazingProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Stargazing({ onNavigate, onBookClick }: StargazingProps) {
  const { ref, visible } = useReveal();

  return (
    <div>
      <PageHeader
        code="E-04"
        label="Experience / Stargazing"
        title="One of the darkest skies in the lower 48"
        subtitle="A telescope, a dark sky, and someone who knows what they are looking at. Moab is a certified dark-sky community — and Wetrock is set back far enough for an unobstructed horizon."
        image="https://images.pexels.com/photos/13009055/pexels-photo-13009055.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      {/* Tonight's Sky */}
      <section className="bg-obsidian-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-bone-100 animate-shimmer"
              style={{
                width: `${1 + (i % 3)}px`,
                height: `${1 + (i % 3)}px`,
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${(i * 0.2) % 3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
        <div className="container-wide relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ Tonight's Sky Report</p>
            <h2 className="display-lg text-bone-100 text-balance">Conditions tonight</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10 max-w-4xl mx-auto">
            <div className="bg-obsidian-900 p-6 text-center">
              <Moon size={28} className="text-spring-400 mb-3 mx-auto" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Moon phase</p>
              <p className="font-display text-xl text-bone-100">New Moon</p>
            </div>
            <div className="bg-obsidian-900 p-6 text-center">
              <Cloud size={28} className="text-spring-400 mb-3 mx-auto" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Cloud cover</p>
              <p className="font-display text-xl text-bone-100">0-10%</p>
            </div>
            <div className="bg-obsidian-900 p-6 text-center">
              <Star size={28} className="text-spring-400 mb-3 mx-auto" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Sky rating</p>
              <p className="font-display text-xl text-bone-100">Bortle 2</p>
            </div>
            <div className="bg-obsidian-900 p-6 text-center">
              <Eye size={28} className="text-spring-400 mb-3 mx-auto" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Visibility</p>
              <p className="font-display text-xl text-bone-100">Excellent</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-4">◊ Visible tonight</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Milky Way Core', 'Andromeda Galaxy', 'Orion Nebula', 'Saturn', 'Pleiades', 'Double Cluster'].map((obj) => (
                <span key={obj} className="font-mono text-xs text-bone-300 border border-bone-300/10 px-3 py-1.5">
                  {obj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The session */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Guided Session</p>
              <h2 className="display-lg text-bone-100 mb-8 text-balance">
                See planets, nebulae, and galaxies through an 8-inch Dobsonian.
              </h2>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                The guided stargazing session uses an 8-inch Dobsonian telescope — simple, rugged, and built for dark skies. You will see the rings of Saturn, the moons of Jupiter, the Orion Nebula, the Andromeda Galaxy, and star clusters that look like spilled salt on black velvet.
              </p>
              <p className="body-lg text-bone-300 leading-[1.7] mb-8">
                No experience needed. We teach you how to navigate the sky by eye, how to read a star chart, and how to find objects on your own. Sessions are 90 minutes, scheduled around the moon phase for maximum darkness.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 border border-bone-300/10">
                  <Telescope size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Instrument</p>
                  <p className="font-display text-base text-bone-100">8" Dobsonian</p>
                </div>
                <div className="p-5 border border-bone-300/10">
                  <Moon size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Duration</p>
                  <p className="font-display text-base text-bone-100">90 minutes</p>
                </div>
                <div className="p-5 border border-bone-300/10">
                  <Star size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Group size</p>
                  <p className="font-display text-base text-bone-100">Up to 12</p>
                </div>
                <div className="p-5 border border-bone-300/10">
                  <Eye size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Price</p>
                  <p className="font-display text-base text-bone-100">$65/person</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <AnnotatedImage
                src="https://images.pexels.com/photos/11768608/pexels-photo-11768608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Milky Way above desert observatory"
                caption="The Milky Way from the stargazing pad"
                coordinate="GALACTIC CORE"
                aspect="video"
              />
              <AnnotatedImage
                src="https://images.pexels.com/photos/10792552/pexels-photo-10792552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Telescope silhouette at twilight"
                caption="The 8-inch Dobsonian — simple, rugged, built for dark skies"
                coordinate="INSTRUMENT"
                aspect="video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best season */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-mono text-spring-400 mb-4">◊ When to come</p>
            <h2 className="display-md text-bone-100 mb-8 text-balance">Best viewing: September through May</h2>
            <p className="body-lg text-bone-300 leading-[1.7] mb-12">
              Moab has clear skies most of the year. The driest, darkest viewing is from September through May, when the Milky Way stretches overhead. Summer nights are warm and comfortable. We schedule around the new moon — the week around it is darkest. Check the calendar or ask us when booking.
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-12 gap-px bg-bone-300/10 border border-bone-300/10 max-w-4xl mx-auto">
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m, i) => {
              const rating = i >= 8 || i <= 4 ? 'excellent' : i === 5 || i === 7 ? 'good' : 'fair';
              const color = rating === 'excellent' ? 'bg-spring-500/20 text-spring-400' : rating === 'good' ? 'bg-solar-500/10 text-solar-400' : 'bg-obsidian-800 text-bone-600';
              return (
                <div key={i} className={`${color} p-3 text-center`}>
                  <p className="font-mono text-xs uppercase">{m}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <span className="flex items-center gap-2 font-mono text-xs text-bone-500 uppercase tracking-widest">
              <span className="w-3 h-3 bg-spring-500/20" /> Excellent
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-bone-500 uppercase tracking-widest">
              <span className="w-3 h-3 bg-solar-500/10" /> Good
            </span>
            <span className="flex items-center gap-2 font-mono text-xs text-bone-500 uppercase tracking-widest">
              <span className="w-3 h-3 bg-obsidian-800" /> Fair
            </span>
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20 border-t border-bone-300/10">
        <div className="container-wide text-center">
          <h2 className="display-md text-bone-100 mb-6">Book a stargazing session</h2>
          <p className="body-md text-bone-400 mb-8 max-w-xl mx-auto">
            Add stargazing to any stay, or book it as a standalone experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={onBookClick} className="btn-primary">
              Book a Session
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('/camping')} className="btn-secondary">
              Sleep under the stars
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
