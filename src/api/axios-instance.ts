import axios from 'axios';

const BASE_URL = 'http://devapp.bonusmoney.pro/mobileapp/';

const mobintAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    TOKEN: '123',
    'Content-Type': 'application/json',
  },
});

export { mobintAPI };
