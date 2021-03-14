import axios from "axios";
import { useRef, useState } from "react";

// Import files
import NavbarComponent from "./NavbarComponent";

// Import Bootstrap
import { Container, Form, Button } from "react-bootstrap";

const LoginComponent = () => {
  const [msg, setMsg] = useState();
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
          console.log(res.data);
        } else {
          localStorage.setItem("token", res.data.token);
          console.log(res.data);
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
      </Container>
    </>
  );
};

export default LoginComponent;
