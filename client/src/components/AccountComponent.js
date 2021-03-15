import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Import files
import NavbarComponent from "./NavbarComponent";
import { specificAccount } from "../actions/specificAccountAction";

// Import Bootstrap
import {
  Container,
  Nav,
  Tab,
  Card,
  Modal,
  Button,
  Form,
  Col,
} from "react-bootstrap";

const AccountComponent = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  let history = useHistory();
  const dispatch = useDispatch();
  const PROFILE = "profile";
  const ORDERS = "orders";
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const user = useSelector((state) => state.user.data);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = async (e) => {
    e.preventDefault();
    history.push("/");
    localStorage.removeItem("token");
  };

  const submitEditHandler = (e) => {
    setShow(false);

    axios
      .patch(`http://localhost:5000/api/users/update/${id}`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
        setId(res.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gabriel"
                  ref={firstNameRef}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hotkings"
                  ref={lastNameRef}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 Main St"
                  ref={addressRef}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0721371286"
                  ref={phoneRef}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitEditHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
                <h1 className="mt-5">
                  {user && user.lastName} {user && user.firstName}
                </h1>
                <div className="Info mt-5">
                  <h5>my personal data</h5>
                </div>
                <div className="cards">
                  <Card
                    style={{
                      minWidth: "18rem",
                      height: "22vh",
                      minHeight: "175px",
                    }}
                    className="mt-3 mr-5"
                  >
                    <Card.Body>
                      <Card.Title>Email & Phone</Card.Title>
                      <Card.Text>{user && user.email}</Card.Text>
                      <Card.Text>{user && user.phone}</Card.Text>
                      <Card.Link
                        style={{ cursor: "pointer" }}
                        onClick={handleShow}
                      >
                        Edit
                      </Card.Link>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{
                      minWidth: "18rem",
                      height: "22vh",
                      minHeight: "175px",
                    }}
                    className="mt-3"
                  >
                    <Card.Body>
                      <Card.Title>Address</Card.Title>
                      <Card.Text>
                        {user && user.lastName} {user && user.firstName}
                      </Card.Text>
                      <Card.Text>{user && user.address}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  );
};

export default AccountComponent;
