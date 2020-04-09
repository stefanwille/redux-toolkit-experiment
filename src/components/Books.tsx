import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, List, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { booksSelectors } from "../store/Store";
import { booksSlice, Book, addBook } from "../store/booksSlice";

const { Title } = Typography;

const INITIAL_BOOKS: Book[] = [
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
];

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksSlice.actions.addMany(INITIAL_BOOKS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const books = useSelector(booksSelectors.selectAll);
  return (
    <div style={{ display: "inline-block", minWidth: "600px" }}>
      <Card title="Books">
        <div>
          <Row justify="center">
            <Col>
              <Title level={4}>{books.length}</Title>
            </Col>
          </Row>

          <Row justify="end">
            <Col>
              <Button
                type="link"
                onClick={() => {
                  dispatch(
                    addBook({
                      id: "",
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
            {books.map(
              (book) =>
                book && (
                  <List.Item>
                    <Row justify="space-between" align="middle">
                      <Col flex="0 0 500px">
                        {book.id} {book.title}
                      </Col>
                      <Col flex="0 0 auto">
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
