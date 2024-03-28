import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hook";

import { decrement, increment } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic
  return (
    <div>
      <h3>Volume - {count}</h3>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
      <button className="btn btn-success" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
