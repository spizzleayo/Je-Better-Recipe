import { createSlice } from "@reduxjs/toolkit";
import { getCuisine } from "./api";

const cuisineSlice = createSlice({
  name: "cuisine",
  initialState: {
    Cuisines: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCuisine.pending, (state) => {
      state.loading = [];
    });

    builder.addCase(getCuisine.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default cuisineSlice;
