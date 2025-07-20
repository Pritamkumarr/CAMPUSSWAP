// About.jsx (Enhanced Bootstrap Look)
import React from 'react';
import { BookText, Handshake, Lightbulb, Users } from 'lucide-react'; // Icons remain

const About = () => {
  return (
    // Main container with Bootstrap classes for padding and responsive behavior
    // Custom gradient background and font applied via inline style
    <div
      className="container-fluid py-5"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0f2fe, #e8eaf6)', // Replicating Tailwind's blue-50 to indigo-100
        fontFamily: 'Inter, sans-serif', // Applying the Inter font
      }}
    >
      <div className="container my-5 p-4 bg-white rounded-3 shadow-lg overflow-hidden"> {/* rounded-3 for more pronounced rounded corners */}
        <div className="p-4 p-md-5">
          {/* Header Section */}
          <h1 className="display-4 fw-bold text-dark text-center mb-4 mb-md-5">
            About CampusSwap
          </h1>
          <p className="fs-5 text-secondary text-center mb-5 lh-base">
            Your ultimate platform for seamless campus exchange and community building.
          </p>

          {/* Introduction Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-3 d-flex align-items-center">
              <Lightbulb className="me-3 text-info" style={{ width: '2rem', height: '2rem' }} />
              Our Vision
            </h2>
            <p className="fs-6 text-muted lh-base">
              At CampusSwap, we envision a vibrant university ecosystem where students can easily connect, share resources, and thrive together. We believe in fostering a sustainable and supportive community by facilitating the exchange of academic materials, services, and ideas.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-3 d-flex align-items-center">
              <Handshake className="me-3 text-info" style={{ width: '2rem', height: '2rem' }} />
              Our Mission
            </h2>
            <p className="fs-6 text-muted lh-base">
              Our mission is to empower students by providing a secure, intuitive, and efficient platform to swap textbooks, notes, electronics, and offer services. We aim to reduce waste, save money, and build stronger connections within the campus community.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4 d-flex align-items-center">
              <BookText className="me-3 text-info" style={{ width: '2rem', height: '2rem' }} />
              What We Offer
            </h2>
            <div className="row g-4"> {/* g-4 for gap between columns */}
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start bg-primary-subtle p-4 rounded-3 shadow-sm"> {/* rounded-3 for consistency */}
                  <Users className="flex-shrink-0 me-3 text-primary" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <div>
                    <h3 className="h5 fw-semibold text-dark mb-2">Community Driven</h3>
                    <p className="text-muted">Connect with fellow students, make new friends, and build a supportive network right on your campus.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start bg-info-subtle p-4 rounded-3 shadow-sm"> {/* rounded-3 for consistency */}
                  <BookText className="flex-shrink-0 me-3 text-info" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <div>
                    <h3 className="h5 fw-semibold text-dark mb-2">Easy Swapping</h3>
                    <p className="text-muted">Effortlessly exchange textbooks, course materials, and other academic necessities.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start bg-success-subtle p-4 rounded-3 shadow-sm"> {/* rounded-3 for consistency */}
                  <Lightbulb className="flex-shrink-0 me-3 text-success" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <div>
                    <h3 className="h5 fw-semibold text-dark mb-2">Service Exchange</h3>
                    <p className="text-muted">Offer and find services like tutoring, tech support, or even ride-sharing within the campus.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start bg-warning-subtle p-4 rounded-3 shadow-sm"> {/* rounded-3 for consistency */}
                  <Handshake className="flex-shrink-0 me-3 text-warning" style={{ width: '2.5rem', height: '2.5rem' }} />
                  <div>
                    <h3 className="h5 fw-semibold text-dark mb-2">Sustainable Living</h3>
                    <p className="text-muted">Promote reuse and recycling, contributing to a greener and more sustainable campus environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="fs-6 text-muted mb-4">
              Join CampusSwap today and be a part of a smarter, more connected campus community!
            </p>
            <button
              className="btn btn-primary btn-lg rounded-pill shadow-lg"
              style={{
                transition: 'transform 0.3s ease-in-out', // Replicating Tailwind's transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} // Replicating Tailwind's hover:scale-105
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
