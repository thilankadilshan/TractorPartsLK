import React from "react";
import "./styles/SellerDashboard.css";

const Dashboard = () => {
  return (
    <div className="seller-dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="stat-box">🛒 Total Products: 12</div>
        <div className="stat-box">📦 Pending Orders: 3</div>
        <div className="stat-box">💰 Total Sales: Rs. 42000</div>
        <div className="stat-box">📬 New Messages: 1</div>
      </div>
    </div>
  );
};

export default Dashboard;
