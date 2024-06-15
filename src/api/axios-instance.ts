import axios from 'axios';

const BASE_URL = 'http://devapp.bonusmoney.pro/mobileapp/';

const mobintAPI = axios.create({
  baseURL: BASE_URL,
});

mobintAPI.interceptors.response.use((request) => {
  request.headers['Content-Type'] = 'application/json';
  return request;
});

export { mobintAPI };
