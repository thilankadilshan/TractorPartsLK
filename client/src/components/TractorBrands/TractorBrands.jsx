import React from "react";
import { useNavigate } from "react-router-dom";
import "./TractorBrands.css";

const brands = [
  { name: "TAFE", logo: "/assets/brands/tafe.png", link: "/brands/tafe" },
  { name: "Mahindra", logo: "/assets/brands/mahindra.png", link: "/brands/mahindra" },
  { name: "Sonalika", logo: "/assets/brands/sonalika.png", link: "/brands/sonalika" },
  { name: "John Deere", logo: "/assets/brands/john-deere.png", link: "/brands/john-deere" },
  { name: "TAFE", logo: "/assets/brands/tafe.png", link: "/brands/tafe" },
  { name: "Mahindra", logo: "/assets/brands/mahindra.png", link: "/brands/mahindra" },
  { name: "Sonalika", logo: "/assets/brands/sonalika.png", link: "/brands/sonalika" },
  { name: "John Deere", logo: "/assets/brands/john-deere.png", link: "/brands/john-deere" },
];

const TractorBrands = () => {
  const navigate = useNavigate();

  return (
    <div className="tractor-brands-section">
      <h2 className="section-title">TRACTOR BRANDS</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() => navigate(brand.link)}
          >
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TractorBrands;
