import React from "react";
import "./PartsPage.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import NewestProducts from "../../../components/NewestProducts/NewestProducts";

function PartsPage() {
  return (
    <div className="parts-page">
      <Header />

      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Genuine Tractor Spare Parts</h1>
          <p>Connecting Farmers with Trusted Sellers Across the Country</p>
          <button className="cta-button">Browse Parts</button>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>🔧 Engine Parts</h3>
          <p>High-quality OEM and aftermarket engine components.</p>
        </div>
        <div className="feature-card">
          <h3>🚜 Transmission & Gear</h3>
          <p>Durable and reliable parts for all major tractor brands.</p>
        </div>
        <div className="feature-card">
          <h3>🛠️ Hydraulic Systems</h3>
          <p>Full range of hydraulic pumps, valves, and seals.</p>
        </div>
      </section>

      <section className="info-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Verified Sellers & Original Parts</li>
          <li>✅ Easy Image Search for Products</li>
          <li>✅ Delivery Across Rural & Urban Areas</li>
        </ul>
      </section>
      <div>
        <h1>Parts</h1>
        <NewestProducts />
      </div>

      <Footer />
    </div>
  );
}

export default PartsPage;
