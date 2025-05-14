// src/pages/Buyer/Profile/Profile.jsx
import React, { useEffect, useState } from "react";
import "./Profile.css";

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
  if (!userData) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Role:</strong> {userData.role}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;
{
  /* This is the default export */
}
