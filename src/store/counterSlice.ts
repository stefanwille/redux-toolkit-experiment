import {
  Action,
  CaseReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

type CounterSliceState = number;

const increment: CaseReducer<CounterSliceState, PayloadAction<number>> = (
  state,
  action
) => state + action.payload;

const decrement: CaseReducer<CounterSliceState, PayloadAction<number>> = (
  state,
  action
) => state - action.payload;

const bump: CaseReducer<CounterSliceState, Action> = (state, _action) =>
  state + 1;

const initialState: CounterSliceState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
    decrement,
    bump,
  },
});
