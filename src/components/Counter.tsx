import { Button, Card, Col, Row, Space, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { counterSlice } from "../store/counterSlice";

const { Title } = Typography;

export const Counter = () => {
  const counterState = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "inline-block" }}>
      <Card title="Counter">
        <div style={{ display: "inline-block" }}>
          <Row justify="center">
            <Col>
              <Title level={4}>{counterState}</Title>
            </Col>
          </Row>
          <br />
          <Space size="small">
            <Button
              size="large"
              type="primary"
              onClick={() => {
                dispatch(counterSlice.actions.increment(4));
              }}
            >
              Increment
            </Button>
            <Button
              size="large"
              onClick={() => {
                dispatch(counterSlice.actions.decrement(1));
              }}
            >
              Decrement
            </Button>
            <Button
              type="link"
              onClick={() => {
                dispatch(counterSlice.actions.bump());
              }}
            >
              Bump
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};
