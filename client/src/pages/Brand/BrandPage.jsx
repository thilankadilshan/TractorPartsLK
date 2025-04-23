import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { brandData } from "../../utils/brandData";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./BrandPage.css"; // Create this CSS file for styling

const BrandPage = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const brand = brandData[brandName];

  if (!brand) {
    return <div className="not-found">Brand not found</div>;
  }

  return (
    <>
      <Header />
      <div className="brand-page-container">
        <h1 className="brand-title">{brand.name} Tractors</h1>
        <p className="brand-description">{brand.description}</p>

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
