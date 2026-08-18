import { ArrowRight, Lock, Trees, Droplets, Home } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { StatReadout } from '@/components/StatReadout';
import { useReveal } from '@/lib/useReveal';
import { rooms } from '@/lib/content';

interface PrivateRetreatProps {
  onNavigate: (path: string) => void;
  onBookClick: (roomId: string) => void;
}

export function PrivateRetreat({ onNavigate, onBookClick }: PrivateRetreatProps) {
  const retreat = rooms.find((r) => r.id === 'private-retreat')!;
  const { ref, visible } = useReveal();

  return (
    <div>
      <PageHeader
        code="PR-01"
        label="Stay / Private Retreat"
        title="The entire 15 acres, to yourself"
        subtitle="The king suite, the queen suite, two luxury camp spots, and all of Wetrock closed to other guests. This is Wetrock as a personal laboratory."
        image="https://images.pexels.com/photos/16134466/pexels-photo-16134466.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ The Experiment in Isolation</p>
            <h2 className="display-lg text-bone-100 mb-8 text-balance">
              Sometimes the experiment requires isolation.
            </h2>
            <p className="body-lg text-bone-300 leading-[1.7]">
              The Private Retreat is the entire property, closed to other guests. You get the king suite and the queen suite — each with a private bathroom — and two luxury camp spots for anyone who wants to sleep outside. The spring, the solar-system walk, the terracing, the goat trail: all yours. No other guests. No shared spaces. Just you, the desert, and the sky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnnotatedImage
              src="https://images.pexels.com/photos/9702070/pexels-photo-9702070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Moab red rock landscape"
              caption="The 15-acre property — yours exclusively"
              coordinate="38.5733°N"
              aspect="video"
            />
            <AnnotatedImage
              src="https://images.pexels.com/photos/5717775/pexels-photo-5717775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Glamping tents in Utah"
              caption="Two luxury camp spots included for sleeping under the stars"
              coordinate="CAMP SPOTS"
              aspect="video"
            />
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ What is Included</p>
          <h2 className="display-md text-bone-100 mb-12">Everything on the property</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10">
            {[
              { icon: Home, title: 'King Suite', desc: 'The Big Bang Suite with private balcony and dark-sky window.' },
              { icon: Home, title: 'Queen Suite', desc: 'The Evolution Room overlooking the spring path.' },
              { icon: Trees, title: '2 Camp Spots', desc: 'Luxury platform camps along the solar-system walk.' },
              { icon: Droplets, title: 'Spring Access', desc: 'The entire spring-fed pond system, the gardens, and the terracing.' },
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
              <p className="label-mono text-spring-400 mb-4">◊ Who is this for</p>
              <h2 className="display-md text-bone-100 mb-8">Perfect for small groups and creative residencies</h2>
              <ul className="space-y-4">
                {[
                  'Couples who want absolute privacy and a sense of ownership over the place',
                  'Small groups of up to 6 who want to spread across rooms and camp spots',
                  'Artists, writers, and researchers seeking a residency environment',
                  'Families who want the property to themselves with kids and pets',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Lock size={16} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-bone-300 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <StatReadout
                stats={[
                  { label: 'Sleeps', value: String(retreat.sleeps), unit: 'guests' },
                  { label: 'Suites', value: '2' },
                  { label: 'Camp spots', value: '2' },
                  { label: 'From', value: `$${retreat.rateFrom}`, unit: '/night' },
                ]}
              />
              <div className="mt-8 p-6 border border-bone-300/10 bg-obsidian-900">
                <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-3">◊ Good to know</p>
                <p className="text-bone-300 text-sm font-light leading-relaxed">
                  The Private Retreat includes exclusive access to the entire property. No other guests will be on-site. Continental breakfast is included; expanded meal service can be arranged.
                </p>
              </div>
              <button onClick={() => onBookClick(retreat.id)} className="btn-primary mt-6 w-full justify-center">
                Check Availability
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
