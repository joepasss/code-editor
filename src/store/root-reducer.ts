import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { darkModeReducer } from "./slices/dark-mode/darkMode";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
