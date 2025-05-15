import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Navbar and Footer directly as they are needed on all pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Use lazy loading for route-specific components
const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Download = lazy(() => import('./components/Download'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

// Loading component
const LoadingFallback = () => (
  <div className="loading-screen">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });

    // Add intersection observer for lazy loading
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers without intersection observer support
      lazyImages.forEach(img => {
        img.classList.add('loaded');
      });
    }
    
    // Performance optimization: Preload critical components after initial render
    const preloadComponents = async () => {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(async () => {
          try {
            // Preload About and Contact components when browser is idle
            import('./components/About');
            import('./components/Contact');
          } catch (error) {
            console.error('Error preloading components:', error);
          }
        });
      }
    };
    
    preloadComponents();
    
    return () => {
      // Clean up
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Download />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      <Footer />
      
      <style jsx="true">{`
        .loading-screen {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(247, 179, 5, 0.3);
          border-radius: 50%;
          border-top-color: var(--primary-color);
          animation: spin 1s ease-in-out infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
