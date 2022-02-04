import {TYPES} from '../actionTypes/actionTypes';
import {coinsAPI} from '../../../../api/api';

export const setAllCoins = (coins) => ({type: TYPES.SET_ALL_COINS, coins});
export const getAllCoins = () => async (dispatch) => {
  const response = await coinsAPI.getAllCoinsAPI();
  if (response.status === 200) {
    dispatch(setAllCoins(response.data.data));
  }
};

export const setSelectedCoins = (selected) => ({type: TYPES.SET_SELECTED_COIN, selected});

export const deleteCoin = (name) => ({type: TYPES.DELETE_COIN, name});
