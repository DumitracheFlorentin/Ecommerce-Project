import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Import Bootstrap
import { Container, Button, Table, Modal } from "react-bootstrap";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { productsAction } from "../actions/productsAction";

const ProductsDashboardComponent = () => {
  // useState
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState();
  const [part, setPart] = useState();
  const [id, setId] = useState();
  const [checkAlert, setCheckAlert] = useState();

  // useHistory
  let history = useHistory();

  // useRef
  const brandRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const nameRef = useRef();
  const ratingRef = useRef();
  const stockRef = useRef();

  // Redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const MessageNewProductHandler = () => {
    handleShow();
    setPart("NewProduct");
  };
  const NewProductHandler = () => {};

  const MessagePatchProductHandler = (id) => {
    setPart("PatchProduct");
    handleShow();
    setId(id);
  };
  const PatchProductHandler = (id) => {};

  const MessageDeleteProductHandler = (id) => {
    setPart("DeleteProduct");
    handleShow();
    setId(id);
  };
  const DeleteProductHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${id}`)
      .then((res) => {
        res.data.msg === "The product was deleted!" && handleClose();
        setCheckAlert(checkAlert + "deletedProduct");
      })
      .catch((err) => console.log(err));
  };

  // useEffect
  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/products", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (!res.data.isAdmin) {
          history.push("/");
        } else {
          setInfo("isAdmin");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(productsAction());
  }, [dispatch]);

  return (
    <>
      <AdminNavbarComponent />
      {info && (
        <Container>
          <div className="btnAddNewProduct">
            <Button
              variant="warning"
              className="my-5"
              onClick={MessageNewProductHandler}
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
                    <tr key={product._id} style={{ textAlign: "center" }}>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.price}$</td>
                      <td>
                        <div>
                          <Button
                            variant="primary"
                            className="mr-3"
                            onClick={MessagePatchProductHandler}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() =>
                              MessageDeleteProductHandler(product._id)
                            }
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
      )}

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
      ) : part === "PatchProduct" ? (
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => DeleteProductHandler(id)}
              >
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
