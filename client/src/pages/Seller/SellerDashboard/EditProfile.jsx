import React, { useState, useEffect } from "react";
import "./styles/EditProfile.css";
import {
  getSellerProfile,
  updateSellerProfile,
} from "../../../services/sellerService";

const EditProfile = () => {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getSellerProfile(token);
        setCompanyName(data.companyName || "");
        setDescription(data.description || "");
        setContactNumber(data.contactNumber || "");
        setAddress(data.address || "");
        if (data.logo) {
          setPreview(`http://localhost:5000/${data.logo}`);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("companyName", companyName);
      formData.append("description", description);
      formData.append("contactNumber", contactNumber);
      formData.append("address", address);
      if (logo) formData.append("logo", logo);

      const updated = await updateSellerProfile(formData, token);
      setSuccess("Profile updated successfully!");
      setPreview(`http://localhost:5000/${updated.logo}`);
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h2>Edit Seller Profile</h2>

      {loading && <p className="profile-message">Loading...</p>}
      {error && <p className="profile-message error">{error}</p>}
      {success && <p className="profile-message success">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="profile-form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div className="profile-form-group">
          <label>Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        <div className="profile-form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="profile-form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="profile-form-group">
          <label>Logo</label>
          <input type="file" accept="image/*" onChange={handleLogoChange} />
          {preview && (
            <img
              src={preview}
              alt="Logo Preview"
              className="profile-logo-preview"
            />
          )}
        </div>

        <button type="submit" className="profile-submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
