import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar expand="sm" className="bg-body-tertiary border-bottom border-1 border-body-secondary">
    <Container>
      <Navbar.Brand href="#home">LibReact</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
