import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, Target, Users } from 'lucide-react';
import './Partners.css';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Greenworld Advocates",
      type: "Legal Partner",
      logo: "/logos/GREENWORLD logo.png",
      description: "Our trusted legal advisors providing comprehensive legal services and contract negotiations.",
      partnership: "Since 2023",
      services: ["Contract Negotiations", "Legal Advisory", "Player Transfers", "Compliance"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Handshake className="benefit-icon" />,
      title: "Strategic Partnerships",
      description: "Building long-term relationships that benefit our club and community"
    },
    {
      icon: <Award className="benefit-icon" />,
      title: "Excellence Support",
      description: "Partners who share our commitment to excellence and professional standards"
    },
    {
      icon: <Target className="benefit-icon" />,
      title: "Shared Goals",
      description: "Working together towards common objectives and mutual success"
    },
    {
      icon: <Users className="benefit-icon" />,
      title: "Community Impact",
      description: "Creating positive change in Nyamasaria and the broader Kisumu region"
    }
  ];

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="container">
          <motion.div 
            className="partners-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Partners</h1>
            <p>Building success together with trusted partners who share our vision</p>
          </motion.div>
        </div>
      </section>

      <section className="partnership-benefits section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partnership Benefits
          </motion.h2>
          <div className="benefits-grid">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {benefit.icon}
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="current-partners section section-alt">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Current Partners
          </motion.h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="partner-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="partner-header">
                  <img src={partner.logo} alt={partner.name} className="partner-logo" />
                  <div className="partner-info">
                    <h3>{partner.name}</h3>
                    <p className="partner-type">{partner.type}</p>
                    <p className="partnership-duration">{partner.partnership}</p>
                  </div>
                </div>
                <div className="partner-content">
                  <p className="partner-description">{partner.description}</p>
                  <div className="services">
                    <h4>Services Provided</h4>
                    <div className="services-list">
                      {partner.services.map((service, i) => (
                        <span key={i} className="service-tag">{service}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Become a Partner</h2>
            <p>
              Join us in building something extraordinary. Partner with Stallions FC 
              and be part of our journey to excellence while making a positive impact 
              in the Nyamasaria community.
            </p>
            <div className="cta-buttons">
              <a href="mailto:partnerships@stallionsfc.co.ke" className="btn btn-primary">
                <Handshake size={20} />
                Partner With Us
              </a>
              <a href="tel:+254700123456" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;