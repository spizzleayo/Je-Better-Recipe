import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCuisine } from "../store/features/api";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCuisine());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
