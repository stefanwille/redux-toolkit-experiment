import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, List, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuidv1 from "uuid/v1";
import { RootState, booksSelectors } from "../store/Store";
import { booksSlice } from "../store/booksSlice";

const { Title } = Typography;

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      booksSlice.actions.addMany([
        {
          id: "1",
          title: "Hacktor hunts a Hu",
        },
        {
          id: "2",
          title: "Merten Morgantau buys a tricky cow",
        },
        {
          id: "3",
          title: "Ways lead to objectives",
        },
      ])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ids = useSelector(booksSelectors.selectIds);
  const entities = useSelector((state: RootState) =>
    Object.values(state.books.entities)
  );
  return (
    <div style={{ display: "inline-block", minWidth: "500px" }}>
      <Card title="Books">
        <div>
          <Row justify="center">
            <Col>
              <Title level={4}>{ids.length}</Title>
            </Col>
          </Row>

          <Row justify="end">
            <Col>
              <Button
                type="link"
                onClick={() => {
                  dispatch(
                    booksSlice.actions.addOne({
                      id: uuidv1(),
                      title: "Rosamunde Glitscher",
                    })
                  );
                }}
              >
                <PlusOutlined />
              </Button>
            </Col>
          </Row>

          <List itemLayout="vertical">
            {entities.map(
              (book) =>
                book && (
                  <List.Item style={{ minWidth: "400px" }}>
                    <Row justify="space-between" align="middle">
                      <Col>
                        {book.id} {book.title}
                      </Col>
                      <Col>
                        <Button
                          type="link"
                          onClick={() => {
                            dispatch(booksSlice.actions.removeMany([book.id]));
                          }}
                        >
                          <DeleteOutlined className="App__DeleteOutlined" />
                        </Button>
                      </Col>
                    </Row>
                  </List.Item>
                )
            )}
          </List>
          <br />
        </div>
      </Card>
    </div>
  );
};
