import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice.mjs";

const rootReducer = combineReducers({
    posts: postSlice
})

export default rootReducer;