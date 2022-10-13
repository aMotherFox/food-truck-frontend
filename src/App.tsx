import React from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import  NavBar from "./NavBar";
import Entrees from './Entrees';


const App = () => {



  return (
    <div className="App">
       <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path="/Entrees" element={<Entrees/>}/>
                </Routes>
       </BrowserRouter>
        <p>Working on the Navbar! </p>
    </div>
  );
};

export default App;

/*
          <div>
          <Routes>
            <Route path="/" element={<Layout/>}> </Route>
            <Route index element={<Home/>}></Route>
          </Routes>
          </div>
*/