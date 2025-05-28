import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import SellerProducts from "../../../components/SellerProducts/SellerProducts";
import { FaWhatsapp, FaFacebook, FaGlobe } from "react-icons/fa";

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

            <h3
              className={`verified-status ${
                seller.isVerified ? "verified" : "not-verified"
              }`}
            >
              {seller.isVerified ? "Verified Seller" : "Not Verified"}
            </h3>

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

            <div className="social-links">
              <h3>Find us on</h3>
              <div className="social-icons-wrapper">
                {seller.whatsappLink && (
                  <a
                    href={seller.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp size={28} color="#25D366" />
                  </a>
                )}
                {seller.facebookLink && (
                  <a
                    href={seller.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <FaFacebook size={28} color="#1877F2" />
                  </a>
                )}
                {seller.websiteLink && (
                  <a
                    href={seller.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Website"
                    title="Website"
                  >
                    <FaGlobe size={28} color="#444" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          !error && <p className="loading">Loading seller details...</p>
        )}
      </div>
      {seller && <SellerProducts sellerId={id} />}

      <Footer />
    </>
  );
};

export default SellerDetails;
