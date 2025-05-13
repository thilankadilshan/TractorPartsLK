// src/pages/Seller/SellerDashboard.jsx
import React, { useEffect, useState } from "react";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/seller/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to load dashboard.");
        const data = await res.json();
        setDashboard(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDashboard();
  }, []);

  if (error) return <p className="error">{error}</p>;
  if (!dashboard) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard-page">
      <h2>Seller Dashboard</h2>
      <p>
        <strong>Welcome:</strong> {dashboard.sellerName}
      </p>
      <p>
        <strong>Total Products:</strong> {dashboard.productCount}
      </p>
      <p>
        <strong>Pending Orders:</strong> {dashboard.pendingOrders}
      </p>
      <p>
        <strong>Total Sales:</strong> ${dashboard.totalSales}
      </p>
      {/* Add more dashboard stats */}
    </div>
  );
};

export default SellerDashboard;
