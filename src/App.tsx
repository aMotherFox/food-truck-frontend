import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./navigation/Home";
import NavBar from "./navigation/NavBar";
import Entrees from "./entrees/Entrees";
import Appetizers from "./appetizers/Appetizers";
import SignUp from "./customer/SignUp";
import Login from "./customer/Login";
import Profile from "./customer/Profile";

const App = () => (
	<ChakraProvider>
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
		</div>
	</ChakraProvider>
);

export default App;
