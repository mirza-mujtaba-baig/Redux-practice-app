import { legacy_createStore } from "redux";

import rootReducer from "./Reducers";

const toDoStore = legacy_createStore(rootReducer);

export default toDoStore;
