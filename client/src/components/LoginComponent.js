import { useRef } from "react";

// Import files
import NavbarComponent from "./NavbarComponent";

// Import Bootstrap
import { Container, Form, Button } from "react-bootstrap";

const LoginComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

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
          <Button variant="warning" className="loginFormButton">
            Log in
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginComponent;
