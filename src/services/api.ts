import axios from "axios";

export const api = axios.create({
  baseURL: "https://volta-pra-mim-api.onrender.com",
  withCredentials: true, // MUITO IMPORTANTE para cookies
});
