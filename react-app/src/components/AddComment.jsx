import { Button, Form } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";
import { useState } from "react";

const AddComment = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState({ rate: "0", comment: "", elementId: props.bookId });

  const handleChange = (attribute, value) => {
    setNewComment({ ...newComment, [attribute]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDQ3MTk0NjMsImV4cCI6MTcwNTkyOTA2M30.oMBXsd2e5xf8MtNXwcZiUmrBOrsAm8adped1kKCNq9w",
        },
      });
      if (resp.ok) {
        setNewComment({ rate: "0", comment: "", elementId: props.bookId });
        console.log(resp.json());
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p className="fw-medium fs-4 mt-3">Nuovo Commento</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={5}
            value={newComment.rate}
            onChange={(event) => handleChange("rate", event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Inserisci il tuo commento"
            value={newComment.comment}
            onChange={(event) => handleChange("comment", event.target.value)}
          />
        </Form.Group>
        <div className="d-flex gap-3 align-items-center">
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
          {loading ? <Loading></Loading> : ""}
        </div>
        {error ? <Error text="Impossibile inserire nuovo commento"></Error> : ""}
      </Form>
    </>
  );
};

export default AddComment;
