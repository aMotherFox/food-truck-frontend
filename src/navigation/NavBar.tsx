import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
	<nav className="navbar-container">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/entrees"> Entrees </NavLink>
		<NavLink to="/appetizers"> Appetizers </NavLink>
		<NavLink to="/appetizer_menu"> Appetizer Menu </NavLink>
		<NavLink to="/sign-up"> Sign-Up </NavLink>
		<NavLink to="/login"> Login </NavLink>
		<NavLink to="/profile"> Profile </NavLink>
	</nav>
);

export default NavBar;
