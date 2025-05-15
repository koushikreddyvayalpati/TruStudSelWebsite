import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGraduationCap, FaGooglePlay, FaApple, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialIcon = memo(({ href, icon: Icon }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -5, backgroundColor: 'var(--primary-color)' }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Icon />
  </motion.a>
));

// Custom link that scrolls to top when clicked
const CustomLink = memo(({ to, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
});

const LinkGroup = memo(({ title, links }) => (
  <div className="link-group">
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {link.icon ? (
            <div className="contact-item">
              {link.icon}
              <span>{link.text}</span>
            </div>
          ) : (
            <CustomLink to={link.to}>{link.text}</CustomLink>
          )}
        </motion.li>
      ))}
    </ul>
  </div>
));

const AppLink = memo(({ icon: Icon, store, href }) => (
  <motion.a 
    href={href}
    className="app-link"
    whileHover={{ scale: 1.05, color: 'var(--primary-color)' }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon /> {store}
  </motion.a>
));

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button 
      className="scroll-to-top"
      onClick={scrollToTop}
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp />
    </motion.button>
  );
};

const Footer = () => {
  const companyLinks = [
    { to: "/about", text: "About Us" },
    { to: "/contact", text: "Contact Us" },
  ];

  const legalLinks = [
    { to: "/terms", text: "Terms of Service" },
    { to: "/privacy", text: "Privacy Policy" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "1406 17th way, Birmingham, AL 35205" },
    { icon: <FaPhone />, text: "+1 (716) 808-3024" },
    { icon: <FaEnvelope />, text: "trustudsel@gmail.com" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            <CustomLink to="/" className="logo">
              <div className="logo-container">
                <img src="/logo.jpg" alt="TruStudSel Logo" className="logo-icon" />
                <text style={{fontSize: "2rem", fontWeight: "bold", color: "#f7b305"}}>TruStudSel</text>
              </div>
            </CustomLink>
            <p>The ultimate student marketplace app for campus communities.</p>
            <div className="social-icons">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61575910037345" icon={FaFacebookF} />
              <SocialIcon href="https://x.com/TruStudSel" icon={FaTwitter} />
              <SocialIcon href="https://www.instagram.com/trustudsel/" icon={FaInstagram} />
              <SocialIcon href="https://www.linkedin.com/company/trustudsell/" icon={FaLinkedinIn} />
            </div>
          </div>

          <div className="footer-links">
            <LinkGroup title="Company" links={companyLinks} />
            <LinkGroup title="Legal" links={legalLinks} />
            <LinkGroup title="Contact" links={contactInfo} />
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} TruStudSel. All rights reserved.</p>
          <div className="app-download">
            <p>Get the app:</p>
            <AppLink icon={FaGooglePlay} store="Play Store" href="https://play.google.com/store/apps/details?id=com.trustudsel" />
            <AppLink icon={FaApple} store="App Store" href="https://apps.apple.com/us/app/trustudsel/id6745458944" />
          </div>
        </motion.div>
      </div>

      <ScrollToTop />

      <style jsx="true">{`
        .footer {
          background-color: black;
          color: var(--text-light);
          padding: 80px 0 30px;
          position: relative;
          overflow: hidden;
        }
        
        .footer-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, var(--primary-color), #ff9a3c, var(--primary-color));
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 60px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-logo .logo {
          display: flex;
          align-items: center;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: fit-content;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 5px;
          object-fit: contain;
          border-radius: 8px;
        }
        
        .logo-text .highlight {
          color: var(--primary-color);
        }
        
        .footer-logo p {
          margin: 20px 0;
          opacity: 0.8;
          line-height: 1.7;
          font-size: 1rem;
          max-width: 300px;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .link-group h3 {
          font-size: 1.2rem;
          margin-bottom: 25px;
          font-weight: 600;
          position: relative;
          padding-bottom: 12px;
        }
        
        .link-group h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 2px;
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group ul li {
          margin-bottom: 15px;
        }
        
        .link-group ul li a {
          opacity: 0.8;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          display: inline-block;
        }
        
        .link-group ul li a:hover {
          opacity: 1;
          color: var(--primary-color);
          transform: translateX(5px);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .contact-item:hover {
          opacity: 1;
        }
        
        .contact-item svg {
          color: var(--primary-color);
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
        }
        
        .footer-bottom p {
          opacity: 0.7;
          font-size: 0.9rem;
        }
        
        .app-download {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .app-download p {
          margin: 0;
        }
        
        .app-link {
          display: flex;
          align-items: center;
          gap: 5px;
          opacity: 0.8;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .scroll-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 45px;
          height: 45px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          z-index: 100;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-logo p {
            max-width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .social-icons {
            justify-content: center;
          }
          
          .footer-logo {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .link-group h3::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .link-group h3, .link-group ul {
            text-align: center;
          }
          
          .contact-item {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default memo(Footer); 