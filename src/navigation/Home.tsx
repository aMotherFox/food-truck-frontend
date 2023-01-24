import React, { useState } from "react";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Heading,
} from "@chakra-ui/react";
import AppetizerTab from "../orders/AppetizerTab";
import EntreeTab from "../orders/EntreeTab";

const Home = () => {
	// this exists because apps are SUPPOSED to be getting descriptions but they currently are not, but
	// they should not be listed on the order with a description, just the item and the price.
	type Order = {
		id: number;
		name: string;
		price: number;
	};

	const [orderedAppetizers, setOrderedAppetizers] = useState<Order[]>([]);

	console.log("orderedAppetizers from outside function: ", orderedAppetizers);

	const handleAddNewAppetizer = myAppetizer => {
		console.log("home myAppetizer: ", myAppetizer);
		console.log("orderedAppetizers", orderedAppetizers);
		setOrderedAppetizers([...orderedAppetizers, myAppetizer]);
	};
	return (
		<div>
			<Heading>Zombie Foods </Heading>
			<h1>Definitely people food</h1>
			<h3>Order here</h3>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "1000px",
						marginRight: "20px",
					}}
				>
					<Tabs align="center">
						<TabList>
							<Tab>Appetizers</Tab>
							<Tab>Entrees</Tab>
						</TabList>

						<TabPanels>
							<TabPanel>
								<AppetizerTab newAppetizer={handleAddNewAppetizer} />
							</TabPanel>
							<TabPanel>
								<EntreeTab />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</div>
				<div
					style={{
						backgroundColor: "grey",
						display: "flex",
						justifyContent: "center",
						width: "250px",
						height: "350px",
					}}
				>
					<div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
						<div>
							<h1> Order</h1>
						</div>
						<div>
							{orderedAppetizers.map(appetizer => (
								<h1>{appetizer.name}</h1>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
