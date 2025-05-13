import React, { useState } from "react";
import "./styles/EditProfile.css";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    shopName: "Thilanka Parts",
    email: "thilanka@sellers.com",
    phone: "0712345678",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated (frontend only)!");
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Shop Name:
          <input
            type="text"
            name="shopName"
            value={profile.shopName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
