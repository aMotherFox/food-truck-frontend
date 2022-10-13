import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import  NavBar from "./NavBar";
import Entrees from './Entrees';
import Appetizers from './Appetizers';


const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/entrees" element={<Entrees/>}/>
                    <Route path="/appetizers" element={<Appetizers/>}/>
                </Routes>
       </BrowserRouter>
       <p>Working on the Navbar! </p>
    </div>
  );
};

export default App;
