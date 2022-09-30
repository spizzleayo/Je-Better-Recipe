import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCuisine } from "../store/features/api";
import FoodCard from "./card";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCuisine());
  }, [dispatch]);

  const data = useSelector((state) => state);
  console.log({ data });

  return (
    <div>
      <FoodCard />
    </div>
  );
};

export default Home;
