import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import "./Header.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="branding">
        {/* Wrap the logo image with Link */}
        <Link to="/home">
          <img src={Logo} alt="TractorPartsLk Home" className="logo" />
        </Link>
        {/* Wrap the title text with Link. Added inline style to prevent default link styling */}
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="title">TractorPartsLk</h1>
        </Link>
      </div>
      <SearchBar />
      <NavBar />
    </header>
  );
};

export default Header;
