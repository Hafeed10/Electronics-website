// src/ProductList.js
import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
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

    // Load products from localStorage
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    // Delete product
    const handleDelete = (index) => {
        const updated = [...products];
        updated.splice(index, 1);
        setProducts(updated);
        localStorage.setItem('products', JSON.stringify(updated));
    };

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Start editing
    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(products[index]);
    };

    // Cancel editing
    const handleCancel = () => {
        setEditIndex(null);
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
    };

    // Update product
    const handleUpdate = () => {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = { ...formData, image: products[editIndex].image };
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        handleCancel();
    };

    return (
        <>
            <div className="product-list-container">
                <h2>Product List</h2>

                {editIndex !== null && (
                    <div className="edit-form">
                        <h3>Edit Product</h3>
                        <div className="edit-grid">
                            <input type="text" name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name" />
                            <input type="number" name="finalPrice" value={formData.finalPrice} onChange={handleChange} placeholder="Final Price" />
                            <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} placeholder="Original Price" />
                            <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" />
                            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                            <input type="text" name="info" value={formData.info} onChange={handleChange} placeholder="Info" />
                            <input type="number" name="rateCount" value={formData.rateCount} onChange={handleChange} placeholder="Rating" />
                            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" />
                        </div>
                        <button className="update-btn" onClick={handleUpdate}>Update</button>
                        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                )}

                {products.length === 0 ? (
                    <p>No products added yet.</p>
                ) : (
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.productName}
                                    />
                                )}
                                <h3>{product.productName}</h3>
                                <p>Final Price: ₹{product.finalPrice}</p>
                                <p>Original Price: ₹{product.originalPrice}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Category: {product.category}</p>
                                <p>Quantity: {product.quantity}</p>
                                <p>Rating: {product.rateCount}⭐</p>
                                <p>Info: {product.info}</p>
                                <div className="card-buttons">
                                    <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='button_section'>
                <button>Publish</button>
            </div>
        </>
    );
}

export default ProductList;
