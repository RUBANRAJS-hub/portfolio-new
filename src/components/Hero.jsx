import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import StrokeText from './StrokeText';
import './Hero.css';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Editorial Content */}
        <div className="hero-content">
          {/* Section Metadata Tag */}
          <motion.div 
            className="hero-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="live-dot" />
            <span>01 // CREATIVE TECHNOLOGIST &amp; DEVELOPER</span>
          </motion.div>
          
          {/* Greeting Mask Reveal */}
          <div className="mask-container">
            <motion.div 
              className="greeting"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi there, I'm
            </motion.div>
          </div>
          
          {/* Main Display Title with StrokeText */}
          <div className="w-full my-2">
            <h1 className="sr-only">Ruban Raj.S — Frontend Developer &amp; MCA Student</h1>
            <StrokeText 
              text="RUBAN RAJ.S" 
              strokeColor="#ffffff" 
              fillColor="#ffffff" 
              strokeWidth={1.6} 
              drawDuration={1.6} 
              fillDelay={0.2} 
              stagger={0.06} 
              trigger="mount" 
              fillMode="wipe" 
              fontSize={110} 
              letterSpacing={-3} 
            />
          </div>
          
          {/* Subtitle Mask Reveal */}
          <div className="mask-container overflow-hidden">
            <motion.h2 
              className="hero-subtitle"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Frontend Developer &amp; MCA Student
            </motion.h2>
          </div>
          
          {/* Description Stagger */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9 }}
          >
            Ruban Raj.S is a Frontend Developer and MCA student at Madurai Kamaraj University in Tamil Nadu, India, focused on building modern, responsive, and user-centered web applications.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={() => handleScroll('projects')}>
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => handleScroll('contact')}>
              Contact Me <Mail size={16} />
            </button>
            <a 
              href="https://docs.google.com/document/d/19DmIaDWTzXMFVO1OEMY5PDzUd5vR0dHl/edit?usp=sharing&ouid=117190246985870480053&rtpof=true&sd=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline" 
              aria-label="View Resume" 
            >
              Resume <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        onClick={() => handleScroll('about')}
      >
        <span className="scroll-text">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
