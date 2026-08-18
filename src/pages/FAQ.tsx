import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { faqItems } from '@/lib/content';

interface FAQProps {
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function FAQ({ onNavigate, onBookClick }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqItems.map((f) => f.category)))];
  const filtered = activeCat === 'All' ? faqItems : faqItems.filter((f) => f.category === activeCat);

  return (
    <div>
      <PageHeader
        code="FAQ"
        label="Plan / FAQ"
        title="The specifics, answered"
        subtitle="Check-in, breakfast, pets, stargazing weather, cancellation, groups — the practical questions, answered directly."
        image="https://images.pexels.com/photos/11768608/pexels-photo-11768608.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide max-w-4xl">
          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                  activeCat === cat
                    ? 'border-spring-400 text-spring-400 bg-spring-950/20'
                    : 'border-bone-300/10 text-bone-400 hover:border-bone-300/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <div className="space-y-px bg-bone-300/10 border border-bone-300/10">
            {filtered.map((item) => (
              <div key={item.id} className="bg-obsidian-900">
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="font-mono text-[10px] text-bone-600 uppercase tracking-widest mt-1 whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="font-display text-base md:text-lg text-bone-100 group-hover:text-spring-400 transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <span className="flex-shrink-0 ml-4">
                    {openId === item.id ? (
                      <Minus size={18} className="text-spring-400" />
                    ) : (
                      <Plus size={18} className="text-bone-500" />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openId === item.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 md:px-6 pb-6 pl-16 md:pl-20 text-bone-400 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="body-md text-bone-400 mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => onNavigate('/contact')} className="btn-secondary">
                Contact Us
              </button>
              <button onClick={onBookClick} className="btn-primary">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
