import axios from "axios";

import { africanCuisineURL, 
    americanCuisineURL, 
    italianCuisineURL,
    britishCuisineURL
 } from '../api';

//action creator

 export const loadCuisine = () => async (dispatch) => {
    //fetch axios
    const africanData = await axios.get(africanCuisineURL());
    const americanData = await axios.get(americanCuisineURL());
    const italianData = await axios.get(italianCuisineURL());
    const britishData = await axios.get(britishCuisineURL());
    dispatch({
        type: "FETCH_CUISINE",
        payload: {
            afrcican: africanData.data.results,
            american: americanData.data.results,
            italian: italianData.data.results,
            british: britishData.data.results
        },
    });
 };