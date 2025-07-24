// src/pages/Cart.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const res = await axios.get("/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(res.data.items || []);
      } catch (error) {
        alert(
          error.response?.data?.message || "Failed to fetch cart."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [navigate]);

  const handleRemove = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart((prev) => prev.filter((item) => item.product._id !== productId));
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to remove item."
      );
    }
  };

  if (loading) return <div className="text-center mt-5">Loading cart...</div>;
  if (!cart.length)
    return <div className="text-center mt-5">Your cart is empty.</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div className="card mb-3" style={{ maxWidth: "540px" }} key={item.product._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`http://localhost:5000/${item.product.image}`}
                className="img-fluid rounded-start"
                alt={item.product.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.product.title}</h5>
                <p className="card-text">{item.product.description}</p>
                <p className="card-text fw-bold">₹{item.product.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <button className="btn btn-danger me-2" onClick={() => handleRemove(item.product._id)}>
                  Remove
                </button>
                <button className="btn btn-success" onClick={() => alert("Proceeding to buy item: " + item.product.title)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
