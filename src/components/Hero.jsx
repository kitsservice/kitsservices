import { ArrowRight, Play, ArrowUpRight, Search, Bell, MapPin, Star, ShieldCheck, Zap, Droplet, Snowflake, Tv, Compass, Navigation } from 'lucide-react';

export default function Hero({ handleNavigation }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-10 pb-20 lg:pt-16 lg:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl"></div>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.12] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left side: Text and CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider select-none">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Google Play Official App
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-dark tracking-tight leading-tight">
              KITS <span className="text-primary-light">Service</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-800 tracking-wide leading-snug">
              Professional Home & Business Service Solutions
            </p>
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Book certified electricians, plumbers, AC specialists, and home maintenance partners instantly. Track your technician live on a GPS map, pay securely inside the app, and access your full digital service records.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              {/* Styled Mock Google Play download button */}
              <button
                onClick={() => handleNavigation('cta-download')}
                className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group text-left border border-slate-800"
              >
                {/* Play Store SVG Icon */}
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 3,3M17.5,12L8.5,7V17L17.5,12Z" />
                </svg>
                <div>
                  <p className="text-[9px] uppercase font-bold text-slate-400 leading-none">Get it on</p>
                  <p className="text-sm font-extrabold font-heading tracking-wide mt-1">Google Play</p>
                </div>
              </button>
              
              <button
                onClick={() => handleNavigation('contact')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-primary-light border border-slate-200 hover:border-blue-200 font-bold py-4 px-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Contact Us
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Play Store Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8 items-center text-slate-500 text-sm">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-heading font-bold text-2xl text-dark">4.8★</span>
                <span>Play Store Rating</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-heading font-bold text-2xl text-dark">50K+</span>
                <span>Downloads</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-heading font-bold text-2xl text-dark">100%</span>
                <span>Verified Partners</span>
              </div>
            </div>
          </div>

          {/* Right side: Modern CSS/SVG Mockup of App Dashboard */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end animate-fade-in-up animation-delay-150 relative">
            
            {/* Background glowing rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary-light/10 blur-3xl z-0"></div>
            
            <div className="relative z-10 w-[295px] h-[590px] bg-slate-900 rounded-[45px] p-3 shadow-2xl border-[6px] border-slate-800 flex flex-col justify-between overflow-hidden ring-4 ring-slate-900/10 scale-95 md:scale-100 animate-float">
              
              {/* Phone Speaker & Camera notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-1.5">
                <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-slate-800 rounded-full"></div>
              </div>

              {/* Internal Screen content */}
              <div className="relative w-full h-full bg-slate-50 rounded-[35px] overflow-hidden flex flex-col pt-6 select-none">
                
                {/* App Top Status Bar */}
                <div className="px-5 pt-1.5 pb-2 bg-white flex justify-between items-center text-[10px] font-bold text-slate-500">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                    <span>5G</span>
                  </div>
                </div>

                {/* Location Selection & Notifications */}
                <div className="bg-white px-4 pb-3 flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary-light" />
                    <div>
                      <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider leading-none">Location</p>
                      <p className="text-[11px] font-bold text-dark mt-0.5">Sector 62, Noida ▾</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Bell className="w-4.5 h-4.5 text-slate-600" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full"></span>
                  </div>
                </div>

                {/* Simulated Search bar */}
                <div className="px-4 mt-2">
                  <div className="bg-slate-100 rounded-xl p-2.5 flex items-center gap-2 text-slate-400 text-[11px]">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search for AC repair, plumber...</span>
                  </div>
                </div>

                {/* Categories Row */}
                <div className="px-4 mt-5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service Categories</p>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm">
                        <Zap className="w-5 h-5 fill-orange-500/10" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-600 mt-1">Electric</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm">
                        <Droplet className="w-5 h-5 fill-blue-500/10" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-600 mt-1">Plumbing</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500 shadow-sm">
                        <Snowflake className="w-5 h-5 fill-cyan-500/10" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-600 mt-1">AC Repair</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shadow-sm">
                        <Tv className="w-5 h-5 fill-rose-500/10" />
                      </div>
                      <span className="text-[8px] font-bold text-slate-600 mt-1">Appliance</span>
                    </div>
                  </div>
                </div>

                {/* Live Order Tracking Widget */}
                <div className="flex-grow px-4 mt-5 flex flex-col justify-end pb-4">
                  <div className="bg-white border border-slate-100 shadow-lg rounded-2xl p-3 flex flex-col justify-between gap-2.5">
                    
                    {/* Badge and Technician info */}
                    <div className="flex justify-between items-center border-b border-slate-50 pb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[10px]">
                          KK
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-dark">Ketan Kumar (AC Expert)</p>
                          <div className="flex items-center gap-0.5 text-[8px] text-amber-500 mt-0.5">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <span>4.9 (120+ orders)</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[8px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded-full font-bold">On the Way</span>
                    </div>

                    {/* Mini live map visualization */}
                    <div className="relative h-20 bg-blue-50/50 rounded-xl overflow-hidden border border-blue-50">
                      
                      {/* Grid background representing streets */}
                      <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-30"></div>
                      
                      {/* Tracking path path lines */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80">
                        <path
                          d="M20,60 Q80,20 120,60 T180,20"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.5"
                          strokeDasharray="4 3"
                        />
                      </svg>

                      {/* Map Pins */}
                      <div className="absolute top-[52%] left-[58%] -translate-x-1/2 -translate-y-1/2 bg-primary border-2 border-white rounded-full p-1 shadow-md animate-bounce">
                        <Navigation className="w-3.5 h-3.5 text-white fill-current transform rotate-45" />
                      </div>

                      <div className="absolute bottom-[10%] left-[8%] bg-cyan-500 border-2 border-white rounded-full p-0.5 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    {/* ETA Status */}
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 font-medium">Estimated Arrival</span>
                      <span className="font-bold text-primary-light">4 mins remaining</span>
                    </div>

                  </div>
                </div>

                {/* Simulated Screen Bottom Navigation */}
                <div className="bg-white border-t border-slate-100 py-3.5 px-6 flex justify-between items-center text-slate-400">
                  <div className="flex flex-col items-center gap-0.5 text-primary-light">
                    <Compass className="w-4 h-4" />
                    <span className="text-[7px] font-bold">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[7px] font-bold">Bookings</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Tv className="w-4 h-4" />
                    <span className="text-[7px] font-bold">Wallet</span>
                  </div>
                </div>

              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-700 rounded-full z-30"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
