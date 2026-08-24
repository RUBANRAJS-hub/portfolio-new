import React from 'react';
import { Heart, ArrowUp, Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              Ruban Raj<span>.</span>S
            </div>
            <p className="footer-tagline">
              SPATIAL 3D DIGITAL ART DIRECTION &amp; FULL STACK SYSTEMS
            </p>
          </div>

          <div className="footer-center">
            <div className="footer-socials flex items-center justify-center gap-4 mb-2">
              <a 
                href="https://github.com/RUBANRAJS-hub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rubanraj-s-" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <p className="footer-copyright">
              © {currentYear} Ruban Raj.S. All rights reserved.
            </p>
            <p className="footer-made-with">
              Designed &amp; Engineered with <Heart size={14} className="heart-icon" />
            </p>
          </div>

          <div className="footer-right">
            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
