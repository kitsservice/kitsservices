import { Bot, Zap, Activity, Settings, ArrowRight } from 'lucide-react';

export default function Services({ handleNavigation }) {
  const servicesList = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-500 fill-indigo-500/10" />,
      title: 'Robotics Engineering Maintenance',
      desc: 'Calibration, mechanical diagnostics, manipulator arm tuning, actuator sensor testing, and kinematic alignments for industrial robotic systems.',
      highlights: ['Manipulator Arms & Joints', 'Actuator & Sensor Testing', 'Kinematic Calibrations', 'Control Loop Tuning'],
      bgClass: 'hover:border-indigo-200/80 hover:shadow-indigo-100/50',
      iconBg: 'bg-indigo-50',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500 fill-amber-500/10" />,
      title: 'Electric Vehicle (EV) Systems',
      desc: 'Diagnostics and servicing for commercial and industrial EV fleets, battery pack tests, BMS calibrations, and charging grid infrastructure maintenance.',
      highlights: ['Battery Pack Diagnostics', 'BMS Calibration', 'Electric Drivetrain Tuning', 'Charging Grid Support'],
      bgClass: 'hover:border-amber-200/80 hover:shadow-amber-100/50',
      iconBg: 'bg-amber-50',
    },
    {
      icon: <Activity className="w-8 h-8 text-rose-500 fill-rose-500/10" />,
      title: 'Bio-Medical Technology Maintenance',
      desc: 'Preventive maintenance, ISO compliance audits, surgical device calibrations, and sensor diagnostics for advanced hospital and laboratory equipment.',
      highlights: ['MRI & CT Imaging Support', 'Biomedical Sensor Checks', 'ISO 13485 Compliance Audits', 'Patient Monitor Calibrations'],
      bgClass: 'hover:border-rose-200/80 hover:shadow-rose-100/50',
      iconBg: 'bg-rose-50',
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500 fill-cyan-500/10" />,
      title: 'Industrial Automation Support',
      desc: 'PLC logic optimization, SCADA systems configuration, pneumatic/hydraulic actuator setups, and industrial IoT sensor diagnostics.',
      highlights: ['PLC Logic Tuning', 'SCADA & HMI Configurations', 'Industrial IoT Sensor Grids', 'Actuator Controls Repair'],
      bgClass: 'hover:border-cyan-200/80 hover:shadow-cyan-100/50',
      iconBg: 'bg-cyan-50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Specialized High-Tech Maintenance Services
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Certified partners dispatched to support your specialized robotic, electric vehicle, biomedical, and automated industrial infrastructure.
          </p>
        </div>

        {/* Services Grid (2x2 on desktop, centered) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                Request Expert Dispatch
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
