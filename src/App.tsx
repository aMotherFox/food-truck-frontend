import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navBar/NavBar";
import Entrees from "./entrees/Entrees";
import Appetizers from "./appetizers/Appetizers";
import SignUp from "./signUp/SignUp";
import Login from "./login/Login";
import Profile from "./profile/Profile";

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
