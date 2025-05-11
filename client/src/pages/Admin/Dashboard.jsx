import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div className="card">Total Users: 120</div>
        <div className="card">Products: 345</div>
        <div className="card">Orders: 89</div>
        <div className="card">Revenue: $12,300</div>
      </div>
    </div>
  );
};

export default Dashboard;
