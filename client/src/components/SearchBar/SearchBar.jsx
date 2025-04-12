import React from 'react';
import './SearchBar.css';
import { FaCamera, FaSearch } from 'react-icons/fa'; // FontAwesome icons

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for parts" />
            <button className="icon-btn"><FaCamera /></button>
            <button className="icon-btn"><FaSearch /></button>
        </div>
    );
};

export default SearchBar;
