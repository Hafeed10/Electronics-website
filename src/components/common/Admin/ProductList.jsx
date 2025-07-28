import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { db } from './firebase';

import { collection, addDoc } from 'firebase/firestore';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        image: '',
        productName: '',
        finalPrice: '',
        originalPrice: '',
        info: '',
        brand: '',
        category: '',
        rateCount: 5,
        quantity: 1,
    });

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            if (file) reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleDelete = (index) => {
        const updated = [...products];
        updated.splice(index, 1);
        setProducts(updated);
        localStorage.setItem('products', JSON.stringify(updated));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(products[index]);
    };

    const handleCancel = () => {
        setEditIndex(null);
        setFormData({
            image: '',
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

    const handleUpdate = () => {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = { ...formData };
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        handleCancel();
    };

    const handlePublish = async () => {
        try {
            const productRef = collection(db, "products");

            for (const product of products) {
                await addDoc(productRef, {
                    image: product.image,
                    name: product.productName,
                    price: product.finalPrice,
                    originalPrice: product.originalPrice,
                    info: product.info,
                    brand: product.brand,
                    category: product.category,
                    rating_count: product.rateCount,
                    quantity: product.quantity,
                    createdAt: new Date()
                });
            }

            alert("All products published to Firebase!");
            localStorage.removeItem("products");
            setProducts([]);
        } catch (error) {
            console.error("Publish error:", error);
            alert("Failed to publish products to Firebase");
        }
    };

    return (
        <>
            <div className="product-list-container">
                <h2>Product List</h2>

                {editIndex !== null && (
                    <div className="edit-form">
                        <h3>Edit Product</h3>
                        <div className="edit-grid">
                            <input type="file" name="image" onChange={handleChange} />
                            {formData.image && (
                                <img src={formData.image} alt="Preview" className="image-preview" />
                            )}
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
                                {product.image && <img src={product.image} alt={product.productName} />}
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

            <div className="button_section">
                <Link to='/dashboard'>Back</Link>
                <button onClick={handlePublish}>Publish</button>
            </div>
        </>
    );
}

export default ProductList;
