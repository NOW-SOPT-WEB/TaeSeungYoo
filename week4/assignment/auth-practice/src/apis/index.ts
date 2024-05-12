import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://34.64.233.12:8080',
  timeout: 30000,
});

export default instance;
