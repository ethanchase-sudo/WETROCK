import { ArrowRight, Mountain, Map as MapIcon, Bike, Waves } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { useReveal } from '@/lib/useReveal';

interface DiscoverMoabProps {
  onNavigate: (path: string) => void;
}

export function DiscoverMoab({ onNavigate }: DiscoverMoabProps) {
  const { ref, visible } = useReveal();

  const destinations = [
    { name: 'Arches National Park', dist: '5 miles', desc: 'Over 2,000 natural sandstone arches, including Delicate Arch and Balanced Rock. 20 miles to Delicate Arch trailhead.', img: 'https://images.pexels.com/photos/14350041/pexels-photo-14350041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Canyonlands National Park', dist: '30 miles', desc: 'A vast landscape of canyons, mesas, and buttes carved by the Colorado River. Mesa Arch is 15 miles from the property.', img: 'https://images.pexels.com/photos/12427271/pexels-photo-12427271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'Dead Horse Point', dist: '25 miles', desc: 'A dramatic overlook 2,000 feet above the Colorado River. One of the most photographed views in Utah.', img: 'https://images.pexels.com/photos/16134466/pexels-photo-16134466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
    { name: 'La Sal Mountains', dist: '35 miles', desc: 'The snow-capped peaks visible from the property, rising to 12,721 ft. A dramatic contrast to the desert floor.', img: 'https://images.pexels.com/photos/21858663/pexels-photo-21858663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  ];

  const activities = [
    { icon: Mountain, title: 'Hiking', desc: 'Hundreds of trails from easy walks to multi-day backcountry routes.' },
    { icon: Bike, title: 'Mountain Biking', desc: 'Moab is a world destination for mountain biking, including the legendary Slickrock Trail.' },
    { icon: Waves, title: 'River Running', desc: 'The Colorado River offers everything from flat-water floats to class IV rapids.' },
    { icon: MapIcon, title: 'Off-Roading', desc: 'Miles of 4x4 roads through canyon country, including the legendary Hells Revenge trail.' },
  ];

  return (
    <div>
      <PageHeader
        code="DESTINATION"
        label="Discover Moab"
        title="The living lab surrounding Wetrock"
        subtitle="Arches, Canyonlands, the Colorado River, the La Sal Mountains. Moab is not a backdrop — it is the reason Wetrock exists here."
        image="https://images.pexels.com/photos/16653795/pexels-photo-16653795.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ The Region</p>
            <h2 className="display-lg text-bone-100 mb-8 text-balance">
              A town built on deep time.
            </h2>
            <p className="body-lg text-bone-300 leading-[1.7]">
              Moab sits on the Colorado Plateau, a region of exposed sedimentary rock spanning 130,000 square miles. The rock beneath your feet at Wetrock is Entrada sandstone, deposited 180 million years ago when this was a vast desert of drifting sand dunes. The rock above — the cliffs you see on the horizon — is Navajo sandstone, even older. Every direction you look is a cross-section of geological time. Wetrock is built here because this is where the story is visible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {destinations.map((dest) => (
              <div key={dest.name}>
                <AnnotatedImage
                  src={dest.img}
                  alt={dest.name}
                  caption={dest.desc}
                  coordinate={`${dest.dist.toUpperCase()} FROM WETROCK`}
                  aspect="video"
                />
                <div className="flex items-center justify-between mt-3">
                  <h3 className="font-display text-xl text-bone-100">{dest.name}</h3>
                  <span className="font-mono text-xs text-spring-400">{dest.dist}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ What to do</p>
          <h2 className="display-md text-bone-100 mb-12">Activities in every direction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10">
            {activities.map((act, i) => (
              <div key={i} className="bg-obsidian-900 p-6">
                <act.icon size={24} className="text-spring-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-base text-bone-100 mb-2">{act.title}</h3>
                <p className="text-sm text-bone-400 font-light leading-relaxed">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample itineraries */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <p className="label-mono text-spring-400 mb-3">◊ Sample Itineraries</p>
          <h2 className="display-md text-bone-100 mb-12">Three days, three ways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Scientist',
                days: '3 days / 2 nights',
                items: ['Arrive, settle into the Evolution Room', 'Walk the solar system at sunset', 'Guided stargazing session', 'Morning goat walk & picnic', 'The Stones geology lab', 'Drive to Arches for Delicate Arch at sunset'],
              },
              {
                title: 'The Explorer',
                days: '4 days / 3 nights',
                items: ['Base at the Cosmos Suite', 'Full day at Canyonlands — Mesa Arch at dawn', 'Mountain bike Slickrock Trail', 'Evening recovery in the hot tub', 'Dead Horse Point at sunset', 'Sleep in a dark-sky camp spot'],
              },
              {
                title: 'The Resident',
                days: '7 days / 6 nights',
                items: ['Private Retreat — the whole property', 'Daily guided experiences', 'Multi-day writing or research time', 'Solar-system walk each morning', 'Stargazing every clear night', 'Day trips to Arches, Canyonlands, La Sals'],
              },
            ].map((it, i) => (
              <div key={i} className="border border-bone-300/10 p-6">
                <p className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mb-2">{it.days}</p>
                <h3 className="font-display text-xl text-bone-100 mb-6">{it.title}</h3>
                <ul className="space-y-3">
                  {it.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-bone-600 mt-1">{String(j + 1).padStart(2, '0')}</span>
                      <span className="text-bone-300 text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={() => onNavigate('/plan-your-stay')} className="btn-secondary">
              Plan your stay
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
