import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Entrees from "./Entrees/Entrees";
import Appetizers from "./Appetizers/Appetizers";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

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
