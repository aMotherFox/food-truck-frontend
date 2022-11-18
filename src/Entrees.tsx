import React from "react";

const Entrees = () => {
	<div>
		<h1>This is the Entrees page </h1>
	</div>;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("i have been clicked");
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
							name="entree_name"
							type="entree_name"
							placeholder="Entree Name"
							required
						/>
					</label>

					<label htmlFor="entree_description">
						Entree Description:
						<input
							className="form_input"
							name="entree_description"
							type="entree_description"
							placeholder="Entree Description"
							required
						/>
					</label>

					<label htmlFor="entree_price">
						Entree Price:
						<input
							className="form_input"
							name="entree_price"
							type="entree_price"
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
