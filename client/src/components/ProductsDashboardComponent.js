import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Bootstrap
import { Container, Button, Table } from "react-bootstrap";

// Import files & functions
import AdminNavbarComponent from "./AdminNavbarComponent";
import { productsAction } from "../actions/productsAction";

const ProductsDashboardComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  return (
    <>
      <AdminNavbarComponent />
      <Container>
        <div className="btnAddNewProduct">
          <Button variant="warning" className="my-5">
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
                        <Button variant="primary" className="mr-3">
                          Edit
                        </Button>
                        <Button variant="danger">Delete</Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ProductsDashboardComponent;
