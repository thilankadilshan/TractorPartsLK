// src/pages/Dashboard.jsx
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import "./styles/dashboard.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

const Dashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 19000, 3000, 5000, 23000],
        backgroundColor: "#007bff",
      },
    ],
  };

  const doughnutData = {
    labels: ["Buyers", "Sellers"],
    datasets: [
      {
        data: [623, 104],
        backgroundColor: ["#28a745", "#ffc107"],
      },
    ],
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-stats">
        <div className="dashboard-card card-blue">
          <h4>Visitors</h4>
          <p>8,402</p>
        </div>
        <div className="dashboard-card card-cyan">
          <h4>Total Products</h4>
          <p>1,542</p>
        </div>
        <div className="dashboard-card card-green">
          <h4>Total Buyers</h4>
          <p>623</p>
        </div>
        <div className="dashboard-card card-yellow">
          <h4>Total Sellers</h4>
          <p>104</p>
        </div>
        <div className="dashboard-card card-purple">
          <h4>Revenue</h4>
          <p>$76,450</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-box">
          <h3>Monthly Revenue</h3>
          <Bar data={barData} />
        </div>
        <div className="chart-box">
          <h3>Buyer vs Seller</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
