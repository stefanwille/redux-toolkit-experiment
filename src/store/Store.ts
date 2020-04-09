import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksSlice, booksAdapter } from "./booksSlice";
import { counterSlice } from "./counterSlice";

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  books: booksSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const selectCounter = (state: RootState) => state.counter;

export const selectBooks = (state: any) => state[booksSlice.name];
export const booksSelectors = booksAdapter.getSelectors(selectBooks);

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });
