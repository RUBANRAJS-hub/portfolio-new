import React from 'react';
import { motion } from 'framer-motion';
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
              I am a Full Stack Developer and MCA student at Madurai Kamaraj University.
            </p>
            <p className="about-body">
              My journey in tech is driven by an intense passion for building scalable, high-performance web applications that solve real-world problems. I enjoy working across the entire stack, from designing intuitive user interfaces to architecting robust backend APIs.
            </p>
            <p className="about-body">
              Whether it's creating full-stack hospital management systems, cryptography engines, or interactive 3D web experiences, I approach every project with clean architectural standards and continuous learning.
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
