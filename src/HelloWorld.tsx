import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function HelloWorld() {
	const [finalResult, setFinalResult] = useState({ message: 'intial message' });

	const handleSubmit = () => {
		axios.get('http://localhost:8080/helloWorld').then(response => {
			setFinalResult(response.data);
		});
	};

	return (
		<div className="App">
			<p>We are working on a food truck app</p>

			<div className="Body">
				<button className="button" type="submit" onClick={handleSubmit}>
					Press to say Hello to the World
				</button>
			</div>

			<div>
				<p> Response Body from API: </p>
				{finalResult.message}
			</div>
		</div>
	);
}

export default HelloWorld;
