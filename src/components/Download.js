import React, { useMemo } from 'react';
import { FaGooglePlay, FaApple, FaMobile, FaQrcode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import usePerformanceOptimization from '../hooks/usePerformanceOptimization';

const IPhoneFrame = ({ imageUrl, initialAnimation, delay, isReducedPerformance }) => {
  // Simplified animation for low-end devices
  const animationProps = isReducedPerformance ? {
    whileHover: {},
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 }
  } : {
    whileHover: { y: -10, boxShadow: "0 30px 50px rgba(0, 0, 0, 0.3)" },
    initial: initialAnimation,
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay }
  };

  return (
    <motion.div 
      className="screen iphone-frame"
      {...animationProps}
    >
      <div className="iphone-notch"></div>
      <img 
        src={imageUrl} 
        alt="TruStudSel app screen" 
        className="phone-screen-image" 
        loading="lazy"
        width="220"
        height="440"
        decoding="async"
      />
      <div className="iphone-home-indicator"></div>
    </motion.div>
  );
};

const AppStoreButton = ({ icon, store, label, isPrimary, isReducedPerformance, href }) => {
  const animationProps = isReducedPerformance ? {
    whileHover: {},
    whileTap: {}
  } : {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`download-btn ${isPrimary ? 'primary' : ''} btn-hover-effect`}
      {...animationProps}
    >
      {icon}
      <div>
        <small>{label}</small>
        <p>{store}</p>
      </div>
    </motion.a>
  );
};

const Download = () => {
  const { 
    isReducedMotion, 
    isSlowConnection, 
    isLowEndDevice,
    shouldEnableAnimations
  } = usePerformanceOptimization();
  
  // Flag to determine if we should reduce animations
  const isReducedPerformance = isReducedMotion || isSlowConnection || isLowEndDevice;
  
  // Memo to avoid recreation on every render
  const phoneScreens = useMemo(() => [
    { 
      imageUrl: "/phone2.png", 
      initialAnimation: { x: -50, opacity: 0 }, 
      delay: isReducedPerformance ? 0.2 : 0.5 
    },
    { 
      imageUrl: "/phone3.png", 
      initialAnimation: { y: 50, opacity: 0 }, 
      delay: isReducedPerformance ? 0.3 : 0.6 
    },
    { 
      imageUrl: "/phone4.png", 
      initialAnimation: { x: 50, opacity: 0 }, 
      delay: isReducedPerformance ? 0.4 : 0.7 
    }
  ], [isReducedPerformance]);

  // Helper function for animation configs
  const getAnimationConfig = (fullAnimation, reducedAnimation) => {
    return isReducedPerformance ? reducedAnimation : fullAnimation;
  };

  return (
    <section className="download section">
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container text-center">
        <div className="download-content">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: isReducedPerformance ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: isReducedPerformance ? 0.3 : 0.5 }}
          >
            Get TruStudSel Today
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: isReducedPerformance ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: isReducedPerformance ? 0.3 : 0.5, 
              delay: isReducedPerformance ? 0 : 0.1 
            }}
          >
            Download our app now and start buying and selling on your campus. 
            Join thousands of students already using TruStudSel!
          </motion.p>
          
          <motion.div 
            className="download-buttons"
            initial={{ opacity: 0, y: isReducedPerformance ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: isReducedPerformance ? 0.3 : 0.5, 
              delay: isReducedPerformance ? 0 : 0.2 
            }}
          >
            <AppStoreButton 
              icon={<FaGooglePlay className="store-icon" />}
              store="Google Play"
              label="GET IT ON"
              isPrimary={true}
              isReducedPerformance={isReducedPerformance}
              href="https://play.google.com/store/apps/details?id=com.trustudsel"
            />
            
            <AppStoreButton 
              icon={<FaApple className="store-icon" />}
              store="App Store"
              label="Download on the"
              isPrimary={false}
              isReducedPerformance={isReducedPerformance}
              href="https://apps.apple.com/us/app/trustudsel/id6745458944"
            />
          </motion.div>
          
          <motion.div 
            className="download-phones"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: isReducedPerformance ? 0.3 : 0.7, 
              delay: isReducedPerformance ? 0 : 0.3 
            }}
          >
            <motion.div 
              className="app-screens"
              initial={{ opacity: 0, y: isReducedPerformance ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: isReducedPerformance ? 0.3 : 0.7, 
                delay: isReducedPerformance ? 0 : 0.4 
              }}
            >
              {phoneScreens.map((screen, index) => (
                <IPhoneFrame 
                  key={`phone-${index}`}
                  imageUrl={screen.imageUrl}
                  initialAnimation={screen.initialAnimation}
                  delay={screen.delay}
                  isReducedPerformance={isReducedPerformance}
                />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="scan-qr"
            initial={{ opacity: 0, y: isReducedPerformance ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: isReducedPerformance ? 0.3 : 0.5, 
              delay: isReducedPerformance ? 0 : 0.8 
            }}
          >
            <p>Scan QR code to download</p>
            <div className="qr-codes-container">
              <div className="qr-code-wrapper">
                <h4>iOS</h4>
                <motion.div 
                  className="qr-code"
                  whileHover={isReducedPerformance ? {} : { 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
                  }}
                >
                  <img 
                    src="/TruStudSel_QR.png" 
                    alt="TruStudSel iOS QR Code" 
                    className="qr-image" 
                    loading="lazy"
                    width="160" 
                    height="160"
                  />
                </motion.div>
              </div>
              
              <div className="qr-code-wrapper">
                <h4>Android</h4>
                <motion.div 
                  className="qr-code"
                  whileHover={isReducedPerformance ? {} : { 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
                  }}
                >
                  <img 
                    src="/trustudsel_qr_android.png" 
                    alt="TruStudSel Android QR Code" 
                    className="qr-image"
                    loading="lazy"
                    width="160" 
                    height="160" 
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx="true">{`
        .download {
          position: relative;
          background-color: #fffaf0;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 100px;
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
        
        .download-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .download-phones {
          margin: 60px auto;
          max-width: 80%;
        }
        
        .app-screens {
          display: flex;
          justify-content: center;
          gap: 20px;
          contain: layout style;
        }
        
        .screen {
          width: 220px;
          height: 440px;
          border-radius: 40px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          contain: layout style paint;
          will-change: transform;
        }
        
        .iphone-frame {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #000;
          border: 1px solid #333;
          padding: 8px;
        }
        
        .iphone-notch {
          position: absolute;
          top: 0;
          width: 100px;
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
          right: 20px;
        }
        
        .iphone-notch::before {
          content: '';
          position: absolute;
          width: 40px;
          height: 6px;
          background-color: #333;
          border-radius: 3px;
          top: 12px;
          left: 20px;
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
        
        .phone-screen-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 32px;
          z-index: 1;
          contain: content;
        }
        
        .scan-qr {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
        }
        
        .qr-codes-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 15px;
        }
        
        .qr-code-wrapper {
          text-align: center;
        }
        
        .qr-code-wrapper h4 {
          margin-bottom: 10px;
          color: var(--primary-color);
          font-weight: 600;
        }
        
        .qr-code {
          width: 180px;
          height: 180px;
          background-color: white;
          padding: 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .qr-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .qrcode-icon {
          font-size: 120px;
        }
        
        @media (max-width: 768px) {
          .download-phones {
            max-width: 100%;
          }
          
          .app-screens {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding: 20px 0;
          }
          
          .screen {
            width: 220px;
            height: 440px;
            margin: 0 auto 20px;
          }

          /* Center download buttons on mobile */
          .download-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          /* Improved QR code container for mobile */
          .qr-codes-container {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          /* Make section padding responsive */
          .download {
            padding-top: 60px;
            padding-bottom: 60px;
          }
        }
        
        /* For very small screens */
        @media (max-width: 375px) {
          .screen {
            width: 180px;
            height: 370px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .blob {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Download; 