import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Import files
import NavbarComponent from "./NavbarComponent";
import { specificAccount } from "../actions/specificAccountAction";

// Import Bootstrap
import { Container, Nav, Tab } from "react-bootstrap";

const AccountComponent = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const PROFILE = "profile";
  const ORDERS = "orders";

  const logoutHandler = async (e) => {
    e.preventDefault();
    history.push("/");
    localStorage.removeItem("token");
  };

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
