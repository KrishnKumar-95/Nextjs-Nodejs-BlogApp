import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.mjs";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
