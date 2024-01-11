import { Button, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col data-testid="SingleBook" xs={12} md={6} lg={4} xl={3}>
      <Card className={props.selected === props.book.asin ? "border-2 border-danger bg-body-secondary" : ""}>
        <Card.Img variant="top" src={props.book.img} onClick={() => props.setBookAsin(props.book.asin)} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Button variant="outline-success" className="w-100">
            Scopri di più
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
