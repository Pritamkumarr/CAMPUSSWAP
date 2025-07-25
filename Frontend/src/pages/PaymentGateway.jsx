import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentGateway = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [success, setSuccess] = useState(false);

  if (!product) {
    return <div className="text-center mt-5">No product selected for payment.</div>;
  }

  const handlePayment = () => {
    setSuccess(true);
    setTimeout(() => {
      navigate("/buy");
    }, 1800);
  };

  return (
    <div className="container mt-5 position-relative">
      {success && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 10
        }}>
          <div className="alert alert-success text-center" style={{ width: "fit-content", fontWeight: 600, fontSize: "1.2rem", marginTop: "1.5rem" }}>
            Payment successful for {product.title}!
          </div>
        </div>
      )}
      <h2 className="mb-4">Payment Gateway</h2>
      <div className="card" style={{ maxWidth: "540px", margin: "0 auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://localhost:5000/${product.image}`}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text fw-bold">₹{product.price}</p>
              <button className="btn btn-primary" onClick={handlePayment} disabled={success}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
