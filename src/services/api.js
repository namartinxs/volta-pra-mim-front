import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' || 'https://volta-pra-mim-api.onrender.com',
  withCredentials: true, // MUITO IMPORTANTE para cookies
});

export default api;