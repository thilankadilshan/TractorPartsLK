import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyAddress: "",
    description: "",
    profilePicture: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setForm({ ...form, profilePicture: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register/seller",

        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Seller registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Seller Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Company Description"
          onChange={handleChange}
        ></textarea>
        <input
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register as Seller</button>
      </form>
    </div>
  );
};

export default SellerRegister;
