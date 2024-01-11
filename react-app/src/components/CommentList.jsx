import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = (props) => (
  <ListGroup>
    {props.comments.map((comment) => (
      <SingleComment key={`${comment._id} - ${comment.elementId}`} comment={comment}></SingleComment>
    ))}
  </ListGroup>
);

export default CommentList;
