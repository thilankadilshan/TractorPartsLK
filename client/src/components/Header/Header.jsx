import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import { FaSearch, FaBars } from "react-icons/fa";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAnimatingClose, setAnimatingClose] = useState(false);
  const location = useLocation();

  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  const toggleSidebar = () => {
    setSidebarOpen(true);
    setAnimatingClose(false);
  };

  const closeSidebar = () => {
    setAnimatingClose(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setAnimatingClose(false);
    }, 300); // Matches CSS animation duration
  };

  return (
    <header className="header">
      <div className="branding">
        <Link to="/home">
          <img src={Logo} alt="TractorPartsLk Home" className="logo" />
        </Link>
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="title">TractorPartsLk</h1>
        </Link>
      </div>

      <div className="desktop-search">
        <SearchBar />
      </div>

      <div className="nav-actions">
        <button className="icon-btn mobile-only" onClick={toggleSearch}>
          <FaSearch />
        </button>
        <button className="icon-btn mobile-only" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      <NavBar currentPath={location.pathname} />

      {isSearchOpen && (
        <div className="popup-search mobile-only">
          <SearchBar />
        </div>
      )}

      {(isSidebarOpen || isAnimatingClose) && (
        <div className={`sidebar ${isAnimatingClose ? "slide-out" : ""}`}>
          <button className="close-btn" onClick={closeSidebar}>
            ×
          </button>
          <NavBar currentPath={location.pathname} isMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
