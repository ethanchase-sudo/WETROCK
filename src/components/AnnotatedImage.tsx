import { useReveal } from '@/lib/useReveal';

interface AnnotatedImageProps {
  src: string;
  alt: string;
  caption: string;
  coordinate?: string;
  className?: string;
  aspect?: 'square' | 'video' | 'tall' | 'wide';
}

export function AnnotatedImage({ src, alt, caption, coordinate, className = '', aspect = 'video' }: AnnotatedImageProps) {
  const { ref, visible } = useReveal();

  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    tall: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  }[aspect];

  return (
    <figure
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
    >
      <div className={`relative overflow-hidden card-frame ${aspectClass} group`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {coordinate && (
          <div className="absolute top-3 left-3 font-mono text-[10px] text-bone-100/80 uppercase tracking-widest bg-obsidian-950/50 backdrop-blur-sm px-2 py-1">
            {coordinate}
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex items-start gap-3">
        <span className="font-mono text-[10px] text-spring-400 uppercase tracking-widest mt-0.5">
          ◊
        </span>
        <p className="font-mono text-xs text-bone-500 uppercase tracking-widest leading-relaxed">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
