import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, X, ShieldCheck, ZoomIn, Maximize2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import StrokeText from './StrokeText';
import scopeTechCertImg from '../assets/scope_tech_java_internship_cert.png';
import tnSkillCertImg from '../assets/tn_skill_certificate.png';
import csHackathonCertImg from '../assets/cs_infotech_hackathon_cert.jpg';
import ssiJavaCertImg from '../assets/ssi_java_cert.jpg';
import mkuRusaCyberCertImg from '../assets/mku_rusa_cybersecurity_cert.jpg';
import './Certificates.css';

const certificatesData = [
  {
    id: 1,
    title: "Java Full Stack Developer Internship Certificate",
    organization: "Scope Tech Software Solution (Madurai)",
    category: "Internship",
    issueDate: "30 July 2026",
    credentialId: "STS02202504104",
    verificationUrl: "#",
    imageUrl: scopeTechCertImg,
    description: "Successfully completed the 3-Month Java Full Stack Developer Internship Program conducted by Scope Tech Software Solution, Madurai from 4th April 2026 to 30th July 2026. Demonstrated strong dedication, technical proficiency, and full-stack software application development skills.",
    skills: ["Java Full Stack", "Scope Tech", "3-Month Internship", "Java Enterprise", "REST APIs", "Full Stack Development"],
    isVisible: true,
    createdAt: "2026-07-30T00:00:00Z",
    updatedAt: "2026-07-30T00:00:00Z"
  },
  {
    id: 2,
    title: "1st Prize Winner - CS INFO TECH Hackathon 2026",
    organization: "CS INFO TECH",
    category: "Certification",
    issueDate: "18 July 2026",
    credentialId: "CS-HACK-2026-1ST",
    verificationUrl: "#",
    imageUrl: csHackathonCertImg,
    description: "Awarded 1st Prize Certificate of Achievement in recognition of securing 1st Place in the CS INFO TECH Hackathon 2026. Distinguished among all participants for exceptional innovation, technical excellence, creative problem-solving skills, and software application architecture.",
    skills: ["1st Prize Winner", "CS Hackathon 2026", "Problem Solving", "Technical Excellence", "Software Innovation"],
    isVisible: true,
    createdAt: "2026-07-18T00:00:00Z",
    updatedAt: "2026-07-18T00:00:00Z"
  },
  {
    id: 3,
    title: "Cybersecurity & AI-Powered Threat Detection (RUSA 2.0)",
    organization: "Madurai Kamaraj University × Government of India (RUSA 2.0)",
    category: "Academic",
    issueDate: "17 October 2025",
    credentialId: "MKU-RUSA-PGCA2545",
    verificationUrl: "#",
    imageUrl: mkuRusaCyberCertImg,
    description: "Successfully completed the 5-day National Skill Development Course on 'Fundamentals of Cybersecurity Principles to AI-Powered Threat Detection in an IoT Environment' with specialization in Basics of AI. Conducted by the Department of Computer Applications, School of IT at Madurai Kamaraj University under RUSA 2.0 (Government of India) from 13.10.2025 to 17.10.2025.",
    skills: ["Cybersecurity", "AI Threat Detection", "IoT Security", "RUSA 2.0 Govt of India", "MKU School of IT"],
    isVisible: true,
    createdAt: "2025-10-17T00:00:00Z",
    updatedAt: "2025-10-17T00:00:00Z"
  },
  {
    id: 4,
    title: "Programming in Java - Certificate of Merit (Grade A)",
    organization: "SSI EDUCATION (Madurai)",
    category: "Certification",
    issueDate: "31 December 2022",
    credentialId: "SSI-CER-5379",
    verificationUrl: "#",
    imageUrl: ssiJavaCertImg,
    description: "Awarded Certificate of Merit with Grade A (80-89% Excellent) for successfully completing the 60-Hour professional course in 'Programming in Java' at SSI Education, Madurai during October 8, 2022 to December 31, 2022.",
    skills: ["Java Programming", "Object-Oriented Programming (OOP)", "Grade A Merit", "SSI Education", "Core Java"],
    isVisible: true,
    createdAt: "2022-12-31T00:00:00Z",
    updatedAt: "2022-12-31T00:00:00Z"
  },
  {
    id: 5,
    title: "Junior Software Developer - Skill Competency Certificate",
    organization: "TN Skill Corporation (Vinsys IT Services India)",
    category: "Certification",
    issueDate: "07 August 2026",
    credentialId: "TNSC-VN-ITS-JUN-0826-1089",
    enrolmentNo: "MD2026-M413775",
    verificationUrl: "https://drive.google.com/file/d/1h0Fdnw2nvz8_eVwsYSh5ed9HPkKK-OU7/view?usp=drive_link",
    imageUrl: tnSkillCertImg,
    description: "Successfully completed a 420-hour Skill Competency Assessment for the role of Junior Software Developer in the IT-ITeS sector, conducted through TN Skill Corporation at Vinsys IT Services India Limited. This Certificate of Recognition validates the successful assessment of software development skills and competency in the relevant technical domain.",
    skills: ["Junior Software Developer", "420-Hr Assessment", "IT-ITeS Sector", "Skill Competency", "Vinsys IT Services"],
    isVisible: true,
    createdAt: "2026-08-07T00:00:00Z",
    updatedAt: "2026-08-07T00:00:00Z"
  },
  {
    id: 6,
    title: "Software Developer Internship Certificate",
    organization: "CloudsBySunil × TecGrad",
    category: "Internship",
    issueDate: "August 2025",
    credentialId: "TG-2025-SDI-8841",
    verificationUrl: "https://drive.google.com/file/d/1msQxy2659uvy70y50R5uzItgBzyDYHAU/view?usp=sharing",
    imageUrl: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
    description: "Successfully completed a 3-month live software development internship working on hosted individual and team-based full-stack web applications. Demonstrated competence in React, REST APIs, and modern deployment practices.",
    skills: ["React", "JavaScript", "REST API", "Git Workflow", "Software Architecture"],
    isVisible: true,
    createdAt: "2025-08-15T00:00:00Z",
    updatedAt: "2025-08-15T00:00:00Z"
  }
];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [fullZoomCert, setFullZoomCert] = useState(null);

  const categories = ["All", "Internship", "Certification", "Academic"];

  const filteredCertificates = certificatesData.filter(cert => {
    if (!cert.isVisible) return false;
    if (selectedCategory === "All") return true;
    return cert.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section id="certificates" className="section certificates-section">
      <div className="section-watermark">ACCREDITATION</div>

      <div className="container">
        <motion.div
          className="section-title-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">07 // VERIFIED ARTIFACTS</span>
          <StrokeText
            text="CERTIFICATIONS"
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
          <p className="section-subtitle">Authenticated academic degrees, government skill competencies, hackathon awards, and internship certifications</p>
        </motion.div>

        {/* Spatial Category Filter Pills */}
        <div className="certificates-filter-container">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`spatial-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Spatial Document Grid */}
        <motion.div
          className="certificates-grid spatial-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <BorderGlow
                backgroundColor="rgba(13, 13, 18, 0.65)"
                borderRadius={18}
                glowRadius={25}
                glowIntensity={0.8}
                colors={['#ffffff', '#a1a1aa', '#52525b']}
              >
                <div className="certificate-card" onClick={() => setSelectedCert(cert)}>
                  <div className="certificate-image-wrapper group relative">
                    <img src={cert.imageUrl} alt={cert.title} className="certificate-img" />
                    <span className="spatial-category-badge">{cert.category}</span>
                    <div className="cert-hover-zoom-overlay">
                      <ZoomIn size={22} className="text-white mb-1" />
                      <span className="text-[10px] font-bold tracking-widest text-white uppercase">View Certificate</span>
                    </div>
                  </div>

                  <div className="certificate-body">
                    <div className="certificate-meta">
                      <span className="certificate-org">{cert.organization}</span>
                      <span className="cert-date"><Calendar size={12} /> {cert.issueDate}</span>
                    </div>

                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-desc">{cert.description}</p>

                    <div className="skills-tags">
                      {cert.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="spatial-skill-tag">{skill}</span>
                      ))}
                    </div>

                    <div className="certificate-footer">
                      <button className="view-details-btn">
                        View Credential <Award size={14} />
                      </button>
                      <ShieldCheck size={18} className="text-zinc-400" />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="modal-content glass-modal"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedCert(null)} aria-label="Close modal">
                <X size={20} />
              </button>

              <div
                className="modal-image-container group relative cursor-pointer"
                onClick={() => setFullZoomCert(selectedCert)}
              >
                <img src={selectedCert.imageUrl} alt={selectedCert.title} className="modal-img" />
                <div className="modal-img-zoom-hint">
                  <ZoomIn size={20} className="text-white" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">Click to View Full Resolution</span>
                </div>
              </div>

              <div className="modal-header-info">
                <span className="modal-category-badge">{selectedCert.category}</span>
                <h3 className="modal-title">{selectedCert.title}</h3>
                <div className="modal-org-date">
                  <span className="text-white font-semibold">{selectedCert.organization}</span>
                  <span>•</span>
                  <span>Issued: {selectedCert.issueDate}</span>
                </div>
              </div>

              <p className="modal-desc">{selectedCert.description}</p>

              <div className="modal-details-grid">
                <div className="modal-detail-item">
                  <h5>Credential ID</h5>
                  <p>{selectedCert.credentialId || 'N/A'}</p>
                </div>
                <div className="modal-detail-item">
                  <h5>Verification Status</h5>
                  <p className="flex items-center gap-1 text-zinc-200"><CheckCircle size={14} /> Authenticated</p>
                </div>
                <div className="modal-detail-item">
                  <h5>Created Date</h5>
                  <p>{new Date(selectedCert.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="modal-detail-item">
                  <h5>Visibility Status</h5>
                  <p>Public</p>
                </div>
              </div>

              <div className="skills-tags mb-6">
                {selectedCert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="spatial-skill-tag">{skill}</span>
                ))}
              </div>

              {/* Enhanced Viewing Action Bar */}
              <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                <button
                  onClick={() => setFullZoomCert(selectedCert)}
                  className="btn btn-outline flex-1 flex items-center justify-center gap-2"
                >
                  <ZoomIn size={16} /> Zoom Scan
                </button>

                <a
                  href={selectedCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center justify-center gap-2"
                >
                  <Maximize2 size={16} /> Open Image
                </a>

                {selectedCert.verificationUrl && selectedCert.verificationUrl !== '#' && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    Verify Online <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dedicated High-Resolution Fullscreen View Lightbox */}
      <AnimatePresence>
        {fullZoomCert && (
          <motion.div
            className="fullscreen-zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullZoomCert(null)}
          >
            <div className="zoom-modal-header" onClick={(e) => e.stopPropagation()}>
              <span className="zoom-modal-title">{fullZoomCert.title}</span>
              <div className="flex items-center gap-3">
                <a
                  href={fullZoomCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline py-1 px-3 text-xs flex items-center gap-1"
                >
                  Open Original <ExternalLink size={14} />
                </a>
                <button
                  className="modal-close-btn"
                  onClick={() => setFullZoomCert(null)}
                  aria-label="Close full view"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <motion.div
              className="zoom-image-wrapper"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullZoomCert.imageUrl}
                alt={fullZoomCert.title}
                className="full-res-cert-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
