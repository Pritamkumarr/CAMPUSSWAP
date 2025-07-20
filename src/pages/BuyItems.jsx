import React from "react";
import { useNavigate } from "react-router-dom";
import "./BuyItems.css"; // ✅ CSS styling file

const sampleItems = [
  {
    id: 1,
    name: "Laptop",
    description: "Used Laptop, good condition",
    price: "₹35000",
    image: "https://placehold.co/250x150/DEEFFF/333?text=Laptop"
  },
  {
    id: 2,
    name: "Textbook",
    description: "Calculus book, latest edition",
    price: "₹300",
    image: "https://placehold.co/250x150/FFF1E6/333?text=Textbook"
  },
  {
    id: 3,
    name: "Mobile Phone",
    description: "Smartphone (Unlocked)",
    price: "₹8000",
    image: "https://placehold.co/250x150/F0E8FF/333?text=Mobile+Phone"
  }
];

const BuyItems = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="buy-page">
      <h2 className="page-title">Available Items for Purchase</h2>
      <div className="item-container">
        {sampleItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-title">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price}</p>
            <button
              className="item-button"
              onClick={() => handleViewDetails(item.id)}
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
