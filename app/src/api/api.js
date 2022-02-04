import axios from 'axios';

export const coinsAPI = {
  getAllCoinsAPI() {
    return axios.get(`${process.env.REACT_APP_API_URL}/assets`).then((data) => data);
  }
};
