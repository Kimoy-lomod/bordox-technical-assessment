import { combineReducers } from "redux";
import modelReducer from "./model";

const rootReducer = combineReducers({
  models: modelReducer,
});

export default rootReducer
