import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import GoalsVision from './components/GoalsVision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpatialCanvas3D from './components/SpatialCanvas3D';
import SpatialVoidLoader from './components/SpatialVoidLoader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = React.useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="app-container">
      {/* Unique Spatial Void Black-Theme Loader Screen */}
      <AnimatePresence>
        {loading && (
          <SpatialVoidLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {/* Full-Bleed Dark Cinematic Background Video */}
      <div className="plate">
        <video className="plate-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3D Spatial Canvas */}
      <SpatialCanvas3D />

      {/* Film Grain Noise Texture */}
      <div className="noise-overlay" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Certificates />
        <GoalsVision />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
