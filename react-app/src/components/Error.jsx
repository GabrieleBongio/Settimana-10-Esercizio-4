import { Alert } from "react-bootstrap";

const Error = (props) => (
  <Alert className="mt-2" variant="danger">
    {props.text}
  </Alert>
);

export default Error;
