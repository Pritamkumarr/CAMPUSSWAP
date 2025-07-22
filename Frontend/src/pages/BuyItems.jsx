import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BuyItems.css";

const BuyItems = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="buy-page">
      <h2 className="page-title">Available Items for Purchase</h2>
      <div className="item-container">
        {products.map((item) => (
          <div key={item._id} className="item-card">
            <img
              src={`http://localhost:5000/${item.image}`}
              alt={item.title}
              className="item-image"
            />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">₹{item.price}</p>
            <button
              className="item-button"
              onClick={() => handleViewDetails(item._id)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyItems;
