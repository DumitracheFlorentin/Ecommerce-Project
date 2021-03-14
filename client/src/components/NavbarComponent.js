import { useState } from "react";

// Import Bootstrap
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  const [token, setToken] = useState();

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

            {!localStorage.getItem("token") ? (
              <>
                <LinkContainer to="/register">
                  <Nav.Link>SIGN IN</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>LOG IN</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/account">
                  <Nav.Link>My account</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
