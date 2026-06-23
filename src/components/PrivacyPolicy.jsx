import { useState } from 'react';
import { Shield, ChevronRight, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    { id: 'collect', label: '1. Information We Collect' },
    { id: 'use', label: '2. How We Use Information' },
    { id: 'auth', label: '3. Authentication & Account Security' },
    { id: 'assignment', label: '4. Service Requests & Technician Assignment' },
    { id: 'notifications', label: '5. Notifications' },
    { id: 'storage', label: '6. Data Storage' },
    { id: 'sharing', label: '7. Data Sharing' },
    { id: 'rights', label: '8. User Rights' },
    { id: 'deletion', label: '9. Account Deletion' },
    { id: 'children', label: '10. Children\'s Privacy' },
    { id: 'changes', label: '11. Changes to Privacy Policy' },
    { id: 'contact', label: '12. Contact Information' },
  ];

  const [activeSection, setActiveSection] = useState('collect');

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
            Legal Agreement
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            Privacy Policy
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Last Updated: June 23, 2026. This policy explains how KITS Service collects, stores, protects, and uses your personal data.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Panel: Sticky Sidebar Menu */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-heading font-extrabold text-lg text-dark mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-light" />
              Document Sections
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
            
            {/* 1. Information We Collect */}
            <div id="collect" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">1</span>
                Information We Collect
              </h3>
              <p className="mt-2 text-slate-600">
                To provide you with high-quality home and business services, we collect various categories of information. This includes details you provide directly to us, data generated during booking sessions, and technical information:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong>Identity Data:</strong> Full Name, profile pictures, and authentication tokens.</li>
                <li><strong>Contact Data:</strong> Verified Email addresses, phone numbers, and WhatsApp contact details.</li>
                <li><strong>Location Data:</strong> Precise GPS coordinates (latitude and longitude) to map your residence or business with the nearest available certified technicians.</li>
                <li><strong>Service Data:</strong> Detailed service descriptions, photographs of assets requiring repair (e.g., broken appliances), billing receipts, and technician feedback notes.</li>
              </ul>
            </div>

            {/* 2. How We Use Information */}
            <div id="use" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">2</span>
                How We Use Information
              </h3>
              <p className="mt-2 text-slate-600">
                We use the collected information under strict legal bases to operate, protect, and improve the KITS Service mobile platform. The primary uses include:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li>Processing and scheduling service bookings.</li>
                <li>Verifying user identities and validating account credentials.</li>
                <li>Assigning background-checked technicians to your location.</li>
                <li>Sending transactional notifications and system alerts (e.g., booking progress, billing statements).</li>
                <li>Analyzing app usage to improve client matching algorithms and user interface performance.</li>
              </ul>
            </div>

            {/* 3. Authentication & Account Security */}
            <div id="auth" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">3</span>
                Authentication & Account Security
              </h3>
              <p className="mt-2 text-slate-600">
                We implement **Firebase Authentication** to manage user registrations and login credentials. By using Google Sign-In and secure OAuth 2.0 verification protocols, KITS Service ensures that your credentials are authenticated directly by Google without storing raw passwords on our servers.
              </p>
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mt-4 text-xs font-semibold text-slate-800">
                💡 **Authentication Flow:** User credentials &rarr; Google OAuth Sign-in &rarr; Firebase Auth Secure Token Exchange &rarr; Device Local Session (encrypted state).
              </div>
            </div>

            {/* 4. Service Requests & Technician Assignment */}
            <div id="assignment" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">4</span>
                Service Requests & Technician Assignment
              </h3>
              <p className="mt-2 text-slate-600">
                When you request a service on the KITS application, your name, telephone number, service details, and address are synchronized. We match this data with local verified technicians who are dispatched to perform the work. Technicians receive your contact number and location coordinates only after they accept the job request, ensuring your privacy is preserved until the job is active.
              </p>
            </div>

            {/* 5. Notifications */}
            <div id="notifications" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">5</span>
                Notifications
              </h3>
              <p className="mt-2 text-slate-600">
                We use **Firebase Cloud Messaging (FCM)** to dispatch push notifications to your mobile phone. These notifications inform you about technician locations, booking milestones, invoice generated, and updates from the support helpdesk. You can manage notification settings inside the application or turn them off directly through the operating system configurations at any time.
              </p>
            </div>

            {/* 6. Data Storage */}
            <div id="storage" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">6</span>
                Data Storage
              </h3>
              <p className="mt-2 text-slate-600">
                We store your profile details, scheduling information, and technician assignment data in **Cloud Firestore**, a fully encrypted Firebase database. Files such as user profile pictures, photos of items requiring maintenance, and invoices are stored in **Cloudinary**, a secured content repository. All communication channels between the KITS application, Firebase servers, and Cloudinary storage are protected via SSL/TLS encryption.
              </p>
            </div>

            {/* 7. Data Sharing */}
            <div id="sharing" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">7</span>
                Data Sharing
              </h3>
              <p className="mt-2 text-slate-600">
                KITS Service does not sell or lease your personal information. We share your data only in the following contexts:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li>With the assigned technician to enable navigation to your service address.</li>
                <li>With third-party service providers (like Firebase and Cloudinary) for core backend functionality.</li>
                <li>To comply with regulatory laws, search warrants, court summons, or official audits.</li>
              </ul>
            </div>

            {/* 8. User Rights */}
            <div id="rights" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">8</span>
                User Rights
              </h3>
              <p className="mt-2 text-slate-600">
                Depending on your jurisdiction, you have specific rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong>Right of Access:</strong> Request a complete copy of the data we hold on you.</li>
                <li><strong>Right to Rectification:</strong> Edit your profile, phone, or address records directly in the app.</li>
                <li><strong>Right to Erasure:</strong> Ask us to delete your personal profile data and associated records (subject to active warranty holds).</li>
              </ul>
            </div>

            {/* 9. Account Deletion */}
            <div id="deletion" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">9</span>
                Account Deletion
              </h3>
              <p className="mt-2 text-slate-600">
                If you choose to stop using our app, you can request permanent account deletion:
              </p>
              <p className="mt-2 text-slate-600 font-medium">
                How to Delete Account:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1.5 text-slate-600">
                <li>Navigate to the **Account & Settings** screen in the KITS Service mobile app.</li>
                <li>Select **Delete Account**.</li>
                <li>Confirm by verifying your email / identity.</li>
                <li>Alternatively, send an account deletion request email to <a href="mailto:support@kitsservice.in" className="text-primary-light font-bold">support@kitsservice.in</a>.</li>
              </ol>
              <p className="mt-4 text-slate-500 text-xs">
                Upon confirmation, your profile data, transaction records, and uploaded files on Cloud Firestore and Cloudinary will be deleted permanently from our primary storage directories within 14 days, except for data required to be stored for legal and tax compliance.
              </p>
            </div>

            {/* 10. Children's Privacy */}
            <div id="children" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">10</span>
                Children's Privacy
              </h3>
              <p className="mt-2 text-slate-600">
                KITS Service is not designed for children. We do not knowingly collect personal details from anyone under the age of 13. If you believe we have inadvertently gathered data from a child under 13, please email us immediately, and we will purge the data from our databases.
              </p>
            </div>

            {/* 11. Changes to Privacy Policy */}
            <div id="changes" className="scroll-mt-28">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary-light font-bold text-sm flex items-center justify-center">11</span>
                Changes to Privacy Policy
              </h3>
              <p className="mt-2 text-slate-600">
                We may revise this privacy policy from time to time to accommodate adjustments in laws, technology advancements, or service updates. Any revisions will be updated on this page with an updated "Last Updated" date, and significant changes will be notified directly inside the mobile application.
              </p>
            </div>

            {/* 12. Contact Information */}
            <div id="contact" className="scroll-mt-28 bg-blue-50/30 border border-blue-100/50 rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-extrabold text-2xl text-dark mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary-light" />
                Contact Information
              </h3>
              <p className="mt-2 text-slate-600">
                For questions regarding this policy, user rights, or to submit data export/deletion requests, please write to us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-heading font-bold text-base text-dark">KITS Service Help Desk</p>
                  <p className="text-xs text-slate-500 mt-1">Official Support & Privacy Team</p>
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
