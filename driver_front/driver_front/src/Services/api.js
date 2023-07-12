import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:8080",
  // baseUrl: "http://localhost:7184",
});

export default api;
