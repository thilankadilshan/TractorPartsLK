import React from 'react';
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <a href="/shop">Shops</a>
            <a href="/parts">Parts</a>
            <a href="/events">Events</a>
            <a href="/login">Login</a>
            <a href="/cart" className="cart-link">
                <FaShoppingCart />
            </a>
        </nav>
    );
};

export default NavBar;
