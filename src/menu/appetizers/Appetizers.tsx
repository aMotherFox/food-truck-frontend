import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import axios from "axios";

type Appetizer = {
	name: { value: string };
	price: { value: number };
} & EventTarget;

// const initalAppetizers

const Appetizers = () => {
	// const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const [appetizers, setAppetizers] = useState<Appetizer[]>([]);

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
			}); // does not display most recent created appetizer
	}, []);
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

		// add in menu GET
		// api call that just gets data (response.data)
		// will map through data and it'll map out new app created
		// data comes back as an array of objects
		// not coming back with most recent app created
		// SHOULD BE ABE TO GET APPS WITHOUT POSTING ONE
		// useEffect to get apps
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
