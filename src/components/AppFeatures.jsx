import { useState } from 'react';
import { Smartphone, Navigation, Lock, CheckCircle, Bell, FileText, Shield } from 'lucide-react';

export default function AppFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Easy Booking',
      desc: 'Book any industrial robotics, EV, biomedical, or automation maintenance service in less than 60 seconds with an intuitive, step-by-step layout.',
      screenContent: (
        <div className="bg-white h-full p-4 flex flex-col justify-between">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <span className="font-heading font-extrabold text-sm text-dark">Book Service</span>
            <span className="text-[10px] bg-blue-50 text-primary-light px-2 py-0.5 rounded-full font-bold">1 of 3</span>
          </div>
          <div className="space-y-3 my-auto">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-dark">Robotics Calibration</span>
              <span className="text-xs font-bold text-primary-light">$249</span>
            </div>
            <div className="p-3 border border-slate-100 rounded-xl flex items-center justify-between opacity-60">
              <span className="text-xs font-semibold text-dark">EV Battery Diagnostic</span>
              <span className="text-xs font-bold text-slate-400">$199</span>
            </div>
          </div>
          <button type="button" className="w-full bg-primary text-white text-xs font-bold py-3 rounded-xl shadow-md">
            Next: Select Slot
          </button>
        </div>
      ),
    },
    {
      icon: <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Service Tracking',
      desc: 'Watch your assigned technician arrive. Our real-time GPS tracking system keeps you updated down to the minute.',
      screenContent: (
        <div className="bg-white h-full p-4 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-100 opacity-20 flex items-center justify-center">
            <div className="w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
          <div className="relative z-10 border-b border-slate-100 bg-white/85 backdrop-blur-md p-2 rounded-xl flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AS</div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-dark truncate">Anjeneya (Automation engineer)</p>
              <p className="text-[8px] text-emerald-600 font-semibold">Arriving in 4 mins</p>
            </div>
          </div>
          <div className="absolute top-[45%] left-[55%] z-10 animate-bounce">
            <div className="h-6 w-6 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg">
              <Navigation className="w-3 h-3 text-white fill-current transform rotate-45" />
            </div>
          </div>
          <div className="relative z-10 bg-white/95 border border-slate-100 shadow-lg p-3 rounded-xl flex justify-between items-center">
            <span className="text-[10px] font-semibold text-slate-500">Live Status</span>
            <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">On the Way</span>
          </div>
        </div>
      ),
    },
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Secure Login',
      desc: 'All profile information, payment details, and service logs are stored under enterprise-grade encryption standard.',
      screenContent: (
        <div className="bg-white h-full p-4 flex flex-col justify-center items-center text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-emerald-500 fill-emerald-500/10" />
          </div>
          <h4 className="font-heading font-bold text-sm text-dark">Security Settings</h4>
          <p className="text-[10px] text-slate-500 mt-2 px-4 leading-relaxed">
            Your data is encrypted. Google Sign-In ensures safe and passwordless authorization.
          </p>
          <div className="mt-4 w-full border border-slate-100 rounded-lg p-2 text-[8px] font-semibold text-slate-400">
            SHA-256 Verified Session
          </div>
        </div>
      ),
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Google Sign-In',
      desc: 'Sign up instantly and safely. No passwords to remember; securely log in with a single tap using your Google account.',
      screenContent: (
        <div className="bg-white h-full p-6 flex flex-col justify-center items-center text-center">
          <span className="font-heading font-extrabold text-sm text-dark mb-4">Welcome to KITS</span>
          <div className="w-full max-w-[180px] bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 font-semibold py-2 px-3 rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer text-xs">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.67 0 3.2.58 4.4 1.7l3.28-3.28C17.7 1.63 15.02 1 12 1 7.35 1 3.4 3.65 1.55 7.5l3.86 3C6.35 7.56 8.94 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.5 12.25c0-.82-.07-1.6-.2-2.35H12v4.45h6.47c-.28 1.48-1.12 2.74-2.38 3.58l3.7 2.87c2.16-2 3.71-4.94 3.71-8.55z"/>
              <path fill="#FBBC05" d="M5.4 14.5a7.1 7.1 0 0 1 0-4.62l-3.86-3a11.94 11.94 0 0 0 0 10.62l3.86-3z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.9l-3.7-2.87c-1.03.69-2.35 1.1-4.26 1.1-3.06 0-5.65-2.52-6.59-5.46l-3.86 3A11.94 11.94 0 0 0 12 23z"/>
            </svg>
            Sign in with Google
          </div>
          <span className="text-[8px] text-slate-400 mt-4">Protected by Google OAuth 2.0</span>
        </div>
      ),
    },
    {
      icon: <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Notifications',
      desc: 'Receive instant push updates on booking confirmation, technician assignment, status changes, and invoices.',
      screenContent: (
        <div className="bg-white h-full p-4 flex flex-col justify-start">
          <div className="border-b border-slate-100 pb-2 mb-3 flex items-center justify-between">
            <span className="font-heading font-bold text-xs text-dark">Notifications</span>
            <span className="text-[8px] text-slate-400 cursor-pointer">Clear All</span>
          </div>
          <div className="space-y-2.5">
            <div className="p-2.5 bg-blue-50/50 border border-blue-100/50 rounded-xl flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-light mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="text-[9px] font-bold text-dark">Technician Assigned</p>
                <p className="text-[8px] text-slate-500 mt-0.5">Automation engineer Anjeneya will arrive at 4:30 PM.</p>
              </div>
            </div>
            <div className="p-2.5 border border-slate-100 rounded-xl flex gap-2 opacity-65">
              <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="text-[9px] font-bold text-dark">Booking Confirmed</p>
                <p className="text-[8px] text-slate-500 mt-0.5">Your booking #98341 has been created.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-light" />,
      title: 'Digital Service Records',
      desc: 'Access your full service history, download PDF tax invoices, and review warranty logs directly inside your app cabinet.',
      screenContent: (
        <div className="bg-white h-full p-4 flex flex-col justify-between">
          <span className="font-heading font-bold text-xs text-dark border-b border-slate-100 pb-2">My Service Records</span>
          <div className="space-y-2 my-auto">
            <div className="p-2.5 border border-slate-100 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-dark">Robotic Arm Alignment</p>
                <p className="text-[7px] text-slate-400">June 20, 2026</p>
              </div>
              <span className="text-[8px] bg-slate-100 font-bold px-2 py-1 rounded text-slate-600 cursor-pointer">PDF</span>
            </div>
            <div className="p-2.5 border border-slate-100 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-dark">SCADA Logic Optimization</p>
                <p className="text-[7px] text-slate-400">May 15, 2026</p>
              </div>
              <span className="text-[8px] bg-slate-100 font-bold px-2 py-1 rounded text-slate-600 cursor-pointer">PDF</span>
            </div>
          </div>
          <div className="text-center text-[8px] text-slate-400 font-semibold">Total: 2 bookings completed</div>
        </div>
      ),
    },
  ];

  return (
    <section id="app-features" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            App Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            An Entire Service Cabinet In Your Pocket
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-lg">
            Say goodbye to phone tags and written receipts. The KITS Service application coordinates everything securely from your device.
          </p>
        </div>

        {/* Feature grid content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">

          {/* Left Column: Interactive Feature selector list */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-4 order-2 lg:order-1">
            {features.map((feat, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className={`w-full p-3 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex gap-3 sm:gap-4 items-start ${
                  activeTab === idx
                    ? 'bg-white border-primary-light/35 shadow-md lg:-translate-x-1'
                    : 'bg-transparent border-transparent hover:bg-white/45'
                }`}
              >
                {/* Feature Icon Container */}
                <div className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 ${
                  activeTab === idx ? 'bg-blue-50' : 'bg-white'
                }`}>
                  {feat.icon}
                </div>

                <div className="min-w-0">
                  <h3 className={`font-heading font-bold text-base sm:text-lg ${
                    activeTab === idx ? 'text-primary-light' : 'text-dark'
                  }`}>
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Premium CSS Mobile Mockup */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-[240px] sm:w-[265px] lg:w-[280px] h-[480px] sm:h-[515px] lg:h-[550px] bg-slate-900 rounded-[40px] sm:rounded-[45px] p-2.5 sm:p-3 shadow-2xl border-[5px] border-slate-800 flex flex-col justify-between overflow-hidden">

              {/* Speaker & Sensor bar */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-4 sm:h-5 bg-slate-900 rounded-full z-20 flex items-center justify-center gap-1.5">
                <div className="w-10 sm:w-12 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-2 sm:w-2 h-2 bg-slate-800 rounded-full"></div>
              </div>

              {/* Internal Screen mockup */}
              <div className="relative w-full h-full bg-slate-50 rounded-[32px] sm:rounded-[35px] overflow-hidden flex flex-col pt-5 sm:pt-6">
                {/* Simulated App Header */}
                <div className="bg-primary text-white py-3 sm:py-3.5 px-3 sm:px-4 flex items-center gap-2 border-b border-blue-900">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-md bg-white/10 flex items-center justify-center">
                    <Shield className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-300" />
                  </div>
                  <span className="font-heading font-extrabold text-xs tracking-wide">KITS Service</span>
                </div>

                {/* Main Screen Content */}
                <div className="flex-grow overflow-hidden">
                  {features[activeTab].screenContent}
                </div>

                {/* Simulated Screen Bottom bar */}
                <div className="bg-white border-t border-slate-100 py-2 sm:py-2.5 px-5 sm:px-6 flex justify-between items-center">
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-sm border-2 border-slate-300"></div>
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border-2 border-slate-300"></div>
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 bg-slate-300 rounded-full"></div>
                </div>

              </div>

              {/* Home Indicator Line */}
              <div className="absolute bottom-2 sm:bottom-2.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 bg-slate-700 rounded-full z-20"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
