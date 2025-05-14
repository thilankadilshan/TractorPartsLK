// src/pages/ProductView.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductView = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/seller/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details");
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {product ? (
        <div>
          <img
            src={`http://localhost:5000/${product.image.replace(/\\/g, "/")}`}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{`Price: $${product.price}`}</p>
          <p>{`Brand: ${product.brand}`}</p>
          <p>{`Model: ${product.model}`}</p>
          {/* Add contact form or seller info here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductView;
