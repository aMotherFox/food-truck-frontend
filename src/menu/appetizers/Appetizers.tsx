import React, { useEffect, useState } from "react";
import axios from "axios";

type Appetizer = {
	name: { value: string };
	price: { value: number };
} & EventTarget;

type CreatedAppetizer = {
	// id: number;
	name: string;
	price: number;
};

// TODO: API only called once, console logs should only be showing once (at most twice if mappingg, etc)
// on start the multiples happen

const Appetizers = () => {
	const [error, setError] = useState<string>();
	const [appetizers, setAppetizers] = useState<CreatedAppetizer[]>([]);

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
		} else if (nameInput.length < 2) {
			setError("Appetizer name cannot be under 2 characters");
		} else {
			return true;
		}

		return false;
	};

	useEffect(() => {
		console.log("we are inside the useEffect");
		axios
			.get("http://localhost:8080/appetizers")
			.then(response => {
				console.log("response.data", response.data);
				setAppetizers(response.data);
			})
			.catch(errors => {
				setError(errors.response.data.message);
			});
	}, [error]);
	console.log("appetizers after useEffect: ", appetizers);

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
					console.log("inside axios.post successfull api call");
				})
				.catch(errors => {
					setError(errors.response.data.message);
				});
			console.log("appetizers", appetizers);
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
			<div>
				{appetizers.map(appetizer => (
					<div key={appetizer.name}>
						<h1>{appetizer.name}</h1>
						<h2>{appetizer.price}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Appetizers;
