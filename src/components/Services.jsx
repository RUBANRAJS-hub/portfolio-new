import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layers, ServerCog, Braces } from 'lucide-react';
import StrokeText from './StrokeText';
import './Services.css';

const Services = () => {
  const services = [
    {
      index: "01",
      title: "Frontend Development",
      description: "Building responsive, accessible, and highly interactive user interfaces using modern libraries like React.",
      icon: <Monitor size={32} />
    },
    {
      index: "02",
      title: "Backend Development",
      description: "Designing robust server-side architecture and databases with Node.js, Express, and MongoDB.",
      icon: <ServerCog size={32} />
    },
    {
      index: "03",
      title: "Full Stack Development",
      description: "Seamlessly bridging frontend and backend to deliver complete, scalable end-to-end web applications.",
      icon: <Layers size={32} />
    },
    {
      index: "04",
      title: "API Development & Integration",
      description: "Creating secure RESTful APIs and integrating third-party services to enhance application capabilities.",
      icon: <Braces size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="services" className="section services-section">
      <div className="section-watermark">SERVICES</div>

      <div className="container">
        <motion.div 
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">05 // CAPABILITIES &amp; OFFERINGS</span>
          <StrokeText 
            text="MY SERVICES" 
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
          <p className="section-subtitle">What I can build and deliver for your digital product architecture</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card glass-card" variants={itemVariants}>
              <div className="service-header">
                <span className="service-number">{service.index}</span>
                <div className="service-icon-box">
                  {service.icon}
                </div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
