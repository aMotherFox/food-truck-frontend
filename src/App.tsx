import React from 'react';
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import  NavBar from "./NavBar";


const App = () => {



  return (
    <div className="App">
        <p>Working on the Navbar! </p>
           <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                    </Routes>
           </BrowserRouter>

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