import { ArrowRight, FlaskConical, Users, Key } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { useReveal } from '@/lib/useReveal';

interface KitHostProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function KitHost({ onNavigate, onBookClick }: KitHostProps) {
  const { ref, visible } = useReveal();

  const tiers = [
    { name: 'Observation', desc: 'A single stay. Come, observe, participate in the experiences. No ongoing commitment.', price: 'Free with stay' },
    { name: 'Keystone', desc: 'A returning guest who has placed a keystone — contributed something to the property: an observation, a photo, an idea, a piece of data.', price: 'Invitation' },
    { name: 'Contribution', desc: 'An ongoing relationship. Keystones who contribute regularly — field notes, citizen science data, photography, or stewardship.', price: 'By application' },
  ];

  return (
    <div>
      <PageHeader
        code="KIT / HOST"
        label="About / Kit in Wetrock"
        title="The host and the experiment"
        subtitle="Kit is the person behind Wetrock — the one who walks the 15 acres every morning, who built the solar-system walk, who will hand you the telescope and tell you which way to look."
        image="https://images.pexels.com/photos/7509142/pexels-photo-7509142.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      {/* Kit's story */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Kit in Wetrock</p>
              <h2 className="display-lg text-bone-100 mb-8 text-balance">
                "This is Kit in Wetrock. Preventing the ordinary."
              </h2>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                Kit is a scientist, a builder, and a host — not necessarily in that order. The vision for Wetrock came from a conviction that science is not something you read about. It is something you do, something you walk through, something you sleep inside. The property is the expression of that conviction.
              </p>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                Kit leads the goat walks, runs the stargazing sessions, and can talk for an hour about the hydrology of the spring or the orbital mechanics of the solar-system walk. You will probably meet them during your stay. They are easy to spot — they are the one with the goats.
              </p>
            </div>
            <div className="space-y-4">
              <AnnotatedImage
                src="https://images.pexels.com/photos/6491605/pexels-photo-6491605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Goats on a mountain slope"
                caption="Kit and the goats on the morning walk"
                coordinate="GOAT WALK"
                aspect="video"
              />
              <AnnotatedImage
                src="https://images.pexels.com/photos/32979686/pexels-photo-32979686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Goats on rocky terrain"
                caption="The herd — companions on the desert trail"
                coordinate="THE HERD"
                aspect="video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The experiment as participation */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ The Experiment Is Participation</p>
            <h2 className="display-lg text-bone-100 text-balance mb-6">
              A stay at Wetrock is not passive.
            </h2>
            <p className="body-lg text-bone-300 leading-[1.7]">
              Wetrock is a 15-acre science retreat dedicated to exploration, education, and open discourse. Guests do not just stay here — they participate. They observe, they record, they contribute. The property grows with every guest who adds something to it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FlaskConical, title: 'Observe', desc: 'Walk the spring, the solar system, the terracing. Take notes. Take photos. See what is actually there, not what you expect.' },
              { icon: Key, title: 'Place a Keystone', desc: 'Contribute something — a field observation, a photo of the night sky, a data point, an idea. Keystones are the species that hold an ecosystem together.' },
              { icon: Users, title: 'Join the Community', desc: 'Returning guests become part of the Wetrock community — a network of curious people who keep the experiment going between visits.' },
            ].map((item, i) => (
              <div key={i} className="border border-bone-300/10 p-8">
                <item.icon size={28} className="text-spring-400 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-bone-100 mb-4">{item.title}</h3>
                <p className="text-bone-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="mb-12">
            <p className="label-mono text-spring-400 mb-3">◊ Contribution Tiers</p>
            <h2 className="display-md text-bone-100">Three levels of participation</h2>
          </div>
          <div className="space-y-px bg-bone-300/10 border border-bone-300/10">
            {tiers.map((tier, i) => (
              <div key={i} className="bg-obsidian-900 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 flex-1">
                  <span className="font-mono text-2xl text-bone-600">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-xl text-bone-100">{tier.name}</h3>
                    <p className="text-bone-400 text-sm font-light mt-1">{tier.desc}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-spring-400 uppercase tracking-widest">{tier.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button onClick={onBookClick} className="btn-primary">
              Begin Your Observation
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
