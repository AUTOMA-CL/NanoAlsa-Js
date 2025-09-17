import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Industries from './components/sections/Industries';
import Certifications from './components/sections/Certifications';
import Research from './components/sections/Research';
import Contact from './components/sections/Contact';

// UI Components
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';

    // Set page title
    document.title = 'NanoAlsa - Nanometales de Alta Pureza';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Background Gradient Mesh - Disabled for clean white background */}
          {/* <div className="absolute inset-0 gradient-mesh pointer-events-none" /> */}

          <Hero />
          <About />
          <Products />
          <Industries />
          <Certifications />
          <Research />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;