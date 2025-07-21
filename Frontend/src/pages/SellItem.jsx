import React, { useState } from "react";
import "./SellItem.css"; // Ensure this path is correct and CSS file exists

const SellItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "Electronics",
    image: null,
  });

  const [preview, setPreview] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Item submitted for selling (console logged).");
    // In real app: Send formData to backend via API
  };

  return (
    <div className="sell-container">
      <h2 className="sell-title">Sell Your Item</h2>
      <form className="sell-form" onSubmit={handleSubmit}>
        <label>
          Product Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Price (₹):
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Notes">Notes</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>

        <label>
          Upload Image:
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
        </label>

        {preview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" className="sell-btn">Sell Now</button>
      </form>
    </div>
  );
};

export default SellItem;
