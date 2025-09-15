import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { players } from '../data/players';
import './Team.css';

const Team: React.FC = () => {
  const groupedPlayers = {
    Goalkeepers: players.filter(p => p.position === 'Goalkeeper'),
    Defenders: players.filter(p => p.position === 'Defender'),
    Midfielders: players.filter(p => p.position === 'Midfielder'),
    Wingers: players.filter(p => p.position === 'Winger'),
    Forwards: players.filter(p => p.position === 'Forward')
  };

  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="container">
          <motion.div 
            className="team-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Meet The Team</h1>
            <p>Our squad of talented players representing Stallions FC</p>
          </motion.div>
        </div>
      </section>

      <section className="team-roster section">
        <div className="container">
          {Object.entries(groupedPlayers).map(([position, positionPlayers], index) => (
            <motion.div 
              key={position}
              className="position-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="position-title">{position}</h2>
              <div className="players-grid">
                {positionPlayers.map((player, playerIndex) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: playerIndex * 0.1 }}
                  >
                    <Link to={`/player/${player.id}`} className="player-card">
                      <div className="player-image-container">
                        <img src={player.image} alt={player.name} className="player-image" />
                        <div className="jersey-number">{player.jerseyNumber}</div>
                        <div className="player-overlay">
                          <span className="view-profile">View Profile</span>
                        </div>
                      </div>
                      <div className="player-info">
                        <h3 className="player-name">{player.name}</h3>
                        <p className="player-position">{player.position}</p>
                        <p className="player-age">Age: {player.age}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;