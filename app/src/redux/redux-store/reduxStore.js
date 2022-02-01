import {createStore, combineReducers, applyMiddleware} from "redux";
import {coinReducer} from "../reducers/coinReducer/coinReducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    coinReducer: coinReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store