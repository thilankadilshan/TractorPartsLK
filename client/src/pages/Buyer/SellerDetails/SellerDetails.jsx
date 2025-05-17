// ==== src/pages/Sellers/SellerDetails.jsx ====
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./SellerDetails.css";

const SellerDetails = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sellers/${id}`);
        setSeller(res.data);
      } catch (err) {
        console.error("Error fetching seller:", err);
        setError("Failed to load seller details.");
      }
    };

    fetchSeller();
  }, [id]);

  return (
    <>
      <Header />
      <div className="seller-details-container">
        {error && <p className="error">{error}</p>}

        {seller ? (
          <div className="seller-details-card">
            {seller.logo && (
              <img
                src={`http://localhost:5000/${seller.logo}`}
                alt="Seller Logo"
                className="seller-details-logo"
              />
            )}
            <h2>{seller.companyName}</h2>
            <p>
              <strong>Contact Number:</strong> {seller.contactNumber || "N/A"}
            </p>
            <p>
              <strong>Address:</strong> {seller.address || "N/A"}
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <p>{seller.description}</p>
          </div>
        ) : (
          !error && <p className="loading">Loading seller details...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SellerDetails;
