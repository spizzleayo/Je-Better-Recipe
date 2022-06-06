import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

const cuisineSlice = createSlice({
    name: "cuisine",
    initialState: {
    africanCuisine : [],
    americanCuisine: [],
    italianCuisine: [],
    britishCuisine: [],
    },
  /* reducers: {},
    extraReducers: {
        [getCuisine.pending] : (state, { payload }) => {
            state.loading = true;
           // state.data = payload;
        },
        [getCuisine.fulfilled] : (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getCuisine.rejected] : (state, { payload }) => {
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        }, */
    });
//});

export default cuisineSlice;