import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

type FormFieldsType = {
	firstName: { value: string };
	lastName: { value: string };
	email: { value: string };
	password: { value: string };
	confirmPassword: { value: string };
} & EventTarget;

const SignUp = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const [successful, setSuccessful] = useState<string>();

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as FormFieldsType;

		const firstName = target.firstName.value;
		const lastName = target.lastName.value;
		const email = target.email.value;
		const password = target.password.value;
		const confirmPassword = target.confirmPassword.value;
		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			email.trim() === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			setError("some field are incomplete");
		} else if (firstName.trim() === "") {
			setError("First name cannot be blank");
		} else if (lastName.trim() === "") {
			setError("Last name cannot be blank");
		} else if (confirmPassword.length < 8 || password.length < 8) {
			setError("password must be more then 8 characters");
		} else if (confirmPassword.length > 50 || password.length > 50) {
			setError("password must be less then 50 characters");
		} else if (confirmPassword.trim() === "" || password.trim() === "") {
			setError(
				"Make sure that Password and ConfirmPassword is not BLANK or have any spaces!",
			);
		} else if (password !== confirmPassword) {
			setError("Password and Confirm Password does NOT match");
		} else if (email.includes("@") === false) {
			setError("Email invalid");
		} else {
			return true;
		}

		return false;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as FormFieldsType;

		const firstName = target.firstName.value;
		const lastName = target.lastName.value;
		const email = target.email.value;
		const password = target.password.value;
		const confirmPassword = target.confirmPassword.value;
		if (isValid(e)) {
			axios
				.post("http://localhost:8080/customers", {
					firstName,
					lastName,
					email,
					password,
					confirmPassword,
				})
				.then(() => {
					setSuccessful("Your sign-up as been succesfull. Please log-in");
					setTimeout(() => {
						navigate("/login");
					}, 2000);
				})
				.catch(errors => {
					if (errors.toJSON().message === "Network Error") {
						setError("Error... something gone wrong");
					}
				});
		}
	};

	return (
		<div>
			<h1> This is the Sign-Up Page </h1>
			<form className="form" onSubmit={handleSubmit}>
				<p style={{ color: "green" }}>{successful}</p>
				<div className="form-body">
					<div>
						<label htmlFor="firstname">
							First Name
							<input
								id="firstName"
								className="form_input"
								name="firstName"
								type="text"
								placeholder="First Name"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="lastname">
							Last Name
							<input
								className="form_input"
								name="lastName"
								type="text"
								placeholder="LastName"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="email">
							Email
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
							Password
							<input
								className="form_input"
								name="password"
								type="password"
								placeholder="Password"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="confirmation-password">
							Confirm Password
							<input
								className="form_input"
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								required
							/>
						</label>
						<p style={{ color: "red" }}>{error}</p>
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

export default SignUp;
