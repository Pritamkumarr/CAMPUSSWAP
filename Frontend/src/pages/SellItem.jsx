import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "Electronics",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("image", formData.image);

      const res = await axios.post("http://localhost:5000/api/products", data);

      if (res.status === 201) {
        alert("Product listed successfully!");
        navigate("/buy");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to list product. Please try again.");
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.blob}></div>
      <div style={styles.sellContainer}>
        <h2 style={styles.sellTitle}>Sell Your Item</h2>
        <form style={styles.sellForm} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Product Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ ...styles.input, ...styles.textarea }}
            ></textarea>
          </label>

          <label style={styles.label}>
            Price (₹):
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Electronics">Electronics</option>
              <option value="Books">Books</option>
              <option value="Notes">Notes</option>
              <option value="Furniture">Furniture</option>
            </select>
          </label>

          <label style={styles.label}>
            Upload Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>

          {preview && (
            <div style={styles.preview}>
              <p>Image Preview:</p>
              <img src={preview} alt="Preview" style={styles.previewImg} />
            </div>
          )}

          <button type="submit" style={styles.button}>
            Sell Now
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #e6f0ff, #f9faff)",
    position: "relative",
    padding: "40px 20px",
  },
  blob: {
    content: '""',
    position: "absolute",
    top: "-100px",
    right: "-80px",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle at center, #007bff55, transparent 60%)",
    borderRadius: "50%",
    zIndex: 0,
    filter: "blur(60px)",
  },
  sellContainer: {
    position: "relative",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  sellTitle: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#1f3d7a",
  },
  sellForm: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  label: {
    fontWeight: 500,
    color: "#333",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    background: "white",
  },
  textarea: {
    resize: "vertical",
    minHeight: "80px",
  },
  button: {
    padding: "12px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  preview: {
    textAlign: "center",
  },
  previewImg: {
    marginTop: "10px",
    maxWidth: "100%",
    borderRadius: "10px",
  },
};

export default SellItem;
