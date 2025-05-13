import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./SellerLayout.css";

const SellerLayout = () => {
  return (
    <div className="seller-layout">
      <aside className="sidebar">
        <h2>Seller Panel</h2>
        <nav>
          <NavLink
            to="/seller/dashboard"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/seller/edit-profile"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/seller/messages"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Messages
          </NavLink>
          <NavLink
            to="/seller/add-products"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Add Products
          </NavLink>
          <NavLink
            to="/seller/manage-products"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Manage Products
          </NavLink>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;
