import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <a href="/shop">Shops</a>
            <a href="/parts">Parts</a>
            <a href="/events">Events</a>
            <a href="/login">Login</a>
        </nav>
    );
};

export default NavBar;