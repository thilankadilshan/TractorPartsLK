// src/components/NewestProducts/NewestProducts.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewestProducts.css";

const NewestProducts = () => {
  const navigate = useNavigate();
  const [newestProducts, setNewestProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getNewestProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/seller/newest-products"
        );
        setNewestProducts(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load newest products");
      }
    };

    getNewestProducts();
  }, []);

  return (
    <div className="newest-products-section">
      <h2 className="section-title">Newest Products</h2>

      {error && <p className="error">{error}</p>}

      <div className="product-flex-container">
        {newestProducts.map((product) => (
          <div
            key={product._id}
            className="product-card"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{`$${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewestProducts;
