// src/pages/Cart.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItem = location.state?.cartItem;

  const handleBuyNow = () => {
    alert("Proceeding to buy item: " + cartItem.title);
    // Future: integrate payment or order flow
  };

  if (!cartItem) {
    return <div className="text-center mt-5">Your cart is empty.</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`http://localhost:5000/${cartItem.image}`}
              className="img-fluid rounded-start"
              alt={cartItem.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{cartItem.title}</h5>
              <p className="card-text">{cartItem.description}</p>
              <p className="card-text fw-bold">₹{cartItem.price}</p>
              <button className="btn btn-success" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
