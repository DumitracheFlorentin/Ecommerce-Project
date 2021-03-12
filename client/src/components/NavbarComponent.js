import { useHistory, Link } from "react-router-dom";

// Import Bootstrap
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>E-commerce</Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>CART</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>SIGN IN</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
