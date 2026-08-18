import { ArrowRight, FlaskConical, Orbit, Droplets, Layers } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { useReveal } from '@/lib/useReveal';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const { ref, visible } = useReveal();

  const principles = [
    { icon: Orbit, title: 'Planetary Scale', desc: 'The solar-system walk lets you feel the distances that numbers cannot convey. Walk from the sun to Neptune and you have traveled 2.7 billion miles in a few hundred yards.' },
    { icon: Layers, title: 'Geological Time', desc: 'The concentric terracing carved into the property is both art and demonstration — a visible record of how slow processes shape the earth.' },
    { icon: Droplets, title: 'Living Systems', desc: 'The spring-fed pond system is a functioning micro-ecosystem. Water, stone, plants, insects, and birds in a closed loop you can observe.' },
    { icon: FlaskConical, title: 'Direct Observation', desc: 'Everything at Wetrock is designed to be touched, walked, and experienced directly. No glass cases. No roped-off exhibits. The science is the place.' },
  ];

  return (
    <div>
      <PageHeader
        code="THE EXPERIMENT"
        label="About / The Experiment"
        title="Not themed hospitality. Physical science, made immersive."
        subtitle="Wetrock is a science-based environment where guests move through real systems, from planetary scale to geological time. This is not a hotel with science decor. It is a place built inside the ideas it represents."
        image="https://images.pexels.com/photos/9503200/pexels-photo-9503200.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      {/* The founding idea */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="label-mono text-spring-400 mb-6">◊ The Founding Idea</p>
            <p className="font-display text-2xl md:text-4xl text-bone-100 leading-[1.3] text-balance">
              "Wetrock is a science-based environment where guests don't just observe — they move through it. Each structure, path, and experience reflects real systems, from planetary scale to geological time."
            </p>
            <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-8">
              ◊ This is not themed hospitality. It is physical science, made immersive.
            </p>
          </div>
        </div>
      </section>

      {/* The earthwork */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ The Earthwork</p>
              <h2 className="display-lg text-bone-100 mb-8 text-balance">
                The most striking feature is the concentric, semi-circular terracing.
              </h2>
              <p className="body-lg text-bone-300 leading-[1.7] mb-6">
                Carved into the reddish-brown soil of the property, the terracing is both land art and geological demonstration. It is a visible record of how slow processes shape the earth — how layers accumulate, how time becomes visible in the landscape.
              </p>
              <p className="body-lg text-bone-300 leading-[1.7]">
                The terracing is aligned with the spring path and the solar-system walk, so that as you move through the property you are moving through multiple scales of time and space simultaneously. The planet beneath you, the solar system around you, the sky above you.
              </p>
            </div>
            <AnnotatedImage
              src="https://images.pexels.com/photos/16134466/pexels-photo-16134466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Moab desert landscape"
              caption="The concentric terracing — land art and geological demonstration"
              coordinate="38.5733°N"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      {/* Four principles */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div ref={ref} className={`container-wide reveal ${visible ? 'visible' : ''}`}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="label-mono text-spring-400 mb-4">◊ Four Principles</p>
            <h2 className="display-lg text-bone-100 text-balance">How the place is built</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone-300/10 border border-bone-300/10">
            {principles.map((p, i) => (
              <div key={i} className="bg-obsidian-900 p-8">
                <p.icon size={28} className="text-spring-400 mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-bone-100 mb-4">{p.title}</h3>
                <p className="text-bone-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control for Bias */}
      <section className="bg-obsidian-900 py-20 md:py-32 border-y border-bone-300/10">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-mono text-spring-400 mb-6">◊ Control for Bias</p>
            <p className="body-lg text-bone-300 leading-[1.7] mb-8">
              "Control for Bias" is the property's signature line. In science, controlling for bias means designing your experiment so that your own expectations cannot influence the result. At Wetrock, it means we do not tell you what to think about what you see. We give you the tools — the telescope, the spring, the solar-system walk, the rocks — and let you draw your own conclusions.
            </p>
            <p className="font-display text-2xl text-spring-400 italic">
              ◊ Control for Bias
            </p>
          </div>
        </div>
      </section>

      <section className="bg-obsidian-950 py-20 md:py-24">
        <div className="container-wide text-center">
          <h2 className="display-md text-bone-100 mb-6">Meet the host</h2>
          <button onClick={() => onNavigate('/kit-host')} className="btn-secondary">
            Kit in Wetrock
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
