import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset overflow when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const overlayVariants = {
    closed: { 
      opacity: 0,
      transition: { 
        duration: 0.3 
      }
    },
    open: { 
      opacity: 1,
      transition: { 
        duration: 0.3 
      }
    }
  };

  // Determine navbar style based on page and scroll state
  const getNavbarClass = () => {
    if (scrolled) {
      return 'scrolled';
    }
    return '';
  };

  const handleDownloadClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      const downloadSection = document.querySelector('.download');
      if (downloadSection) {
        window.scrollTo({
          top: downloadSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage and then to download section
      // This will be handled by the Link component
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${getNavbarClass()}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex-between">
        <motion.div variants={itemVariants}>
          <Link to="/" className="logo">
            <img src="/logo.jpg" alt="TruStudSel Logo" className="logo-icon" />
            <span className="logo-text">TruStudSel</span>
          </Link>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="menu-overlay" 
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            ></motion.div>
          )}
        </AnimatePresence>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <AnimatePresence>
            {isOpen ? (
              <motion.div 
                className="mobile-menu"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div className="mobile-menu-header">
                  <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
                </motion.div>
                <motion.ul className="nav-list">
                  <motion.li variants={itemVariants}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                  </motion.li>
                </motion.ul>
                {/* <motion.div variants={itemVariants} className="mobile-cta">
                  <Link to="/" className="btn-primary nav-cta" onClick={handleDownloadClick}>
                    Download App
                  </Link>
                </motion.div> */}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.ul className="nav-list desktop-menu">
            <motion.li variants={itemVariants}>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </motion.li>
          </motion.ul>
          {/* <motion.div variants={itemVariants} className="desktop-menu">
            <Link to="/" className="btn-primary nav-cta" onClick={handleDownloadClick}>
              Download App
            </Link>
          </motion.div> */}
        </div>

        <motion.div 
          className="menu-icon" 
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 12px 0;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border-bottom: ${scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'};
        }

        .scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 10px 0;
        }

        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-dark);
          transition: transform 0.3s ease;
        }
        
        .logo:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          height: 28px;
          margin-right: 8px;
          color: var(--primary-color);
        }
        
        .logo-text {
          background: black;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin-right: 25px;
          align-items: center;
          height: 100%;
        }

        .nav-list li {
          margin: 0 16px;
          height: 10%;
          display: flex;
          align-items: center;
        }

        .nav-list li a {
          position: relative;
          font-weight: 500;
          transition: all 0.3s ease;
          color: rgba(0, 0, 0, 0.8);
          padding: 5px 2px;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }
        
        .nav-list li a.active {
          color: var(--primary-color);
          font-weight: 600;
        }

        .nav-list li a:after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }

        .nav-list li a:hover:after,
        .nav-list li a.active:after {
          width: 100%;
        }

        .nav-cta {
          margin-left: 15px;
          background-color: var(--primary-color);
          color: var(--text-dark);
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .menu-icon {
          display: none;
          font-size: 20px;
          cursor: pointer;
          color: inherit;
          padding: 5px;
          border-radius: 4px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        .mobile-menu {
          display: none;
        }
        
        .desktop-menu {
          display: flex;
          height: 100%;
          align-items: center;
        }
        
        .menu-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          
          .mobile-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 0;
            position: relative;
          }
          
          .mobile-menu-header {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 15px 15px 5px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
          }
          
          .close-icon {
            font-size: 22px;
            cursor: pointer;
            color: #333;
          }
        
          .nav-menu {
            display: none;
          }
          
          .nav-menu.active {
            display: block;
            position: fixed;
            top: 0;
            right: 0;
            width: 75%;
            height: 100vh;
            background-color: white;
            z-index: 999;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            padding: 0;
            overflow-y: auto;
          }
          
          .menu-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }
          
          .menu-icon {
            display: block;
            z-index: 100;
            position: relative;
            font-size: 22px;
          }
          
          .mobile-menu .nav-list {
            flex-direction: column;
            margin: 0;
            padding: 45px 0 0;
            width: 100%;
            margin-bottom: 0;
          }
          
          .mobile-menu .nav-list li {
            margin: 0;
            padding: 0;
            font-size: 1.1rem;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .mobile-menu .nav-list li:last-child {
            border-bottom: none;
          }
          
          .mobile-menu .nav-list li a {
            display: block;
            width: 100%;
            padding: 12px 0;
            font-weight: 500;
          }
          
          .mobile-cta {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: auto;
            margin-bottom: 20px;
          }
          
          .mobile-menu .nav-cta {
            margin: 0;
            width: 80%;
            text-align: center;
            padding: 12px 15px;
            font-size: 0.9rem;
          }
          
          .logo-icon {
            height: 24px;
          }
          
          .logo-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar; 