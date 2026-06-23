import { Zap, Droplet, Snowflake, Tv, Home, Wrench, ArrowRight } from 'lucide-react';

export default function Services({ handleNavigation }) {
  const servicesList = [
    {
      icon: <Zap className="w-8 h-8 text-amber-500 fill-amber-500/10" />,
      title: 'Electrical Services',
      desc: 'Complete wiring, fuse repairs, lighting installations, switchboards, and electrical troubleshooting by certified technicians.',
      highlights: ['Wiring & Rewiring', 'Lighting Installation', 'Fault Finding', 'Breakers & Fuses'],
      bgClass: 'hover:border-amber-200/80 hover:shadow-amber-100/50',
      iconBg: 'bg-amber-50',
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-500 fill-blue-500/10" />,
      title: 'Plumbing Services',
      desc: 'Leak detection, pipe repairs, tap installations, drain cleaning, and bathroom sanitary fitting upgrades.',
      highlights: ['Leak Repair & Fixing', 'Drain Cleaning', 'Sanitary Installations', 'Water Pumps & Tanks'],
      bgClass: 'hover:border-blue-200/80 hover:shadow-blue-100/50',
      iconBg: 'bg-blue-50',
    },
    {
      icon: <Snowflake className="w-8 h-8 text-cyan-500 fill-cyan-500/10" />,
      title: 'AC Repair & Maintenance',
      desc: 'Deep cleaning, gas filling, compressor repair, thermostat checks, and seasonal preventative servicing.',
      highlights: ['Deep AC Cleaning', 'Gas Recharge', 'Compressor Repair', 'Seasonal Servicing'],
      bgClass: 'hover:border-cyan-200/80 hover:shadow-cyan-100/50',
      iconBg: 'bg-cyan-50',
    },
    {
      icon: <Tv className="w-8 h-8 text-rose-500 fill-rose-500/10" />,
      title: 'Appliance Repair',
      desc: 'Expert repairs for refrigerators, washing machines, microwaves, televisions, and other essential appliances.',
      highlights: ['Washing Machines', 'Refrigerators', 'Ovens & Microwaves', 'TV Mounting & Repair'],
      bgClass: 'hover:border-rose-200/80 hover:shadow-rose-100/50',
      iconBg: 'bg-rose-50',
    },
    {
      icon: <Home className="w-8 h-8 text-emerald-500 fill-emerald-500/10" />,
      title: 'Home Maintenance',
      desc: 'General carpentry, minor renovations, door/window repairs, tile fixing, painting, and deep clean-up tasks.',
      highlights: ['Carpentry & Woodwork', 'Tile Repairing', 'Painting & Finishing', 'General Handyman'],
      bgClass: 'hover:border-emerald-200/80 hover:shadow-emerald-100/50',
      iconBg: 'bg-emerald-50',
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-500 fill-purple-500/10" />,
      title: 'Installation Services',
      desc: 'Mounting water purifiers, smart home device setups, CCTV, security systems, wall fixtures, and curtains.',
      highlights: ['CCTV & Security Systems', 'Water Purifiers', 'Smart Home Setup', 'Heavy Wall Mounting'],
      bgClass: 'hover:border-purple-200/80 hover:shadow-purple-100/50',
      iconBg: 'bg-purple-50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Professional Solutions For All Your Needs
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Choose from our highly specialized categories. Our technicians are fully vetted, equipped, and backed by the KITS guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${service.bgClass}`}
            >
              <div>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.iconBg}`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-extrabold text-xl text-dark mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-8">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-light"></span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => handleNavigation('cta-download')}
                className="flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-primary hover:text-white text-slate-700 font-bold py-3 px-4 rounded-xl border border-slate-100 hover:border-primary transition-all duration-300 cursor-pointer text-sm group"
              >
                Book via App
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
