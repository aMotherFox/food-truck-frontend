import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

type FormFieldsType = {
	firstName: { value: string };
	lastName: { value: string };
	email: { value: string };
	password: { value: string };
	confirmPassword: { value: string };
} & EventTarget;

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

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as FormFieldsType;

		const typedFirstName = target.firstName.value;
		const typedLastName = target.lastName.value;
		const typedEmail = target.email.value;
		const typedPassword = target.password.value;
		const typedConfirmPassword = target.confirmPassword.value;
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
		} else if (typedConfirmPassword.length < 8 || typedPassword.length < 8) {
			setError('password must be more then 8 characters');
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

			return true;
		}

		return false;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValid(e)) {
			axios.post('http://localhost:8080/customers', values).catch(errors => {
				if (errors.toJSON().message === 'Network Error') {
					setError('Error... Something gone wrong');
				}
			});
			navigate('/login');
		}
	};

	return (
		<div>
			<h1> This is the Sign-Up Page </h1>
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
