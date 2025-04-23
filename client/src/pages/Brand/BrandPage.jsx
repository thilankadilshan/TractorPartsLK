// src/pages/Brand/BrandPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import brandData from "../../utils/brandData";
import "./BrandPage.css";

const BrandPage = () => {
  const { brandName } = useParams();
  const brand = brandData[brandName];

  if (!brand) {
    return <h2>Brand not found</h2>;
  }

  return (
    <div className="brand-detail-page">
      <h2>{brand.name}</h2>
      <img src={brand.image} alt={brand.name} className="brand-main-image" />
      <p>{brand.description}</p>
      <h3>Popular Models</h3>
      <ul>
        {brand.models.map((model, index) => (
          <li key={index}>{model}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrandPage;
