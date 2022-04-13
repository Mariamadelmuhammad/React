import { combineReducers } from "redux";
import { changeLanguageReducer } from "./language";
import { changeThemeMode } from "./theme";
import moviesReducer from "./SecondReducer";
import { loaderReducer } from "./loading";

export default combineReducers({
  langugae: changeLanguageReducer,
  theme: changeThemeMode,
  SecondReducer: moviesReducer,
  isLoading: loaderReducer,
});
