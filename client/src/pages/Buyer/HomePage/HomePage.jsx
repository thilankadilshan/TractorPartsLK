import React from "react";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Header from "../../../components/Header/Header";
import TractorBrands from "../../../components/TractorBrands/TractorBrands";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TractorBrands />
      {/* Your other content */}
    </div>
  );
};

export default Dashboard;
