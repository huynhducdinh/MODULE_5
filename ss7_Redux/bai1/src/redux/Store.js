import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./reducer";

const initialStore = [];
const middleWare = [thunk];

export const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleWare)
)