import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AppFeatures from './components/AppFeatures';
import CTA from './components/CTA';
import Footer from './components/Footer';

const ContactForm = lazy(() => import('./components/ContactForm'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));
const Disclaimer = lazy(() => import('./components/Disclaimer'));

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync state with URL Pathname for deep-linking and browser history support
  useEffect(() => {
    const handleLocationChange = () => {
      // Check if hash-based routing is used and redirect to path-based routing
      const hash = window.location.hash;
      if (hash) {
        if (hash === '#/privacy') {
          window.history.replaceState({}, '', '/legal/privacy');
        } else if (hash === '#/terms') {
          window.history.replaceState({}, '', '/legal/terms');
        } else if (hash === '#/disclaimer') {
          window.history.replaceState({}, '', '/legal/disclaimer');
        } else if (hash === '#/contact') {
          window.history.replaceState({}, '', '/contact');
        } else if (hash.startsWith('#/section/')) {
          const sectionId = hash.replace('#/section/', '');
          window.history.replaceState({}, '', `/section/${sectionId}`);
        } else if (hash === '#/' || hash === '#') {
          window.history.replaceState({}, '', '/');
        }
      }

      const path = window.location.pathname;
      if (path === '/legal/privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/legal/terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/legal/disclaimer') {
        setCurrentPage('disclaimer');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path.startsWith('/section/')) {
        const sectionId = path.replace('/section/', '');
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
    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigation = (target, isSection = false) => {
    if (isSection) {
      // For sections on Home page
      if (currentPage !== 'home') {
        window.history.pushState({}, '', `/section/${target}`);
        window.dispatchEvent(new Event('popstate'));
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For general page transitions
      if (target === 'home') {
        window.history.pushState({}, '', '/');
      } else if (target === 'cta-download') {
        document.getElementById('cta-download')?.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'privacy' || target === 'terms' || target === 'disclaimer') {
        window.history.pushState({}, '', `/legal/${target}`);
      } else {
        window.history.pushState({}, '', `/${target}`);
      }
      window.dispatchEvent(new Event('popstate'));
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
      <main id="main-content" className="flex-grow">
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

        <Suspense fallback={<div className="min-h-[50vh] grid place-items-center" role="status">Loading…</div>}>
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

        {currentPage === 'disclaimer' && (
          <div className="transition-all duration-500 ease-in-out">
            <Disclaimer />
          </div>
        )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
}
