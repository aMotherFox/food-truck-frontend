import React from 'react';

const SignUp = () => {
	const handleSubmit = () => {
		console.log(' submitted! ');
	};
	return (
		<div>
			<h1> This is the SignUp Page </h1>
			<form className="form" id="form">
				<div className="form-body">
					<div>
						<label htmlFor="first-name">
							First Name
							<input
								id="first-name"
								type="text"
								placeholder="First Name"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="last-name">
							Last Name
							<input
								id="last-name"
								type="text"
								placeholder="LastName"
								required
							/>
						</label>
					</div>
					<div>
						<label htmlFor="email">
							Email
							<input type="email" placeholder="Email" required />
						</label>
					</div>
					<div>
						<label htmlFor="password">
							Password
							<input type="password" placeholder="Password" required />
						</label>
					</div>
					<div>
						<label htmlFor="confirmation-password">
							Confirm Password
							<input type="password" placeholder="Confirm Password" required />
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
