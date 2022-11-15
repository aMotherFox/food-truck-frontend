import React from "react";
import "./styleSheet/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./customer/Home";
import NavBar from "./navigatorBar/NavBar";
import Entrees from "./menu/entrees/Entrees";
import Appetizers from "./menu/appetizers/Appetizers";
import SignUp from "./customer/SignUp";
import Login from "./customer/Login";
import Profile from "./customer/Profile";

const App = () => (
	<div className="App">
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/entrees" element={<Entrees />} />
			<Route path="/appetizers" element={<Appetizers />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/login" element={<Login />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
		<p>Working on the Navbar! </p>
	</div>
);

export default App;
