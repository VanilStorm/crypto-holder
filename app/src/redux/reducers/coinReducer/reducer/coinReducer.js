import {TYPES} from '../actionTypes/actionTypes';

const initialState = {
  allCoins: [],
  popularCoins: [],
  selectedCoins: []
};

export const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_ALL_COINS: {
      return {
        ...state, allCoins: action.coins, popularCoins: action.coins.filter((item, index) => index < 3)
      };
    }
    case TYPES.SET_SELECTED_COIN: {
      return {
        ...state, selectedCoins: [...state.selectedCoins, action.selected],
      };
    }

    case TYPES.DELETE_COIN: {
      return {
        ...state, selectedCoins: state.selectedCoins.filter((item, index) => item.name !== action.name)
      };
    }

    default:
      return state;
  }
};
