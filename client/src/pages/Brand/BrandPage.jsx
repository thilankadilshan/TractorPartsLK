import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { brandData } from "../../utils/brandData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./BrandPage.css";

const BrandPage = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const brand = brandData[brandName];

  if (!brand) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <Header />
      <div className="brand-page-wrapper">
        <div className="brand-intro-container">
          <div className="brand-intro-content fade-in-left">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="brand-logo"
            />
            <h1 className="brand-title">{brand.name} Tractors</h1>
            <h3 className="brand-subtitle"> {brand.subtitle}</h3>
            <p className="brand-description">{brand.description}</p>
          </div>

          <div className="brand-image-container fade-in-right">
            <img src={brand.image} alt={`${brand.name} tractors`} />
          </div>
        </div>

        <h2 className="models-heading">Models Available In Sri Lanka</h2>
        <div className="models-grid">
          {brand.models.map((model, index) => (
            <div
              key={index}
              className="model-card"
              onClick={() => navigate(model.link)}
            >
              <img src={model.image} alt={model.name} className="model-image" />
              <h3 className="model-name">{model.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandPage;
