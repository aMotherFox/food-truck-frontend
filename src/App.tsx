import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Entrees from './Entrees';
import Appetizers from './Appetizers';
import SignUp from './SignUp';

const App = () => (
	<div className="App">
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/entrees" element={<Entrees />} />
			<Route path="/appetizers" element={<Appetizers />} />
			<Route path="/signUp" element={<SignUp />} />
		</Routes>
		<p>Working on the Navbar! </p>
	</div>
);

export default App;
