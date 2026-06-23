import { Phone, Calendar, ShieldCheck, MapPin } from 'lucide-react';

export default function About({ handleNavigation }) {
  const steps = [
    {
      icon: <Phone className="w-5 h-5 text-primary-light" />,
      title: 'Select a Service',
      desc: 'Browse and select from our wide range of services in the KITS app.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary-light" />,
      title: 'Schedule a Time',
      desc: 'Pick a date and time slot that fits your schedule.',
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-light" />,
      title: 'Track Live Assignment',
      desc: 'Watch your assigned certified technician arrive in real-time.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary-light" />,
      title: 'Hassle-Free Payment',
      desc: 'Pay securely inside the app only after the job is completed.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Mockup representation of booking steps */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50/50 p-8 rounded-3xl border border-slate-100 shadow-xl">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-6">
                Booking in 4 Easy Steps
              </h3>
              
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-slate-200"></div>

                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 relative z-10 items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-dark group-hover:text-primary-light transition-colors duration-200">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6">
            <div className="inline-block bg-cyan-50 border border-cyan-100 text-cyan-700 font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Who We Are
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight leading-tight">
              Bridging the Gap Between You and Quality Service
            </h2>
            
            <p className="mt-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              At <strong className="text-dark font-semibold">KITS Service</strong>, we understand that finding trusted service professionals for your home and business needs can be stressful. We have designed a seamless, digital ecosystem that matches your requirements with background-verified, highly trained technicians.
            </p>
            
            <p className="mt-4 text-slate-600 leading-relaxed text-base">
              Every job booked through our mobile app is backed by our customer satisfaction warranty, secure escrow-based billing, and live location-based technician tracking. No more calls to multiple technicians, no more haggling over prices, and no more untrustworthy help.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-slate-800 text-sm">Escrow Payments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-slate-800 text-sm">Background Checked</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-slate-800 text-sm">100% Insured Jobs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-slate-800 text-sm">24/7 Priority Support</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => handleNavigation('cta-download')}
                className="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-7 rounded-xl shadow-lg hover:shadow-primary-light/20 transition-all duration-300 cursor-pointer"
              >
                Experience KITS Service App
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
