import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import "./SellerLayout.css"; // Ensure your path matches

const SellerLayout = () => {
  return (
    <div className="seller-layout">
      <aside className="seller-sidebar">
        <h2 className="seller-title">Seller Panel</h2>
        <nav className="seller-nav">
          <NavLink
            to="/seller/dashboard"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/seller/edit-profile"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/seller/messages"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Messages
          </NavLink>
          <NavLink
            to="/seller/add-products"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Products
          </NavLink>
          <NavLink
            to="/seller/manage-products"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Manage Products
          </NavLink>

          {/* Back to Home Button */}
          <Link to="/home" className="back-home-link">
            ← Back to Home
          </Link>
        </nav>
      </aside>
      <main className="seller-content">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;
