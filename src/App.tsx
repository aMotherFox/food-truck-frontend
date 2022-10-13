import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home'

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