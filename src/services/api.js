import axios from 'axios';

const api = axios.create({
  baseURL: 'https://41abf10e.ngrok.io',
});

export default api;
