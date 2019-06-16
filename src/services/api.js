import axios from 'axios';

const api = axios.create({
  baseURL: 'https://9ba66112.ngrok.io',
});

export default api;
