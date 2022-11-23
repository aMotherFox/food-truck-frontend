import axios from "axios";
import React from "react";

type Entree = {
	entreeName: { value: string };
	entreeDescription: { value: string };
	entreePrice: { value: number };
} & EventTarget;

const Entrees = () => {
	<div>
		<h1>This is the Entrees page </h1>
	</div>;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const target = e.target as Entree;

		const name = target.entreeName.value;
		const description = target.entreeDescription.value;
		const price = target.entreePrice.value;
		console.log("ive been clicked");

		axios
			.post<Entree>("http://localhost:8080/new-entree", {
				name,
				description,
				price,
			})
			.then(() => {
				console.log("yay new entree added");
			});
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
							name="entreeName"
							type="text"
							placeholder="Entree Name"
							required
						/>
					</label>

					<label htmlFor="entree_description">
						Entree Description:
						<input
							className="form_input"
							name="entreeDescription"
							type="text"
							placeholder="Entree Description"
							required
						/>
					</label>

					<label htmlFor="entree_price">
						Entree Price:
						<input
							className="form_input"
							name="entreePrice"
							type="number"
							placeholder="Entree Price"
							required
						/>
					</label>
					<button className="submit-button" type="submit">
						Create New Entree
					</button>
				</div>
			</form>
		</div>
	);
};

export default Entrees;
