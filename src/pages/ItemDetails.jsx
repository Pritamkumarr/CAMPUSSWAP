import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ItemDetails.css";

const dummyItemDetails = {
  1: {
    name: "Laptop",
    description: "Used laptop in good condition, perfect for students and working professionals.",
    price: "₹35000",
    image: "https://placehold.co/500x300/E0E7FF/333?text=Laptop"
  },
  2: {
    name: "Textbook",
    description: "Calculus textbook, latest edition. Very few highlights, almost new.",
    price: "₹300",
    image: "https://placehold.co/500x300/FFF1E6/333?text=Textbook"
  },
  3: {
    name: "Mobile Phone",
    description: "Unlocked smartphone in excellent condition. No scratches or damage.",
    price: "₹8000",
    image: "https://placehold.co/500x300/F0E8FF/333?text=Mobile+Phone"
  }
};

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = dummyItemDetails[id];

  if (!item) {
    return <div className="item-not-found">Item not found</div>;
  }

  return (
    <div className="item-details-page">
      <div className="details-card">
        <img src={item.image} alt={item.name} className="details-image" />
        <div className="details-info">
          <h2 className="details-title">{item.name}</h2>
          <p className="details-description">{item.description}</p>
          <p className="details-price">{item.price}</p>
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
 