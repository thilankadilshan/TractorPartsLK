// src/components/AuthForm/Register/Register.jsx
import React, { useState } from "react";
import "../Login/Login";
import cog1 from "../../../assets/cogs/cog1.svg";
import cog2 from "../../../assets/cogs/cog2.svg";
import { useNavigate } from "react-router-dom";

const Register = ({ onSwitch }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      acceptedTerms,
    } = form;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!acceptedTerms) {
      setError("You must accept the Terms and Conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      alert("Registration successful!");
      setError("");
      onSwitch(); // Switch to login
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <div className="cog-container">
        <img src={cog1} alt="cog1" className="cog1" />
        <img src={cog2} alt="cog2" className="cog2" />
      </div>
      <h2>Register</h2>
      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <label className="terms-label">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={form.acceptedTerms}
            onChange={handleChange}
          />
          I accept the <a href="#">Terms & Conditions</a>
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
        <button
          type="button"
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </form>
      <p className="switch-text">
        Already have an account? <span onClick={onSwitch}>Login</span>
      </p>
    </div>
  );
};

export default Register;
