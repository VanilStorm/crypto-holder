import axios from 'axios';

export const coinsAPI = {
  getAllCoinsAPI() {
    return axios.get('https://api.coincap.io/v2/assets').then((data) => data);
  }
};
