import React from "react";
import "./TrustedSeller.css";
import { useNavigate } from "react-router-dom";

// Import images directly (since they're inside src/assets/sellers)
import nandhaLogo from "../../assets/sellers/nandha.png";
import brownsLogo from "../../assets/sellers/browns.png";
import asianLogo from "../../assets/sellers/asian.png";
import avrLogo from "../../assets/sellers/avr.png";

const sellers = [
  { name: "Nandha Trac Group", logo: nandhaLogo, link: "/sellers/nandha" },
  { name: "Browns Agriculture", logo: brownsLogo, link: "/sellers/browns" },
  { name: "Asian Global Ltd", logo: asianLogo, link: "/sellers/asian" },
  { name: "AVR Holdings", logo: avrLogo, link: "/sellers/avr" },
];

const TrustedSeller = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <section className="trusted-sellers">
      <h2>Trusted Sellers</h2>
      <div className="seller-grid">
        {sellers.map((seller, index) => (
          <div
            className="seller-card"
            key={index}
            onClick={() => handleClick(seller.link)}
          >
            <img src={seller.logo} alt={seller.name} />
            <button className="shop-btn">Shop</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSeller;
