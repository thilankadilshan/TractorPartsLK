// src/pages/Buyer/Profile/Profile.jsx
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header"; // adjust paths as needed
import Footer from "../../../components/Footer/Footer";
import "./Profile.css"; // regular CSS import, no "styles"

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch user data.");
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) return <p className="error">{error}</p>;
  if (!userData) return <p className="loading">Loading profile...</p>;

  // Format timestamps
  const createdAt = new Date(userData.createdAt).toLocaleDateString();
  const updatedAt = new Date(userData.updatedAt).toLocaleDateString();

  return (
    <>
      <Header />
      <div className="profilePage">
        <h2>User Profile</h2>
        <p>
          <strong>Name:</strong> {userData.firstName} {userData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Role:</strong> {userData.role}
        </p>
        <p>
          <strong>Account Created:</strong> {createdAt}
        </p>
        <p>
          <strong>Last Updated:</strong> {updatedAt}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
