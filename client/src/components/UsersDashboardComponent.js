import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { usersAction } from "../actions/usersAction";

// Import Bootstrap
import {
  Container,
  Button,
  Table,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const UsersDashboardComponent = () => {
  // useState
  const [info, setInfo] = useState();
  const [part, setPart] = useState();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [checkAlert, setCheckAlert] = useState();

  // useRef
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const adminRef = useRef();

  // useHistory
  let history = useHistory();

  // Redux
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const MessageNewUserHandler = () => {
    handleShow();
    setPart("NewUser");
  };
  const NewUserHandler = () => {
    axios
      .post("http://localhost:5000/api/users/register", {
        password: passwordRef.current.value,
        email: emailRef.current.value,
        firstName: firstnameRef.current.value,
        lastName: lastnameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
      })
      .then((res) => {
        res.data.msg === "The account was created!" && handleClose();
        setCheckAlert(checkAlert + "newUser");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const MessageDeleteUserHandler = (id) => {
    setId(id);
    handleShow();
    setPart("DeleteUser");
  };
  const DeleteUserHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/delete/${id}`)
      .then((res) => {
        res.data.msg === "The account was deleted!" && handleClose();
        setCheckAlert(checkAlert + "deletedUser");
      })
      .catch((err) => console.log(err));
  };
  const MessagePatchUserHandler = (id) => {
    setId(id);
    handleShow();
    setPart("PatchUser");
  };
  const PatchUserHandler = (id) => {
    axios
      .patch(`http://localhost:5000/api/users/update/${id}`, {
        password: passwordRef.current.value,
        email: emailRef.current.value,
        firstName: firstnameRef.current.value,
        lastName: lastnameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        isAdmin: adminRef.current.value,
      })
      .then((res) => {
        res.data.msg === "The account was updated!" && handleClose();
        setCheckAlert(checkAlert + "updatedUser");
      })
      .catch((err) => console.log(err));
  };

  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/users", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (!res.data.isAdmin) {
          history.push("/");
        } else {
          setInfo("isAdmin");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(usersAction());
  }, [dispatch, checkAlert]);

  return (
    <>
      <AdminNavbarComponent />
      {info && (
        <Container>
          <div className="btnAddNewProduct">
            <Button
              variant="warning"
              className="my-5"
              onClick={MessageNewUserHandler}
            >
              Add New User
            </Button>
          </div>
          <Table className="tableProducts">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Admin</th>
                <th>Command</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => {
                  console.log(user);
                  return (
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        {user.lastName} {user.firstName}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.isAdmin ? "True" : "False"}</td>
                      <td>
                        <div>
                          <Button
                            variant="primary"
                            className="mr-3"
                            onClick={() => MessagePatchUserHandler(user._id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => MessageDeleteUserHandler(user._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Container>
      )}

      {part === "NewUser" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New User</Modal.Title>
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
                    placeholder="George"
                    ref={firstnameRef}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Henken"
                    ref={lastnameRef}
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
                    placeholder="0712231318"
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
            <Button variant="primary" onClick={NewUserHandler}>
              Create User
            </Button>
          </Modal.Footer>
        </Modal>
      ) : part === "PatchUser" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
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
                    placeholder="George"
                    ref={firstnameRef}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Henken"
                    ref={lastnameRef}
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
                    placeholder="0712231318"
                    ref={phoneRef}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridState">
                <Form.Label>Admin</Form.Label>
                <Form.Control as="select" defaultValue="false" ref={adminRef}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => PatchUserHandler(id)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        part === "DeleteUser" && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this account?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => DeleteUserHandler(id)}>
                Delete User
              </Button>
            </Modal.Footer>
          </Modal>
        )
      )}
    </>
  );
};

export default UsersDashboardComponent;
