import {combineReducers} from "redux";
import userReducer from "./userRedcuer"
export const rootReducer = combineReducers({
   user:userReducer
})