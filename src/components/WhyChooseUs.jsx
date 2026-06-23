import { ShieldCheck, Clock, CheckCircle2, Navigation, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Verified Technicians',
      desc: 'Every service partner undergoes rigorous background checks and technical training assessments.',
      bgColor: 'bg-blue-50/50',
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: 'Fast Service',
      desc: 'Assigning a professional near you in minutes. Get prompt solutions scheduled at your convenience.',
      bgColor: 'bg-cyan-50/50',
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-indigo-600" />,
      title: 'Transparent Pricing',
      desc: 'Upfront rates with no hidden costs. Pay exactly what you approve on the app statement.',
      bgColor: 'bg-indigo-50/50',
    },
    {
      icon: <Navigation className="w-8 h-8 text-teal-600" />,
      title: 'Real-Time Tracking',
      desc: 'Track the live GPS location of your assigned technician on their way to your home or office.',
      bgColor: 'bg-teal-50/50',
    },
    {
      icon: <Headphones className="w-8 h-8 text-rose-600" />,
      title: 'Customer Support',
      desc: 'Dedicated customer helpline and in-app instant chat support ready to resolve queries 24/7.',
      bgColor: 'bg-rose-50/50',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-cyan-50 border border-cyan-100 text-cyan-700 font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Designed For Trust, Built For Speed
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We focus on creating a secure, reliable, and convenient service ecosystem. Here is how we ensure maximum quality on every booking:
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center ${card.bgColor}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {card.icon}
              </div>
              
              {/* Card Title */}
              <h3 className="font-heading font-bold text-lg text-dark mb-3">
                {card.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
