import { MapPin, Phone, Navigation, Car, Plane } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';

interface LocationProps {
  onNavigate: (path: string) => void;
}

export function Location({ onNavigate }: LocationProps) {
  const arrivals = [
    { icon: Plane, title: 'Canyonlands Field (CNY)', dist: '20 minutes', desc: 'The closest airport. Limited commercial flights, mainly to Denver.' },
    { icon: Plane, title: 'Salt Lake City (SLC)', dist: '4 hours by car', desc: 'The nearest major airport. Rent a car and drive south on US-191.' },
    { icon: Car, title: 'Grand Junction, CO', dist: '2 hours by car', desc: 'Regional airport with more flight options. Drive west on I-70.' },
    { icon: Car, title: 'Driving from Moab center', dist: '5-minute walk', desc: 'Wetrock is a short walk from downtown Moab, yet set back for dark skies.' },
  ];

  return (
    <div>
      <PageHeader
        code="LOCATION"
        label="Location"
        title="1275 Boulder Ave, Moab, Utah"
        subtitle="A short walk from downtown Moab, set back enough for dark skies. 38.5733°N · 109.5498°W · Elevation 4,026 ft."
        image="https://images.pexels.com/photos/16134466/pexels-photo-16134466.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ The Site</p>
              <h2 className="display-lg text-bone-100 mb-8 text-balance">
                15 acres at the edge of town, at the edge of deep time.
              </h2>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                Wetrock sits on 15 acres along Boulder Avenue, a short walk from downtown Moab but set back far enough that town lights do not reach the stargazing pad. The property is bordered by red-rock desert to the south and the La Sal Mountains on the horizon to the southeast.
              </p>
              <p className="body-lg text-bone-300 leading-[1.7] mb-8">
                Free private parking is available on-site. The property is pet-friendly. The entrance is marked — look for the concentric terracing.
              </p>
              <div className="space-y-3 font-mono text-sm text-bone-300">
                <p className="flex items-center gap-3">
                  <MapPin size={16} className="text-spring-400" />
                  1275 Boulder Ave, Moab, UT 84532
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} className="text-spring-400" />
                  (435) 355-9001
                </p>
                <p className="flex items-center gap-3">
                  <Navigation size={16} className="text-spring-400" />
                  38.5733°N · 109.5498°W
                </p>
              </div>
            </div>

            {/* Stylized map */}
            <div className="relative">
              <div className="relative aspect-square border border-bone-300/10 bg-obsidian-900 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-60" />
                <div className="absolute inset-0 topo-lines opacity-40" />
                {/* Cross hairs */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-spring-400/20" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-spring-400/20" />
                {/* Center marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-spring-500 border-2 border-bone-100" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border border-spring-400/30 animate-ping" />
                </div>
                {/* Labels */}
                <div className="absolute top-4 left-4">
                  <p className="font-mono text-[10px] text-bone-500 uppercase tracking-widest">N</p>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[10px] text-bone-500 uppercase tracking-widest">38.5733°N</p>
                  <p className="font-mono text-[10px] text-bone-500 uppercase tracking-widest">109.5498°W</p>
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-right">
                  <p className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">Downtown</p>
                  <p className="font-mono text-[10px] text-bone-600">5 min walk →</p>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <p className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">Arches NP</p>
                  <p className="font-mono text-[10px] text-bone-600">5 mi ↑</p>
                </div>
                <div className="absolute top-4 right-4 text-right">
                  <p className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">La Sal Mts</p>
                  <p className="font-mono text-[10px] text-bone-600">35 mi ↗</p>
                </div>
              </div>
              <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-3 text-center">
                ◊ Wetrock — 15 acres, Moab, Utah
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ Getting Here</p>
          <h2 className="display-md text-bone-100 mb-12">Arrival options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone-300/10 border border-bone-300/10">
            {arrivals.map((item, i) => (
              <div key={i} className="bg-obsidian-900 p-6 flex items-start gap-4">
                <item.icon size={22} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-lg text-bone-100">{item.title}</h3>
                    <span className="font-mono text-xs text-spring-400 whitespace-nowrap">{item.dist}</span>
                  </div>
                  <p className="text-sm text-bone-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20">
        <div className="container-wide text-center">
          <h2 className="display-md text-bone-100 mb-6">Ready to find us?</h2>
          <button onClick={() => onNavigate('/plan-your-stay')} className="btn-secondary">
            Plan your arrival
          </button>
        </div>
      </section>
    </div>
  );
}
