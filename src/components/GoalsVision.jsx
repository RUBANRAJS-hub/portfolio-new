import React from 'react';
import { motion } from 'framer-motion';
import './GoalsVision.css';

const GoalsVision = () => {
  return (
    <section className="section goals-vision-section">
      <div className="section-watermark">VISION</div>
      
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="goals-statement-wrapper"
        >
          <span className="vision-tag">08 // FUTURE DIRECTION</span>
          <h2 className="goals-statement-title display-title">
            BUILDING WHAT COMES NEXT<span className="statement-dot">.</span>
          </h2>
          <p className="goals-statement-sub">
            Engineering scalable digital architectures, immersive spatial web experiences, and high-performance software systems built for the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GoalsVision;
