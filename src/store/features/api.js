import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const africanCuisineURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=african&number=6";
const americanCuisineURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=american&number=6";
const italianCuisineURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=italian&number=6";
const britishCuisineURL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fc36a20745294176a54a31a6d1f36341&cuisine=british&number=6";


export const getCuisine = createAsyncThunk("data", async(arg, {
    rejectWithValue}) => {
    try {
        const datas = 
         await axios.get(africanCuisineURL) 
         await axios.get(americanCuisineURL)
         await axios.get(italianCuisineURL)
         await axios.get(britishCuisineURL)
            
    return datas;
    } catch (error) {
       rejectWithValue(error.response.data);
    }
});

    



