import { configureStore } from "@reduxjs/toolkit";
import cuisineSlice from "./features/cuisineSlice";


const store = configureStore({
    reducer: {
        cuisine: cuisineSlice.reducer, 
    },
});

export default store;