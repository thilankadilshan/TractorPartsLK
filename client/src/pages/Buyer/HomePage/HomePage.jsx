import React from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Header from "../../../components/Header/Header";
import TractorBrands from "../../../components/TractorBrands/TractorBrands";
import TrustedSeller from "../../../components/TrustedSeller/TrustedSeller";
import ContactUs from "../../../components/ContactUs/ContactUs";
import AboutUs from "../../../components/AboutUs/AboutUs";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TractorBrands />
      <TrustedSeller />
      <ContactUs />
      <AboutUs />
      {/* Your other content */}
    </div>
  );
};

export default Dashboard;
