import { useState } from 'react';
import { Shield, Scale, ChevronRight, Mail } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    { id: 'eligibility', label: '1. User Eligibility' },
    { id: 'booking', label: '2. Booking & Scheduling' },
    { id: 'cancellation', label: '3. Cancellation & Refunds' },
    { id: 'fairuse', label: '4. Fair Usage Policies' },
    { id: 'liability', label: '5. Limitation of Liability' },
    { id: 'dispute', label: '6. Dispute Resolution' },
    { id: 'changes', label: '7. Revisions to Terms' },
    { id: 'contact', label: '8. Contact Information' },
  ];

  const [activeSection, setActiveSection] = useState('eligibility');

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-16 bg-slate-50 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Legal Terms
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Terms & Conditions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Last Updated: June 23, 2026. Please read these terms carefully before downloading or using the KITS Service platform.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Sticky Sidebar Menu */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-dark mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary-light" />
              Agreement Sections
            </h3>
            <ul className="space-y-1">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between group cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-slate-50 text-primary-light border-l-4 border-primary-light pl-3'
                        : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-800'
                    }`}
                  >
                    {sec.label}
                    <ChevronRight className={`w-4 h-4 opacity-0 transition-opacity ${
                      activeSection === sec.id ? 'opacity-100 text-primary-light' : 'group-hover:opacity-40'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Detailed Legal Text */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm prose max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-12">
            
            {/* 1. User Eligibility */}
            <div id="eligibility" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">1</span>
                User Eligibility
              </h3>
              <p className="mt-2 text-slate-600">
                By downloading, registering with, or utilizing the KITS Service mobile application, you warrant and represent that:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li>You are at least 18 years of age and possess the legal capacity to enter into binding agreements.</li>
                <li>You reside in a region where KITS Service currently dispatches its registered technicians.</li>
                <li>All profile registration details, phone numbers, and addresses provided during Google Sign-In and account profile configurations are complete, current, and true.</li>
                <li>Your access to the platform has not been previously suspended or terminated due to policy breaches.</li>
              </ul>
            </div>

            {/* 2. Booking & Scheduling */}
            <div id="booking" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">2</span>
                Service Booking & Scheduling
              </h3>
              <p className="mt-2 text-slate-600">
                KITS Service acts as an official matching and monitoring platform. Booking a job creates an agreement between you and the assigned technician:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong>Booking Confirmation:</strong> Bookings are matched using automated geolocation algorithms. A request is confirmed only when an available technician accepts the session on the app.</li>
                <li><strong>Upfront Estimates:</strong> The service rate estimate displayed in the app booking portal is based on average scope specifications. Additional tasks requested on-site will be added to the invoice statement inside the client app.</li>
                <li><strong>Technician Access:</strong> You agree to provide our assigned technician safe access to the premises at the scheduled time to perform the work.</li>
              </ul>
            </div>

            {/* 3. Cancellation & Refunds */}
            <div id="cancellation" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">3</span>
                Cancellation & Refunds
              </h3>
              <p className="mt-2 text-slate-600">
                We implement a fair cancellation mechanism to protect the schedules of our technicians:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong>Free Cancellation:</strong> Bookings can be cancelled free of charge up to 2 hours before the scheduled time slot.</li>
                <li><strong>Late Cancellation Fees:</strong> Cancellations made less than 2 hours before the slot, or if the technician arrives but is denied entry, may incur a standard dispatch convenience fee.</li>
                <li><strong>Refunds:</strong> Payments are processed securely. If a job is cancelled by the technician or fails validation, refunds are processed back to the original payment source within 5-7 business days.</li>
              </ul>
            </div>

            {/* 4. Fair Usage Policies */}
            <div id="fairuse" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">4</span>
                Fair Usage Policies
              </h3>
              <p className="mt-2 text-slate-600">
                To keep KITS Service safe for everyone, users must adhere to our platform guidelines:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong>Non-Bypassing:</strong> You agree not to solicit or hire KITS Service technicians directly outside the mobile app. Engaging technicians privately bypasses the safety tracking, digital invoicing, and service warranties.</li>
                <li><strong>Zero Tolerance for Abuse:</strong> Any verbal abuse, harassment, or unsafe conditions directed at dispatched technicians will result in immediate profile suspension and potential legal escalation.</li>
                <li><strong>No Fraudulent Reviews:</strong> Ratings and feedback provided post-service must be honest, accurate, and reflect actual service delivery.</li>
              </ul>
            </div>

            {/* 5. Limitation of Liability */}
            <div id="liability" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">5</span>
                Limitation of Liability
              </h3>
              <p className="mt-2 text-slate-600">
                While we vet all service partners and guarantee satisfaction support, KITS Service represents that:
              </p>
              <p className="mt-2 text-slate-600">
                *The service is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, KITS Service shall not be liable for any indirect, incidental, special, or consequential damages resulting from household service operations, technician conduct, or app disruptions. Our total liability for any service claim is strictly capped at the invoice amount paid by you for that specific booking.*
              </p>
            </div>

            {/* 6. Dispute Resolution */}
            <div id="dispute" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">6</span>
                Dispute Resolution
              </h3>
              <p className="mt-2 text-slate-600">
                In the event of a dispute, complaint, or damage claim regarding a service booking, the following steps apply:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>You must report the dispute to the **Help Desk** in the KITS Service app or write to <a href="mailto:support@kitsservice.in" className="text-primary-light font-bold">support@kitsservice.in</a> within 48 hours of service completion.</li>
                <li>We will conduct a verification check involving the customer details, technician work logs, and photographic evidence.</li>
                <li>If an amicable resolution cannot be reached within 30 days, the dispute shall be resolved through arbitration under local laws, with the location of arbitration being the primary operational headquarters of KITS Service.</li>
              </ol>
            </div>

            {/* 7. Revisions to Terms */}
            <div id="changes" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">7</span>
                Revisions to Terms
              </h3>
              <p className="mt-2 text-slate-600">
                We reserve the right to revise or modify these Terms & Conditions at our discretion. If we make material modifications, we will publish the revisions on this web portal and notify users inside the app dashboard. Your continued use of the application following such modifications constitutes acceptance of the new terms.
              </p>
            </div>

            {/* 8. Contact Information */}
            <div id="contact" className="scroll-mt-28 bg-blue-50/30 border border-blue-100/50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary-light" />
                Contact Information
              </h3>
              <p className="mt-2 text-slate-600">
                For questions, clarifications, or complaints regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-heading font-bold text-base text-dark">KITS Service Legal Team</p>
                  <p className="text-xs text-slate-500 mt-1">Official Terms Enforcement Office</p>
                </div>
                <a
                  href="mailto:support@kitsservice.in"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-all cursor-pointer shadow-md"
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
