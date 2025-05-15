import React from 'react';
import { FaShoppingCart, FaComments, FaShieldAlt, FaUniversity, FaStar, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FaShoppingCart />,
      title: 'Student Marketplace',
      description: 'Buy and sell items exclusively within your campus community at student-friendly prices.'
    },
    {
      icon: <FaComments />,
      title: 'In-App Messaging',
      description: 'Communicate directly with buyers and sellers through our secure in-app messaging system.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Verified Accounts',
      description: 'All users are verified students, creating a safe and trusted community for transactions.'
    },
    {
      icon: <FaUniversity />,
      title: 'Campus Specific',
      description: 'Browse items available specifically at your campus, making pickups and exchanges convenient.'
    },
    {
      icon: <FaStar />,
      title: 'Ratings & Reviews',
      description: 'Build trust through our user rating system. Review your experiences and make informed decisions.'
    },
    {
      icon: <FaHandshake />,
      title: 'Meet and Buy',
      description: 'Meet fellow students in person on campus for safe and convenient exchanges of items.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="features section section-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title">Why Choose TruStudSel?</h2>
          <p className="section-subtitle">
            Our app is specifically designed for university students with features to make campus trading easy, safe, and convenient.
          </p>
        </motion.div>

        <motion.div 
          className="features-grid grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              className="feature-card"
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                initial={{ rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx="true">{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 50px;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .feature-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 1.8rem;
          color: var(--primary-color);
          background-color: rgba(247, 179, 5, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          transform: rotate(0deg);
          will-change: transform;
        }
        
        .feature-card h3 {
          margin-bottom: 15px;
          font-size: 1.3rem;
          font-weight: 600;
        }
        
        .feature-card p {
          color: #666;
          line-height: 1.6;
        }
        
        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Features; 