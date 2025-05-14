// src/pages/ProductView.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./ProductView.css";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/seller/view/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details");
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      <div className="product-view-container">
        {error && <p className="error">{error}</p>}

        {product ? (
          <div className="product-view-card">
            <div className="product-info">
              <img
                src={`http://localhost:5000/${product.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={product.name}
                className="product-img"
              />
              <div className="product-details">
                <h2>{product.name}</h2>
                <p>
                  <strong>Part Number:</strong> {product.partNumber}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Price:</strong> Rs. {product.price}
                </p>
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p>
                  <strong>Model:</strong> {product.model}
                </p>
                <p>
                  <strong>Added:</strong>{" "}
                  {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="seller-info">
              <h3>Seller Info</h3>
              <p>
                <strong>Seller ID:</strong> {product.seller}
              </p>
              <p>
                More seller details will be shown here if API allows fetching by
                ID.
              </p>
              <button className="message-button">Send Message</button>
            </div>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
