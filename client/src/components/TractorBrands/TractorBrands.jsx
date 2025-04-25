import React from "react";
import { useNavigate } from "react-router-dom";
import "./TractorBrands.css";
import tafeImg from "../../assets/brands/tafe.jpg";
import mahindraImg from "../../assets/brands/mahindra.png";
import sonalikaImg from "../../assets/brands/sonalika.jpg";
import johnDeereImg from "../../assets/brands/johndeere.png";
import kubotaImg from "../../assets/brands/kubota.png";
import masseyImg from "../../assets/brands/massey.png";

const brands = [
  { name: "TAFE", logo: tafeImg, link: "/brands/tafe" },
  { name: "Mahindra", logo: mahindraImg, link: "/brands/mahindra" },
  { name: "Sonalika", logo: sonalikaImg, link: "/brands/sonalika" },
  { name: "John Deere", logo: johnDeereImg, link: "/brands/johndeere" },
  { name: "Kubota", logo: kubotaImg, link: "/brands/kubota" },
  { name: "Massey Fergusonpng", logo: masseyImg, link: "/brands/massey" },
];

const TractorBrands = () => {
  const navigate = useNavigate();

  return (
    <div className="tractor-brands-section">
      <h2 className="section-title">TRACTOR BRANDS</h2>
      <div className="brand-flex-container">
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
