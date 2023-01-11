import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AppetizerTab from "../orders/AppetizerTab";
import EntreeTab from "../orders/EntreeTab";

const Home = () => (
	<div>
		<h1>Zombie Foods </h1>
		<h6>We swear its not people</h6>
		<h3>Order here</h3>
		<div style={{display: "flex", justifyContent: "space-around" }}>
			
			<div style={{display: "flex", justifyContent: "center", width: "1000px", marginRight: "20px" }}>
				<Tabs align="center">
					<TabList>
						<Tab>Appetizers</Tab>
						<Tab>Entrees</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<AppetizerTab />
						</TabPanel>
						<TabPanel>
							<EntreeTab />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
			<div style={{backgroundColor: "grey", display: "flex", justifyContent: "center", width: "250px", height: "350px"}}>
				<h1 > this is where your cart lives</h1>
			</div>
		</div>
	</div>
);

export default Home;
