import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <style>{`
        .privacy-container {
          background-color: #ffffff;
          color: #000000;
          min-height: 100vh;
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .privacy-title {
          font-size: 2rem;
          font-weight: bold;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .privacy-section {
          margin-bottom: 20px;
        }
        .privacy-section h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .privacy-section p {
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>

      <div className="privacy-container">
        <h2 className="privacy-title">Privacy Policy</h2>

        <div className="privacy-section">
          <h4>1. Data We Collect</h4>
          <p>
            We collect basic information such as your name, email, and uploaded items. We do not store passwords in plain text.
          </p>
        </div>

        <div className="privacy-section">
          <h4>2. How We Use Your Data</h4>
          <p>
            Data is used to facilitate buying/selling functionality on CampusSwap. We never sell or share your information with third parties.
          </p>
        </div>

        <div className="privacy-section">
          <h4>3. Cookies & Local Storage</h4>
          <p>
            We use cookies for session management. No personal information is stored in cookies.
          </p>
        </div>

        <div className="privacy-section">
          <h4>4. Security</h4>
          <p>
            Your data is secured using modern encryption practices and best coding standards.
          </p>
        </div>

        <div className="privacy-section">
          <h4>5. Contact</h4>
          <p>
            If you have concerns, email us at <strong>support@campusswap.in</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
