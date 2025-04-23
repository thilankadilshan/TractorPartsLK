import React from "react";
import "./SocialLinks.css";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaRobot } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="/chatbot" className="social-btn ai-chat">
        <FaRobot /> Chatbot
      </a>
      <a
        href="https://wa.me/94714592141"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn facebook"
      >
        <FaFacebookF /> Facebook
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn linkedin"
      >
        <FaLinkedinIn /> LinkedIn
      </a>
    </div>
  );
};

export default SocialLinks;
