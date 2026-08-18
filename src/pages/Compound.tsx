import { ArrowRight, Users, ChefHat, Car, FlaskConical, PartyPopper } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { StatReadout } from '@/components/StatReadout';
import { useReveal } from '@/lib/useReveal';
import { rooms } from '@/lib/content';

interface CompoundProps {
  onNavigate: (path: string) => void;
  onBookClick: (roomId: string) => void;
}

export function Compound({ onNavigate, onBookClick }: CompoundProps) {
  const compound = rooms.find((r) => r.id === 'compound')!;
  const { ref, visible } = useReveal();

  return (
    <div>
      <PageHeader
        code="CP-01"
        label="Stay / The Wetrock Compound"
        title="A field station for up to 18"
        subtitle="Every room, every camp spot, every common space booked together. The compound converts into a presentation space for science exhibitions, concerts, weddings, and educational gatherings."
        image="https://images.pexels.com/photos/19039607/pexels-photo-19039607.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ Wetrock at Full Scale</p>
            <h2 className="display-lg text-bone-100 mb-8 text-balance">
              Wetrock as a field station.
            </h2>
            <p className="body-lg text-bone-300 leading-[1.7]">
              The Compound is the entire property booked for a group. The double kitchen can feed eighteen. The living area converts into a presentation space for science exhibitions, concerts, astronomy nights, weddings, and educational gatherings. On-site vehicle storage means you can base a whole expedition here — multiple vehicles, gear, bikes, the works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnnotatedImage
              src="https://images.pexels.com/photos/7363295/pexels-photo-7363295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Group meditating outdoors"
              caption="The living area converts into a presentation and gathering space"
              coordinate="EVENT SPACE"
              aspect="video"
            />
            <AnnotatedImage
              src="https://images.pexels.com/photos/8360524/pexels-photo-8360524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Campfire gathering at night"
              caption="Evening gatherings around the fire pit"
              coordinate="EVENING"
              aspect="video"
            />
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ Facilities</p>
          <h2 className="display-md text-bone-100 mb-12">Built for groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone-300/10 border border-bone-300/10">
            {[
              { icon: Users, title: 'Sleeps up to 18', desc: 'Multiple bedrooms plus camp spots. Configurable for your group.' },
              { icon: ChefHat, title: 'Double Kitchen', desc: 'A fully-equipped double kitchen that can feed eighteen at once.' },
              { icon: Car, title: 'Vehicle & Gear Storage', desc: 'On-site parking and gear storage for expeditions, bikes, and multiple vehicles.' },
              { icon: FlaskConical, title: 'Science Exhibition Area', desc: 'The living area converts for presentations, workshops, and educational sessions.' },
              { icon: PartyPopper, title: 'Event Venue', desc: 'Host weddings, concerts, astronomy nights, and gatherings for up to 50.' },
              { icon: Users, title: 'Group Check-in', desc: 'Coordinated group arrival and a single point of contact for the whole party.' },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <StatReadout
                stats={[
                  { label: 'Sleeps', value: String(compound.sleeps), unit: 'max' },
                  { label: 'Bedrooms', value: 'Multiple' },
                  { label: 'Kitchen', value: 'Double' },
                  { label: 'From', value: `$${compound.rateFrom}`, unit: '/night' },
                ]}
              />
              <div className="mt-8 p-6 border border-bone-300/10 bg-obsidian-900">
                <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-3">◊ Good to know</p>
                <p className="text-bone-300 text-sm font-light leading-relaxed">
                  The Compound booking includes all rooms, camp spots, and common areas. Event hosting for up to 50 guests can be arranged. For weddings and large events, use the Groups & Retreats inquiry form for a custom quote.
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button onClick={() => onBookClick(compound.id)} className="btn-primary">
                  Check Availability
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('/groups')} className="btn-secondary">
                  Groups & Retreats
                </button>
              </div>
            </div>
            <div>
              <AnnotatedImage
                src="https://images.pexels.com/photos/11252332/pexels-photo-11252332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Red Jeep at sunset in Moab"
                caption="On-site vehicle storage for expedition-based groups"
                coordinate="EXPEDITION BASE"
                aspect="tall"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
