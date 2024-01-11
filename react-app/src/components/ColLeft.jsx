import { Row } from "react-bootstrap";
import BookList from "./BookList";

const ColLeft = (props) => (
  <Row className="g-1">
    <BookList selected={props.selected} bookArray={props.booksArray} setBookAsin={props.setBookAsin}></BookList>
  </Row>
);

export default ColLeft;
