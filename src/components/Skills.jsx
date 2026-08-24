import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';
import BorderGlow from './BorderGlow';
import StrokeText from './StrokeText';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code size={26} className="skill-category-icon" />,
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={26} className="skill-category-icon" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "Java", level: 75 },
        { name: "C / C++", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: <Database size={26} className="skill-category-icon" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={26} className="skill-category-icon" />,
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 }
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-watermark">SKILLS</div>

      <div className="container">
        <motion.div
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">03 // TECHNICAL STACK</span>
          <StrokeText 
            text="MY SKILLS" 
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
          <p className="section-subtitle">Core engineering capabilities, frameworks, languages, and developer tooling</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <BorderGlow
                backgroundColor="rgba(13, 13, 18, 0.65)"
                borderRadius={16}
                glowRadius={25}
                glowIntensity={0.8}
                colors={['#ffffff', '#a1a1aa', '#52525b']}
              >
                <div className="skill-category-card">
                  <div className="category-header">
                    <div className="category-icon-box">
                      {category.icon}
                    </div>
                    <div>
                      <span className="category-index">0{index + 1} // DOMAIN</span>
                      <h3 className="category-title">{category.title}</h3>
                    </div>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress-bar-track">
                          <motion.div
                            className="progress-fill-monochrome"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, delay: 0.2 + (idx * 0.1), ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
