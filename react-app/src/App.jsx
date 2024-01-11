import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";
import ColLeft from "./components/ColLeft";
import Welcome from "./components/Welcome";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const booksArray = horrorBooks.concat(historyBooks).concat(fantasyBooks).concat(romanceBooks).concat(scifiBooks);
console.log(booksArray);

const App = () => {
  const [bookAsin, setBookAsin] = useState(null);

  return (
    <>
      <MyNav></MyNav>
      <Container className="my-5">
        <Welcome></Welcome>
        <Row>
          <Col xs={6} md={7} lg={8} xl={9}>
            <ColLeft booksArray={booksArray} setBookAsin={setBookAsin} selected={bookAsin}></ColLeft>
          </Col>
          <Col xs={6} md={5} lg={4} xl={3} className="border-start border-1 border-info">
            <CommentArea bookId={bookAsin}></CommentArea>
          </Col>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </>
  );
};

export default App;
