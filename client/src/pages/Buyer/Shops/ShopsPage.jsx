import React from "react";
import "./ShopsPage.css";
import Header from "../../../components/Header/Header";
import ShopBanner from "../../../components/ShopBanner/ShopBanner";
import TrustedSeller from "../../../components/TrustedSeller/TrustedSeller";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import StatsSection from "../../../components/StatsSection/StatsSection";
import TractorBrands from "../../../components/TractorBrands/TractorBrands";
import Footer from "../../../components/Footer/Footer";
import BecomeSellerBanner from "../../../components/BecomeSellerBanner/BecomeSellerBanner";

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
      <TractorBrands />
      <StatsSection />
      <BecomeSellerBanner />
      <Footer />
    </div>
  );
}

export default ShopsPage;
