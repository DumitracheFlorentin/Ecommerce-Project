import { useEffect } from "react";
import axios from "axios";

// Import Bootstrap
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

// Import files & functions
import { specificAccount } from "../actions/specificAccountAction";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/valid", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch(specificAccount(res.data.id));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

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

            {user && user.isAdmin ? (
              <>
                <LinkContainer to="/account">
                  <Nav.Link>Account</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dashboard">
                  <Nav.Link>DASHBOARD</Nav.Link>
                </LinkContainer>
              </>
            ) : !localStorage.getItem("token") ? (
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
