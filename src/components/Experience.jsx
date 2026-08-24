import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import './Experience.css';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      type: "work",
      badge: "INTERNSHIP",
      title: "Software Developer Intern",
      organization: "CloudsBySunil × TecGrad",
      period: "June 2025 – August 2025",
      description: "Completed a live-hosted full-stack web application project and contributed to a collaborative team-based software system simulating real-world industry workflows. Demonstrated strong architectural commitment, REST API integration, and clean component construction.",
      skills: ["React", "JavaScript", "REST APIs", "Git Workflow", "Software Architecture"]
    },
    {
      type: "education",
      badge: "POSTGRADUATE DEGREE",
      title: "Master of Computer Applications (MCA)",
      organization: "Madurai Kamaraj University",
      period: "2025 - 2027",
      description: "Pursuing advanced postgraduate studies in computer applications, specializing in full-stack web engineering, advanced database design, software architecture, and modern cloud deployment models.",
      skills: ["Full Stack Engineering", "Database Systems", "Web Architecture", "Cloud Fundamentals"]
    },
    {
      type: "education",
      badge: "BACHELOR DEGREE",
      title: "BSc Computer Science",
      organization: "Madurai Kamaraj University",
      period: "2021 - 2024",
      description: "Graduated with a comprehensive foundation in core computing, algorithm design, data structures, relational databases, object-oriented programming, and foundational software principles.",
      skills: ["Data Structures", "Algorithms", "Java / C++", "MySQL", "Core Computing"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-watermark">ARCHIVE</div>

      <div className="container">
        {/* Animated Headline with Unique Stroke Shimmer */}
        <motion.div
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">06 // CHRONOLOGICAL MILESTONES</span>
          
          <h2 className="section-title unique-stroke-title">
            <span className="stroke-text-fill">EXPERIENCE &amp; EDUCATION</span>
          </h2>
          
          <p className="section-subtitle">
            A visual interactive archive of professional internships and higher academic degrees
          </p>
        </motion.div>

        <div className="spatial-timeline-wrapper">
          {/* Center Vertical Animated Beam Rail */}
          <motion.div 
            className="spatial-rail-beam"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Floating Traveling Light Pulse */}
          <motion.div 
            className="spatial-rail-pulse"
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <div className="spatial-timeline">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div 
                  key={index} 
                  className={`spatial-timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                  initial={{ 
                    opacity: 0, 
                    x: isLeft ? -70 : 70, 
                    scale: 0.95,
                    filter: "blur(10px)"
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Glowing Node */}
                  <div className={`timeline-node ${isHovered ? 'node-active' : ''}`}>
                    <div className="node-ring">
                      {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                    </div>
                    <div className="node-pulse-ring" />
                  </div>

                  {/* Glass Card wrapped in BorderGlow */}
                  <div className="timeline-card-container">
                    <BorderGlow
                      backgroundColor="rgba(13, 13, 18, 0.75)"
                      borderRadius={18}
                      glowRadius={30}
                      glowIntensity={isHovered ? 1 : 0.6}
                      colors={isHovered ? ['#ffffff', '#e4e4e7', '#71717a'] : ['#a1a1aa', '#52525b', '#27272a']}
                    >
                      <div className="timeline-card">
                        <div className="card-top-bar">
                          <span className="period-pill">
                            <Calendar size={12} /> {item.period}
                          </span>
                          <span className="type-badge flex items-center gap-1">
                            <Sparkles size={12} className="text-zinc-400" />
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="timeline-item-title">{item.title}</h3>
                        
                        <h4 className="timeline-item-org">
                          <Building2 size={15} className="text-zinc-400" /> {item.organization}
                        </h4>
                        
                        <p className="timeline-item-desc">{item.description}</p>

                        <div className="timeline-skills-chips">
                          {item.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="timeline-skill-pill">
                              <CheckCircle2 size={11} className="text-emerald-400" /> {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </BorderGlow>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
