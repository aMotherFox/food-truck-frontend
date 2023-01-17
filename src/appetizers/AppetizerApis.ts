import axios from "axios";

// type Appetizer = {
//   id: number;
//   name: string;
//   price: number;
// };
export default class AppetizerApi {
  
  
	static getAll() {
		return axios.get("http://localhost:8080/appetizers");
	}
}
