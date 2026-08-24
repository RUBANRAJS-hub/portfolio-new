import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RobotLoader.css';

const RobotLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const messages = [
    "Hello! I am Ruban Raj.S 👋",
    "Creative Technologist & Full Stack Developer",
    "Initializing spatial web experience...",
    "Welcome to my portfolio!"
  ];

  useEffect(() => {
    // Progress counter timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    // Text message change timer
    const messageInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="robot-loader-overlay black-theme"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Black Void Background & Ambient Light */}
      <div className="robot-loader-bg-glow" />
      <div className="holo-grid-lines" />

      {/* Floating Monochrome Particles */}
      <div className="holo-particles-container">
        {[...Array(14)].map((_, i) => (
          <motion.div 
            key={i} 
            className="holo-particle-dot"
            style={{
              left: `${8 + (i * 6.5)}%`,
              bottom: '0%'
            }}
            animate={{
              y: ['0vh', '-100vh'],
              opacity: [0, 0.7, 0],
              scale: [0.4, 1.2, 0.4]
            }}
            transition={{
              duration: 3.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.25,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="robot-loader-content">
        {/* Animated Speech Bubble - Black Theme High Contrast */}
        <motion.div 
          className="robot-speech-bubble"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.p 
              key={textIndex}
              className="robot-speech-text"
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
            >
              {messages[textIndex]}
            </motion.p>
          </AnimatePresence>
          <div className="speech-arrow" />
        </motion.div>

        {/* Levitating Robot Mascot */}
        <motion.div 
          className="robot-svg-wrapper"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          <svg 
            width="240" 
            height="270" 
            viewBox="0 0 240 270" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="robot-svg"
          >
            {/* Robot Core Aura Glow */}
            <circle cx="120" cy="135" r="100" fill="url(#robot-core-glow)" opacity="0.35" />

            {/* Antenna Pulsing White Orb */}
            <motion.circle 
              cx="120" cy="22" r="6" fill="#ffffff"
              animate={{ scale: [1, 1.4, 1], fill: ["#ffffff", "#e2e8f0", "#ffffff"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <line x1="120" y1="28" x2="120" y2="44" stroke="#71717a" strokeWidth="3.5" strokeLinecap="round" />

            {/* Robot Metallic Dark Head */}
            <rect x="60" y="44" width="120" height="80" rx="38" fill="url(#head-metallic)" stroke="#3f3f46" strokeWidth="4" />
            
            {/* Dark Visor Glass */}
            <rect x="74" y="58" width="92" height="52" rx="22" fill="#000000" stroke="#27272a" strokeWidth="2" />
            
            {/* Visor Eyes */}
            <motion.ellipse 
              cx="96" cy="78" rx="7" ry="5" fill="#4ade80" 
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
            />
            <motion.ellipse 
              cx="144" cy="78" rx="7" ry="5" fill="#4ade80" 
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 2 }}
            />
            
            {/* Visor Smile */}
            <path d="M 102 91 Q 120 102 138 91" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Side Ear Caps */}
            <rect x="46" y="65" width="14" height="38" rx="6" fill="#27272a" />
            <rect x="180" y="65" width="14" height="38" rx="6" fill="#27272a" />

            {/* Robot Neck */}
            <rect x="107" y="124" width="26" height="13" fill="#27272a" rx="4" />

            {/* Metallic Dark Torso Body */}
            <rect x="70" y="137" width="100" height="75" rx="24" fill="url(#torso-metallic)" stroke="#3f3f46" strokeWidth="4" />
            
            {/* Glowing Power Reactor Core */}
            <circle cx="120" cy="168" r="14" fill="#000000" stroke="#27272a" strokeWidth="2" />
            <motion.circle 
              cx="120" cy="168" r="8" fill="#ffffff" 
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />

            {/* Left Arm (Resting) */}
            <rect x="45" y="143" width="20" height="48" rx="10" fill="#3f3f46" stroke="#27272a" strokeWidth="3" />
            <circle cx="55" cy="200" r="8" fill="#27272a" />

            {/* Right Arm (Waving Arm Animation with Glowing Palm) */}
            <g transform="translate(175, 143)">
              <motion.g
                style={{ transformOrigin: "5px 10px" }}
                animate={{ rotate: [0, -38, 12, -38, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <rect x="0" y="0" width="20" height="48" rx="10" fill="#e2e8f0" stroke="#3f3f46" strokeWidth="3" transform="rotate(-60)" />
                <g transform="translate(34, -20)">
                  <rect x="0" y="0" width="18" height="40" rx="9" fill="#e2e8f0" stroke="#3f3f46" strokeWidth="3" transform="rotate(30)" />
                  {/* Glowing White Palm */}
                  <circle cx="13" cy="-7" r="11" fill="#ffffff" stroke="#3f3f46" strokeWidth="3" />
                  <motion.circle 
                    cx="13" cy="-7" r="16" fill="none" stroke="#ffffff" strokeWidth="1.5"
                    animate={{ scale: [0.8, 1.4, 0.8], opacity: [1, 0.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  />
                  {/* Waving Fingers */}
                  <line x1="8" y1="-16" x2="6" y2="-23" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                  <line x1="13" y1="-18" x2="13" y2="-25" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                  <line x1="18" y1="-16" x2="20" y2="-23" stroke="#3f3f46" strokeWidth="3" strokeLinecap="round" />
                </g>
              </motion.g>
            </g>

            {/* Legs & Base */}
            <rect x="86" y="212" width="22" height="38" rx="9" fill="#3f3f46" stroke="#27272a" strokeWidth="3" />
            <rect x="132" y="212" width="22" height="38" rx="9" fill="#3f3f46" stroke="#27272a" strokeWidth="3" />
            <rect x="78" y="246" width="34" height="14" rx="7" fill="#27272a" />
            <rect x="128" y="246" width="34" height="14" rx="7" fill="#27272a" />

            {/* Dark Metallic Gradients */}
            <defs>
              <radialGradient id="robot-core-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="head-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#52525b" />
              </linearGradient>
              <linearGradient id="torso-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#3f3f46" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Sweeping White Hologram Laser Beam */}
        <motion.div 
          className="holo-scan-beam"
          animate={{ y: [-130, 70, -130] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Brand Display Title */}
        <h2 className="robot-loader-brand">RUBAN RAJ.S</h2>

        {/* Tech System Status */}
        <div className="system-status-pill">
          <span className="status-dot" />
          <span>INITIALIZING SPATIAL ARCHITECTURE</span>
        </div>

        {/* Glowing Progress Bar Track */}
        <div className="robot-progress-wrapper">
          <div className="robot-progress-bar">
            <motion.div 
              className="robot-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="robot-progress-text">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RobotLoader;
