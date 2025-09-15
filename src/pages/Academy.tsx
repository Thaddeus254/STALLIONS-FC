import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users } from 'lucide-react';
import { academyPlayers } from '../data/academy';
import './Academy.css';

const Academy: React.FC = () => {
  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="container">
          <motion.div 
            className="academy-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Stallions Academy</h1>
            <p>Nurturing the next generation of football stars in Nyamasaria</p>
          </motion.div>
        </div>
      </section>

      <section className="academy-info section">
        <div className="container">
          <div className="academy-overview">
            <motion.div 
              className="overview-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Building Tomorrow's Champions</h2>
              <p>
                Our academy program is designed to develop young talent from ages 12-19, 
                providing world-class training facilities and expert coaching to help 
                players reach their full potential.
              </p>
              <div className="academy-features">
                <div className="feature-item">
                  <Users className="feature-icon" />
                  <div>
                    <h4>Professional Coaching</h4>
                    <p>Qualified coaches with international experience</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <div>
                    <h4>Modern Facilities</h4>
                    <p>State-of-the-art training grounds and equipment</p>
                  </div>
                </div>
                <div className="feature-item">
                  <Star className="feature-icon" />
                  <div>
                    <h4>Pathway to Pro</h4>
                    <p>Direct route to our first team and professional football</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="overview-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Academy Training"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="academy-players section section-alt">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Academy Stars
          </motion.h2>
          <div className="academy-grid">
            {academyPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                className="academy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="academy-image-container">
                  <img src={player.image} alt={player.name} />
                  <div className="academy-overlay">
                    <span className="academy-team">{player.team}</span>
                  </div>
                </div>
                <div className="academy-info">
                  <h3>{player.name}</h3>
                  <p className="academy-position">{player.position}</p>
                  <p className="academy-age">Age: {player.age}</p>
                  <p className="academy-bio">{player.bio}</p>
                  <div className="achievements">
                    <h4>Achievements</h4>
                    <ul>
                      {player.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;