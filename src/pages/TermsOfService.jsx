import React from 'react';

const TermsOfService = () => {
  return (
    <>
      <style>{`
        .terms-container {
          background-color: #ffffff;
          color: #000000;
          min-height: 100vh;
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .terms-title {
          font-size: 2rem;
          font-weight: bold;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .terms-section {
          margin-bottom: 20px;
        }
        .terms-section h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .terms-section p {
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>

      <div className="terms-container">
        <h2 className="terms-title">Terms of Service</h2>

        <div className="terms-section">
          <h4>1. Acceptance of Terms</h4>
          <p>
            By accessing or using CampusSwap, you agree to comply with these Terms of Service.
          </p>
        </div>

        <div className="terms-section">
          <h4>2. User Responsibilities</h4>
          <p>
            Users must provide accurate details while listing or buying items and must not engage in any fraudulent activity.
          </p>
        </div>

        <div className="terms-section">
          <h4>3. Item Listings</h4>
          <p>
            You may only list items you have the legal right to sell. Inappropriate or prohibited content is not allowed.
          </p>
        </div>

        <div className="terms-section">
          <h4>4. Platform Rights</h4>
          <p>
            CampusSwap reserves the right to remove content, restrict access, or terminate accounts for violating the terms.
          </p>
        </div>

        <div className="terms-section">
          <h4>5. Modifications</h4>
          <p>
            These terms may change over time. Continued use of the platform indicates your agreement with updated terms.
          </p>
        </div>

        <div className="terms-section">
          <h4>6. Contact</h4>
          <p>
            For queries or complaints, reach out to us at <strong>terms@campusswap.in</strong>.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
