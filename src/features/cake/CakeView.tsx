import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { ordered, restocked } from "../cake/cakeSlice";

const CakeView = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(5))}>restock cakes</button>
    </div>
  );
};

export default CakeView;
