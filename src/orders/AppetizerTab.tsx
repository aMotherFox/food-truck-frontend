import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
// import axios from "axios";

const AppetizerTab = () => {
	const test = "add apps to your order";

	// story todos MACRO
	// display appetizers in cards
	// display entrees in cards
	// make front end only/hardcoded orders where the apps/entrees get added to the cart when selected

	// user selects an appetizer to add to order
	// we already have app ids and info on the front end since they're being displayed, right?
	// selected app is added to an order array of apps and entrees which includes their ids and stuff
	// this order array is displayed on the front end in the cart? 
	// selected app is fetched and displayed in the cart box (is this too resource intensive? should I do this without calling the api yet? or is there no other good way?)
	// when a user is ready to checkout they click the checkout box
	// this calls the create order api
	// sending the request body to the endpoint
	// when this is successful
	// the user is pushed to a confirmation page

	return (
		<>
			<h2>{test}</h2>
			<SimpleGrid
				spacing={4}
				templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
			>
				<Card align="center">
					<CardHeader>
						<Heading size="md"> Appetizer 1</Heading>
					</CardHeader>
					<CardBody>
						<h1>View a summary of all your customers over the last month.</h1>
					</CardBody>
					<CardFooter>
						<Button>Add to order</Button>
					</CardFooter>
				</Card>
			</SimpleGrid>
		</>
	);
};

export default AppetizerTab;
