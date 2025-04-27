import React from "react";
import "./ShopsPage.css";
import Header from "../../../components/Header/Header";
import ShopBanner from "../../../components/ShopBanner/ShopBanner";
import TrustedSeller from "../../../components/TrustedSeller/TrustedSeller";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import Footer from "../../../components/Footer/Footer";

function ShopsPage() {
  return (
    <div className="shops-page">
      <Header />
      <ShopBanner />
      <div id="trusted-sellers">
        <TrustedSeller />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}

export default ShopsPage;
