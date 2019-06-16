import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6a87bc28.ngrok.io',
});

export default api;
