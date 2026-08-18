import { ArrowRight, Calendar, Backpack, Thermometer, Moon, PawPrint, Car, Coffee } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

interface PlanYourStayProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function PlanYourStay({ onNavigate, onBookClick }: PlanYourStayProps) {
  const seasons = [
    { name: 'Spring', months: 'Mar–May', temp: '45–75°F', desc: 'Wildflowers, rushing rivers, ideal hiking. Cool nights for stargazing.', rating: 'Excellent' },
    { name: 'Summer', months: 'Jun–Aug', temp: '60–100°F', temp2: '', desc: 'Hot days, warm nights. Early morning and evening activities. Pool season.', rating: 'Good' },
    { name: 'Fall', months: 'Sep–Nov', temp: '40–75°F', desc: 'The best season. Mild days, crisp nights, peak stargazing, golden light.', rating: 'Excellent' },
    { name: 'Winter', months: 'Dec–Feb', temp: '20–45°F', desc: 'Quiet and stark. Snow on the La Sals. The darkest, clearest skies of the year.', rating: 'Excellent' },
  ];

  const packing = [
    { icon: Backpack, title: 'Layers', desc: 'Desert temperatures swing 30°F+ between day and night. Bring layers.' },
    { icon: Thermometer, title: 'Sun protection', desc: 'Hat, sunscreen, sunglasses. The sun is intense at 4,000 ft.' },
    { icon: Moon, title: 'Red flashlight', desc: 'For stargazing. Red light preserves night vision. We provide one if you forget.' },
    { icon: PawPrint, title: 'Pet gear', desc: 'Leash for the garden areas. Water bowl for trails. Pets stay free.' },
    { icon: Car, title: 'A vehicle', desc: 'Not required but recommended for exploring Arches and Canyonlands.' },
    { icon: Coffee, title: 'A curious mind', desc: 'The most important thing. Everything else we can provide.' },
  ];

  const steps = [
    { num: '01', title: 'Choose your dates', desc: 'Check the stargazing calendar for new-moon weeks if the sky is your priority.' },
    { num: '02', title: 'Pick your space', desc: 'A room, a camp spot, the private retreat, or the compound for groups.' },
    { num: '03', title: 'Add experiences', desc: 'Goat walk, stargazing, geology lab — add them during booking or later.' },
    { num: '04', title: 'Submit your request', desc: 'No payment now. We review personally and confirm within 24 hours.' },
  ];

  return (
    <div>
      <PageHeader
        code="PLAN"
        label="Plan Your Stay"
        title="Everything you need to decide"
        subtitle="Seasons, packing, how to combine stays and experiences, getting here, and what to expect. A decision helper for the curious."
        image="https://images.pexels.com/photos/11252332/pexels-photo-11252332.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      {/* Seasons */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ When to Come</p>
          <h2 className="display-md text-bone-100 mb-12">Four seasons, four different Wetrocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone-300/10 border border-bone-300/10">
            {seasons.map((s, i) => (
              <div key={i} className="bg-obsidian-900 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl text-bone-100">{s.name}</h3>
                  <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 ${
                    s.rating === 'Excellent' ? 'text-spring-400 bg-spring-950/20' : 'text-solar-400 bg-solar-950/20'
                  }`}>
                    {s.rating}
                  </span>
                </div>
                <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">{s.months}</p>
                <p className="font-mono text-xs text-bone-400 mb-4">{s.temp}</p>
                <p className="text-sm text-bone-400 font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ How to Book</p>
          <h2 className="display-md text-bone-100 mb-12">Four steps, no payment until confirmation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="border border-bone-300/10 p-6">
                <p className="font-mono text-3xl text-bone-600 mb-4">{step.num}</p>
                <h3 className="font-display text-lg text-bone-100 mb-3">{step.title}</h3>
                <p className="text-sm text-bone-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button onClick={onBookClick} className="btn-primary">
              Check Availability
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Packing */}
      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ What to Bring</p>
          <h2 className="display-md text-bone-100 mb-12">A packing list for desert and sky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone-300/10 border border-bone-300/10">
            {packing.map((item, i) => (
              <div key={i} className="bg-obsidian-900 p-6 flex items-start gap-4">
                <item.icon size={22} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-base text-bone-100 mb-2">{item.title}</h3>
                  <p className="text-sm text-bone-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies quick reference */}
      <section className="bg-obsidian-900 py-20 border-y border-bone-300/10">
        <div className="container-wide">
          <p className="label-mono text-spring-400 mb-3">◊ Quick Reference</p>
          <h2 className="display-md text-bone-100 mb-12">The basics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Calendar, label: 'Check-in', value: '3:00 PM – 7:00 PM' },
              { icon: Calendar, label: 'Check-out', value: '11:00 AM' },
              { icon: Coffee, label: 'Breakfast', value: 'Continental or American, included' },
              { icon: PawPrint, label: 'Pets', value: 'Welcome, no fee, leash in gardens' },
              { icon: Thermometer, label: 'Pool', value: 'Seasonal heated saltwater' },
              { icon: Car, label: 'Parking', value: 'Free, on-site, private' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 border border-bone-300/10">
                <item.icon size={20} className="text-spring-400 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-display text-base text-bone-100">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button onClick={() => onNavigate('/faq')} className="btn-ghost">
              More questions? Read the FAQ
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
