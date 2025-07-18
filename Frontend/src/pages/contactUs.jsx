import React from "react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <>
      <style>{`
        .contact-bg {
          background: linear-gradient(to bottom right, #6f00ff, #a833ff);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .contact-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 600px;
          width: 100%;
        }
        .btn-purple {
          background-color: #6f00ff;
          color: white;
          border: none;
        }
        .btn-purple:hover {
          background-color: #5900cc;
        }
        .text-purple {
          color: #6f00ff;
        }
      `}</style>

      <div className="contact-bg">
        <div className="contact-card">
          <h2 className="text-center mb-4 text-purple fw-bold">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="How can we help you?" required></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-purple">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
