import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cardHover, setCardHover] = useState(false);

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
  if (!item)
    return (
      <div
        style={{
          padding: "2rem",
          fontSize: "1.5rem",
          color: "red",
          textAlign: "center",
        }}
      >
        Item not found
      </div>
    );

  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #e3f2fd, #f1f8e9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: cardHover
            ? "0 10px 25px rgba(0, 0, 0, 0.2)"
            : "0 6px 15px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          maxWidth: "900px",
          width: "100%",
          transform: cardHover ? "scale(1.015)" : "scale(1)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img
          src={`http://localhost:5000/${item.image}`}
          alt={item.title}
          style={{
            width: "50%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
        />
        <div
          style={{
            padding: "2rem",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "#333",
            }}
          >
            {item.title}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: "#555",
            }}
          >
            {item.description}
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#2c3e50",
              marginBottom: "2rem",
            }}
          >
            ₹{item.price}
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              onClick={() => navigate("/buy")}
              style={{
                padding: "0.7rem 1.4rem",
                border: "none",
                backgroundColor: "#6c757d",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#5a6268")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#6c757d")
              }
            >
              ⬅ Go Back
            </button>
            <button
              style={{
                padding: "0.7rem 1.4rem",
                border: "none",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#218838")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#28a745")
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
