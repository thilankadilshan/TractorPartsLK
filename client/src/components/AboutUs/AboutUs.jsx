import React from "react";
import "./AboutUs.css";
import aboutImg from "../../assets/AboutUs.png"; // Replace with your image

const AboutUs = () => {
  return (
    <section className="aboutus-wrapper">
      <div className="aboutus-container">
        <div className="aboutus-content fade-in-left">
          <h2 className="section-title">About Us</h2>
          <h3 className="section-subtitle">Powering Sri Lanka’s Agriculture</h3>
          <p className="section-description">
            TractorPartsLK was born with a single mission to empower Sri Lankan
            farmers through easy access to authentic tractor spare parts. We
            connect rural communities with trusted suppliers, helping reduce
            downtime, boost productivity, and build stronger farming futures.
          </p>
          <p className="section-description">
            Our platform isn't just a marketplace. It's a movement towards
            verified parts, faster access, and smarter farming. With verified
            sellers, real-time messaging, and community-focused features, we’re
            transforming how agriculture works in the digital age.
          </p>
        </div>

        <div className="aboutus-image fade-in-right">
          <img src={aboutImg} alt="TractorPartsLK Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
