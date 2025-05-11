import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside
      style={{
        width: "220px",
        background: "#222",
        color: "#fff",
        padding: "1rem",
      }}
    >
      <h2>Admin</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink to="/admin" style={{ color: "#fff" }}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" style={{ color: "#fff" }}>
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products" style={{ color: "#fff" }}>
              Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" style={{ color: "#fff" }}>
              Site Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
