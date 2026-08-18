import { ArrowRight, Telescope, Droplets, Orbit, FlaskConical, Users, Star } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { rooms, experiences } from '@/lib/content';

interface HomeProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Home({ onNavigate, onBookClick }: HomeProps) {
  const { ref: heroRef, visible: heroVisible } = useReveal();
  const { ref: stripRef, visible: stripVisible } = useReveal();
  const { ref: buildRef, visible: buildVisible } = useReveal();
  const { ref: audienceRef, visible: audienceVisible } = useReveal();
  const { ref: ctaRef, visible: ctaVisible } = useReveal();

  const differentiators = [
    {
      icon: Droplets,
      title: 'The Spring',
      desc: 'A natural spring shaped into a connected pond system — a living hydrology lab you walk through.',
      path: '/experiences',
    },
    {
      icon: Orbit,
      title: 'Walk the Solar System',
      desc: 'A to-scale model of the solar system laid out across 15 acres. Walk from the sun to Neptune.',
      path: '/experiences',
    },
    {
      icon: Telescope,
      title: 'Stargazing',
      desc: 'One of the darkest skies in the lower 48. A telescope, a guide, and a sky that feels close enough to touch.',
      path: '/stargazing',
    },
    {
      icon: FlaskConical,
      title: 'The Experiment',
      desc: 'A science-based environment where guests move through real systems — from planetary scale to geological time.',
      path: '/about',
    },
  ];

  const audiences = [
    { icon: Telescope, label: 'Science & astronomy enthusiasts' },
    { icon: Star, label: 'Adventure travelers & outdoor lovers' },
    { icon: Users, label: 'Families & lifelong learners' },
    { icon: FlaskConical, label: 'Creative & curious minds' },
    { icon: Orbit, label: 'Pet owners' },
    { icon: Droplets, label: 'Wellness & retreat seekers' },
  ];

  const featuredRooms = rooms.filter((r) => r.category === 'room').slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9702070/pexels-photo-9702070.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Red rock desert landscape in Moab, Utah"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-obsidian-950/20" />
        <div className="absolute inset-0 grid-overlay opacity-40" />

        {/* Animated star field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-bone-100 animate-shimmer"
              style={{
                width: `${1 + (i % 3)}px`,
                height: `${1 + (i % 3)}px`,
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23) % 50}%`,
                animationDelay: `${(i * 0.3) % 3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={heroRef}
          className={`container-wide relative pb-20 md:pb-32 reveal ${heroVisible ? 'visible' : ''}`}
        >
          <p className="label-mono text-spring-400 mb-6 animate-fade-in">
            ◊ 38.5733°N · 109.5498°W · MOAB, UTAH
          </p>
          <h1 className="display-xl text-bone-100 text-balance max-w-5xl text-shadow-dark">
            Not themed hospitality.<br />
            <span className="text-spring-400 italic font-light">Physical science,</span> made immersive.
          </h1>
          <p className="body-lg text-bone-200 mt-8 max-w-2xl text-shadow-dark">
            Wetrock is a 15-acre science-based environment where guests don't just observe — they move through it. Each structure, path, and experience reflects real systems, from planetary scale to geological time.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
            <button onClick={onBookClick} className="btn-primary">
              Check Availability
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('/stay')} className="btn-secondary">
              Explore Stays
            </button>
          </div>
        </div>
      </section>

      {/* What makes this different strip */}
      <section className="relative bg-obsidian-950 py-20 md:py-32">
        <div className="topo-lines absolute inset-0 opacity-30" />
        <div
          ref={stripRef}
          className={`container-wide relative reveal ${stripVisible ? 'visible' : ''}`}
        >
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="label-mono text-spring-400 mb-3">◊ What Makes This Different</p>
              <h2 className="display-lg text-bone-100 max-w-2xl text-balance">
                Four systems you move through
              </h2>
            </div>
            <button onClick={() => onNavigate('/experiences')} className="btn-ghost hidden md:inline-flex">
              All experiences
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10">
            {differentiators.map((item, i) => (
              <button
                key={i}
                onClick={() => onNavigate(item.path)}
                className="group bg-obsidian-900 p-6 md:p-8 text-left hover:bg-obsidian-800 transition-colors duration-500"
              >
                <item.icon size={28} className="text-spring-400 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-bone-100 mb-3">{item.title}</h3>
                <p className="text-sm text-bone-400 leading-relaxed font-light">{item.desc}</p>
                <span className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mt-6 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Experience */}
      <section className="relative bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div
          ref={buildRef}
          className={`container-wide reveal ${buildVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-3">◊ Build Your Experience</p>
              <h2 className="display-lg text-bone-100 mb-6 text-balance">
                A stay is not one thing. It is a combination.
              </h2>
              <p className="body-lg text-bone-300 mb-8">
                Choose where you sleep — a themed suite, a dark-sky camp spot, or the entire property. Then layer in guided experiences: a goat walk, a geology lab, a night at the telescope. The point is to move through science, not read about it.
              </p>
              <div className="space-y-4">
                <button onClick={() => onNavigate('/stay')} className="flex items-center justify-between w-full p-5 border border-bone-300/10 hover:border-spring-400/50 transition-colors duration-300 group">
                  <div className="text-left">
                    <p className="font-display text-lg text-bone-100">Stay</p>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-1">Rooms, camping, retreats</p>
                  </div>
                  <ArrowRight size={18} className="text-bone-500 group-hover:text-spring-400 group-hover:translate-x-1 transition-all" />
                </button>
                <button onClick={() => onNavigate('/experiences')} className="flex items-center justify-between w-full p-5 border border-bone-300/10 hover:border-spring-400/50 transition-colors duration-300 group">
                  <div className="text-left">
                    <p className="font-display text-lg text-bone-100">Experiences</p>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-1">Guided science & astronomy</p>
                  </div>
                  <ArrowRight size={18} className="text-bone-500 group-hover:text-spring-400 group-hover:translate-x-1 transition-all" />
                </button>
                <button onClick={() => onNavigate('/stargazing')} className="flex items-center justify-between w-full p-5 border border-bone-300/10 hover:border-spring-400/50 transition-colors duration-300 group">
                  <div className="text-left">
                    <p className="font-display text-lg text-bone-100">Stargazing</p>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-1">Dark-sky guided sessions</p>
                  </div>
                  <ArrowRight size={18} className="text-bone-500 group-hover:text-spring-400 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1488087/pexels-photo-1488087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Spring-fed pond"
                  className="w-full h-64 object-cover card-frame"
                />
                <img
                  src="https://images.pexels.com/photos/13009055/pexels-photo-13009055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Milky Way over Utah"
                  className="w-full h-64 object-cover card-frame mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/7509142/pexels-photo-7509142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Goat in rocky terrain"
                  className="w-full h-64 object-cover card-frame -mt-4"
                />
                <img
                  src="https://images.pexels.com/photos/9503200/pexels-photo-9503200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Red rock formation"
                  className="w-full h-64 object-cover card-frame mt-4"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-obsidian-950 border border-bone-300/10 p-4 max-w-[200px]">
                <p className="font-mono text-[10px] text-bone-500 uppercase tracking-widest mb-1">◊ Sample stay</p>
                <p className="font-display text-sm text-bone-200">Evolution Room + Goat Walk + Stargazing — 2 nights from $516</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured rooms */}
      <section className="relative bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="label-mono text-spring-400 mb-3">◊ Specimen Catalog</p>
              <h2 className="display-lg text-bone-100 text-balance">Places to sleep</h2>
            </div>
            <button onClick={() => onNavigate('/stay')} className="btn-ghost hidden md:inline-flex">
              All stays
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredRooms.map((room, i) => (
              <button
                key={room.id}
                onClick={() => onNavigate(`/stay/${room.slug}`)}
                className="group text-left hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden card-frame aspect-[4/5] mb-4">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute top-3 left-3 font-mono text-[10px] text-bone-100/80 uppercase tracking-widest bg-obsidian-950/50 backdrop-blur-sm px-2 py-1">
                    {room.code}
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-xs text-spring-400 bg-obsidian-950/50 backdrop-blur-sm px-2 py-1">
                    from ${room.rateFrom}
                  </div>
                </div>
                <h3 className="font-display text-xl text-bone-100 mb-2 group-hover:text-spring-400 transition-colors">{room.name}</h3>
                <p className="text-sm text-bone-400 font-light leading-relaxed line-clamp-2">{room.concept}</p>
                <div className="flex items-center gap-3 mt-3 font-mono text-[10px] text-bone-500 uppercase tracking-widest">
                  <span>Sleeps {room.sleeps}</span>
                  <span>·</span>
                  <span>{room.bed}</span>
                  <span>·</span>
                  <span>{room.baths} bath</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Who comes to Wetrock */}
      <section className="relative bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="topo-lines absolute inset-0 opacity-30" />
        <div ref={audienceRef} className={`container-wide relative reveal ${audienceVisible ? 'visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-mono text-spring-400 mb-3">◊ Who Comes to Wetrock</p>
            <h2 className="display-lg text-bone-100 text-balance">
              Built for the curious
            </h2>
            <p className="body-lg text-bone-300 mt-6">
              Wetrock is not for everyone — and that is the point. It is for people who want their vacation to leave them knowing something they did not know before.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone-300/10 border border-bone-300/10 max-w-4xl mx-auto">
            {audiences.map((aud, i) => (
              <div key={i} className="bg-obsidian-900 p-6 md:p-8 flex items-center gap-4">
                <aud.icon size={22} className="text-spring-400 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-bone-200 text-sm font-light">{aud.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-obsidian-950 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/17877136/pexels-photo-17877136.jpeg?auto=compress&cs=tinysrgb&h=650&w=1920"
            alt="Desert under starlit sky"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 to-obsidian-950/50" />
        </div>
        <div ref={ctaRef} className={`container-wide relative reveal ${ctaVisible ? 'visible' : ''}`}>
          <div className="max-w-3xl">
            <p className="label-mono text-spring-400 mb-4">◊ Ready to Begin</p>
            <h2 className="display-xl text-bone-100 text-balance text-shadow-dark">
              The sky is waiting.
            </h2>
            <p className="body-lg text-bone-200 mt-6 text-shadow-dark max-w-xl">
              Check availability, choose your space, and add your experiences. We confirm every reservation personally within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              <button onClick={onBookClick} className="btn-primary">
                Check Availability
                <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('/contact')} className="btn-secondary">
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
