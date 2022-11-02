import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
	const login = {
		email: false,
		password: false,
	};
	console.log(login);

	// useState is a hook
	const [error, setError] = useState<string>();
	const [loginStatus, setLoginStatus] = useState(login);
	console.log(loginStatus, setLoginStatus);
	console.log(error, setError);

	// const dataBase = () => {
	// 	axios
	// 		.post('http://localhost:8080/customers', loginStatus)
	// 		.then(response => console.log(response, 'submitted'))
	// 		.catch(error => {
	// 			if (error.toJSON().message === 'Network Error') {
	// 				alert('error');
	// 			}
	// 		});
	// };
	// console.log(dataBase);

	// state of email and pass are FALSE
	// email and password must be entered
	// find the inputs
	// find exact same email in DB or throw 400
	// find exact same password in DB or throw 400
	// if email and password belong to same customer, set states to TRUE
	// BOTH TRUE = logged in
	const handleLogin = (e: any) => {
		const emailInput = e.target.elements.email.value;
		const passwordInput = e.target.elements.password.value;
		console.log(emailInput, passwordInput);
		// found entered email and password
		if (emailInput === '' || passwordInput === '') {
			setError('Please fill out all fields');
		}
	};

	// DATA TYPE CANNOT BE ANY
	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleLogin(e);
	};

	return (
		<div>
			<h1>This is the Login Page</h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-body">
					Login:
					<div>
						<label htmlFor="email">
							Email:
							<input
								className="form_input"
								name="email"
								type="email"
								placeholder="Email"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="password">
							Password:
							<input
								className="form_input"
								name="password"
								type="password"
								placeholder="Password"
								required
							/>
						</label>
					</div>
				</div>
				<div>
					<button className="submit-button" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
