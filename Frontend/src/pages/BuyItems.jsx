import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const BuyItems = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleAddToCart = async (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
      return;
    }
    try {
      await axios.post(
        "/cart/add",
        { productId: item._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Item added to cart!");
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to add item to cart."
      );
    }
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <style>{`
        .buy-page {
          padding: 2rem;
          min-height: 100vh;
          background: linear-gradient(to right, #f8faff, #eaf3ff);
          position: relative;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .search-input {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #ccc;
          width: 250px;
        }

        .page-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1f3d7a;
          margin: 1rem 0;
          text-align: center;
          flex: 1;
        }

        .cart-button {
          background-color: #3366cc;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
        }

        .item-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }

        .item-card {
          background-color: white;
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .item-card:hover {
          transform: translateY(-6px);
        }

        .item-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .item-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          text-align: center;
        }

        .item-description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 0.8rem;
          text-align: center;
        }

        .item-price {
          font-size: 1.1rem;
          font-weight: bold;
          color: #007bff;
          margin-bottom: 1rem;
        }

        .button-group {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .item-button,
        .add-to-cart-button {
          background-color: #3366cc;
          color: white;
          padding: 0.4rem 0.8rem;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .item-button:hover,
        .add-to-cart-button:hover {
          background-color: #234ca3;
        }

        .buy-page::before {
          content: "";
          position: absolute;
          bottom: -120px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at center, #4a90e244, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          filter: blur(60px);
        }
      `}</style>

      <div className="buy-page">
        <div className="header">
          <input
            type="text"
            className="search-input"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h2 className="page-title">Buy Items</h2>
          <button className="cart-button" onClick={handleGoToCart}>🛒 Cart</button>
        </div>

        <div className="item-container">
          {filteredProducts.map((item) => (
            <div key={item._id} className="item-card">
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.title}
                className="item-image"
              />
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">₹{item.price}</p>
              <div className="button-group">
                <button
                  className="item-button"
                  onClick={() => handleViewDetails(item._id)}
                >
                  View Details
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuyItems;
