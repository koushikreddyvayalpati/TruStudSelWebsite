import React from 'react';
import { motion } from 'framer-motion';
import { FaList, FaCheckCircle, FaSyncAlt, FaMobileAlt, FaUserCircle, 
  FaFileAlt, FaCopyright, FaExclamationTriangle, FaUsers, FaShieldAlt, 
  FaDoorOpen, FaExclamationCircle, FaBalanceScale, FaGavel, FaEnvelope, 
  FaCalendarAlt } from 'react-icons/fa';

const Terms = () => {
  return (
    <section className="terms-section section">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="terms-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Terms and Conditions</h1>
          <p>Please read these terms carefully before using TruStudSel</p>
          <span className="last-updated"><FaCalendarAlt /> Last Updated: April 27, 2025</span>
        </motion.div>

        <div className="terms-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Welcome to TruStudSel. These Terms and Conditions govern your use of the TruStudSel mobile application 
            and related services (collectively referred to as the "Service"). By accessing or using our Service, 
            you agree to be bound by these Terms. If you disagree with any part of the Terms, please do not use our Service.
          </motion.p>

          <motion.div 
            className="toc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2><FaList /> Table of Contents</h2>
            <ul className="toc-list">
              <li><a href="#acceptance"><FaCheckCircle /> Acceptance of Terms</a></li>
              <li><a href="#changes"><FaSyncAlt /> Changes to Terms</a></li>
              <li><a href="#access"><FaMobileAlt /> Access to the Service</a></li>
              <li><a href="#accounts"><FaUserCircle /> User Accounts</a></li>
              <li><a href="#content"><FaFileAlt /> User Content</a></li>
              <li><a href="#intellectual"><FaCopyright /> Intellectual Property</a></li>
              <li><a href="#prohibited"><FaExclamationTriangle /> Prohibited Uses</a></li>
              <li><a href="#conduct"><FaUsers /> User Conduct</a></li>
              <li><a href="#privacy"><FaShieldAlt /> Privacy Policy</a></li>
              <li><a href="#termination"><FaDoorOpen /> Termination</a></li>
              <li><a href="#disclaimer"><FaExclamationCircle /> Disclaimer</a></li>
              <li><a href="#liability"><FaBalanceScale /> Limitation of Liability</a></li>
              <li><a href="#governing"><FaGavel /> Governing Law</a></li>
              <li><a href="#contact"><FaEnvelope /> Contact Us</a></li>
            </ul>
          </motion.div>

          <div className="terms-sections">
            <motion.div 
              className="section-container" 
              id="acceptance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaCheckCircle /> 1. Acceptance of Terms</h2>
              <p>
                By accessing or using the TruStudSel application, you acknowledge that you have read, understood, and agree to be bound by
                these Terms and Conditions, regardless of whether you are a registered user. If you are using the Service on behalf of an
                organization, you are agreeing to these Terms on behalf of that organization.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaSyncAlt /> 2. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will always post the most current version on our website and may
                notify you through the Service. Your continued use of the Service after the changes have been made will constitute your
                acceptance of the revised Terms.
              </p>
              <div className="important">
                <p>
                  <strong>Important:</strong> It is your responsibility to review these Terms periodically for changes. If you do not agree to any 
                  of the revised terms, please stop using our Service immediately.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="access"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaMobileAlt /> 3. Access to the Service</h2>
              <p>
                TruStudSel grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal,
                non-commercial purposes. This license is subject to these Terms and does not include:
              </p>
              <ul>
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose</li>
                <li>Attempting to decompile or reverse engineer any software contained in the Service</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by TruStudSel at any time.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="accounts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaUserCircle /> 4. User Accounts</h2>
              <p>
                To access certain features of the Service, you may be required to create a user account. You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Restricting access to your device</li>
                <li>Assuming responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                You must provide accurate, current, and complete information during the registration process and update such information to
                keep it accurate, current, and complete. We reserve the right to suspend or terminate your account if any information
                provided proves to be inaccurate, not current, or incomplete.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaFileAlt /> 5. User Content</h2>
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or
                other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality,
                reliability, and appropriateness.
              </p>
              <p>
                By posting Content on or through the Service, you represent and warrant that:
              </p>
              <ul>
                <li>The Content is yours and/or you have the right to use it and grant us the rights and license as provided in these Terms</li>
                <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity</li>
              </ul>
              <p>
                We reserve the right to remove any Content from the Service at our discretion, without prior notice, for any reason whatsoever.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="intellectual"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaCopyright /> 6. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the
                exclusive property of TruStudSel and its licensors. The Service is protected by copyright, trademark, and other laws of both the
                United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service
                without the prior written consent of TruStudSel.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="prohibited"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaExclamationTriangle /> 7. Prohibited Uses</h2>
              <p>
                You agree not to use the Service:
              </p>
              <ul>
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To exploit, harm, or attempt to exploit or harm minors in any way</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>
                <li>To impersonate or attempt to impersonate TruStudSel, a TruStudSel employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm TruStudSel or users of the Service or expose them to liability</li>
              </ul>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="conduct"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaUsers /> 8. User Conduct</h2>
              <p>
                As a TruStudSel user, you agree not to:
              </p>
              <ul>
                <li>Post or sell illegal, harmful, or fraudulent items</li>
                <li>Upload or share offensive, abusive, or obscene content</li>
                <li>Spam, harass, or impersonate other users</li>
                <li>Attempt to breach the security or functionality of the Service</li>
                <li>Post or share nudity or sexually explicit content</li>
              </ul>
              <p>
                TruStudSel reserves the right to remove content that violates these guidelines and to suspend or terminate accounts of users who repeatedly violate these terms.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="privacy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaShieldAlt /> 9. Privacy Policy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please
                review our Privacy Policy for information on how we collect, use, and share your information.
              </p>
              <p>
                By using the Service, you acknowledge that you have read and understood our Privacy Policy and agree to the collection, use, and
                disclosure of your information as described therein.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="termination"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaDoorOpen /> 10. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our
                sole discretion, for any reason whatsoever, including, but not limited to, a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service, or follow the account deletion process
                within the application settings. All provisions of the Terms which by their nature should survive termination shall survive
                termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="disclaimer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaExclamationCircle /> 11. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
                provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              <p>
                TruStudSel does not warrant that (a) the Service will function uninterrupted, secure, or available at any particular time or
                location; (b) any errors or defects will be corrected; (c) the Service is free of viruses or other harmful components; or (d)
                the results of using the Service will meet your requirements.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="liability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaBalanceScale /> 12. Limitation of Liability</h2>
              <p>
                In no event shall TruStudSel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Service; (b)
                any conduct or content of any third party on the Service; (c) any content obtained from the Service; and (d) unauthorized access,
                use, or alteration of your transmissions or content.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="governing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaGavel /> 13. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of
                law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will
                remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any
                prior agreements we might have had between us regarding the Service.
              </p>
            </motion.div>

            <motion.div 
              className="section-container" 
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2><FaEnvelope /> 14. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:trustudsel@gmail.com">trustudsel@gmail.com</a></li>
              </ul>
            </motion.div>

            <motion.div 
              className="contact-us"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Have Questions or Concerns?</h3>
              <p>If you need clarification on any part of our Terms and Conditions, our support team is here to help.</p>
              <a href="mailto:trustudsel@gmail.com" className="btn-primary">Contact Support</a>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .terms-section {
          padding: 100px 0;
          min-height: 100vh;
          position: relative;
          background-color: #fffaf0;
          overflow: hidden;
        }
        
        .terms-header {
          text-align: center;
          color: var(--text-dark);
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }
        
        .terms-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 15px;
          background: linear-gradient(135deg, var(--primary-color), #ff9a3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .terms-header p {
          font-size: 1.2rem;
          opacity: 0.8;
          margin-bottom: 15px;
        }
        
        .last-updated {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(247, 179, 5, 0.1);
          border-radius: 20px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0 auto;
          width: fit-content;
        }
        
        .terms-content {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
          padding: 50px;
          position: relative;
          z-index: 2;
          margin-bottom: 50px;
        }
        
        .terms-content > p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 30px;
        }
        
        .toc {
          background-color: rgba(247, 179, 5, 0.05);
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
          border-left: 5px solid var(--primary-color);
        }
        
        .toc h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--text-dark);
        }
        
        .toc-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          list-style: none;
          padding: 0;
        }
        
        .toc-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          background-color: white;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-weight: 500;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
        }
        
        .toc-list a:hover {
          transform: translateY(-3px);
          background-color: var(--primary-color);
          color: var(--text-dark);
          box-shadow: 0 10px 15px rgba(247, 179, 5, 0.2);
        }
        
        .toc-list svg {
          color: var(--primary-color);
        }
        
        .toc-list a:hover svg {
          color: var(--text-dark);
        }
        
        .section-container {
          background-color: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .section-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        
        .section-container h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          color: var(--text-dark);
          padding-bottom: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .section-container h2 svg {
          color: var(--primary-color);
        }
        
        .section-container p {
          margin-bottom: 20px;
          line-height: 1.7;
        }
        
        .section-container ul {
          margin: 20px 0;
          padding-left: 20px;
        }
        
        .section-container li {
          margin-bottom: 10px;
          line-height: 1.7;
        }
        
        .section-container li::marker {
          color: var(--primary-color);
        }
        
        .important {
          background-color: rgba(247, 179, 5, 0.08);
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid var(--primary-color);
        }
        
        .important p {
          margin-bottom: 0;
        }
        
        .contact-us {
          background: linear-gradient(135deg, var(--primary-color), #ff9a3c);
          border-radius: 12px;
          padding: 40px;
          color: var(--text-dark);
          text-align: center;
          margin-top: 50px;
        }
        
        .contact-us h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }
        
        .contact-us p {
          margin-bottom: 25px;
          font-size: 1.1rem;
        }
        
        .contact-us .btn-primary {
          background-color: white;
          color: var(--text-dark);
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          display: inline-block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-us .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
          .terms-section {
            padding: 80px 0;
          }
          
          .terms-header h1 {
            font-size: 2.5rem;
          }
          
          .terms-content {
            padding: 30px;
            margin-bottom: 30px;
          }
          
          .toc-list {
            grid-template-columns: 1fr;
          }
          
          .section-container {
            padding: 25px;
          }
          
          .section-container h2 {
            font-size: 1.3rem;
          }
          
          .contact-us {
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Terms; 