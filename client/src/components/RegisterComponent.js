import axios from "axios";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const RegisterComponent = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const registerFromHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/register", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        firstName: firstnameRef.current.value,
        lastName: lastnameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <Container className="preFormReg">
      <Form className="formReg">
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            ref={usernameRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            ref={firstnameRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            ref={lastnameRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            ref={addressRef}
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            ref={phoneRef}
            required
          />
        </Form.Group>
        <div className="buttonsGroup">
          <Button
            variant="warning"
            className="regButton"
            value="submit"
            onClick={registerFromHandler}
          >
            Register
          </Button>
          <Button variant="secondary" className="loginButton">
            Log In
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterComponent;
