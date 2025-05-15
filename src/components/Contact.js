import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeadset, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { init, sendForm } from '@emailjs/browser';
import usePerformanceOptimization from '../hooks/usePerformanceOptimization';

const Contact = () => {
  const { isReducedMotion, isSlowConnection, isLowEndDevice } = usePerformanceOptimization();
  const isReducedPerformance = isReducedMotion || isSlowConnection || isLowEndDevice;
  
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    // Initialize EmailJS with your public key
    init('2ln1mZJz4AbfroKEg');
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing again
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);
    
    sendForm('service_npcwd78', 'template_08os0t8', form.current)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true);
        setLoading(false);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setError('Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReducedPerformance ? 0.05 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isReducedPerformance ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isReducedPerformance ? 0.3 : 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <div className="contact">
      <section className="section">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: isReducedPerformance ? 0.3 : 0.6 }}
          >
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: isReducedPerformance ? -20 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: isReducedPerformance ? 0.3 : 0.6, delay: isReducedPerformance ? 0 : 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: isReducedPerformance ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isReducedPerformance ? 0.3 : 0.5, delay: isReducedPerformance ? 0 : 0.1 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: isReducedPerformance ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isReducedPerformance ? 0.3 : 0.5, delay: isReducedPerformance ? 0 : 0.2 }}
              >
                Have questions about TruStudSel? Want to partner with us or bring the app to your campus?
                Our team is here to help!
              </motion.p>
              
              <motion.div 
                className="contact-methods"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div className="contact-method" variants={itemVariants}>
                  <motion.div 
                    className="contact-icon"
                    whileHover={isReducedPerformance ? {} : { 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaPhone />
                  </motion.div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (716) 808-3024</p>
                  </div>
                </motion.div>
                
                <motion.div className="contact-method" variants={itemVariants}>
                  <motion.div 
                    className="contact-icon"
                    whileHover={isReducedPerformance ? {} : { 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div>
                    <h3>Email</h3>
                    <p>trustudsel@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div className="contact-method" variants={itemVariants}>
                  <motion.div 
                    className="contact-icon"
                    whileHover={isReducedPerformance ? {} : { 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div>
                    <h3>Address</h3>
                    <p>1406 17th way, Birmingham, AL 35205</p>
                  </div>
                </motion.div>
                
                <motion.div className="contact-method" variants={itemVariants}>
                  <motion.div 
                    className="contact-icon"
                    whileHover={isReducedPerformance ? {} : { 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <FaHeadset />
                  </motion.div>
                  <div>
                    <h3>Support</h3>
                    <p>Available 24/7</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: isReducedPerformance ? 20 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: isReducedPerformance ? 0.3 : 0.6, delay: isReducedPerformance ? 0 : 0.3 }}
              whileHover={isReducedPerformance ? {} : { boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)" }}
            >
              {submitted ? (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: isReducedPerformance ? 0.3 : 0.5 }}
                >
                  <motion.h2
                    initial={{ y: isReducedPerformance ? -10 : -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    Message Sent!
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: isReducedPerformance ? 0.3 : 0.5 }}
                  >
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </motion.p>
                  <motion.button 
                    className="btn-primary"
                    onClick={() => setSubmitted(false)}
                    whileHover={isReducedPerformance ? {} : { scale: 1.05 }}
                    whileTap={isReducedPerformance ? {} : { scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  ref={form}
                  className="contact-form" 
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.h2 variants={itemVariants}>
                    Send Us a Message
                  </motion.h2>
                  
                  {error && (
                    <motion.div 
                      className="error-message"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.div>
                  )}
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`input-animation ${formErrors.name ? 'input-error' : ''}`}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                    />
                    {formErrors.name && (
                      <div className="field-error" id="name-error">{formErrors.name}</div>
                    )}
                  </motion.div>
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`input-animation ${formErrors.email ? 'input-error' : ''}`}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                    />
                    {formErrors.email && (
                      <div className="field-error" id="email-error">{formErrors.email}</div>
                    )}
                  </motion.div>
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`input-animation ${formErrors.subject ? 'input-error' : ''}`}
                      aria-describedby={formErrors.subject ? "subject-error" : undefined}
                    />
                    {formErrors.subject && (
                      <div className="field-error" id="subject-error">{formErrors.subject}</div>
                    )}
                  </motion.div>
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`input-animation ${formErrors.message ? 'input-error' : ''}`}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                    ></textarea>
                    {formErrors.message && (
                      <div className="field-error" id="message-error">{formErrors.message}</div>
                    )}
                  </motion.div>
                  
                  <motion.button 
                    type="submit" 
                    className={`btn-primary submit-btn ${loading ? 'loading' : ''}`}
                    variants={itemVariants}
                    whileHover={{ scale: loading || isReducedPerformance ? 1 : 1.02 }}
                    whileTap={{ scale: loading || isReducedPerformance ? 1 : 0.98 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <>
                        <FaPaperPlane className="send-icon" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <style jsx="true">{`
        .contact {
          background-color: #fffaf0;
        }
        
        .contact-hero {
          padding: 100px 0 40px;
          background-color: #fffaf0;
          position: relative;
          overflow: hidden;
        }
        
        .section {
          position: relative;
          overflow: hidden;
          background-color: #fffaf0;
          padding: 120px 0;
        }
        
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          background-color: transparent;
          opacity: ${isReducedPerformance ? 0.3 : 0.7};
        }
        
        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(60px);
          background-color: rgba(247, 179, 5, 0.15);
          animation-duration: ${isReducedPerformance ? '30s' : '15s'};
        }
        
        .blob-1 {
          width: 600px;
          height: 600px;
          background-color: rgba(247, 179, 5, 0.15);
          top: -200px;
          right: -100px;
          animation: ${isReducedMotion ? 'none' : 'blob-move-1 15s infinite alternate ease-in-out'};
        }
        
        .blob-2 {
          width: 500px;
          height: 500px;
          background-color: rgba(247, 179, 5, 0.1);
          bottom: -150px;
          left: -100px;
          animation: ${isReducedMotion ? 'none' : 'blob-move-2 18s infinite alternate ease-in-out'};
        }
        
        @keyframes blob-move-1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(50px, 50px) scale(1.1);
          }
        }
        
        @keyframes blob-move-2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-50px, 50px) scale(1.15);
          }
        }
        
        .contact-hero h1 {
          font-size: 2rem;
          margin-bottom: 0px;
          color: var(--text-dark);
          position: relative;
          z-index: 2;
        }
        
        .contact-hero p {
          font-size: 1.5rem;
          opacity: 0.9;
          color: var(--text-dark);
          position: relative;
          z-index: 2;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        
        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        
        .contact-info h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .contact-info h2:hover::after {
          width: 100px;
        }
        
        .contact-info > p {
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .contact-methods {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        
        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          transition: all 0.3s ease;
        }
        
        .contact-method:hover {
          transform: translateY(-5px);
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--primary-color);
          color: var(--text-dark);
          font-size: 1.2rem;
          transition: all 0.3s ease;
          will-change: transform;
        }
        
        .contact-method h3 {
          margin-bottom: 5px;
          font-size: 1.1rem;
          position: relative;
          display: inline-block;
        }
        
        .contact-method h3::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .contact-method:hover h3::after {
          width: 100%;
        }
        
        .contact-form-container {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .contact-form h2 {
          margin-bottom: 30px;
          font-size: 1.8rem;
          background: black;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .input-animation {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: all 0.3s ease;
          font-family: inherit;
          position: relative;
          z-index: 1;
          background-color: rgba(255, 255, 255, 0.8);
        }
        
        .input-animation:focus {
          border-color: var(--primary-color);
          outline: none;
          box-shadow: 0 0 0 3px rgba(247, 179, 5, 0.2);
          transform: translateY(-2px);
        }
        
        .input-error {
          border-color: #d32f2f;
          background-color: rgba(255, 0, 0, 0.03);
        }
        
        .input-error:focus {
          border-color: #d32f2f;
          box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.2);
        }
        
        .field-error {
          color: #d32f2f;
          font-size: 0.8rem;
          margin-top: 5px;
          padding-left: 5px;
        }
        
        .submit-btn {
          width: 100%;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.7s ease;
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .send-icon {
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover .send-icon {
          transform: translateX(5px);
        }
        
        .success-message {
          text-align: center;
          padding: 30px 0;
        }
        
        .success-message h2 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-size: 2rem;
        }
        
        .success-message p {
          margin-bottom: 30px;
          font-size: 1.1rem;
        }
        
        .map-container {
          padding: 30px 0;
        }
        
        .map {
          height: 400px;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 30px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .map-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(245, 245, 245, 0.8);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        
        .map-marker {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 15px;
          filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
        }
        
        .error-message {
          background-color: rgba(255, 0, 0, 0.1);
          color: #d32f2f;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 0.9rem;
        }
        
        .loading {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .loading-spinner {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-methods {
            grid-template-columns: 1fr;
          }
          
          .contact-hero h1 {
            font-size: 2.5rem;
          }
          
          .contact-hero p {
            font-size: 1.2rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .blob {
            animation: none !important;
          }
          
          .input-animation:focus {
            transform: none;
          }
          
          .contact-method:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 