import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCuisine } from "./api";

/*export const getCuisine = createAsyncThunk("cuisine/getCuisine", async () => {
    return axios
      .get( )
      .then((res) => res.data);
  }); */

const cuisineSlice = createSlice({
  name: "cuisine",
  initialState: {
    africanCuisine: [],
    americanCuisine: [],
    italianCuisine: [],
    britishCuisine: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCuisine.pending, (state) => {
      state.loading = [];
    });

    builder.addCase(getCuisine.fulfilled, (state, action) => {
      state.entities = action.payload.data;
    });
  },
});

export default cuisineSlice;
