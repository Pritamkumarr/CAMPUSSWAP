import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
        }

        .login-bg {
          position: relative;
          background: linear-gradient(to bottom right, #6f00ff, #a833ff);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          z-index: 1;
        }

        .login-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          width: 100%;
          z-index: 2;
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

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
          animation: float 10s ease-in-out infinite;
          z-index: 0;
        }

        .blob1 {
          width: 300px;
          height: 300px;
          background: #ff00ff;
          top: -50px;
          left: -80px;
        }

        .blob2 {
          width: 250px;
          height: 250px;
          background: #00ffff;
          bottom: -60px;
          right: -70px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        .wave {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: auto;
          z-index: 0;
        }

        .bg-illustration {
          bottom: 10px;
          left: 10px;
          width: 300px;
          opacity: 0.80;
          z-index: 1;
          position: realtive;  
        }
      `}</style>

      <div className="login-bg">
        {/* Blurred gradient blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

      <img
          src="/campus-illustration.png"
          alt="Campus Illustration"
         className="bg-illustration"
        /> 

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

        {/* Decorative Wave at Bottom */}
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff22" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,165.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </>
  );
};

export default Login;
