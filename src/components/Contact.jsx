import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import BorderGlow from './BorderGlow';
import StrokeText from './StrokeText';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Google Apps Script Web App URL for storing in Google Sheets
  const GOOGLE_SHEET_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Construct formatted WhatsApp message to 6384640244
    const whatsappText = `Hello Ruban! 👋\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `✉️ *Email:* ${formData.email}\n\n` +
      `💬 *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/916384640244?text=${encodeURIComponent(whatsappText)}`;

    try {
      // 1. Instant Email Notification to ruban5398@gmail.com
      fetch("https://formsubmit.co/ajax/ruban5398@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `🚀 New Portfolio Message from ${formData.name}`
        })
      }).catch((err) => console.log("Email notification:", err));

      // 2. Open Direct WhatsApp Chat to +916384640244
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    } catch (err) {
      console.error("Submission error:", err);
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-watermark">CONTACT</div>

      <div className="container">
        {/* Cinematic Headline */}
        <motion.div 
          className="contact-headline-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">09 // INITIATE COLLABORATION</span>
          <StrokeText 
            text="GET IN TOUCH" 
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

        <div className="contact-grid">
          {/* Left Info Column */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <BorderGlow
              backgroundColor="rgba(13, 13, 18, 0.65)"
              borderRadius={18}
              glowRadius={30}
              glowIntensity={0.8}
              colors={['#ffffff', '#a1a1aa', '#52525b']}
            >
              <div className="contact-card-inner">
                <h3 className="contact-card-title">Let's talk about your project</h3>
                <p className="contact-card-sub">Ready to bring your ideas to life? Reach out to me, and let's craft something amazing together.</p>

                <div className="contact-methods">
                  <div className="contact-method-item">
                    <div className="method-icon-box"><Mail size={20} /></div>
                    <div>
                      <span className="method-label">Email</span>
                      <a href="mailto:ruban5398@gmail.com" className="method-value">ruban5398@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="method-icon-box"><MapPin size={20} /></div>
                    <div>
                      <span className="method-label">Location</span>
                      <p className="method-value">Madurai, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="contact-method-item">
                    <div className="method-icon-box"><Phone size={20} /></div>
                    <div>
                      <span className="method-label">WhatsApp</span>
                      <a href="https://wa.me/916384640244" target="_blank" rel="noopener noreferrer" className="method-value">6384640244</a>
                    </div>
                  </div>
                </div>

                <div className="social-row">
                  <a 
                    href="https://github.com/RUBANRAJS-hub" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-badge-link"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rubanraj-s-" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-badge-link"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Right Contact Form Column */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <BorderGlow
              backgroundColor="rgba(13, 13, 18, 0.65)"
              borderRadius={18}
              glowRadius={30}
              glowIntensity={0.8}
              colors={['#ffffff', '#a1a1aa', '#52525b']}
            >
              <div className="contact-card-inner">
                <form onSubmit={handleSubmit} className="spatial-form">
                  <div className="form-group-field">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="spatial-input"
                    />
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="email" className="field-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="spatial-input"
                    />
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      className="spatial-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn-magnetic" 
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="spatial-success-msg">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
