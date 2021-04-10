import { combineReducers } from "redux";
import fruits from "./fruitsReducer";
import juice from "./juiceReducer";

const rootReducer = combineReducers({
  fruits,
  juice,
});

export default rootReducer;
