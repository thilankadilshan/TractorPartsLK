import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SellerProducts.css";
import { useNavigate } from "react-router-dom";

const SellerProducts = ({ sellerId }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/seller/by-seller/${sellerId}`
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load seller's products");
      }
    };

    if (sellerId) fetchProducts();
  }, [sellerId]);
  console.log("Products fetched:", products);

  return (
    <div className="seller-products-section">
      <h3 className="seller-products-title">Products by this Seller</h3>
      {error && <p className="seller-products-error">{error}</p>}

      <div className="seller-products-flex-container">
        {products.map((product) => (
          <div
            key={product._id}
            className="seller-product-card"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            <img
              src={`http://localhost:5000/${product.image?.replace(
                /\\/g,
                "/"
              )}`}
              alt={product.name}
              className="seller-product-image"
            />
            <h4 className="seller-product-name">{product.name}</h4>
            <p className="seller-product-price">RS {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;
