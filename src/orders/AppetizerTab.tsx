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
import AppetizerApi from "../appetizers/AppetizerApis";
// import axios from "axios";

const AppetizerTab = () => {
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


	type Appetizer = {
		id: number;
		name: string;
		price: number;
	};
	const [appetizers, setAppetizers] = useState<Appetizer[]>([])

	useEffect(() => {
		AppetizerApi.getAll()
			.then(response => {
				console.log("yay with response", response);
				setAppetizers(response.data)
			})
			.catch(errors => {
				console.log("errors", errors)
			});
	}, []);

	// const hardCodedApps: Appetizer[] = [
	// 	{
	// 		id: 1,
	// 		name: "Spicy Big Guy",
	// 		price: 5,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Tasty little tots",
	// 		price: 8,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Surpriser",
	// 		price: 15,
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Snackie",
	// 		price: 2.5,
	// 	},
	// ];

	return (
		<SimpleGrid
			spacing={4}
			columns={4}
			// templateColumns="repeat(auto-fill, minmax(800px, 1fr))"
		>
			{appetizers.map(appetizer => (
				<Card align="center" key={appetizer.id}>
					<CardHeader>
						<Heading size="md"> {appetizer.name}</Heading>
					</CardHeader>
					<CardBody>
						<h1>{appetizer.price}</h1>
					</CardBody>
					<CardFooter>
						<Button>Add to order</Button>
					</CardFooter>
				</Card>
			))}
		</SimpleGrid>
	);
};

export default AppetizerTab;
