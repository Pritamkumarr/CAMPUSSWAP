import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home as HomeIcon,
  ShoppingCart,
  Tag,
  Info,
  Mail,
  LogIn,
  UserPlus,
  Search,
  GraduationCap,
} from 'lucide-react';
import Footer from './Footer';
import axios from '../api/axios';


const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
    // Fetch products for featured section
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products');
        setFeaturedProducts(res.data.slice(0, 3));
      } catch (error) {
        setFeaturedProducts([]);
      }
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content-wrapper">
          <h1 className="site-logo animated-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="logo-hat-wrapper">
              🎓
            </span>
            <span>CampusSwap</span>
          </h1>
          <nav className="main-nav">
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">
                  <HomeIcon size={18} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/buy" className="nav-link">
                  <ShoppingCart size={18} />
                  <span>Buy</span>
                </Link>
              </li>
              <li>
                <Link to="/sell" className="nav-link">
                  <Tag size={18} />
                  <span>Sell</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  <Info size={18} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  <Mail size={18} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="auth-buttons me-3">
            {user ? (
              <>
                <span style={{ fontWeight: 600, marginRight: '1rem' }}>
                  Hi, {user.fullName}
                </span>
                <button className="button button-primary" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="button button-primary">
                    <LogIn size={18} />
                    <span>Login</span>
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="button button-primary">
                    <UserPlus size={18} />
                    <span>SignUp</span>
                  </button>
                </Link>
              </>
            )}
          </div>
          <button className="mobile-menu-toggle">
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Your Campus, Your Marketplace.</h2>
          <p className="hero-subtitle">
            Buy and sell second-hand laptops, mobile phones, books, notes, and more
            effortlessly within your university campus.
          </p>
          <div className="search-bar-wrapper">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
            />
            <Search size={20} className="search-icon" />
          </div>
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

      <section className="section featured-products-section">
        <h3 className="section-title">Featured Products</h3>
        <div className="product-grid">
          {featuredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', width: '100%' }}>No featured products available.</div>
          ) : (
            featuredProducts.map((item) => (
              <div className="product-card" key={item._id}>
                <img
                  src={item.image?.startsWith('http') ? item.image : `http://localhost:5000/${item.image}`}
                  alt={item.title}
                  className="product-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x250/E0E7FF/4338CA?text=Image+Error";
                  }}
                />
                <div className="product-info">
                  <h4 className="product-title">{item.title}</h4>
                  <p className="product-description">{item.description}</p>
                  <div className="product-footer">
                    <span className="product-price price-indigo">₹{item.price}</span>
                    <button className="button button-product-details" onClick={() => navigate(`/item/${item._id}`)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="section how-it-works-section">
        <h3 className="section-title">How CampusSwap Works</h3>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon-container">
              <UserPlus size={32} className="step-icon" />
            </div>
            <Link to="/signup" className="step-title-link">
              <h4 className="step-title">1. Sign Up</h4>
            </Link>
            <p className="step-description">Create your free student account in minutes.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-container">
              <Tag size={32} className="step-icon" />
            </div>
            <Link to="/sell" className="step-title-link">
              <h4 className="step-title">2. List or Browse</h4>
            </Link>
            <p className="step-description">Easily list your items or browse thousands of products.</p>
          </div>

          <div className="step-card">
            <div className="step-icon-container">
              <ShoppingCart size={32} className="step-icon" />
            </div>
            <Link to="/buy" className="step-title-link">
              <h4 className="step-title">3. Swap & Save</h4>
            </Link>
            <p className="step-description">Connect with fellow students and make great deals!</p>
          </div>
        </div>
      </section>

      <section className="section cta-section-bottom">
        <h3 className="cta-title-bottom">Ready to Join CampusSwap?</h3>
        <p className="cta-subtitle-bottom">
          Discover amazing deals or turn your unused items into cash.
        </p>
        <button className="button button-cta-bottom" onClick={() => navigate('/login')}>
          Get Started Today!
        </button>
      </section>

      <Footer />

    </div>
  );
};

export default Home;