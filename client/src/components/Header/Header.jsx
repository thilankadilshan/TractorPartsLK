import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header className="header">
            <div className="branding">
                <img src={Logo} alt="TractorPartsLk" className="logo" />
                <h1 className="title">TractorPartsLk</h1>
            </div>
            <SearchBar />
            <NavBar />
        </header>
    );
};

export default Header;
