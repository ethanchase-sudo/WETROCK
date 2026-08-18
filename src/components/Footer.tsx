import { Phone, MapPin, Mail } from 'lucide-react';
import { Wordmark } from './Wordmark';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { path: '/stay', label: 'Stay' },
    { path: '/camping', label: 'Camping' },
    { path: '/private-retreat', label: 'Private Retreat' },
    { path: '/compound', label: 'The Compound' },
    { path: '/stargazing', label: 'Stargazing' },
    { path: '/experiences', label: 'Experiences' },
  ];

  const discoverLinks = [
    { path: '/discover-moab', label: 'Discover Moab' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/location', label: 'Location' },
    { path: '/about', label: 'The Experiment' },
    { path: '/kit-host', label: 'Kit / Host' },
    { path: '/groups', label: 'Groups & Retreats' },
  ];

  const planLinks = [
    { path: '/plan-your-stay', label: 'Plan Your Stay' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-obsidian-950 border-t border-bone-300/10 pt-20 pb-10">
      <div className="topo-lines absolute inset-0 opacity-30" />
      <div className="container-wide relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Wordmark showTagline />
            <p className="mt-6 body-md text-bone-400 max-w-xs">
              A 15-acre science-based environment where guests don't just observe — they move through it.
            </p>
            <p className="mt-4 font-mono text-xs text-bone-600 uppercase tracking-widest">
              At the confluence of art and reality
            </p>
          </div>

          <div>
            <p className="label-mono text-bone-500 mb-5">Stay</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-bone-300 hover:text-spring-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-bone-500 mb-5">Discover</p>
            <ul className="space-y-3">
              {discoverLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-bone-300 hover:text-spring-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono text-bone-500 mb-5">Plan & Contact</p>
            <ul className="space-y-3 mb-6">
              {planLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-bone-300 hover:text-spring-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="space-y-2 font-mono text-xs text-bone-500">
              <p className="flex items-center gap-2">
                <MapPin size={12} className="text-spring-400" />
                1275 Boulder Ave, Moab, UT
              </p>
              <p className="flex items-center gap-2">
                <Phone size={12} className="text-spring-400" />
                (435) 355-9001
              </p>
              <p className="flex items-center gap-2">
                <Mail size={12} className="text-spring-400" />
                stay@wetrock.moab
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-bone-300/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-bone-600 uppercase tracking-widest">
            ◊ Control for Bias — A Science Retreat
          </p>
          <p className="font-mono text-xs text-bone-600">
            38.5733° N · 109.5498° W · ELEV 4,026 FT
          </p>
        </div>
      </div>
    </footer>
  );
}
