import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="/gallery/2.jpg"
            alt="Football Stadium"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="highlight">STALLIONS FC</span>
            </h1>
            <p className="hero-subtitle">
              The Pride of Nyamasaria - Where Champions Are Made
            </p>
            <div className="hero-buttons">
              <Link to="/team" className="btn btn-primary">
                Meet The Team <ArrowRight size={20} />
              </Link>
              <Link to="/academy" className="btn btn-secondary">
                Join Academy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Trophy className="stat-icon" />
              <h3>2+</h3>
              <p>Trophies Won</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Users className="stat-icon" />
              <h3>20+</h3>
              <p>Squad Members</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Target className="stat-icon" />
              <h3>50+</h3>
              <p>Goals Scored</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section section-alt">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>About Stallions FC</h2>
              <p>
                Founded in the heart of Nyamasaria, Kisumu, Stallions FC has
                been a beacon of excellence in Kenyan football. Our commitment
                to developing local talent and fostering community spirit has
                made us one of the most respected clubs in the region.
              </p>
              <p>
                With state-of-the-art training facilities and a world-class
                coaching staff, we continue to nurture the next generation of
                football stars while competing at the highest levels of the
                game.
              </p>
              <Link to="/team" className="btn btn-primary">
                Discover Our Team <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/gallery/6.jpg" alt="Team Training" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest News
          </motion.h2>
          <div className="news-grid">
            <motion.article
              className="news-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Victory Celebration"
              />
              <div className="news-content">
                <h3>Stallions FC Wins Regional Championship</h3>
                <p>
                  Our team secured a decisive 3-1 victory in the regional
                  finals...
                </p>
                <span className="news-date">January 15, 2025</span>
              </div>
            </motion.article>
            <motion.article
              className="news-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="New Signing"
              />
              <div className="news-content">
                <h3>New Star Player Joins Stallions</h3>
                <p>
                  We're excited to announce the signing of midfielder James
                  Ochieng...
                </p>
                <span className="news-date">January 10, 2025</span>
              </div>
            </motion.article>
            <motion.article
              className="news-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Academy Training"
              />
              <div className="news-content">
                <h3>Academy Program Expansion</h3>
                <p>
                  Our youth academy is expanding with new training facilities...
                </p>
                <span className="news-date">January 5, 2025</span>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
