import { combineReducers, legacy_createStore as createStore } from "redux";

import activeMenuReducer from "./activeMenuReducer";

const rootReducer = combineReducers({
  menu: activeMenuReducer,
});

export default createStore(rootReducer);
