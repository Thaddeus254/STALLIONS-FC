import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Trophy } from 'lucide-react';
import { players } from '../data/players';
import './PlayerBio.css';

const PlayerBio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const currentPlayer = players.find(p => p.id === parseInt(id || '1'));
  const currentIndex = players.findIndex(p => p.id === parseInt(id || '1'));
  
  if (!currentPlayer) {
    return <div>Player not found</div>;
  }

  const goToPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : players.length - 1;
    navigate(`/player/${players[prevIndex].id}`);
  };

  const goToNext = () => {
    const nextIndex = currentIndex < players.length - 1 ? currentIndex + 1 : 0;
    navigate(`/player/${players[nextIndex].id}`);
  };

  return (
    <div className="player-bio">
      <section className="player-hero">
        <div className="player-hero-background">
          <img src={currentPlayer.image} alt={currentPlayer.name} />
          <div className="player-hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="player-hero-content">
            <motion.div 
              className="player-main-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="jersey-display">{currentPlayer.jerseyNumber}</div>
              <div className="player-details">
                <h1 className="player-name">{currentPlayer.name}</h1>
                <p className="player-position">{currentPlayer.position}</p>
                <div className="player-meta">
                  <span className="meta-item">
                    <Calendar size={16} />
                    Age: {currentPlayer.age}
                  </span>
                  <span className="meta-item">
                    <MapPin size={16} />
                    {currentPlayer.nationality}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="player-image-large"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={currentPlayer.image} alt={currentPlayer.name} />
            </motion.div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="nav-btn nav-btn-prev" onClick={goToPrevious}>
          <ArrowLeft size={24} />
        </button>
        <button className="nav-btn nav-btn-next" onClick={goToNext}>
          <ArrowRight size={24} />
        </button>
      </section>

      <section className="player-details-section section">
        <div className="container">
          <div className="player-content-grid">
            <motion.div 
              className="player-bio-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Biography</h2>
              <p>{currentPlayer.bio}</p>
              
              <h3>Career History</h3>
              <div className="career-info">
                <div className="career-item">
                  <strong>Joined Stallions FC:</strong> {new Date(currentPlayer.joinedDate).toLocaleDateString()}
                </div>
                <div className="career-item">
                  <strong>Previous Clubs:</strong> {currentPlayer.previousClubs.join(', ')}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="player-stats-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Season Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{currentPlayer.stats.appearances}</div>
                  <div className="stat-label">Appearances</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentPlayer.stats.goals}</div>
                  <div className="stat-label">Goals</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentPlayer.stats.assists}</div>
                  <div className="stat-label">Assists</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentPlayer.stats.yellowCards}</div>
                  <div className="stat-label">Yellow Cards</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentPlayer.stats.redCards}</div>
                  <div className="stat-label">Red Cards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerBio;