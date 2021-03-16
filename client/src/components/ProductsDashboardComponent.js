import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Import Bootstrap
import { Container, Button, Table, Modal } from "react-bootstrap";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { productsAction } from "../actions/productsAction";

const ProductsDashboardComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  const [show, setShow] = useState(false);
  const [part, setPart] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  const CreateProductHandler = () => {
    setPart("NewProduct");
    handleShow();
  };

  const EditProductHandler = () => {
    setPart("EditProduct");
    handleShow();
  };

  const DeleteMessageHandler = () => {
    setPart("DeleteProduct");
    handleShow();
  };

  const DeleteProdHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminNavbarComponent />
      <Container>
        <div className="btnAddNewProduct">
          <Button
            variant="warning"
            className="my-5"
            onClick={CreateProductHandler}
          >
            Add New Product
          </Button>
        </div>

        <Table className="tableProducts">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Command</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <tr style={{ textAlign: "center" }}>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}$</td>
                    <td>
                      <div>
                        <Button
                          variant="primary"
                          className="mr-3"
                          onClick={EditProductHandler}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => DeleteProdHandler(product._id)}
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

      {part === "NewProduct" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : part === "EditProduct" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        part === "DeleteProduct" && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this product?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={DeleteMessageHandler}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        )
      )}
    </>
  );
};

export default ProductsDashboardComponent;
