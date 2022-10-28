// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUp = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState('');
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleValidation = () => {
		if (
			values.firstName === '' ||
			values.lastName === '' ||
			values.email === '' ||
			values.password === '' ||
			values.confirmPassword === ''
		) {
			setErrors('some field are incomplete');
		} else if (
			values.confirmPassword.length < 3 &&
			values.password.length < 3
		) {
			setErrors('password must be more then 3 characters');
			// alert('password must be more then 3 characters');
		} else if (values.password !== values.confirmPassword) {
			setErrors('Password and Confirm Password does NOT match');
			// alert('Password and Confirm Password does NOT match');
		} else if (values.email.includes('@') === false) {
			setErrors('Email invalid');
			// alert('Email invalid');
		} else {
			// axios
			// .post('http://localhost:8080/customers', values)
			// .then(response => console.log(response, 'submitted'))
			// .catch(error => {
			// 	if (error.toJSON().message === 'Network Error') {
			// 		alert('error');
			// 	}
			// });
			navigate('/login');
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		handleValidation();
	};

	return (
		<div>
			<h1> This is the SignUp Page </h1>
			<form className="form">
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
								onChange={handleChange}
								value={values.firstName}
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
								value={values.lastName}
								onChange={handleChange}
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
								onChange={handleChange}
								value={values.email}
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
								value={values.password}
								onChange={handleChange}
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
								value={values.confirmPassword}
								onChange={handleChange}
								required
							/>
						</label>
						<p style={{ color: 'red' }}>{errors}</p>
					</div>
				</div>
				<div>
					<button
						className="submit-button"
						type="submit"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
