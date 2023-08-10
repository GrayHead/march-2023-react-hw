import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {carReducer} from "./reducers";

const rootReducer = combineReducers({
    cars: carReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {
    store
}
