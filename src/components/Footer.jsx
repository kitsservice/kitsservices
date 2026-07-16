import { Mail } from 'lucide-react';
import logoImg from '../assets/logo.png';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ handleNavigation }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (target, isSection = false) => {
    handleNavigation(target, isSection);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Upper Footer: Multi-column link layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div
              className="inline-flex items-center cursor-pointer group bg-white hover:bg-slate-50 rounded-2xl px-3 py-2 transition-all duration-300 shadow-sm"
              onClick={() => handleLinkClick('home')}
            >
              <img
                src={logoImg}
                alt="KITS Service & Maintenance"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                draggable={false}
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The official web portal for KITS Service mobile app. Dispatched, vetted, and background-checked technicians for your household and business repair needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services', true)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('why-choose-us', true)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('app-features', true)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  App Features
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Help & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:support@kitsservice.in" className="hover:text-white">
                  support@kitsservice.in
                </a>
              </li>

            </ul>
            
            {/* Social media icons */}
            <div className="flex gap-4 pt-2">
              <a href="#facebook" onClick={(e) => e.preventDefault()} className="hover:text-white text-slate-500 transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#twitter" onClick={(e) => e.preventDefault()} className="hover:text-white text-slate-500 transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#instagram" onClick={(e) => e.preventDefault()} className="hover:text-white text-slate-500 transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#linkedin" onClick={(e) => e.preventDefault()} className="hover:text-white text-slate-500 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright bar */}
      <div className="border-t border-slate-800 py-8 bg-slate-950/40 text-xs text-center text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} KITS Service. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/legal/privacy" onClick={(e) => { e.preventDefault(); handleLinkClick('privacy'); }} className="hover:text-slate-400">Privacy Policy</a>
            <a href="/legal/terms" onClick={(e) => { e.preventDefault(); handleLinkClick('terms'); }} className="hover:text-slate-400">Terms & Conditions</a>
            <a href="/legal/disclaimer" onClick={(e) => { e.preventDefault(); handleLinkClick('disclaimer'); }} className="hover:text-slate-400">Disclaimer</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
