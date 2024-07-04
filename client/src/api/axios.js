import axios from "axios";

const instance = axios.create({
  baseURL:"https://coffee-s-management-2.vercel.app/api",
  withCredentials: true,
});

export default instance;