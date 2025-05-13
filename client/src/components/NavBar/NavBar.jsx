// src/components/NavBar/NavBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaStore,
  FaCogs,
  FaCalendarAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import "./NavBar.css";
import { useAuth } from "../../context/AuthContext"; // use auth context

const NavBar = ({ currentPath, isMobile = false }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const commonLinks = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/shop", label: "Shops", icon: <FaStore /> },
    { path: "/parts", label: "Parts", icon: <FaCogs /> },
    { path: "/events", label: "Events", icon: <FaCalendarAlt /> },
  ];

  const authLinks = !user
    ? [{ path: "/login", label: "Login", icon: <FaSignInAlt /> }]
    : [
        user.role === "seller"
          ? {
              path: "/seller/dashboard",
              label: "Dashboard",
              icon: <FaTachometerAlt />,
            }
          : { path: "/profile", label: "Profile", icon: <FaUserCircle /> },
        {
          path: "#",
          label: "Logout",
          icon: <FaSignOutAlt />,
          onClick: handleLogout,
        },
      ];

  const links = [...commonLinks, ...authLinks];

  return (
    <nav className={`nav-bar ${isMobile ? "mobile" : "desktop"}`}>
      {links.map(({ path, label, icon, onClick }) => (
        <Link
          key={label}
          to={path !== "#" ? path : currentPath}
          onClick={onClick}
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
