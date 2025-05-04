import React from "react";
import "./SearchBar.css";
import { FaCamera, FaSearch } from "react-icons/fa"; // FontAwesome icons
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/search-by-image");
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for parts" />
      <button className="icon-btn" onClick={handleCameraClick}>
        <FaCamera />
      </button>
      <button className="icon-btn">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
