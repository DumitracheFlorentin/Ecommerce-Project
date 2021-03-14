import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

// Import files
import NavbarComponent from "./NavbarComponent";

// Import Bootstrap
import { Container, Form, Button, Alert } from "react-bootstrap";

const LoginComponent = () => {
  let history = useHistory();
  const [msg, setMsg] = useState();
  const [succ, setSucc] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginButtonHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.data.msg) {
          setMsg(res.data.msg);
        } else {
          setMsg();
          localStorage.setItem("token", res.data.token);
          setSucc(true);
          setTimeout(() => history.push("/"), 4000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarComponent />
      <Container className="preFormLogin">
        {msg && <Alert variant="danger">{msg}</Alert>}
        {succ && (
          <Alert variant="dark">
            <Alert.Heading>Hey, nice to have you back</Alert.Heading>
            <p>
              Aww yeah, you successfully log in to your account. Be careful,
              dont share to anyone your contact details. Our STAFF will never
              ask for your email or password details.
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
        {!succ && (
          <Form className="formLogin">
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
            <Button
              variant="warning"
              className="loginFormButton"
              onClick={loginButtonHandler}
            >
              Log in
            </Button>
          </Form>
        )}
      </Container>
    </>
  );
};

export default LoginComponent;
