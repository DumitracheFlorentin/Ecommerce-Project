import axios from "axios";
import { useRef } from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Container, Form, Button } from "react-bootstrap";

const RegisterComponent = () => {
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
          <LinkContainer to="/login">
            <Button variant="secondary" className="loginButton">
              Sign In
            </Button>
          </LinkContainer>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterComponent;
