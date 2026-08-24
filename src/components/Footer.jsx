import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
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
