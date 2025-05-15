import React, { useEffect, useState } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Check for slow connection
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection && (connection.saveData || 
          connection.effectiveType === 'slow-2g' || 
          connection.effectiveType === '2g' || 
          connection.effectiveType === '3g')) {
        setIsSlowConnection(true);
      }
      
      // Listen for connection changes
      const updateConnectionStatus = () => {
        if (connection.saveData || 
            connection.effectiveType === 'slow-2g' || 
            connection.effectiveType === '2g' || 
            connection.effectiveType === '3g') {
          setIsSlowConnection(true);
        } else {
          setIsSlowConnection(false);
        }
      };
      
      connection.addEventListener('change', updateConnectionStatus);
      return () => connection.removeEventListener('change', updateConnectionStatus);
    }
  }, []);
  
  // Simplified animation settings for low-end devices
  const getAnimationSettings = () => {
    return {
      initial: isReducedMotion ? { opacity: 0 } : { opacity: 0, x: -50 },
      animate: isReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 },
      transition: { 
        duration: isReducedMotion ? 0.3 : 0.7,
        ease: "easeOut" 
      }
    };
  };
  
  // Simplified phone animation for low-end devices
  const getPhoneAnimation = () => {
    if (isReducedMotion || isSlowConnection) {
      return {
        animate: {}, // No animation for reduced motion
        transition: {}
      };
    }
    
    return {
      animate: { y: [0, -15, 0] },
      transition: { 
        repeat: Infinity, 
        duration: 3,
        ease: "easeInOut"
      }
    };
  };
  
  return (
    <section className="hero">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-flex">
          <motion.div 
            className="hero-content"
            {...getAnimationSettings()}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isReducedMotion ? 0.3 : 0.7, delay: 0.2 }}
            >
              Your Ultimate Student Marketplace
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isReducedMotion ? 0.3 : 0.7, delay: 0.4 }}
            >
              TruStudSel connects students to buy, sell, and exchange items within their campus community. 
              Find everything from textbooks to electronics at student-friendly prices.
            </motion.p>
            
            <motion.div 
              className="download-buttons"
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isReducedMotion ? 0.3 : 0.7, delay: 0.6 }}
            >
              <motion.a 
                href="https://play.google.com/store/apps/details?id=com.trustudsel" 
                className="download-btn primary btn-hover-effect"
                whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                whileTap={isReducedMotion ? {} : { scale: 0.95 }}
              >
                <FaGooglePlay className="store-icon" />
                <div>
                  <small>GET IT ON</small>
                  <p>Google Play</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://apps.apple.com/us/app/trustudsel/id6745458944" 
                className="download-btn btn-hover-effect"
                whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                whileTap={isReducedMotion ? {} : { scale: 0.95 }}
              >
                <FaApple className="store-icon" />
                <div>
                  <small>Download on the</small>
                  <p>App Store</p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: isReducedMotion ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isReducedMotion ? 0.3 : 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="phone-mockup"
              {...getPhoneAnimation()}
            >
              <div className="iphone-notch"></div>
              <img 
                src="/phone1.png" 
                alt="Mobile app" 
                className="phone-image" 
                loading="lazy"
                width="270"
                height="550"
                decoding="async"
              />
              <div className="iphone-home-indicator"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          padding-top: 80px;
          position: relative;
          min-height: 100vh;
        }
        
        .hero-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .animated-bg {
          opacity: ${isReducedMotion || isSlowConnection ? 0.3 : 0.7};
          transition: opacity 0.3s ease;
        }
        
        .hero-image-container {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          padding-top: 20px;
          contain: layout style;
        }
        
        .phone-mockup {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 270px;
          height: 550px;
          background-color: #000;
          border-radius: 40px;
          border: 1px solid #333;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 8px;
          margin-top: -30px;
        }
        
        .iphone-notch {
          position: absolute;
          top: 0;
          width: 150px;
          height: 30px;
          background-color: #000;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          z-index: 3;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .iphone-notch::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #333;
          border-radius: 50%;
          top: 12px;
          right: 50px;
        }
        
        .iphone-notch::before {
          content: '';
          position: absolute;
          width: 40px;
          height: 6px;
          background-color: #333;
          border-radius: 3px;
          top: 12px;
          left: 55px;
        }
        
        .iphone-home-indicator {
          position: absolute;
          bottom: 8px;
          width: 100px;
          height: 5px;
          background-color: #333;
          border-radius: 3px;
          z-index: 3;
        }
        
        .phone-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          z-index: 1;
          contain: content;
        }
        
        .download-buttons div {
          display: flex;
          flex-direction: column;
        }
        
        .download-buttons small {
          font-size: 0.7rem;
          opacity: 0.8;
        }
        
        .download-buttons p {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .hero-flex {
            flex-direction: column;
          }
          
          .hero {
            min-height: unset;
            padding-top: 80px;
            padding-bottom: 60px;
          }
          
          .hero-content {
            margin: 0 auto;
            text-align: center;
            width: 100%;
          }
          
          .hero-image-container {
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            width: 100%;
            padding-top: 0;
          }
          
          .phone-mockup {
            width: 220px;
            height: 450px;
            margin-top: 0;
          }
          
          .download-buttons {
            justify-content: center;
            margin: 0 auto;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animated-bg .blob {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 