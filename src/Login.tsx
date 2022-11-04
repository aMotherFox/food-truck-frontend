import React, { useState } from "react";
import { useNavigate } from "react-router";
// import axios from "axios";

type FormFieldsType = {
	email: { value: string };
	password: { value: string };
} & EventTarget;

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const [loginStatus, setLoginStatus] = useState(false);
	console.log(error, setError, navigate, loginStatus, setLoginStatus);

	// email and password must be entered
	// find the inputs
	// find exact same email in DB or throw 400
	// find exact same password in DB or throw 400
	// if email and password belong to same customer, set states to TRUE
	// BOTH TRUE = logged in

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as FormFieldsType;

		const emailInput = target.email.value;
		const passwordInput = target.password.value;
		if (emailInput === "" || passwordInput === "") {
			setError("some field are incomplete");
		} else if (passwordInput.length < 8) {
			setError("password must be more than 8 characters");
		} else if (emailInput.includes("@") === false) {
			setError("Email invalid");
		} else {
			return true;
		}
		return false;
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target = e.target as FormFieldsType;
		const email = target.email.value;
		const password = target.password.value;

		if (isValid(e)) {
			console.log(email, password);
			// no access to DB, will hardcode for testing
			const correctEmail = "doggedawg@gmail.com";
			const correctPassword = "Buck1234";
			if (email !== correctEmail || password !== correctPassword) {
				setError("Email or Password is incorrect");
			}

			// axios.get?
			// check if email exists in DB
			// check if password exists in DB
			// check if BOTH share the SAME user id
			// if yes, then setLoginStatus to true
			// redirect to profile
			// in no, catch error

			// axios
			// 	.post("http://localhost:8080/customers", {
			// 		email,
			// 		password,
			// 	})
			// 	.then(() => {
			// 		navigate("/profile");
			// 	})
			// 	.catch(errors => {
			// 		console.log("errors: ", errors);
			// 		if (errors.toJSON().message === "Network Error") {
			// 			setError("Error... Unable to login");
			// 		}
			// 	});
		}
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
						<p style={{ color: "red" }}>{error}</p>
					</div>
				</div>
				<div>
					<button className="submit-button" type="submit">
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
