import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar-container">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/entrees"> Entrees </NavLink>
			<NavLink to="/appetizers"> Appetizers </NavLink>
		</nav>
	);
}

export default NavBar;
