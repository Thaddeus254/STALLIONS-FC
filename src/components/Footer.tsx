import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Club Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <img
                  src="/logos/stallion Fc logo.png"
                  alt="Stallions FC Logo"
                  className="club-logo"
                />
              </div>
              <div>
                <h3 className="club-name">STALLIONS FC</h3>
                <p className="club-tagline">Pride of Nyamasaria</p>
              </div>
            </div>
            <p className="footer-description">
              Stallions FC is a premier football club based in Nyamasaria,
              Kisumu, dedicated to developing local talent and competing at the
              highest level.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/team">First Team</Link>
              </li>
              <li>
                <Link to="/academy">Academy</Link>
              </li>
              <li>
                <Link to="/staff">Staff</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/partners">Partners</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Nyamasaria, Kisumu County</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+254 795 333 004</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>stallions126@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <SiTiktok size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Stallions FC. All rights reserved.</p>
          <p>Proudly representing Nyamasaria, Kisumu</p>
          <p>Designed & Published by: NexaCraft.co.ke</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
