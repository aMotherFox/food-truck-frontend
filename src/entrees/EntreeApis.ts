import axios from "axios";

const EntreeApi = () => {}
export const getAllEntrees = () => axios.get("http://localhost:8080/appetizers");
export default EntreeApi;
