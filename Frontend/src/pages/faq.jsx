import React from 'react';

const FAQ = () => {
  return (
    <>
      <style>{`
        .faq-container {
          background-color: #ffffff;
          color: #000000;
          min-height: 100vh;
          padding: 40px;
          font-family: Arial, sans-serif;
        }
        .faq-title {
          font-size: 2rem;
          font-weight: bold;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .faq-item {
          margin-bottom: 25px;
        }
        .faq-question {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .faq-answer {
          font-size: 1rem;
          line-height: 1.6;
          margin-top: 5px;
        }
      `}</style>

      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>

        <div className="faq-item">
          <div className="faq-question">Q1: What is CampusSwap?</div>
          <div className="faq-answer">CampusSwap is a platform where students can buy and sell used books and notes (PDFs) with ease.</div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q2: How do I list an item for sale?</div>
          <div className="faq-answer">Click on the “Sell” option from the menu, fill in the item details, upload the PDF or book image, and set a price.</div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q3: Is registration required?</div>
          <div className="faq-answer">Yes, you need to register and log in to sell or buy any item on the platform.</div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q4: What file types are supported?</div>
          <div className="faq-answer">You can upload PDFs for notes and images (JPG/PNG) for books.</div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q5: How do I contact support?</div>
          <div className="faq-answer">Reach out to us at <strong>support@campusswap.in</strong> for any help or queries.</div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
