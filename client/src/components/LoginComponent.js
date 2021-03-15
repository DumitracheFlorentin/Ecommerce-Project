import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
          history.push("/");
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
