import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>

        <nav className="admin-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Manage Users
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Manage Products
          </NavLink>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Site Settings
          </NavLink>
        </nav>
        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
          type="button"
        >
          ← Back to Home
        </button>
      </aside>
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
