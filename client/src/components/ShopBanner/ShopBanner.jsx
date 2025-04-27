import React from "react";
import "./ShopBanner.css";

const HeroBanner = () => {
  const scrollToSellers = () => {
    const sellersSection = document.getElementById("trusted-sellers");
    if (sellersSection) {
      sellersSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-banner">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Find Trusted Tractor Parts Sellers</h1>
        <p>Browse Spare Parts, Contact Sellers Directly</p>
        <button onClick={scrollToSellers} className="main-button">
          Browse Sellers
        </button>
        <button onClick={scrollToHowItWorks} className="red-button">
          How It Works
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
