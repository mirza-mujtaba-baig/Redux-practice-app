import toDoReducers from "./toDoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toDoReducers,
});

export default rootReducer;
