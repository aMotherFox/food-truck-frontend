import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

// type Appetizer = {
// 	name: { value: string };
// 	price: { value: number };
// };

const Appetizers = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string>();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
									placeholder="8"
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
