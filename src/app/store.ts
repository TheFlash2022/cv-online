import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cakeReducer from "../features/cake/cakeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cake: cakeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
