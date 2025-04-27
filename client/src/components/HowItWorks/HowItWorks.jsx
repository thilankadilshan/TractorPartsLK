import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">🔍</div>
          <h3>Browse Parts</h3>
          <p>Explore thousands of tractor parts listed by trusted sellers.</p>
        </div>
        <div className="step">
          <div className="icon">📞</div>
          <h3>Contact Sellers</h3>
          <p>Directly connect with sellers to get the parts you need.</p>
        </div>
        <div className="step">
          <div className="icon">🚜</div>
          <h3>Get Back to Work</h3>
          <p>Fix your tractor fast and keep your work moving forward!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
