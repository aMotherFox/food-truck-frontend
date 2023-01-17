import axios from "axios";

export default class EntreeApi {
  
	static getAll() {
		return axios.get("http://localhost:8080/entree");
	}
}
