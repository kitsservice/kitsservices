import { useState } from 'react';
import { ShieldAlert, AlertCircle, ChevronRight, Mail } from 'lucide-react';

export default function Disclaimer() {
  const sections = [
    { id: 'general', label: '1. General Information Disclaimer' },
    { id: 'industrial', label: '2. Industrial Environment Notice' },
    { id: 'platform', label: '3. Platform & GPS Uptime Notice' },
    { id: 'liability', label: '4. Limitation of Liability Exclusions' },
    { id: 'contractors', label: '5. Independent Partners Assurance' },
    { id: 'store', label: '6. Play Store & App Store Compliance' },
    { id: 'contact', label: '7. Contact & Legal Details' },
  ];

  const [activeSection, setActiveSection] = useState('general');

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 bg-slate-50 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-rose-50 border border-rose-100 text-rose-700 font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Legal Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Legal Disclaimer
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Last Updated: June 23, 2026. This disclaimer is a binding addendum to our Terms of Service and is required for platform use.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Sticky Sidebar Menu */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-dark mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              Disclaimer Sections
            </h3>
            <ul className="space-y-1">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between group cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-rose-50/50 text-rose-700 border-l-4 border-rose-600 pl-3'
                        : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-800'
                    }`}
                  >
                    {sec.label}
                    <ChevronRight className={`w-4 h-4 opacity-0 transition-opacity ${
                      activeSection === sec.id ? 'opacity-100 text-rose-600' : 'group-hover:opacity-40'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Detailed Legal Text */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm prose max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-12">
            
            {/* 1. General Information Disclaimer */}
            <div id="general" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">1</span>
                General Information Disclaimer
              </h3>
              <p className="mt-2 text-slate-600">
                The information, advice, coordinates, and pricing schedules provided through the KITS Service mobile application and website are for general organizational purposes only. While we endeavor to verify the certifications and technical qualifications of our dispatch partners, KITS Service makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the technicians or their work results for any specific industrial application.
              </p>
            </div>

            {/* 2. Industrial Environment Notice */}
            <div id="industrial" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">2</span>
                Industrial Environment Notice
              </h3>
              <p className="mt-2 text-slate-600">
                KITS Service matches users with technicians trained to work in complex manufacturing plants, warehouses, sub-stations, and high-pressure industrial zones.
              </p>
              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4 mt-4 text-xs font-semibold text-rose-900 flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>CRITICAL FACTORY SAFETY WARNING:</strong> Factory owners, managers, and representatives are solely responsible for ensuring that the worksite complies with national safety standards (OSHA/local industrial safety codes). De-energizing high-voltage circuits, isolating active chemical pipelines, and providing personal protective equipment (PPE) for the environment remain the responsibility of the worksite supervisor.
                </div>
              </div>
            </div>

            {/* 3. Platform & GPS Uptime Notice */}
            <div id="platform" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">3</span>
                Platform & GPS Uptime Notice
              </h3>
              <p className="mt-2 text-slate-600">
                We make every effort to maintain continuous service tracking. However, GPS coordinates, real-time map tracking, status notifications, and push message delivery depend on third-party carrier networks, satellite tracking networks, and API integrations (Firebase Cloud Messaging). KITS Service disclaims all responsibility for any tracking inaccuracies, network latencies, or app disruptions that affect technician coordinates.
              </p>
            </div>

            {/* 4. Limitation of Liability Exclusions */}
            <div id="liability" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">4</span>
                Limitation of Liability Exclusions
              </h3>
              <p className="mt-2 text-slate-600">
                In no event shall KITS Service, its directors, officers, employees, or developers, be held liable for:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li>Loss of industrial production, machine downtime, or business interruption damages.</li>
                <li>Loss of business profits, revenue, data, or factory goodwill.</li>
                <li>Physical damage to factory equipment, generators, turbines, or structural units beyond the value of the specific service booking paid through the KITS platform.</li>
              </ul>
            </div>

            {/* 5. Independent Partners Assurance */}
            <div id="contractors" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">5</span>
                Independent Partners Assurance
              </h3>
              <p className="mt-2 text-slate-600">
                Technicians, engineers, and welders dispatched via the KITS Service platform are independent certified contractors and partners, not direct employees of KITS Service. KITS acts as an administrative matching, compliance coordination, and payment processing agent. Any technical errors, mechanical faults, or operational damage occurring during work delivery remain the direct liability of the executing technician under their professional insurance protocols.
              </p>
            </div>

            {/* 6. Play Store & App Store Compliance */}
            <div id="store" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 font-bold text-sm flex items-center justify-center">6</span>
                Play Store & App Store Compliance
              </h3>
              <p className="mt-2 text-slate-600">
                This website and the accompanying KITS Service mobile applications are designed to comply with Google Play Developer Program Policies and Apple App Store Review Guidelines. We declare that:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li>User data synchronization (Firebase Auth, Cloud Firestore) is restricted to dispatch activities.</li>
                <li>Financial details are processed by encrypted gateways and are not stored locally on developer databases.</li>
                <li>Location collection is limited to matching and dispatch tracking functions and is not used for background marketing.</li>
              </ul>
            </div>

            {/* 7. Contact & Legal Details */}
            <div id="contact" className="scroll-mt-28 bg-rose-50/20 border border-rose-100/50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-rose-600" />
                Contact & Legal Details
              </h3>
              <p className="mt-2 text-slate-600">
                If you have questions regarding these legal liability exclusions, safety guidelines, or compliance policies, please contact our legal desk:
              </p>
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-heading font-bold text-base text-dark">KITS Service Compliance Unit</p>
                  <p className="text-xs text-slate-500 mt-1">Official Legal & Compliance Desk</p>
                </div>
                <a
                  href="mailto:support@kitsservice.in"
                  className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-all cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  support@kitsservice.in
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
