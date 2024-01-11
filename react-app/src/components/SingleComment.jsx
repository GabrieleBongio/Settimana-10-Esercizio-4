import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  const [visible, setVisible] = useState(true);

  const deleteComment = async (event) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.comment._id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDQ3MTk0NjMsImV4cCI6MTcwNTkyOTA2M30.oMBXsd2e5xf8MtNXwcZiUmrBOrsAm8adped1kKCNq9w",
        },
      });
      if (resp.ok) {
        console.log(resp.json());
        setVisible(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListGroup.Item
      data-testid="SingleComment"
      className={visible ? "d-flex justify-content-between align-items-center" : "d-none"}
    >
      <p className="m-0">
        {props.comment.rate} <br></br> {props.comment.comment}
      </p>
      <Button variant="danger" onClick={deleteComment}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
