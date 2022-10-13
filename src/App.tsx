import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import { useRoutes} from 'react-router-dom';

const App = () => {



  return (
    <div className="App">
        <p>Working on the Navbar! </p>
          <div>
             <Home/>
          </div>
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