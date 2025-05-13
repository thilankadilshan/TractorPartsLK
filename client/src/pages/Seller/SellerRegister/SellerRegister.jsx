// pages/SellerRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CropModal from "../../../components/CropModal/CropModal";
import "./SellerRegister.css";

const SellerRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    companyName: "",
    companyAddress: "",
    description: "",
    profilePicture: null,
  });

  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
          setShowCropper(true);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCropComplete = (croppedBlob) => {
    // Convert the cropped Blob into a File with the correct extension
    const file = new File([croppedBlob], "profile.jpg", { type: "image/jpeg" });
    setForm({ ...form, profilePicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate all fields
    for (const key in form) {
      if (!form[key]) {
        setError(`Please fill in ${key}`);
        return;
      }
    }

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
    <>
      <Header />
      <div className="register-container">
        <h2>Seller Registration</h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="register-form"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyAddress"
            placeholder="Company Address"
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Company Description"
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}
          <button type="submit">Register as Seller</button>
        </form>
      </div>

      {showCropper && previewImage && (
        <CropModal
          image={previewImage}
          onClose={() => setShowCropper(false)}
          onCropComplete={handleCropComplete}
        />
      )}

      <Footer />
    </>
  );
};

export default SellerRegister;
