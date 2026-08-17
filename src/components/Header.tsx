// Reusable Header Component — Ultra-minimalist centered brand + MENU overlay
import { useState, useEffect } from 'react';

interface NavLink {
  to: string;
  label: string;
}

interface HeaderProps {
  variant?: 'default' | 'hero';
}

const overlayLinks: NavLink[] = [
  { to: '/about', label: 'About' },
  { to: '/lifestyle', label: 'Lifestyle' },
  { to: '/tools', label: 'Tools' },
  { to: '/strategic-analysis', label: 'Strategic Analysis' },
  
  { to: '/faqs', label: 'FAQs' },
  { to: '/cost-of-living', label: 'Cost of Living' },
  { to: '/contact', label: 'Contact Us' },
];

const isActivePath = (currentPath: string, linkPath: string) => {
  if (linkPath === '/') return currentPath === '/';
  return currentPath === linkPath || currentPath.startsWith(linkPath + '/');
};

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isTransparent = variant === 'hero' && !isScrolled && !menuOpen;
  const textColor = isTransparent ? 'text-white' : 'text-primary';
  const borderColor = isTransparent ? 'border-white/40' : 'border-primary/30';

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 py-5">
          <div className="grid grid-cols-3 items-center">
            {/* Left spacer (kept for symmetry) */}
            <div />

            {/* Centered brand */}
            <div className="flex justify-center">
              <a
                href="/"
                className={`font-normal text-xs md:text-sm tracking-[0.25em] hover:opacity-60 transition-all duration-300 whitespace-nowrap uppercase ${textColor}`}
              >
                Retirement Citizenship
              </a>
            </div>

            {/* Right MENU trigger as pill */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className={`group inline-flex items-center gap-2.5 rounded-full border ${borderColor} px-4 py-2 md:px-5 md:py-2.5 transition-all duration-300 hover:opacity-80 ${
                  isTransparent ? 'bg-white/5 backdrop-blur-sm' : 'bg-transparent'
                }`}
              >
                <span
                  className={`text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium ${textColor}`}
                >
                  Menu
                </span>
                <span className="flex flex-col gap-[3px]" aria-hidden="true">
                  <span
                    className={`block h-px w-4 transition-all duration-300 ${
                      isTransparent ? 'bg-white' : 'bg-primary'
                    }`}
                  />
                  <span
                    className={`block h-px w-4 transition-all duration-300 ${
                      isTransparent ? 'bg-white' : 'bg-primary'
                    }`}
                  />
                  <span
                    className={`block h-px w-4 transition-all duration-300 ${
                      isTransparent ? 'bg-white' : 'bg-primary'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop with blur (glassmorphism) */}
        <div
          className="absolute inset-0 bg-primary/80 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Top bar inside overlay: brand + close */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 md:px-8 py-5">
            <div className="grid grid-cols-3 items-center">
              <div />
              <div className="flex justify-center">
                <a
                  href="/"
                  className="font-normal text-xs md:text-sm tracking-[0.25em] uppercase text-white hover:opacity-60 transition-opacity"
                >
                  Retirement Citizenship
                </a>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-4 py-2 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-sm text-white hover:opacity-80 transition-opacity"
                >
                  <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-medium">
                    Close
                  </span>
                  <span className="relative h-3 w-4" aria-hidden="true">
                    <span className="absolute top-1/2 left-0 block h-px w-4 bg-white rotate-45" />
                    <span className="absolute top-1/2 left-0 block h-px w-4 bg-white -rotate-45" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu links — staggered fade-in serif */}
        <nav
          className="relative z-10 flex flex-col items-center justify-center px-6 pb-20"
          style={{ minHeight: 'calc(100vh - 96px)' }}
        >
          <ul className="flex flex-col items-center gap-6 md:gap-8">
            {overlayLinks.map((link, idx) => {
              const active = isActivePath(pathname, link.to);
              return (
                <li
                  key={link.to}
                  className={menuOpen ? 'menu-link-stagger' : 'opacity-0'}
                  style={{ animationDelay: menuOpen ? `${120 + idx * 70}ms` : '0ms' }}
                >
                  <a
                    href={link.to}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-white/90 hover:text-white transition-all duration-300 ${
                      active ? 'italic text-white' : ''
                    }`}
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
