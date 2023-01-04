import axios from "axios";
import React, { useEffect, useState } from "react";

type Entree = {
	name: { value: string };
	description: { value: string };
	price: { value: number };
} & EventTarget;

type EntreeObjects = {
	id: number;
	name: string;
	price: number;
	description: string;
};
const Entrees = () => {
	const [statusMessage, setStatusMessage] = useState<string>();
	const [entreeData, setEntreeData] = useState<EntreeObjects[]>([]);

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

	const getData = () => {
		axios
			.get("http://localhost:8080/entree")
			.then(response => {
				setEntreeData(response.data);
				// setStatusMessage("successfully added a new entree");
			})
			.catch(error => {
				setStatusMessage(error.response.data.message);
			});
	};

	useEffect(() => {
		getData();
	}, [statusMessage]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
					setStatusMessage(error.response.data.message);
				});
		}
	};

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
			{entreeData.map(entree => (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					/>
					{/* <p>{entree.id}</p> */}
					<p>{entree.name}</p>
					<p>{entree.description}</p>
					<p>{entree.price}</p>
				</>
			))}
		</div>
	);
};

export default Entrees;
