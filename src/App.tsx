import "antd/dist/antd.css";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Books } from "./components/Books";
import { Counter } from "./components/Counter";
import { makeStore } from "./store/Store";

const store = makeStore();

const AppWithProvider = () => (
  <Provider store={store}>
    <div className="App">
      <Books />
      <br />
      <br />
      <Counter />
    </div>
  </Provider>
);

export default AppWithProvider;
