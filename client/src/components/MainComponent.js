import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../actions/productsAction";
import { Container } from "react-bootstrap";

const MainComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(productsAction());
  }, []);

  return (
    <div className="productCard mt-5">
      {products &&
        products.map((product) => {
          return (
            <Container key={product._id}>
              <img src={product.image} alt={product.name} />
              <div className="firstInfo">
                <h5>{product.name}</h5>
                <h5>{product.price}$</h5>
              </div>
            </Container>
          );
        })}
    </div>
  );
};

export default MainComponent;
