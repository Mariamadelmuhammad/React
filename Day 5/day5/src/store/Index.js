import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addfavourites } from "./Reducer";
import thunk from "redux-thunk";

const store = createStore(
  addfavourites,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
