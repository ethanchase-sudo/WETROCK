import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { galleryImages } from '@/lib/content';

interface GalleryProps {
  onNavigate: (path: string) => void;
}

export function Gallery({ onNavigate }: GalleryProps) {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['All', 'Grounds', 'Sky', 'Rooms', 'Spring', 'Camping', 'Experiences', 'Moab'];
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <div>
      <PageHeader
        code="VISUAL ARCHIVE"
        label="Gallery"
        title="A visual archive of the property"
        subtitle="Rooms, grounds, spring, sky, earthworks, and experiences. This is what Wetrock looks like — and what it looks like to stay here."
        image="https://images.pexels.com/photos/13009055/pexels-photo-13009055.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-12 md:py-16 sticky top-24 md:top-28 z-20 border-b border-bone-300/10">
        <div className="container-wide">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label-mono text-bone-500 mr-2">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                  filter === cat
                    ? 'border-spring-400 text-spring-400 bg-spring-950/20'
                    : 'border-bone-300/10 text-bone-400 hover:border-bone-300/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-12 md:py-16">
        <div className="container-wide">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img.src)}
                className="group relative mb-4 md:mb-6 block w-full overflow-hidden card-frame break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian-950/0 group-hover:bg-obsidian-950/40 transition-colors duration-500 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mb-1">{img.category}</p>
                    <p className="font-sans text-sm text-bone-100">{img.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-obsidian-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-bone-400 hover:text-bone-100 text-2xl"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img src={lightbox} alt="Gallery large view" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}
