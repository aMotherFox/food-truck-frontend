import React from "react";

const Entrees = () => {
	<div>
		<h1>This is the Entrees page </h1>
	</div>;

	const handleSubmit = () => {
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
			<button
				className="submit-button"
				type="submit"
				onClick={handleSubmit}
			>
				Create an entree
			</button>
		</div>
	);
};

export default Entrees;
