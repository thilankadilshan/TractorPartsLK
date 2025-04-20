import React, { useState } from "react";
import "./ContactUs.css";
import contactImg from "../../assets/ContactUs.jpg";
import SocialLinks from "./SocialLinks";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi! I'm ${form.name}\nEmail: ${form.email}\nI'd like to say: ${form.message}`;
    const whatsappLink = `https://wa.me/94714592141?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form-section">
        <h2 className="form-title">Drop us a Message!</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="What's your full name?"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message for the team here"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <SocialLinks />
        </form>
      </div>

      <div className="contact-img-section">
        <img src={contactImg} alt="Contact illustration" />
      </div>
    </div>
  );
};

export default ContactUs;
