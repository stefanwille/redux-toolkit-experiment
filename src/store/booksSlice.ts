import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
}

export const booksAdapter = createEntityAdapter<Book>({});

export const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    addOne: booksAdapter.addOne,
    addMany: booksAdapter.addMany,
    removeOne: booksAdapter.removeOne,
    removeMany: booksAdapter.removeMany,
  },
});
