import { configureStore } from "@reduxjs/toolkit";
import cuisineReducer from "../reducers/cuisineReducer";
const store = configureStore({
    reducer: {recipe: cuisineReducer}
})

export default store;