import SingleBook from "./SingleBook";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const BookList = (props) => {
  const [books, setBooks] = useState(props.bookArray);
  const [btns, setBtns] = useState([
    {
      value: "fantasy",
      active: false,
    },
    {
      value: "history",
      active: false,
    },
    {
      value: "horror",
      active: false,
    },
    {
      value: "romance",
      active: false,
    },
    {
      value: "scifi",
      active: false,
    },
  ]);

  const handleChange = (event) => {
    setBooks(props.bookArray.filter((book) => book.title.includes(event.target.value)));
    setBtns([
      {
        value: "fantasy",
        active: false,
      },
      {
        value: "history",
        active: false,
      },
      {
        value: "horror",
        active: false,
      },
      {
        value: "romance",
        active: false,
      },
      {
        value: "scifi",
        active: false,
      },
    ]);
  };

  const filterCategory = (event) => {
    setBooks(props.bookArray.filter((book) => book.category === event.target.innerText));
    setBtns(
      btns.map((obj) => {
        if (obj.value === event.target.innerText) {
          obj.active = true;
        } else {
          obj.active = false;
        }
        return obj;
      })
    );
  };

  return (
    <>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Cerca nella LibReact"
              className=" mr-sm-2 mb-2"
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form>
      <div className="d-flex gap-3 mb-4 flex-wrap">
        <Button variant={btns[0].active ? "info" : "outline-info"} onClick={filterCategory}>
          fantasy
        </Button>
        <Button variant={btns[1].active ? "info" : "outline-info"} onClick={filterCategory}>
          history
        </Button>
        <Button variant={btns[2].active ? "info" : "outline-info"} onClick={filterCategory}>
          horror
        </Button>
        <Button variant={btns[3].active ? "info" : "outline-info"} onClick={filterCategory}>
          romance
        </Button>
        <Button variant={btns[4].active ? "info" : "outline-info"} onClick={filterCategory}>
          scifi
        </Button>
      </div>
      <p className="fs-5 fw-lighter">trovati {books.length} libri</p>
      {books.map((book) => (
        <SingleBook
          selected={props.selected}
          book={book}
          key={book.category + "-" + book.asin}
          setBookAsin={props.setBookAsin}
        ></SingleBook>
      ))}
    </>
  );
};

export default BookList;
