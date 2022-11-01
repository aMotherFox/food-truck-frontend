import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
	const user = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};
	const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const [values, setValues] = useState(user);

	const test = () => {
		axios.post('http://localhost:8080/customers', values).catch(errors => {
			if (errors.toJSON().message === 'Network Error') {
				alert('error');
			}
		});
		navigate('/login');
	};

	const handleValidation = (e: any) => {
		console.log('e: ', e);
		const typedFirstName = e.currentTarget.elements.firstName.value;
		const typedLastName = e.target.elements.lastName.value;
		const typedEmail = e.target.elements.email.value;
		const typedPassword = e.target.elements.password.value;
		const typedConfirmPassword = e.target.elements.confirmPassword.value;
		if (
			typedFirstName === '' ||
			typedLastName === '' ||
			typedEmail === '' ||
			typedEmail.trim() === '' ||
			typedPassword === '' ||
			typedPassword.trim() === '' ||
			typedConfirmPassword === '' ||
			typedConfirmPassword.trim() === ''
		) {
			setError('some field are incomplete');
		} else if (typedFirstName.trim() === '') {
			setError('First name cannot be blank');
		} else if (typedLastName.trim() === '') {
			setError('Last name cannot be blank');
		} else if (typedConfirmPassword.length < 3 && typedPassword.length < 3) {
			setError('password must be more then 3 characters');
		} else if (typedPassword !== typedConfirmPassword) {
			setError('Password and Confirm Password does NOT match');
		} else if (typedEmail.includes('@') === false) {
			setError('Email invalid');
		} else {
			setValues({
				firstName: typedFirstName,
				lastName: typedLastName,
				email: typedEmail,
				password: typedPassword,
				confirmPassword: typedConfirmPassword,
			});
			console.log('after setValues');
			console.log(typedFirstName);
			console.log(typedLastName);
			console.log(typedEmail);
			console.log(typedEmail);
			console.log(typedPassword);
			console.log(typedConfirmPassword);
			test();
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleValidation(e);
	};

	return (
		<div>
			<h1> This is the SignUp Page </h1>
			<form className="form" onSubmit={handleSubmit}>
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
						<p style={{ color: 'red' }}>{error}</p>
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
