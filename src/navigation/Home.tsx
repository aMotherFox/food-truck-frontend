import React from "react";
import { Tabs, TabList, Tab, } from "@chakra-ui/react";
import AppetizerTab from "../orders/AppetizerTab";
import EntreeTab from "../orders/EntreeTab";

const Home = () => (
	<div>
		<h1>Zombie Foods </h1>
		<h6>We swear its not people</h6>
		<h3>Order here</h3>
		<div>
			<Tabs>
				<TabList style={{justifyContent: "center"}}>
					<Tab> <AppetizerTab/> </Tab>
					<Tab><EntreeTab/></Tab>

				</TabList>
			</Tabs>
		</div>
	</div>
);

export default Home;
