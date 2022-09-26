import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const africanCuisineURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=african&number=4";
const americanCuisineURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=american&number=4";
const italianCuisineURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=italian&number=4";
const britishCuisineURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=british&number=4";

export const getCuisine = createAsyncThunk("data", async () => {
  const data = await axios
    .all([
      axios.get(africanCuisineURL),
      axios.get(americanCuisineURL),
      axios.get(italianCuisineURL),
      axios.get(britishCuisineURL),
    ])
    .catch((err) => {
      console.log(err);
    });
  return data;
});
