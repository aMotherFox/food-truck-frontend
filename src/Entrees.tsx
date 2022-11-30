import axios from "axios";
import React, { useState } from "react";

type Entree = {
	name: { value: string };
	description: { value: string };
	price: { value: number };
} & EventTarget;

const Entrees = () => {
	const [errorMessage, setErrorMessage] = useState<string>();

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as Entree;

		const name = target.name.value;
		const description = target.description.value;
		const price = target.price.value;
		if (name === "" || description === "" || price === 0) {
			setErrorMessage("some field are incomplete");
		} else if (name.trim() === "") {
			setErrorMessage("Name cannot be blank");
		} else if (description.length < 8) {
			setErrorMessage("description must be more than 8 characters");
		} else if (description.length > 50) {
			setErrorMessage("description must be less than 50 characters");
		} else {
			return true;
		}

		return false;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target = e.target as Entree;

		const name = target.name.value;
		const description = target.description.value;
		const price = target.price.value;
		console.log("ive been clicked");
		if (isValid(e)) {
			axios
				.post<Entree>("http://localhost:8080/entree", {
					name,
					description,
					price,
				})
				.then(() => {
					console.log("it worked yall");
				})
				.catch(error => {
					if (error.response.data.status === 400) {
						setErrorMessage(error.response.data.message);
					}
				});
		}
	};

	/* 
	creating a new entree: 
	a user adds the entree information: 
		- entree name
		- entree description
		- entree price
	hit submit
	in the BE this info is added to the DB
	if successful return 200
	if unsuccessful return 500 "new entree could not be created"

	*/

	return (
		<div>
			<div>
				<h1>This is the Entrees page </h1>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-body">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					>
						<label htmlFor="entree_name">
							Entree Name:
							<input
								className="form_input"
								name="name"
								type="text"
								placeholder="Entree Name"
								required
							/>
						</label>

						<label htmlFor="entree_description">
							Entree Description:
							<input
								className="form_input"
								name="description"
								type="text"
								placeholder="Entree Description"
								required
							/>
						</label>

						<label htmlFor="entree_price">
							Entree Price:
							<input
								className="form_input"
								name="price"
								type="number"
								placeholder="Entree Price"
								required
							/>
						</label>
						{errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
					</div>
					<button className="submit-button" type="submit">
						Create New Entree
					</button>
				</div>
			</form>
		</div>
	);
};

export default Entrees;
