import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import AppetizerTab from "../orders/AppetizerTab";
import EntreeTab from "../orders/EntreeTab";

const Home = () => (
	<div>
		<h1>Zombie Foods </h1>
		<h6>We swear its not people</h6>
		<h3>Order here</h3>
		<div>
			<Tabs>
				<TabList style={{ justifyContent: "center" }}>
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
	</div>
);

export default Home;
