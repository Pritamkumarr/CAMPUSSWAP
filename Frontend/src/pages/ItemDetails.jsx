import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!item) return <div className="item-not-found">Item not found</div>;

  return (
    <div className="item-details-page">
      <div className="details-card">
        <img src={`http://localhost:5000/${item.image}`} alt={item.title} className="details-image" />
        <div className="details-info">
          <h2 className="details-title">{item.title}</h2>
          <p className="details-description">{item.description}</p>
          <p className="details-price">₹{item.price}</p>
          <div className="details-actions">
            <button className="back-button" onClick={() => navigate("/buy")}>
              ⬅ Go Back
            </button>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
