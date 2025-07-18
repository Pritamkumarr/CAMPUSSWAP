import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation or backend call here
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <>
      <style>{`
        .login-bg {
          background: linear-gradient(to bottom right, #6f00ff, #a833ff);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .login-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 400px;
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

      <div className="login-bg">
        <div className="login-card">
          <h2 className="text-center mb-4 text-purple fw-bold">CampusSwap Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@campus.edu"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-purple">Login</button>
            </div>

            <p className="text-center">
              Don't have an account? <a href="#" className="text-purple text-decoration-none">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
