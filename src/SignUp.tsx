import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
/*
confirm Password need to match password.

when the button is clicked, it will call a function that get the present values
of password & confirmation password. if the values of password & confirmation password does
NOT MATCH we will send a alert to the user screen to notifiy the user that
the password is wrong. But if is right the sign up will be complete and give him an alert
 stating that the user can log in by going on /login page

*/
const SignUp = () => {
	const navigate = useNavigate();
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
		// console.log(values);
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (values.password !== values.confirmPassword) {
			alert('Password and Confirm Password does NOT match');
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

	return (
		<div>
			<h1> This is the SignUp Page </h1>
			<form className="form">
				<div className="form-body">
					<div>
						<label htmlFor="firstname">
							First Name
							<input
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
