import { useEffect, useRef, useState } from 'react';
import { Mail, Clock, Headphones, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(submitTimerRef.current), []);

  // Real-time validation
  const validateField = (name, value) => {
    let err = '';
    if (name === 'fullName') {
      if (!value.trim()) err = 'Full Name is required';
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = 'Email is required';
      else if (!emailRegex.test(value)) err = 'Provide a valid email address';
    } else if (name === 'mobileNumber') {
      const phoneRegex = /^[0-9]{10}$/;
      if (!value.trim()) err = 'Mobile number is required';
      else if (!phoneRegex.test(value.trim())) err = 'Provide a valid 10-digit mobile number';
    } else if (name === 'subject') {
      if (!value.trim()) err = 'Subject is required';
      else if (value.trim().length < 5) err = 'Subject must be at least 5 characters';
    } else if (name === 'message') {
      if (!value.trim()) err = 'Message is required';
      else if (value.trim().length < 15) err = 'Message must be at least 15 characters';
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Submit form mock simulation
    setIsSubmitting(true);
    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block bg-blue-50 border border-blue-100 text-primary-light font-bold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
            We Are Here To Help You
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Have questions about booking? Encountered issues with the app? Get in touch with our team. We usually respond in record time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Grid */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-8">
              
              <h3 className="font-heading font-extrabold text-2xl text-dark pb-4 border-b border-slate-100">
                Company Details
              </h3>

              {/* Company & Support Mail */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-dark">Support Email</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    <a href="mailto:support@kitsservice.in" className="hover:text-primary-light font-semibold">
                      support@kitsservice.in
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Response Time: Within 2 hours</p>
                </div>
              </div>



              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-dark">Business Hours</h4>
                  <p className="text-slate-600 text-sm mt-1 font-medium">Monday - Sunday</p>
                  <p className="text-slate-500 text-xs mt-0.5">8:00 AM - 8:00 PM (IST)</p>
                </div>
              </div>

              {/* Escalations */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-dark">App Help Desk</h4>
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    You can also raise support tickets directly inside the mobile app to receive priority attention and real-time status updates on your query.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 animate-fade-in-up animation-delay-150">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
              
              {submitSuccess && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col justify-center items-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 fill-emerald-500/10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-dark">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-sm mt-3 text-sm leading-relaxed">
                    Thank you for contacting KITS Service. We have received your query and will reply to your support email within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-8 bg-primary hover:bg-primary-light text-white font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

              <h3 className="font-heading font-extrabold text-2xl text-dark mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 focus:bg-white text-sm focus:outline-none transition-all duration-200 ${
                      errors.fullName
                        ? 'border-rose-300 focus:border-rose-500 ring-1 ring-rose-100'
                        : 'border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-blue-100'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email and Mobile Number (Two Columns) */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 focus:bg-white text-sm focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? 'border-rose-300 focus:border-rose-500 ring-1 ring-rose-100'
                          : 'border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-blue-100'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={10}
                      required
                      aria-invalid={Boolean(errors.mobileNumber)}
                      aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 focus:bg-white text-sm focus:outline-none transition-all duration-200 ${
                        errors.mobileNumber
                          ? 'border-rose-300 focus:border-rose-500 ring-1 ring-rose-100'
                          : 'border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-blue-100'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.mobileNumber && (
                      <p id="mobileNumber-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 focus:bg-white text-sm focus:outline-none transition-all duration-200 ${
                      errors.subject
                        ? 'border-rose-300 focus:border-rose-500 ring-1 ring-rose-100'
                        : 'border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-blue-100'
                    }`}
                    placeholder="Query regarding appliance repair warranty"
                  />
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={15}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 focus:bg-white text-sm focus:outline-none transition-all duration-200 resize-none ${
                      errors.message
                        ? 'border-rose-300 focus:border-rose-500 ring-1 ring-rose-100'
                        : 'border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-blue-100'
                    }`}
                    placeholder="Write details of your question here. Min 15 characters..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" role="alert" className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 font-medium">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-primary-light/20 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      Send Message
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
