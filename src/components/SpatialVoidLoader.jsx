import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SpatialVoidLoader.css';

const SpatialVoidLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    "01 // INITIALIZING SPATIAL CORE",
    "02 // COMPILING THREE.JS SHADERS",
    "03 // ENGAGING REACT ENGINE",
    "04 // SYSTEM READY // ENTERING VOID"
  ];

  const onCompleteRef = React.useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Fast numeric progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Status text phase change
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 900);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <motion.div 
      className="spatial-loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Black Void Ambient Glow & Grid Lines */}
      <div className="spatial-loader-bg-glow" />
      <div className="spatial-loader-grid" />

      {/* Floating Spatial Particles */}
      <div className="spatial-particles-container">
        {[...Array(16)].map((_, i) => (
          <motion.div 
            key={i} 
            className="spatial-particle"
            style={{
              left: `${5 + (i * 6.5)}%`,
              top: `${10 + ((i * 17) % 80)}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.6, 1.3, 0.6]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="spatial-loader-content">
        {/* Central Geometric Orbital Core */}
        <div className="spatial-core-wrapper">
          {/* Orbiting Ring 1 */}
          <motion.div 
            className="orbit-ring orbit-ring-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />

          {/* Orbiting Ring 2 */}
          <motion.div 
            className="orbit-ring orbit-ring-2"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />

          {/* Orbiting Ring 3 */}
          <motion.div 
            className="orbit-ring orbit-ring-3"
            animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Center Geometric Emblem */}
          <motion.div 
            className="core-emblem"
            animate={{ scale: [0.92, 1.08, 0.92] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </motion.div>
        </div>

        {/* Brand Name Heading */}
        <motion.div 
          className="spatial-loader-heading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="spatial-brand-name">RUBAN RAJ.S</div>
          <p className="spatial-brand-sub">FULL STACK DEVELOPER & CREATIVE TECHNOLOGIST</p>
        </motion.div>

        {/* Dynamic Status Indicator */}
        <div className="spatial-status-box">
          <span className="status-ping" />
          <AnimatePresence mode="wait">
            <motion.span 
              key={statusIndex}
              className="status-text"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {statusMessages[statusIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Sleek Progress Track */}
        <div className="spatial-progress-wrapper">
          <div className="spatial-progress-track">
            <motion.div 
              className="spatial-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="spatial-progress-percent">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SpatialVoidLoader;
