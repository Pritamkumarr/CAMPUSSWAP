import React from 'react';
import './Home.css';
// Import Link from react-router-dom
import { Link, useNavigate } from 'react-router-dom'; // ADDED useNavigate

import { Home as HomeIcon, ShoppingCart, Tag, Info, Mail, LogIn, UserPlus, Search } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate(); // ADDED

  return (
    // The primary container for the entire application.
    // All styling is applied via CSS classes defined in Home.css.
    <div className="app-container">

      {/* Header Section: Contains logo, navigation, and authentication buttons */}
      <header className="header">
        <div className="header-content-wrapper">
          {/* Site Logo */}
          <h1 className="site-logo">CampusSwap</h1>

          {/* Navigation Menu */}
          <nav className="main-nav">
            <ul className="nav-list">
              {/* Change <a> to <Link> for navigation items that are internal routes */}
              <li><Link to="/" className="nav-link"><HomeIcon size={18} /><span>Home</span></Link></li> {/* MODIFIED */}
              <li><Link to="/buy" className="nav-link"><ShoppingCart size={18} /><span>Buy</span></Link></li> {/* Assuming /buy route exists or will exist */}
              <li><Link to="/sell" className="nav-link"><Tag size={18} /><span>Sell</span></Link></li> {/* Assuming /sell route exists or will exist */}
              <li><Link to="/about" className="nav-link"><Info size={18} /><span>About Us</span></Link></li> {/* MODIFIED: This is the primary change */}
              <li><Link to="/contact" className="nav-link"><Mail size={18} /><span>Contact</span></Link></li> {/* Assuming /contact route exists or will exist */}
            </ul>
          </nav>

          {/* Authentication Buttons */}
          <div className="auth-buttons">
            <button className="button button-primary">
              <LogIn size={18} /><span>Login</span>
            </button>
            <button className="button button-secondary">
              <UserPlus size={18} /><span>SignUp</span>
            </button>
          </div>

          {/* Mobile Menu Toggle (hidden on desktop, visible on smaller screens) */}
          <button className="mobile-menu-toggle">
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section: The main introductory section with a strong call to action */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Your Campus, Your Marketplace.</h2>
          <p className="hero-subtitle">
            Buy and sell second-hand laptops, mobile phones, books, notes, and more
            effortlessly within your university campus.
          </p>
          {/* Search Bar within the hero section */}
          <div className="search-bar-wrapper">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <Search size={20} className="search-icon" />
          </div>
          {/* Call to Action buttons */}
          <div className="hero-buttons-container">
            <button className="button button-hero-primary" onClick={() => navigate('/buy')}>
              Start Buying
            </button>
            <button className="button button-hero-secondary" onClick={() => navigate('/sell')}>
              Start Selling
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section: Displays a selection of popular items */}
      <section className="section featured-products-section">
        <h3 className="section-title">Featured Products</h3>
        <div className="product-grid">
          {/* Product Card 1: Laptop */}
          <div className="product-card">
            <img
              src="https://placehold.co/400x250/E0E7FF/4338CA?text=Laptop"
              alt="Laptop"
              className="product-image"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/E0E7FF/4338CA?text=Image+Error"; }}
            />
            <div className="product-info">
              <h4 className="product-title">Used Laptop</h4>
              <p className="product-description">Good condition, perfect for studies. Comes with charger.</p>
              <div className="product-footer">
                <span className="product-price price-indigo">$450</span>
                <button className="button button-product-details">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2: Textbook */}
          <div className="product-card">
            <img
              src="https://placehold.co/400x250/FFE0B2/FF9800?text=Textbook"
              alt="Textbook"
              className="product-image"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/FFE0B2/FF9800?text=Image+Error"; }}
            />
            <div className="product-info">
              <h4 className="product-title">Calculus Textbook</h4>
              <p className="product-description">Latest edition, minimal highlights. Great price!</p>
              <div className="product-footer">
                <span className="product-price price-orange">$30</span>
                <button className="button button-product-details">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3: Mobile Phone */}
          <div className="product-card">
            <img
              src="https://placehold.co/400x250/D1C4E9/673AB7?text=Mobile+Phone"
              alt="Mobile Phone"
              className="product-image"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/D1C4E9/673AB7?text=Image+Error"; }}
            />
            <div className="product-info">
              <h4 className="product-title">Smartphone (Unlocked)</h4>
              <p className="product-description">Excellent condition, no scratches. Ready to use.</p>
              <div className="product-footer">
                <span className="product-price price-purple">$200</span>
                <button className="button button-product-details">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section: Explains the process in simple steps */}
      <section className="section how-it-works-section">
        <h3 className="section-title">How CampusSwap Works</h3>
        <div className="steps-grid">
          {/* Step 1: Sign Up */}
          <div className="step-card">
            <div className="step-icon-container">
              <UserPlus size={32} className="step-icon" />
            </div>
            <h4 className="step-title">1. Sign Up</h4>
            <p className="step-description">Create your free student account in minutes.</p>
          </div>
          {/* Step 2: List or Browse */}
          <div className="step-card">
            <div className="step-icon-container">
              <Tag size={32} className="step-icon" />
            </div>
            <h4 className="step-title">2. List or Browse</h4>
            <p className="step-description">Easily list your items or browse thousands of products.</p>
          </div>
          {/* Step 3: Swap & Save */}
          <div className="step-card">
            <div className="step-icon-container">
              <ShoppingCart size={32} className="step-icon" />
            </div>
            <h4 className="step-title">3. Swap & Save</h4>
            <p className="step-description">Connect with fellow students and make great deals!</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section (bottom of the page) */}
      <section className="section cta-section-bottom">
        <h3 className="cta-title-bottom">Ready to Join CampusSwap?</h3>
        <p className="cta-subtitle-bottom">
          Discover amazing deals or turn your unused items into cash.
        </p>
        <button className="button button-cta-bottom">
          Get Started Today!
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links-container">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">FAQ</a>
        </div>
        <p className="copyright-text">&copy; {new Date().getFullYear()} CampusSwap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
