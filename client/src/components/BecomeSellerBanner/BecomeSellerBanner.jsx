import React, { useEffect, useState } from "react";
import "./BecomeSellerBanner.css";

const BecomeSellerBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = "/seller/register";
  };

  return (
    <section className={`seller-banner-section ${isVisible ? "show" : ""}`}>
      <div className="seller-banner-card">
        <div className="seller-text">
          <h2>Become a Seller Today!</h2>
          <p>Join our marketplace and grow your business with us.</p>
        </div>
        <button className="seller-button" onClick={handleClick}>
          Start Selling
        </button>
      </div>
    </section>
  );
};

export default BecomeSellerBanner;
