
import axios from "axios";


const token  :any= JSON.parse(localStorage.getItem('kt-auth-react-v') || "");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});