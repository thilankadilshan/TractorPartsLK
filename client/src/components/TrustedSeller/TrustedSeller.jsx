import React from "react";
import { useNavigate } from "react-router-dom";
import "./TrustedSeller.css";

// Image imports
import nandhaLogo from "../../assets/sellers/nandha.jpg";
import brownsLogo from "../../assets/sellers/browns.png";
import asianLogo from "../../assets/sellers/asian.jpg";
import avrLogo from "../../assets/sellers/avr.jpg";

const sellers = [
  { name: "Nandha Trac Group", logo: nandhaLogo, link: "/sellers/nandha" },
  { name: "Browns Agriculture", logo: brownsLogo, link: "/sellers/browns" },
  { name: "Asian Global Ltd", logo: asianLogo, link: "/sellers/asian" },
  { name: "AVR Holdings", logo: avrLogo, link: "/sellers/avr" },
  { name: "Nandha Trac Group", logo: nandhaLogo, link: "/sellers/nandha" },
  { name: "Browns Agriculture", logo: brownsLogo, link: "/sellers/browns" },
  { name: "Asian Global Ltd", logo: asianLogo, link: "/sellers/asian" },
  { name: "AVR Holdings", logo: avrLogo, link: "/sellers/avr" },
];

const TrustedSeller = () => {
  const navigate = useNavigate();

  return (
    <div className="trusted-sellers-section">
      <h2 className="section-title block">TRUSTED SELLERS</h2>{" "}
      {/* Added block class here */}
      <div className="seller-flex-container">
        {sellers.map((seller, index) => (
          <div
            key={index}
            className="seller-card block"
            onClick={() => navigate(seller.link)}
          >
            <img src={seller.logo} alt={seller.name} className="seller-logo" />
            <button className="shop-btn">Shop</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSeller;
