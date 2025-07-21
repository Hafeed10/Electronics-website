// src/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    productName: '',
    finalPrice: '',
    originalPrice: '',
    info: '',
    brand: '',
    category: '',
    rateCount: 5,
    quantity: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      image: file ? URL.createObjectURL(file) : null,
    };

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Reset form
    setFormData({
      productName: '',
      finalPrice: '',
      originalPrice: '',
      info: '',
      brand: '',
      category: '',
      rateCount: 5,
      quantity: 1,
    });
    setFile(null);

    navigate('/ProductList');
  };

  return (
    <div className="dashboard">
      <div className="top-buttons">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/ProductList')}>Product List</button>
      </div>

      <h2>Add Product</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-pair">
          <div className="input-group">
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              onChange={handleChange}
              value={formData.productName}
            />
          </div>
        </div>

        <div className="input-pair">
          <div className="input-group">
            <input
              type="number"
              name="finalPrice"
              placeholder="Enter final price"
              onChange={handleChange}
              value={formData.finalPrice}
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              name="originalPrice"
              placeholder="Enter original price"
              onChange={handleChange}
              value={formData.originalPrice}
            />
          </div>
        </div>

        <div className="input-pair">
          <div className="input-group">
            <input
              type="text"
              name="info"
              placeholder="Enter product info"
              onChange={handleChange}
              value={formData.info}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="brand"
              placeholder="Enter brand"
              onChange={handleChange}
              value={formData.brand}
            />
          </div>
        </div>

        <div className="input-pair">
          <div className="input-group">
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              onChange={handleChange}
              value={formData.category}
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              name="rateCount"
              placeholder="Enter rate count"
              min={5}
              onChange={handleChange}
              value={formData.rateCount}
            />
          </div>
        </div>

        <div className="input-pair">
          <div className="input-group">
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              min={1}
              onChange={handleChange}
              value={formData.quantity}
            />
          </div>
        </div>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
