import axios from "axios";


const AppetizerApi = () => {}
export const getAllAppetizers = () => axios.get("http://localhost:8080/appetizers");
export default AppetizerApi
