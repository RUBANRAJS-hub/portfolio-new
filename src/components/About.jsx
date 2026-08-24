import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import Avatar3D from './Avatar3D';
import StrokeText from './StrokeText';
import './About.css';

const About = () => {
  const stats = [
    { value: "6+", label: "Featured Projects" },
    { value: "1", label: "Year Experience" },
    { value: "10+", label: "Core Technologies" }
  ];

  return (
    <section id="about" className="section about-section">
      {/* Background Spatial Watermark */}
      <div className="section-watermark">ABOUT</div>

      <div className="container">
        <motion.div 
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">02 // CREATIVE IDENTITY</span>
          <StrokeText 
            text="ABOUT ME" 
            strokeColor="#ffffff" 
            fillColor="#ffffff" 
            strokeWidth={1.5} 
            drawDuration={1.4} 
            fillDelay={0.2} 
            stagger={0.05} 
            trigger="scroll" 
            fillMode="wipe" 
            fontSize={80} 
            letterSpacing={-2} 
          />
        </motion.div>

        <div className="about-grid">
          {/* Left Column: Spatial Text Content */}
          <motion.div 
            className="about-text-column glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="highlight-lead">
              Ruban Raj.S is a Frontend Developer and MCA student at Madurai Kamaraj University, based in Madurai, Tamil Nadu, India, associated with Shorubenix Info Technology.
            </p>
            <p className="about-body">
              Specializing in React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and full-stack software engineering, Ruban Raj (also known as Ruban Raj S or RubanRaj) builds high-performance, responsive web applications and interactive 3D digital web experiences.
            </p>
            <p className="about-body">
              From building hospital management applications and data encryption tools to AI-powered threat detection systems and modern web interfaces, Ruban Raj approaches software development with clean architecture, semantic precision, and continuous innovation.
            </p>
            
            {/* Monochromatic Spatial Stat Cards */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="spatial-stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                >
                  <h3 className="stat-number">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <a 
                href="https://docs.google.com/document/d/19DmIaDWTzXMFVO1OEMY5PDzUd5vR0dHl/edit?usp=sharing&ouid=117190246985870480053&rtpof=true&sd=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2 w-fit" 
              >
                View Official Resume <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Avatar Frame */}
          <motion.div 
            className="about-image-column"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Avatar3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
