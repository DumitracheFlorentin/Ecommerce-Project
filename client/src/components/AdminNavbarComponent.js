// Import Bootrstrap
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminNavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>E-commerce</Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer to="/dashboard/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbarComponent;
