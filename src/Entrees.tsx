import axios from "axios";
import React, { useState } from "react";

type Entree = {
	name: { value: string };
	description: { value: string };
	price: { value: number };
} & EventTarget;

const Entrees = () => {
	const [statusMessage, setStatusMessage] = useState<string>();

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as Entree;
		const name = target.name.value;
		const description = target.description.value;

		if (name.trim() === "") {
			setStatusMessage("Entree name cannot be blank");
		} else if (name.length > 100) {
			setStatusMessage("Entree name cannot be over 100 characters");
		} else if (description.trim() === "") {
			setStatusMessage("Entree description cannot be blank");
		} else if (description.length > 160) {
			setStatusMessage("description must be less than 160 characters");
		} else {
			return true;
		}

		return false;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log("ive been clicked");
		e.preventDefault();

		const target = e.target as Entree;

		const name = target.name.value;
		const description = target.description.value;
		const price = target.price.value;
		if (isValid(e)) {
			axios
				.post<Entree>("http://localhost:8080/entree", {
					name,
					description,
					price,
				})
				.then(() => {
					setStatusMessage("successfully added a new entree");
				})
				.catch(error => {
					if (error.response.data.status === 400) {
						setStatusMessage(error.response.data.message);
					}
				});
		}
	};

	console.log("statusMessage *********", statusMessage);


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
								placeholder="'Big Bad Burger'"
								required
							/>
						</label>

						<label htmlFor="entree_description">
							Entree Description:
							<input
								className="form_input"
								name="description"
								type="text"
								placeholder="'The tastiest burger'"
								required
							/>
						</label>

						<label htmlFor="entree_price">
							Entree Price:
							<input
								className="form_input"
								name="price"
								type="number"
								placeholder="8"
								required
							/>
						</label>
						<div style={{ color: "red" }}>{statusMessage}</div>
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
