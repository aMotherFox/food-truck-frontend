import React, { useState } from 'react';
/*
confirm Password need to match password.

when the button is clicked, it will call a function that get the present values
of password & confirmation password. if the values of password & confirmation password does
NOT MATCH we will send a alert to the user screen to notifiy the user that
the password is wrong. But if is right the sign up will be complete and give him an alert
 stating that the user can log in by going on /login page

*/
const SignUp = () => {
	const [values, setValues] = useState({
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
	const handleSubmit = () => {
		if (values.password !== values.confirmPassword) {
			alert('Password and Confirm Password does NOT match');
		}
		console.log(' submitted! ');
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
								name="firstname"
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
								name="last-name"
								type="text"
								placeholder="LastName"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="email">
							Email
							<input name="email" type="email" placeholder="Email" required />
						</label>
					</div>
					<div>
						<label htmlFor="password">
							Password
							<input
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
