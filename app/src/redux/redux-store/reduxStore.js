import {createStore, combineReducers} from "redux";
import {testReducer} from "../reducers/testReducer/test";

const reducers = combineReducers({
    test: testReducer
})

const store = createStore(reducers)

export default store