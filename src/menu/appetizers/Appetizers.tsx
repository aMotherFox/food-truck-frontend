import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

type Appetizer = {
	name: { value: string };
	price: { value: number };
} & EventTarget;

const Appetizers = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>();

	const isValid = (e: React.FormEvent<HTMLFormElement>): boolean => {
		const target = e.target as Appetizer;

		const nameInput = target.name.value;
		const priceInput = target.price.value;
		if (nameInput === "" || priceInput === 0) {
			setError("some fields are incomplete");
		} else if (nameInput.trim() === "") {
			setError("Appetizer name cannot be blank");
		} else if (nameInput.length > 50) {
			setError("Appetizer name cannot be over 50 characters");
		} else {
			return true;
		}

		return false;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target = e.target as Appetizer;
		const name = target.name.value;
		const price = target.price.value;
		if (isValid(e)) {
			axios
				.post<Appetizer>("http://localhost:8080/appetizers", {
					name,
					price,
				})
				.then(() => {
					navigate("/entrees");
				})
				.catch(errors => {
					setError(errors.response.data.message);
				});
		}
	};

	return (
		<div>
			<h1>This is the Appetizers page </h1>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-body">
					<div>
						<div>
							<label htmlFor="appetizer_name">
								Appetizer Name:
								<input
									className="form_input"
									name="name"
									type="text"
									placeholder="'Nikko Nibbler Platter'"
									required
								/>
							</label>
						</div>
						<div>
							<label htmlFor="appetizer_price">
								Appetizer Price:
								<input
									className="form_input"
									name="price"
									type="number"
									placeholder=""
									required
								/>
							</label>
						</div>
						<div style={{ color: "red" }}>{error}</div>
					</div>
					<button className="submit-button" type="submit">
						Create New Appetizer
					</button>
				</div>
			</form>
		</div>
	);
};

export default Appetizers;
