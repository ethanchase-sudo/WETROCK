import { ArrowRight, Users, Calendar, Music, GraduationCap, Heart } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { useReveal } from '@/lib/useReveal';

interface GroupsProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Groups({ onNavigate, onBookClick }: GroupsProps) {
  const { ref, visible } = useReveal();

  const eventTypes = [
    { icon: GraduationCap, title: 'Educational Gatherings', desc: 'Schools, universities, and study groups. The property is a living lab — geology, astronomy, ecology, and hydrology taught on-site.' },
    { icon: Heart, title: 'Weddings', desc: 'Ceremonies on the terracing, receptions under the stars. Up to 50 guests. The compound sleeps 18 overnight.' },
    { icon: Music, title: 'Concerts & Astronomy Nights', desc: 'Performances in the spring garden. Astronomy nights with visiting scientists. Public and private events.' },
    { icon: Users, title: 'Retreats & Residencies', desc: 'Corporate retreats, artist residencies, writer workshops. The property converts into a private workspace for groups.' },
  ];

  return (
    <div>
      <PageHeader
        code="GROUPS"
        label="Groups & Retreats"
        title="For retreats, residencies, weddings, and gatherings"
        subtitle="Wetrock converts into a venue for groups up to 50. The compound sleeps 18 overnight. Every space — the spring, the terracing, the living area, the sky — becomes part of the event."
        image="https://images.pexels.com/photos/7363295/pexels-photo-7363295.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ A Venue Built on Ideas</p>
            <h2 className="display-lg text-bone-100 mb-8 text-balance">
              A gathering space that is also a science environment.
            </h2>
            <p className="body-lg text-bone-300 leading-[1.7]">
              Wetrock is not a conventional event venue. It is a 15-acre science environment that converts for gatherings. The terracing is an amphitheater. The spring garden is a concert hall. The living area is a presentation space. The sky is a ceiling that happens to contain the Milky Way. If your event is about ideas, curiosity, or the natural world, this is the place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnnotatedImage
              src="https://images.pexels.com/photos/8360524/pexels-photo-8360524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Campfire gathering at night"
              caption="Evening gatherings around the fire pit"
              coordinate="EVENING"
              aspect="video"
            />
            <AnnotatedImage
              src="https://images.pexels.com/photos/12753944/pexels-photo-12753944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Group in desert at sunrise"
              caption="Morning sessions on the terracing"
              coordinate="DAWN"
              aspect="video"
            />
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ Event Types</p>
          <h2 className="display-md text-bone-100 mb-12">What you can host</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone-300/10 border border-bone-300/10">
            {eventTypes.map((item, i) => (
              <div key={i} className="bg-obsidian-900 p-8">
                <item.icon size={28} className="text-spring-400 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-bone-100 mb-4">{item.title}</h3>
                <p className="text-bone-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone-300/10 border border-bone-300/10 mb-12">
            <div className="bg-obsidian-900 p-6">
              <Users size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Overnight</p>
              <p className="font-display text-2xl text-bone-100">Up to 18</p>
            </div>
            <div className="bg-obsidian-900 p-6">
              <Calendar size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Day event</p>
              <p className="font-display text-2xl text-bone-100">Up to 50</p>
            </div>
            <div className="bg-obsidian-900 p-6">
              <Music size={22} className="text-spring-400 mb-3" strokeWidth={1.5} />
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">Spaces</p>
              <p className="font-display text-2xl text-bone-100">15 acres</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => onNavigate('/contact')} className="btn-primary">
              Inquire About Your Event
              <ArrowRight size={16} />
            </button>
            <button onClick={onBookClick} className="btn-secondary">
              Check Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
