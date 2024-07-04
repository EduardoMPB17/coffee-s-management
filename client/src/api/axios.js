import axios from "axios";

const instance = axios.create({
  baseURL:"/src/pages/",
  withCredentials: true,
});

export default instance;