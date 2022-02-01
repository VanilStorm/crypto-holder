import {TYPES} from "./actionTypes";
import {coinsAPI} from "../../../api/api";

const initialState = {
    allCoins: [],
    popularCoins: [],
    selectedCoins: []
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_ALL_COINS: {
            return {
                ...state, allCoins: action.coins , popularCoins: action.coins.filter((item,index) => index < 3)
            }
        }

        default:
            return state
    }
}

export const setAllCoins = coins => ({type: TYPES.SET_ALL_COINS, coins})
export const getAllCoins = () => async dispatch => {
    const response = await coinsAPI.getAllCoinsAPI()
    if(response.status === 200) {
        dispatch(setAllCoins(response.data.data))
    }
}

