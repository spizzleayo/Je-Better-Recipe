import React, {useEffect} from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
//import { loadCuisine } from '../actions/cuisineAction';
//components
import cuisine from '../components/cuisine';
import styled from 'styled-components';
import {getCuisine} from "../store/features/api";

const Home = () => {
    //fetch cuisine
    const dispatch = useDispatch();

    const cuisine = useSelector(state => state.cuisine);

    useEffect(() => {
      dispatch(getCuisine());
    }, []);

    /*const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadCuisine());
    }, []);
    //get data back
    const cuisine = useSelector((state) => state.cuisine);
    console.log(cuisine);*/
    return(
       <div>
           <h1>Home</h1>
           
       </div>
    );
};
 
export default Home;