import { ArrowRight, BedDouble, Bath, Users, DollarSign } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { useReveal } from '@/lib/useReveal';
import { rooms } from '@/lib/content';

interface StayProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Stay({ onNavigate, onBookClick }: StayProps) {
  const { ref, visible } = useReveal();
  const stayRooms = rooms.filter((r) => r.category === 'room');

  return (
    <div>
      <PageHeader
        code="SPECIMEN CATALOG"
        label="Stay / Accommodations"
        title="A specimen catalog of places to sleep"
        subtitle="Each room is inspired by a real scientific concept. They are not themed — they are built around ideas you can see, touch, and walk into."
        image="https://images.pexels.com/photos/7746470/pexels-photo-7746470.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="mb-12">
            <p className="label-mono text-spring-400 mb-3">◊ Rooms & Suites</p>
            <h2 className="display-md text-bone-100">Choose your concept</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {stayRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => onNavigate(`/stay/${room.slug}`)}
                className="group text-left"
              >
                <div className="relative overflow-hidden card-frame aspect-[4/3] mb-5">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-bone-100/80 uppercase tracking-widest bg-obsidian-950/50 backdrop-blur-sm px-2 py-1">
                    {room.code}
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-sm text-spring-400 bg-obsidian-950/50 backdrop-blur-sm px-3 py-1">
                    from ${room.rateFrom}/night
                  </div>
                </div>
                <h3 className="font-display text-2xl text-bone-100 mb-3 group-hover:text-spring-400 transition-colors">
                  {room.name}
                </h3>
                <p className="text-bone-400 font-light leading-relaxed mb-4">{room.concept}</p>
                <div className="flex items-center gap-5 font-mono text-xs text-bone-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Users size={13} /> {room.sleeps}</span>
                  <span className="flex items-center gap-1.5"><BedDouble size={13} /> {room.bed}</span>
                  <span className="flex items-center gap-1.5"><Bath size={13} /> {room.baths}</span>
                </div>
                <span className="inline-flex items-center gap-2 mt-5 font-mono text-xs text-spring-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View detail <ArrowRight size={12} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative stays */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-t border-bone-300/10">
        <div className="container-wide">
          <div className="mb-12">
            <p className="label-mono text-spring-400 mb-3">◊ Alternative Ways to Stay</p>
            <h2 className="display-md text-bone-100">Beyond rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { room: rooms.find((r) => r.id === 'camp-spot')!, path: '/camping' },
              { room: rooms.find((r) => r.id === 'private-retreat')!, path: '/private-retreat' },
              { room: rooms.find((r) => r.id === 'compound')!, path: '/compound' },
            ].map(({ room, path }) => (
              <button
                key={room.id}
                onClick={() => onNavigate(path)}
                className="group text-left border border-bone-300/10 p-6 hover:border-spring-400/30 transition-colors duration-300"
              >
                <div className="relative overflow-hidden card-frame aspect-video mb-5">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                </div>
                <p className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mb-2">{room.code}</p>
                <h3 className="font-display text-xl text-bone-100 mb-3 group-hover:text-spring-400 transition-colors">{room.name}</h3>
                <p className="text-sm text-bone-400 font-light leading-relaxed mb-4">{room.concept}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-bone-500">from ${room.rateFrom}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-spring-400 uppercase tracking-widest">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20 border-t border-bone-300/10">
        <div className="container-wide text-center">
          <h2 className="display-md text-bone-100 mb-6">Ready to check availability?</h2>
          <button onClick={onBookClick} className="btn-primary">
            Check Availability
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
