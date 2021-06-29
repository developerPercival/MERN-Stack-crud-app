import { combineReducers } from "redux";
import { reducers } from "./reducers";

// Combine all reducers
export default combineReducers({
  comments: reducers,
});
