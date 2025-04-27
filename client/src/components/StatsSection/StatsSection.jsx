import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-header">
        <h2>Our Achievements</h2>
        <p>Thousands of trusted connections between sellers and buyers.</p>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Sellers Icon"
          />
          <h2 className="stat-number">500+</h2>
          <p className="stat-label">Trusted Sellers</p>
        </div>

        <div className="stat-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
            alt="Parts Icon"
          />
          <h2 className="stat-number">10,000+</h2>
          <p className="stat-label">Parts Listed</p>
        </div>

        <div className="stat-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Locations Icon"
          />
          <h2 className="stat-number">100+</h2>
          <p className="stat-label">Locations Covered</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
