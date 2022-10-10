import React from 'react';
import logo from './logo.svg';
import './App.css';

function App()  {

const ourProject = "We are working on a food truck app"

const handleSubmit = (e: React.ChangeEvent<any>) => {
    console.log("I've been clicked")
    e.preventDefault();
    }

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