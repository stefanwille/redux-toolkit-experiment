import "antd/dist/antd.css";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Books } from "./components/Books";
import { Counter } from "./components/Counter";
import { makeStore } from "./store/Store";
import { Layout, PageHeader } from "antd";

const { Header, Content } = Layout;

const store = makeStore();

const AppWithProvider = () => (
  <Provider store={store}>
    <div className="App">
      <Layout>
        <Header>
          <div>
            <PageHeader title="Redux Toolkit Experiment" />
          </div>
        </Header>

        <Content>
          <Books />
          <br />
          <br />
          <Counter />
        </Content>
      </Layout>
    </div>
  </Provider>
);

export default AppWithProvider;
