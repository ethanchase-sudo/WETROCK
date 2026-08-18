import { useReveal } from '@/lib/useReveal';

interface PageHeaderProps {
  code?: string;
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
}

export function PageHeader({ code, label, title, subtitle, image, overlay = true }: PageHeaderProps) {
  const { ref, visible } = useReveal();

  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-36 md:pt-44">
      {image && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-obsidian-950/30" />
          )}
        </>
      )}
      {!image && (
        <div className="absolute inset-0 grid-overlay bg-obsidian-900" />
      )}
      <div className="absolute inset-0 topo-lines opacity-40" />

      <div
        ref={ref}
        className={`container-wide relative pb-16 md:pb-24 reveal ${visible ? 'visible' : ''}`}
      >
        {code && (
          <p className="label-mono text-spring-400 mb-4">
            ◊ {code}
          </p>
        )}
        <p className="label-mono text-bone-400 mb-4">{label}</p>
        <h1 className="display-xl text-bone-100 text-balance max-w-4xl text-shadow-dark">
          {title}
        </h1>
        {subtitle && (
          <p className="body-lg text-bone-300 mt-6 max-w-2xl text-shadow-dark">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
