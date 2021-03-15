import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import files & functions
import { productsAction } from "../actions/productsAction";
import ProductComponent from "./ProductComponent";

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
          return <ProductComponent product={product} key={product._id} />;
        })}
    </div>
  );
};

export default MainComponent;
