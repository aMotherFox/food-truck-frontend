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
import EntreeApi from "../entrees/EntreeApis";

const EntreeTab = () => {
	type Entree = {
		id: number;
		name: string;
		description: string;
		price: number;
	};
	const [entrees, setEntrees] = useState<Entree[]>([]);

	useEffect(() => {
		EntreeApi.getAll()
			.then(response => {
				console.log("yay entrees with response", response);
				setEntrees(response.data);
			})
			.catch(errors => {
				console.log("errors", errors);
			});
	}, []);

	return (
		<SimpleGrid spacing={4} columns={4}>
			{entrees.map(entree => (
				<Card align="center" key={entree.id}>
					<CardHeader>
						<Heading size="md"> {entree.name}</Heading>
					</CardHeader>
					<CardBody>
						<h1>{entree.description}</h1>
						<h1>{entree.price}</h1>
					</CardBody>
					<CardFooter>
						<Button>Add to order</Button>
					</CardFooter>
				</Card>
			))}
		</SimpleGrid>
	);
};

export default EntreeTab;
