// Import files
import NavbarComponent from "./NavbarComponent";

// Import Bootstrap
import { Container } from "react-bootstrap";

const CartComponent = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <h2 className="mt-4">Cart</h2>
      </Container>
    </>
  );
};

export default CartComponent;
