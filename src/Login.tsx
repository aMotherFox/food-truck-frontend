import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

type FormFieldsType = {
	email: { value: string };
	password: { value: string };
} & EventTarget;

type SafeUser = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
};

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const [loggedInUser, setLoggedInUser] = useState<SafeUser>();

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as FormFieldsType;

		const emailInput = target.email.value;
		const passwordInput = target.password.value;
		if (emailInput === "" || passwordInput === "") {
			setError("some fields are incomplete");
		} else if (passwordInput.length < 8) {
			setError("password must be more than 8 characters");
		} else if (emailInput.includes("@") === false) {
			setError("Please enter a valid email");
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
			axios
				.post("http://localhost:8080/login", {
					email,
					password,
				})
				.then(response => {
					setLoggedInUser(response.data);
					const id = loggedInUser?.id;
					navigate(`/profile/${id}`);
				})
				.catch(errors => {
					setError(errors.response.data.message);
				});
		}
	};

	return (
		<div>
			<h1>This is the Login Page</h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-body">
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
						<div style={{ color: "red" }}>{error}</div>
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
