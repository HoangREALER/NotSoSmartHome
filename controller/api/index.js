import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  // responseType: 'json',
  baseURL: "http://192.168.1.13:5000/",
});

export default instance;