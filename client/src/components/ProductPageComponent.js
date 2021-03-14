// Import components
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

//Import Bootstrap
import { Card, Container, Form, Button } from "react-bootstrap";

// Import files & functions
import { productAction } from "../actions/specificProductAction";
import NavbarComponent from "./NavbarComponent";

const ProductPageComponent = () => {
  const [qty, setQty] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(productAction(id));
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      {product && (
        <Container className="productView mt-4">
          <div className="productPhoto">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="productInfo">
            <h3 className="mb-4">{product.name}</h3>
            <h5 className="mb-4">Price: {product.price}$</h5>
            <h6 className="mb-4">Quantity:</h6>
            <Form.Control
              as="select"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.stock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
            <h6 className="mt-4">Description: </h6>
            <p className="mt-2">{product.description}</p>

            {product.stock > 0 ? (
              <Button>Add to cart</Button>
            ) : (
              <Button
                className="disabled"
                style={{ outline: "none", boxShadow: "none" }}
              >
                Add to cart
              </Button>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default ProductPageComponent;
