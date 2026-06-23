import { Headphones, ArrowRight } from 'lucide-react';

export default function CTA({ handleNavigation }) {
  return (
    <section id="cta-download" className="py-20 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-slate-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-primary rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle glow lines in the card */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-cyan-400/20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 rounded-full bg-blue-400/20 blur-2xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              Get Started Now
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mt-6 tracking-tight leading-tight">
              Ready to Experience Hassle-Free Home Services?
            </h2>
            
            <p className="mt-4 text-blue-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Download the KITS Service mobile app today. Book verified specialists in seconds and track your work live from arrival to sign-off.
            </p>

            {/* Badges and CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              {/* Styled Mock Google Play button */}
              <a
                href="#download-playstore"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-3 bg-slate-900 hover:bg-slate-950 text-white border border-slate-800 rounded-xl px-5 py-3 transition-all duration-300 w-full sm:w-auto text-left shadow-lg hover:-translate-y-0.5"
              >
                {/* Play Store Vector Icon */}
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 3,3M17.5,12L8.5,7V17L17.5,12Z" />
                </svg>
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-400 leading-none">Get it on</p>
                  <p className="text-sm font-extrabold font-heading tracking-wide mt-1">Google Play</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex justify-center items-center gap-6">
              <button
                onClick={() => handleNavigation('contact')}
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-white font-bold text-sm transition-colors duration-200 cursor-pointer"
              >
                <Headphones className="w-4 h-4" />
                Contact Support Team
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
