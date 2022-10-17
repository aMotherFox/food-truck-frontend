import React from 'react';

const SignUp = () => {
	const handleSubmit = () => {
		console.log(' submitted! ');
	};
	return (
		<div>
			<h1> This is the SignUp Page </h1>
			<form className="form">
				<div className="form-body">
					<div>
						<label>First Name </label>
						<input type={'text'} placeholder="First Name"></input>
					</div>
					<div>
						<label>Last Name </label>
						<input type={'text'} placeholder="LastName"></input>
					</div>
					<div>
						<label>Email </label>
						<input type={'email'} placeholder="Email"></input>
					</div>
					<div>
						<label>Password </label>
						<input type={'password'} placeholder="Password" />
					</div>
					<div>
						<label>Confirm Password </label>
						<input type={'password'} placeholder="Confirm Password" />
					</div>
				</div>
				<div>
					<button
						className="submit-button"
						type={'submit'}
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
