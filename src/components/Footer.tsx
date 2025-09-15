import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-text">S</span>
              </div>
              <div>
                <h3 className="club-name">STALLIONS FC</h3>
                <p className="club-tagline">Pride of Nyamasaria</p>
              </div>
            </div>
            <p className="footer-description">
              Stallions FC is a premier football club based in Nyamasaria, Kisumu, 
              dedicated to developing local talent and competing at the highest level.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/team">First Team</Link></li>
              <li><Link to="/academy">Academy</Link></li>
              <li><Link to="/staff">Staff</Link></li>
              <li><Link to="/partners">Partners</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Nyamasaria, Kisumu County</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+254 700 123 456</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@stallionsfc.co.ke</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Stallions FC. All rights reserved.</p>
          <p>Proudly representing Nyamasaria, Kisumu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;