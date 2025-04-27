import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaCogs,
  FaCalendarAlt,
  FaSignInAlt,
} from "react-icons/fa";
import "./NavBar.css";

const NavBar = ({ currentPath, isMobile = false }) => {
  const links = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/shop", label: "Shops", icon: <FaStore /> },
    { path: "/parts", label: "Parts", icon: <FaCogs /> },
    { path: "/events", label: "Events", icon: <FaCalendarAlt /> },
    { path: "/login", label: "Login", icon: <FaSignInAlt /> },
  ];

  return (
    <nav className={`nav-bar ${isMobile ? "mobile" : "desktop"}`}>
      {links.map(({ path, label, icon }) => (
        <Link
          key={path}
          to={path}
          className={currentPath === path ? "active" : ""}
        >
          <span className="nav-icon">{icon}</span>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
