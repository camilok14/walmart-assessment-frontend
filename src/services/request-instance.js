import axios from 'axios';

const config = {
  timeout: 15000,
  baseURL: process.env.VUE_APP_BACKEND_URL
};
export default axios.create(config);
