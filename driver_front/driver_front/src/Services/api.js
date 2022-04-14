import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:8080/drivers",
});

export default api;
