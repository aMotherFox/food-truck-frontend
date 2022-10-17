import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
	<nav className="navbar-container">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/entrees"> Entrees </NavLink>
		<NavLink to="/appetizers"> Appetizers </NavLink>
		<NavLink to="/sign-up"> SignUp </NavLink>
	</nav>
);

export default NavBar;
