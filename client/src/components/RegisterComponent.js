import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

// Import Bootstrap
import { LinkContainer } from "react-router-bootstrap";
import { Container, Form, Button, Alert } from "react-bootstrap";

const RegisterComponent = () => {
  let history = useHistory();
  const [resInfo, setResInfo] = useState(false);
  const [msgInfo, setMsgInfo] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const RegFormHandler = (e) => {
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
      .then((res) => {
        if (res.data.msg === "The account was created!") {
          setResInfo(true);
          setMsgInfo();

          setTimeout(() => history.push("/login"), 5000);
        } else {
          setMsgInfo(res.data.msg);
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Container className="preFormReg">
      {msgInfo !== undefined && <Alert variant="danger">{msgInfo}</Alert>}
      {resInfo && (
        <Alert variant="dark">
          <Alert.Heading>Hey, nice to have you</Alert.Heading>
          <p>
            Aww yeah, you successfully register the account. Be careful, dont
            share to anyone your contact details. Our STAFF will never ask for
            your email or password details.
          </p>
          <hr />
          <p className="mb-0">
            Enjoy our website and hope you will find what you are searching!
          </p>
          <p className="mb-0">
            You will be redirected to the login page in 4 seconds!
          </p>
        </Alert>
      )}
      {!resInfo && (
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
              onClick={RegFormHandler}
            >
              Register
            </Button>
            <LinkContainer to="/login">
              <Button variant="secondary" className="loginButton">
                Log in
              </Button>
            </LinkContainer>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default RegisterComponent;
