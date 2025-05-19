import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import "./styles/SellerDashboard.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

const SellerDashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Sales (Rs.)",
        data: [12000, 9000, 15000, 42000, 25000],
        backgroundColor: "#28a745",
      },
    ],
  };

  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [21, 3],
        backgroundColor: ["#007bff", "#ffc107"],
      },
    ],
  };

  return (
    <div className="seller-dashboard-wrapper">
      <h1 className="seller-dashboard__title">Seller Dashboard</h1>

      <div className="seller-dashboard__stats">
        <div className="seller-dashboard__card card-blue">
          <h4>Total Products</h4>
          <p>12</p>
        </div>
        <div className="seller-dashboard__card card-yellow">
          <h4>Pending Orders</h4>
          <p>3</p>
        </div>
        <div className="seller-dashboard__card card-green">
          <h4>Total Sales</h4>
          <p>Rs. 42,000</p>
        </div>
        <div className="seller-dashboard__card card-cyan">
          <h4>New Messages</h4>
          <p>1</p>
        </div>
      </div>

      <div className="seller-dashboard__charts">
        <div className="seller-dashboard__chart-box">
          <h3>Monthly Sales</h3>
          <Bar data={barData} />
        </div>
        <div className="seller-dashboard__chart-box">
          <h3>Order Status</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
