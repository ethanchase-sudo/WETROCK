import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Users, BedDouble, Bath, Maximize, Eye } from 'lucide-react';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { StatReadout } from '@/components/StatReadout';
import { useReveal } from '@/lib/useReveal';
import { rooms } from '@/lib/content';

interface RoomDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onBookClick: (roomId: string) => void;
}

export function RoomDetail({ slug, onNavigate, onBookClick }: RoomDetailProps) {
  const room = rooms.find((r) => r.slug === slug);
  const { ref, visible } = useReveal();
  const [activeImage, setActiveImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-950">
        <div className="text-center">
          <p className="display-md text-bone-100 mb-4">Room not found</p>
          <button onClick={() => onNavigate('/stay')} className="btn-secondary">
            <ArrowLeft size={16} /> Back to stays
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-36">
        <img src={room.image} alt={room.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-obsidian-950/20" />
        <div className="container-wide relative pb-16 md:pb-24">
          <button onClick={() => onNavigate('/stay')} className="btn-ghost mb-8">
            <ArrowLeft size={14} /> All stays
          </button>
          <p className="label-mono text-spring-400 mb-4">◊ {room.code} · {room.category.toUpperCase()}</p>
          <h1 className="display-xl text-bone-100 text-shadow-dark max-w-4xl text-balance">{room.name}</h1>
          <p className="body-lg text-bone-200 mt-6 max-w-2xl text-shadow-dark">{room.concept}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-obsidian-900 border-y border-bone-300/10">
        <div className="container-wide py-8">
          <StatReadout
            stats={[
              { label: 'Sleeps', value: String(room.sleeps), unit: 'guests' },
              { label: 'Bed', value: room.bed },
              { label: 'Baths', value: String(room.baths) },
              { label: 'From', value: `$${room.rateFrom}`, unit: '/night' },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ The Story</p>
              <h2 className="display-md text-bone-100 mb-8 text-balance">{room.concept}</h2>
              <p className="body-lg text-bone-300 leading-[1.7]">{room.story}</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {room.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative overflow-hidden card-frame aspect-square transition-all ${activeImage === i ? 'ring-2 ring-spring-400' : ''}`}
                  >
                    <img src={img} alt={`${room.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="relative overflow-hidden card-frame aspect-[16/9]">
                <img src={room.gallery[activeImage]} alt={`${room.name} main`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Specifications</p>
              <ul className="space-y-4">
                {room.features.map((f, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-bone-300/10 pb-3">
                    <span className="font-mono text-xs text-bone-500 uppercase tracking-widest">{f.label}</span>
                    <span className="font-display text-base text-bone-100">{f.value}</span>
                  </li>
                ))}
                <li className="flex items-center justify-between border-b border-bone-300/10 pb-3">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-widest">Size</span>
                  <span className="font-display text-base text-bone-100">{room.size}</span>
                </li>
                <li className="flex items-center justify-between pb-3">
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-widest">View</span>
                  <span className="font-display text-base text-bone-100 text-right max-w-[200px]">{room.view}</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Amenities</p>
              <ul className="space-y-3">
                {room.amenities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={14} className="text-spring-400 mt-1 flex-shrink-0" />
                    <span className="text-bone-300 text-sm font-light">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Quick Stats</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 border border-bone-300/10">
                  <Users size={18} className="text-spring-400" strokeWidth={1.5} />
                  <span className="text-bone-300 text-sm">Sleeps {room.sleeps}</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-bone-300/10">
                  <BedDouble size={18} className="text-spring-400" strokeWidth={1.5} />
                  <span className="text-bone-300 text-sm">{room.bed}</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-bone-300/10">
                  <Bath size={18} className="text-spring-400" strokeWidth={1.5} />
                  <span className="text-bone-300 text-sm">{room.baths} bathroom{room.baths > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-bone-300/10">
                  <Maximize size={18} className="text-spring-400" strokeWidth={1.5} />
                  <span className="text-bone-300 text-sm">{room.size}</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-bone-300/10">
                  <Eye size={18} className="text-spring-400" strokeWidth={1.5} />
                  <span className="text-bone-300 text-sm">{room.view}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-obsidian-950 py-20 md:py-24">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 border border-spring-400/20 bg-spring-950/5">
            <div>
              <p className="label-mono text-spring-400 mb-2">◊ Ready to book</p>
              <h2 className="display-md text-bone-100">{room.name}</h2>
              <p className="body-md text-bone-400 mt-2">From ${room.rateFrom}/night · {room.sleeps} guests</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => onBookClick(room.id)} className="btn-primary">
                Check Availability
                <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('/plan-your-stay')} className="btn-secondary">
                Plan Your Stay
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
