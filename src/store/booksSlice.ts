import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import uuidv1 from "uuid/v1";

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

export const addBook = (book: Book) =>
  booksSlice.actions.addOne({
    ...book,
    id: uuidv1(),
  });
