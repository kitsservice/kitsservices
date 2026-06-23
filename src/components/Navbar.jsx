import { useState, useEffect } from 'react';
import { Menu, X, Shield, Download } from 'lucide-react';

export default function Navbar({ currentPage, handleNavigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', type: 'page', target: 'home' },
    { name: 'Services', type: 'section', target: 'services' },
    { name: 'Why Choose Us', type: 'section', target: 'why-choose-us' },
    { name: 'Features', type: 'section', target: 'app-features' },
    { name: 'Contact Us', type: 'page', target: 'contact' },
    { name: 'Privacy Policy', type: 'page', target: 'privacy' },
  ];

  const handleClick = (link) => {
    setIsOpen(false);
    if (link.type === 'page') {
      handleNavigation(link.target);
    } else {
      handleNavigation(link.target, true); // true indicates scroll to section
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className="bg-primary text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <Shield className="w-6 h-6 text-cyan-400 fill-cyan-400/10" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-dark">
              KITS <span className="text-primary-light">Service</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => {
                const isActive =
                  link.type === 'page'
                    ? currentPage === link.target
                    : currentPage === 'home';

                return (
                  <button
                    key={link.name}
                    onClick={() => handleClick(link)}
                    className={`font-semibold text-sm transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-primary-light font-bold'
                        : 'text-slate-600 hover:text-primary-light'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => handleNavigation('cta-download')}
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-5 rounded-xl shadow-lg hover:shadow-primary-light/20 transition-all duration-300 cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary p-2 rounded-lg transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive =
              link.type === 'page'
                ? currentPage === link.target
                : currentPage === 'home';

            return (
              <button
                key={link.name}
                onClick={() => handleClick(link)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-50 text-primary-light font-bold border-l-4 border-primary-light pl-3'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary-light'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavigation('cta-download');
              }}
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
