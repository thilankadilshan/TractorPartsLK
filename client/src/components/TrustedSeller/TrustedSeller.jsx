import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSellers } from "../../services/sellerService";
import "./TrustedSeller.css";

const TrustedSeller = () => {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSellers = async () => {
      try {
        const data = await fetchSellers();
        setSellers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load sellers");
      }
    };

    getSellers();
  }, []);

  return (
    <div className="trusted-sellers-section">
      <h2 className="section-title block">TRUSTED SELLERS</h2>

      {error && <p className="error">{error}</p>}

      <div className="seller-flex-container">
        {sellers.map((seller) => (
          <div
            key={seller._id}
            className="seller-card block"
            onClick={() => navigate(`/sellers/${seller._id}`)}
          >
            <img
              src={
                seller.logo
                  ? `http://localhost:5000/${seller.logo.replace(/\\/g, "/")}`
                  : "/placeholder.jpg"
              }
              alt={seller.companyName}
              className="seller-logo"
            />

            <h3 className="company-name">{seller.companyName}</h3>

            <button className="shop-btn">Shop</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSeller;
