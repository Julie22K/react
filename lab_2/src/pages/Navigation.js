
import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="nav-right">
            <Link to="/" className="active">Home</Link>
            <Link to="">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="">Testimony</Link>
            <Link to="">News</Link>
            <Link to="">Contact</Link>

        </div>
    );
}

export default Navigation;