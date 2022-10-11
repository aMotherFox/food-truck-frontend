import React from 'react';
import logo from './logo.svg';
import './App.css';

function App()  {

const ourProject = "We are working on a food truck app"

const handleSubmit = (e: React.ChangeEvent<any>) => {
    console.log("I've been clicked")
    e.preventDefault();
    }

    useEffect(() => {
    },[]);

//     const getData = async () => {
//     const response = await fetch("http://localhost:8080/helloWorld"); // ISSUE HERE
//     const  result = await response;
//     console.log(result);
//     }
    getData(); //ISSUE HERE
    //Cross-Origin Resource Sharing (CORS)
    //tried moesif CORS extension
    //npm install cors --save
    //@CrossOrigin on controller but backend doesn't need anything else?

    //CORS proxy?
    //Property 'Use' does not exist on type '() => Element'
//     const cors = require("cors");
//     const corsOptions = {
//        origin:'*',
//        credentials:true,            //access-control-allow-credentials:true
//        optionSuccessStatus:200,
//     }
//
//     App.Use(cors(corsOptions)) // Use this after the variable declaration

  return (
    <div className="App">
      {ourProject}

        <div className="Body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <button className="button">
              button
            </button>
          </form>
        </div>

        </div>
  );
};

export default App;