import React, { useEffect, useState } from "react";
import "./BecomeSellerBanner.css";

const BecomeSellerBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    window.location.href = "/seller/register"; // adjust route as needed
  };

  return (
    <div className={`seller-banner ${isVisible ? "show" : ""}`}>
      <div className="seller-text">
        <h2>Become a Seller Today!</h2>
        <p>Join our marketplace and grow your business with us.</p>
      </div>
      <button className="seller-button" onClick={handleClick}>
        Start Selling
      </button>
    </div>
  );
};

export default BecomeSellerBanner;
