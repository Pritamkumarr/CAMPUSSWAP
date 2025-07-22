import React, { useState } from "react";
import axios from "../api/axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);

    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    console.log("Password:", JSON.stringify(password));
    console.log("Confirm:", JSON.stringify(confirmPassword));

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("/auth/signup", {
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        password,
        confirmPassword,
      });

      setMessage("✅ Signup successful!");
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Signup failed");
    }
  };

  return (
    <>
      <style>{`
        .signup-bg {
          background: linear-gradient(to bottom right, #6f00ff, #a833ff);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .signup-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 500px;
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
        .msg {
          margin-top: 15px;
          text-align: center;
          font-weight: bold;
        }
        .msg.success {
          color: green;
        }
        .msg.error {
          color: crimson;
        }
      `}</style>

      <div className="signup-bg">
        <div className="signup-card">
          <h2 className="text-center mb-4 text-purple fw-bold">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-purple">Sign Up</button>
            </div>
          </form>

          {message && (
            <p className={`msg ${isSuccess ? "success" : "error"}`}>{message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
