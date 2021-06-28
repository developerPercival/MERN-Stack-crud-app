import { combineReducers } from "redux";
import { allReducers } from "./allReducers.js";

export default combineReducers({
  posts: allReducers,
});
