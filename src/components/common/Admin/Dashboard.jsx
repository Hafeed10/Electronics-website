import React, { useState } from 'react';
import './Dashboard.css';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('File:', file);
    console.log('Form Data:', formData);
    // You can now send `formData` and `file` to your backend or API
  };

  return (
    <div className="dashboard">
      <h2>Add Product</h2>
      <form className="form-container" onSubmit={handleSubmit}>
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

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
