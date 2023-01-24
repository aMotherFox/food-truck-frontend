import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAllAppetizers } from "../appetizers/AppetizerApis";

const AppetizerTab = (props: any ) => {
	// story todos MACRO
	// display appetizers in cards
	// display entrees in cards
	// make front end only/hardcoded orders where the apps/entrees get added to the cart when selected

	// user selects an appetizer to add to order
	// we already have app ids and info on the front end since they're being displayed so they do not need to be fetched a second time
	// selected app is added to an order array of apps and entrees which includes their ids and stuff
	// this order array is displayed on the front end in the cart?

	// when a user is ready to checkout they click the checkout box
	// this calls the create order api which has an order id, customer id, appetizers with their ids, entrees with their ids, as well as quantities.
	// sending the request body to the endpoint
	// when this is successful
	// the user is pushed to a confirmation page

	// When the add to order button is clicked
	// match the app clicked to an app with the same id
	//
	type Appetizer = {
		id: number;
		name: string;
		price: number;
	};

	const [appetizers, setAppetizers] = useState<Appetizer[]>([]);

	useEffect(() => {
		getAllAppetizers()
			.then(response => {
				console.log("yay with response", response);
				setAppetizers(response.data);
			})
			.catch(errors => {
				console.log("errors", errors);
			});
	}, []);

	// the state of what the order is has to live higher than the component to go between components


	return (
		<SimpleGrid spacing={4} columns={4}>
			{appetizers.map(appetizer => (
				<Card align="center" key={appetizer.id}>
					<CardHeader>
						<Heading size="md"> {appetizer.name}</Heading>
					</CardHeader>
					<CardBody>
						<h1>{appetizer.price}</h1>
					</CardBody>
					<CardFooter>
						<Button
							onClick={() => {
								console.log("appetizer clicked on: ", appetizer)
								console.log("props", props)
								console.log("props.handleAddNewAppetizer", props.newAppetizer)
								props.newAppetizer(appetizer)
							}}
						>
							Add to order
						</Button>
					</CardFooter>
				</Card>
			))}
		</SimpleGrid>
	);
};

export default AppetizerTab;
