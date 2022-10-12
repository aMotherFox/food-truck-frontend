import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App()  {

    const [finalResult, setFinalResult] = useState({message: "intial message"})

    console.log("finalResult", finalResult)

    const handleSubmit = () => {
        console.log("we are in the handleSubmit")

         axios.get("http://localhost:8080/helloWorld")
            .then((response) => {
                console.log("response: ", response)
                setFinalResult(response.data)
            })
    }


  return (
    <div className="App">
        <p>We are working on a food truck app</p>

        <div className="Body">
            <button className="button" onClick={handleSubmit}>
                button
            </button>
        </div>

        <div>
           <p> Response Body from API </p>
            {finalResult.message}
        </div>

    </div>
  );
};

export default App;