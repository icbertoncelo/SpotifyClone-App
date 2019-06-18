import axios from 'axios';

const api = axios.create({
  baseURL: 'https://85255562.ngrok.io',
});

export default api;
