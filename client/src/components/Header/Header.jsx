import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png'; // Update with actual logo path
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="TractorPartsLk" className="logo" />
            <h1 className="title">TractorPartsLk</h1>
            <SearchBar />
            <NavBar />
        </div>
    );
};

export default Header;