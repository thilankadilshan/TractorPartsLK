import React from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Header from "../../../components/Header/Header";
import TractorBrands from "../../../components/TractorBrands/TractorBrands";
import TrustedSeller from "../../../components/TrustedSeller/TrustedSeller";
import ContactUs from "../../../components/ContactUs/ContactUs";
import AboutUs from "../../../components/AboutUs/AboutUs";
import Footer from "../../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TractorBrands />
      <TrustedSeller />
      <AboutUs />
      <ContactUs />
      <Footer />
      {/* Your other content */}
    </div>
  );
};

export default Dashboard;
