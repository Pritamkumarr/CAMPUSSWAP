import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #ffffff;
          margin-top: auto;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          padding: 60px 0 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 16px;
          background: linear-gradient(45deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-link:hover {
          color: #4f46e5;
          transform: translateX(5px);
        }

        .footer-link::before {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4f46e5;
          transition: width 0.3s ease;
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .social-links {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: #4f46e5;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.3);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .contact-item svg {
          color: #4f46e5;
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 24px 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .copyright {
          color: #94a3b8;
          font-size: 14px;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #4f46e5;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 40px 0 30px;
          }

          .footer-section {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .contact-info {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 16px;
          }

          .footer-content {
            padding: 32px 0 24px;
          }

          .footer-logo {
            font-size: 24px;
          }

          .social-links {
            gap: 12px;
          }

          .social-link {
            width: 36px;
            height: 36px;
          }
        }

        @media (prefers-color-scheme: dark) {
          .footer {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">CampusSwap</h3>
              <p className="footer-description">
                Your trusted campus marketplace for buying and selling second-hand items. 
                Connect with fellow students and discover amazing deals right on your campus.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/buy" className="footer-link">Buy Items</Link></li>
                <li><Link to="/sell" className="footer-link">Sell Items</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><Link to="/faq" className="footer-link">FAQ</Link></li>
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                <li><a href="/safety" className="footer-link">Safety Tips</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>support@campusswap.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+91 6206568371</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Campus Community Center</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                &copy; {currentYear} CampusSwap. All rights reserved
              </p>
              <div className="footer-bottom-links">
                <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
                <Link to="/terms" className="footer-bottom-link">Terms</Link>
                <a href="/faq" className="footer-bottom-link">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
