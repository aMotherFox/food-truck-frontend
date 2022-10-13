import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
    <nav className="navbar-container">
        <NavLink to="/">
         Home!
        </NavLink>
        <NavLink to="/Entrees"> Entrees </NavLink>

    </nav>
    );

};

export default NavBar;