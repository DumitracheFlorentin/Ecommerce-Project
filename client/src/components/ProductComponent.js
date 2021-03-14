import { Container } from "react-bootstrap";

const ProductComponent = ({ product }) => {
  return (
    <Container key={product._id}>
      <img src={product.image} alt={product.name} />
      <div className="firstInfo">
        <h5>{product.name}</h5>
        <h5>{product.price}$</h5>
      </div>
    </Container>
  );
};

export default ProductComponent;
