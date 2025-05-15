import React from 'react';
import { FaUserGraduate, FaLightbulb, FaHandshake, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="about">
      <section className="about-hero">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About TruStudSel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Creating a trusted marketplace for students, by students.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="animated-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
        <div className="container">
          <motion.div 
            className="about-story"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="team-placeholder"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src="/about.png" alt="About TruStudSel" className="about-img" />
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Story
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.p variants={fadeInUp}>
                  TruStudSel started with a conversation between two college friends who were frustrated by 
                  the difficulties they faced when buying legitimate items without encountering scammers. 
                  After several negative experiences with online marketplaces, they realized there was 
                  a need for a safer platform specifically designed for students.
                </motion.p>
                
                <motion.p variants={fadeInUp}>
                  What began as a casual discussion about the problem quickly evolved into a vision for 
                  a trusted student marketplace. The founders combined their skills in technology and 
                  business to develop a platform that would verify student credentials and build a 
                  community of trust within campus environments.
                </motion.p>
                
                <motion.p variants={fadeInUp}>
                  Today, TruStudSel has grown from that initial idea into a thriving platform that 
                  connects students at campuses nationwide, creating a safe environment where 
                  they can buy, sell, and exchange items with confidence and peace of mind.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission & Values
          </motion.h2>
          
          <motion.div 
            className="values-grid grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <FaUserGraduate />
              </motion.div>
              <h3>Student-Focused</h3>
              <p>
                We build features specifically for college students' needs, making it easier to find and sell
                items within trusted campus communities.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <FaHandshake />
              </motion.div>
              <h3>Anti-Scam Protection</h3>
              <p>
                Our platform includes robust verification processes and safety features designed to 
                eliminate scammers and ensure every transaction is legitimate and secure.
              </p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="value-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                <FaLightbulb />
              </motion.div>
              <h3>Community Trust</h3>
              <p>
                We're building more than just an app – we're creating a trusted community where students
                can confidently buy and sell without fear of being scammed or misled.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            The Founders
          </motion.h2>
          
          <motion.p 
            className="section-subtitle text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the visionary duo who turned a problem into a solution.
          </motion.p>
          
          <motion.div 
            className="team-grid grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="team-member" 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="member-image"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                }}
              >
                
                   <img src="/sarath.jpg" alt="Sarath Kumar" className="member-photo" />
              </motion.div>
              <h3>Sarath Kumar</h3>
              <p className="member-role">Founder</p>
              <p className="member-bio">
                Sarath Kumar is the driving force behind TruStudSel's marketing strategy and vision.
                His recognition of security needs in student marketplaces shaped the platform's approach
                to building trusted exchanges. He leads business development initiatives while ensuring
                the platform delivers value to student communities across campuses.
              </p>
            </motion.div>

            <motion.div 
              className="team-member" 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="member-image"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                }}
              >
                <img src="/koushikreddy.png" alt="Koushik Reddy" className="member-photo" />
              </motion.div>
              <h3>Koushik Reddy</h3>
              <p className="member-role">Founder</p>
              <p className="member-bio">
                Koushik Reddy is the driving force behind TruStudSel's development, vision, and technical 
                architecture. As the principal architect of the platform, he leads both technical implementation 
                and marketing strategy, while developing the robust verification systems and user-centered 
                design that form the foundation of the TruStudSel experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx="true">{`
        .about {
          background-color: #fffaf0;
        }
        
        .about-hero {
          padding: 120px 0 60px;
          background-color: #fffaf0;
          position: relative;
          overflow: hidden;
        }
        
        .section {
          position: relative;
          overflow: hidden;
          background-color: #fffaf0;
          padding-top: 20px;
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
        }
        
        .blob {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(60px);
          background-color: rgba(247, 179, 5, 0.15);
        }
        
        .blob-1 {
          width: 600px;
          height: 600px;
          background-color: rgba(247, 179, 5, 0.15);
          top: -200px;
          right: -100px;
          animation: blob-move-1 15s infinite alternate ease-in-out;
        }
        
        .blob-2 {
          width: 500px;
          height: 500px;
          background-color: rgba(247, 179, 5, 0.1);
          bottom: -150px;
          left: -100px;
          animation: blob-move-2 18s infinite alternate ease-in-out;
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
        
        .about-hero h1 {
          font-size: 3rem;
          margin-bottom: 0px;
          color: var(--text-dark);
          position: relative;
          z-index: 2;
        }
        
        .about-hero p {
          font-size: 1.5rem;
          opacity: 0.9;
          color: var(--text-dark);
          position: relative;
          z-index: 2;
        }
        
        .about-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        
        .team-placeholder {
          width: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(247, 179, 5, 0.1);
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: visible;
          position: relative;
          padding: 20px;
        }
        
        .team-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          100% {
            left: 150%;
          }
        }
        
        .about-image-container {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }
        
        .about-img {
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .team-icon {
          font-size: 100px;
          color: var(--primary-color);
        }
        
        .about-content h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }
        
        .about-content h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .about-content h2:hover::after {
          width: 100px;
        }
        
        .about-content p {
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .values-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .value-card {
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .value-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--primary-color);
          margin: 0 auto 20px;
          font-size: 2rem;
          color: var(--text-dark);
          transition: all 0.3s ease;
        }
        
        .value-card h3 {
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .team-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }
        
        .team-member {
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .member-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          background-color: rgba(247, 179, 5, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .member-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .member-image:hover::before {
          opacity: 1;
        }
        
        .member-icon {
          font-size: 100px;
          color: var(--primary-color);
        }
        
        .team-member h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
          background: black;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .member-role {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }
        
        .member-role::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .team-member:hover .member-role::after {
          width: 50px;
        }
        
        .member-bio {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .about-story {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .about-image-container {
            order: 1;
            width: 100%;
            max-width: 100%;
            margin-bottom: 20px;
          }
          
          .team-placeholder {
            min-height: 300px;
            width: 100%;
          }
          
          .about-content {
            order: 2;
          }
          
          .about-hero h1 {
            font-size: 2.5rem;
          }
          
          .about-hero p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About; 