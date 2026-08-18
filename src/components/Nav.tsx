import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { navLinks } from '@/lib/content';

interface NavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onBookClick: () => void;
}

export function Nav({ currentPath, onNavigate, onBookClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-bone-300/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          <div onClick={() => handleNav('/')}>
            <Wordmark showTagline={scrolled} />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-spring-400'
                    : 'text-bone-300 hover:text-bone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="hidden md:inline-flex items-center gap-2 bg-spring-500 text-obsidian-950 font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 hover:bg-spring-400 hover:gap-3"
            >
              <Calendar size={14} />
              Check Availability
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-bone-100 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-obsidian-950/98 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col justify-center px-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-left font-display text-3xl transition-all duration-500 ${
                  menuOpen ? 'animate-fade-in-up' : ''
                } ${isActive(link.path) ? 'text-spring-400' : 'text-bone-200'}`}
                style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => { onBookClick(); setMenuOpen(false); }}
            className="mt-12 inline-flex items-center justify-center gap-2 bg-spring-500 text-obsidian-950 font-mono text-sm uppercase tracking-widest px-7 py-4 self-start"
          >
            <Calendar size={16} />
            Check Availability
          </button>
          <div className="mt-auto pt-12 pb-8">
            <p className="font-mono text-xs text-bone-500 uppercase tracking-widest">
              1275 Boulder Ave · Moab, Utah
            </p>
            <p className="font-mono text-xs text-bone-600 mt-1">
              (435) 355-9001
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
