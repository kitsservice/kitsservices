import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AppFeatures from './components/AppFeatures';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync state with URL Hash for deep-linking and browser history support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/section/')) {
        const sectionId = hash.replace('#/section/', '');
        setCurrentPage('home');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigation = (target, isSection = false) => {
    if (isSection) {
      // For sections on Home page
      if (currentPage !== 'home') {
        window.location.hash = `#/section/${target}`;
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For general page transitions
      if (target === 'home') {
        window.location.hash = '';
      } else if (target === 'cta-download') {
        document.getElementById('cta-download')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = `#/${target}`;
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between overflow-x-hidden selection:bg-primary-light selection:text-white">
      {/* Navigation bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleNavigation={handleNavigation}
      />

      {/* Main content page area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="transition-all duration-500 ease-in-out">
            <Hero handleNavigation={handleNavigation} />
            <About handleNavigation={handleNavigation} />
            <Services handleNavigation={handleNavigation} />
            <WhyChooseUs />
            <AppFeatures />
            <CTA handleNavigation={handleNavigation} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="transition-all duration-500 ease-in-out">
            <ContactForm />
          </div>
        )}

        {currentPage === 'privacy' && (
          <div className="transition-all duration-500 ease-in-out">
            <PrivacyPolicy />
          </div>
        )}

        {currentPage === 'terms' && (
          <div className="transition-all duration-500 ease-in-out">
            <TermsAndConditions />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
}
