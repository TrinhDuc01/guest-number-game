import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import gameReducer from "./gameReducer";
export default combineReducers({
  userReducer,
  gameReducer,
});
