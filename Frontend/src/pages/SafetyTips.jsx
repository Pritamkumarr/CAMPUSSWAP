import React from 'react';

const SafetyTips = () => {
  return (
    <>
      <style>{`
        .safety-container {
          background-color: #f9f5ff;
          color: #2d0b55;
          min-height: 100vh;
          padding: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .safety-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #6b21a8;
          border-bottom: 3px solid #a855f7;
          padding-bottom: 10px;
          margin-bottom: 30px;
        }
        .safety-tip {
          background-color: #ffffff;
          border-left: 5px solid #a855f7;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .safety-tip h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 10px;
        }
        .safety-tip p {
          font-size: 1rem;
          line-height: 1.7;
          color: #333;
        }
      `}</style>

      <div className="safety-container">
        <h2 className="safety-title">Safety Tips for Buyers & Sellers</h2>

        <div className="safety-tip">
          <h4>1. Meet in Public Places</h4>
          <p>Always meet the buyer or seller in a well-lit, busy area like a college campus or café.</p>
        </div>

        <div className="safety-tip">
          <h4>2. Verify the Product</h4>
          <p>Carefully inspect books, notes, or other materials before completing the transaction.</p>
        </div>

        <div className="safety-tip">
          <h4>3. Avoid Sharing Personal Info</h4>
          <p>Do not share sensitive information like passwords, OTPs, or bank details with anyone.</p>
        </div>

        <div className="safety-tip">
          <h4>4. Use In-App Communication</h4>
          <p>Keep communication within the platform to stay safe and protected from fraud.</p>
        </div>

        <div className="safety-tip">
          <h4>5. Trust Your Instincts</h4>
          <p>If something feels suspicious or too good to be true, walk away from the deal.</p>
        </div>

        <div className="safety-tip">
          <h4>6. Report Suspicious Activity</h4>
          <p>If you encounter fraud, misuse, or inappropriate behavior, report it immediately to <strong>support@campusswap.in</strong>.</p>
        </div>
      </div>
    </>
  );
};

export default SafetyTips;