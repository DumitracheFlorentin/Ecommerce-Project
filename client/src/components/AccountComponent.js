import { useHistory } from "react-router-dom";

// Import files
import NavbarComponent from "./NavbarComponent";

// Import Bootstrap
import { Container, Nav, Tab } from "react-bootstrap";

const AccountComponent = () => {
  let history = useHistory();
  const PROFILE = "profile";
  const ORDERS = "orders";

  const logoutHandler = (e) => {
    e.preventDefault();

    history.push("/");
    localStorage.removeItem("token");
  };

  return (
    <>
      <NavbarComponent />
      <Container>
        <Tab.Container>
          <Nav justify variant="tabs" className="mt-4">
            <Nav.Item>
              <Nav.Link eventKey={PROFILE}>My Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={ORDERS}>My orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="logout" onClick={logoutHandler}>
                Log Out
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey={PROFILE}>
              <>
                <h1>hehe</h1>
              </>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  );
};

export default AccountComponent;
