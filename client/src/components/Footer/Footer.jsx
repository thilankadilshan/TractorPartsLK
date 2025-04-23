import React from "react";
import "./Footer.css";
import SocialLinks from "../ContactUs/SocialLinks";
import logo from "../../assets/logo.png"; // Update path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-col">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2>TractorPartsLk</h2>
          <p className="footer-about">
            Connecting farmers with trusted suppliers for genuine tractor spare
            parts across Sri Lanka.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/shop">Shops</a>
            </li>
            <li>
              <a href="parts">Parts</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>Email: tractorpartslk@gmail.com</li>
            <li>Phone: +94 714592141</li>
            <li>Homagama, Sri Lanka</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-col">
          <h3 className="footer-title">Follow Us</h3>
          <SocialLinks />
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TractorPartsLK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
