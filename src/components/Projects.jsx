import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, X, Check, Monitor, Code } from 'lucide-react';
import BorderGlow from './BorderGlow';
import StrokeText from './StrokeText';
import './Projects.css';

const Projects = () => {
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [showLiveFrame, setShowLiveFrame] = useState(false);

  const projects = [
    {
      id: "sunrise-hospital",
      index: "01",
      year: "2026",
      category: "FULL STACK WEB SYSTEM",
      title: "Sunrise Hospital Management System",
      description: "A comprehensive full-stack hospital management system featuring smart appointment scheduling, patient record management, doctor availability tracking, and an intuitive admin dashboard.",
      techStack: ["React", "Django REST", "Vite", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/rubanraj-s/Sunrise-Hospital-Management-System",
      live: "https://sunrise-hospital-management-system.vercel.app/",
      metrics: ["99.9% Uptime", "<100ms API Latency", "Role-Based Access"],
      features: [
        "Real-time appointment conflict checking",
        "Patient medical history & prescription tracking",
        "Analytics dashboard for hospital administration",
        "JWT Authentication & Encrypted Storage"
      ]
    },
    {
      id: "portfolio-website",
      index: "02",
      year: "2026",
      category: "3D SPATIAL DIGITAL ART",
      title: "Premium Portfolio Website",
      description: "An animated personal portfolio building a premium digital presence. Includes advanced 3D particle systems, spatial spring cursor physics, smooth scroll animations, and responsive dark glassmorphism.",
      techStack: ["React", "Three.js", "Framer Motion", "Express", "MongoDB"],
      github: "https://github.com/rubanraj-s/portfolio",
      live: "https://portfolio-ruban200s-projects.vercel.app/",
      metrics: ["60 FPS 3D Render", "100/100 Lighthouse", "Monochrome Aesthetic"],
      features: [
        "React Three Fiber WebGL canvas",
        "Multi-state contextual spatial cursor",
        "Editorial split-text mask reveals",
        "Custom dark border glow physics"
      ]
    },
    {
      id: "data-encryption",
      index: "03",
      year: "2025",
      category: "CRYPTOGRAPHY ENGINE",
      title: "Data Encryption & Cyber Security System",
      description: "A secure web-based encryption engine designed for client-side data transformation. Allows users to encrypt and decrypt sensitive strings using industry-standard AES-256 and SHA-256 hash checksum algorithms.",
      techStack: ["HTML5", "CSS3", "JavaScript ES6+", "Crypto Web API"],
      github: "https://github.com/rubanraj-s/Data-Encryption-System",
      live: "https://rubanraj-s.github.io/Data-Encryption-System/",
      metrics: ["Client-side AES-256", "Zero Latency", "100% Offline Capability"],
      features: [
        "Reversible key-based string transformation",
        "Real-time hash checksum generation",
        "Zero server data persistence",
        "Intuitive copy-to-clipboard UI"
      ]
    },
    {
      id: "ecommerce-platform",
      index: "04",
      year: "2025",
      category: "FULL STACK WEB PLATFORM",
      title: "Full-Stack E-Commerce & Inventory Platform",
      description: "An end-to-end e-commerce solution featuring product catalog browsing, cart management, secure checkout integration, and an admin inventory management suite.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/rubanraj-s/ecommerce-platform",
      live: "https://sunrise-hospital-management-system.vercel.app/",
      metrics: ["Real-time Inventory", "Stripe Gateway", "Responsive Mobile First"],
      features: [
        "Dynamic cart state with persistent storage",
        "Admin panel for product CRUD & order management",
        "Secure user authentication with JWT",
        "Instant search and category filtering"
      ]
    },
    {
      id: "ai-assistant",
      index: "05",
      year: "2025",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "AI Task Orchestrator & Smart Assistant",
      description: "An intelligent web application integrating generative AI models to summarize long-form documents, auto-generate task schedules, and provide interactive contextual answers.",
      techStack: ["Python", "Django", "React", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com/rubanraj-s/ai-task-orchestrator",
      live: "https://portfolio-ruban200s-projects.vercel.app/",
      metrics: ["Fast Inference", "Multi-modal Support", "Automated Workflows"],
      features: [
        "Automated document key insight extraction",
        "Context-aware interactive Q&A assistant",
        "Clean markdown response formatting",
        "History log & conversation storage"
      ]
    },
    {
      id: "academic-portal",
      index: "06",
      year: "2024",
      category: "ACADEMIC WEB APP",
      title: "Student Academic Portal & LMS",
      description: "A centralized Learning Management System built for university students to track course progress, view semester grades, register for subjects, and submit assignment reports.",
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/rubanraj-s/student-lms-portal",
      live: "https://rubanraj-s.github.io/Data-Encryption-System/",
      metrics: ["Relational DB Schema", "Role-Based Access", "Instant Reports"],
      features: [
        "Role-based portals for students, faculty & admins",
        "Relational MySQL database query optimization",
        "Automated grade calculation and transcript generation",
        "Assignment submission deadline tracking"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const openModal = (project) => {
    setActiveProjectModal(project);
    setShowLiveFrame(false);
  };

  const closeModal = () => {
    setActiveProjectModal(null);
    setShowLiveFrame(false);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-watermark">WORKS</div>

      <div className="container">
        <motion.div 
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">04 // SELECTED ARCHITECTURE</span>
          <StrokeText 
            text="FEATURED PROJECTS" 
            strokeColor="#ffffff" 
            fillColor="#ffffff" 
            strokeWidth={1.5} 
            drawDuration={1.4} 
            fillDelay={0.2} 
            stagger={0.04} 
            trigger="scroll" 
            fillMode="wipe" 
            fontSize={80} 
            letterSpacing={-2} 
          />
          <p className="section-subtitle">A comprehensive showcase of full-stack engineering, 3D spatial web apps, cryptography, and secure systems</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <BorderGlow
                backgroundColor="rgba(13, 13, 18, 0.65)"
                borderRadius={18}
                glowRadius={30}
                glowIntensity={0.8}
                colors={['#ffffff', '#a1a1aa', '#52525b']}
              >
                <div 
                  className="project-card cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="project-top-bar">
                    <div className="project-index-badge">
                      <span className="index-num">{project.index}</span>
                      <span className="index-divider">//</span>
                      <span className="index-cat">{project.category}</span>
                    </div>

                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-icon-link" 
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                      {project.live && project.live !== "#" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-icon-link" 
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-body">
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-expand-icon">
                        <ArrowUpRight size={22} />
                      </div>
                    </div>
                    <p className="project-desc">{project.description}</p>
                  </div>
                  
                  <div className="project-footer">
                    <ul className="project-tech-list">
                      {project.techStack.map((tech, idx) => (
                        <li key={idx} className="project-tech-pill">{tech}</li>
                      ))}
                    </ul>
                    <span className="click-case-study">EXPLORE WORK &rarr;</span>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Case Study Modal Lightbox */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="project-modal-content"
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-trigger" 
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="modal-top-meta">
                <span className="modal-category-tag">{activeProjectModal.index} // {activeProjectModal.category}</span>
                <span className="modal-year-tag">{activeProjectModal.year}</span>
              </div>

              <h2 className="modal-project-title">{activeProjectModal.title}</h2>
              <p className="modal-project-desc">{activeProjectModal.description}</p>

              <div className="modal-metrics-row">
                {activeProjectModal.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="modal-metric-badge">
                    <Check size={14} className="text-zinc-300" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>

              {/* Embedded Live Preview toggle */}
              {showLiveFrame && activeProjectModal.live && (
                <div className="w-full h-80 rounded-xl overflow-hidden border border-zinc-700 bg-black my-4 relative">
                  <iframe 
                    src={activeProjectModal.live} 
                    title={activeProjectModal.title}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              )}

              <div className="modal-section-block">
                <h4 className="modal-subheading">Key Architecture &amp; Capabilities</h4>
                <ul className="modal-features-list">
                  {activeProjectModal.features.map((feat, fIdx) => (
                    <li key={fIdx} className="modal-feature-item">
                      <span className="feat-bullet" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-tech-block">
                <h4 className="modal-subheading">Technologies Employed</h4>
                <div className="modal-tech-pills">
                  {activeProjectModal.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="modal-tech-chip">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-action-bar gap-3 flex-wrap sm:flex-nowrap">
                <a 
                  href={activeProjectModal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline flex-1"
                >
                  <Github size={18} /> Source Code
                </a>

                {activeProjectModal.live && (
                  <button 
                    onClick={() => setShowLiveFrame(!showLiveFrame)} 
                    className="btn btn-outline"
                  >
                    <Monitor size={18} /> {showLiveFrame ? 'Hide Frame' : 'Live Preview'}
                  </button>
                )}

                {activeProjectModal.live && (
                  <a 
                    href={activeProjectModal.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary flex-1"
                  >
                    Launch Site <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
