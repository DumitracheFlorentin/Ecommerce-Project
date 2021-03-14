import axios from "axios";

export const productAction = (id) => async (dispatch) => {
  // FETCH DATA
  const product = await axios.get(`http://localhost:5000/api/products/${id}`);

  dispatch({
    type: "FETCH_PRODUCT",
    payload: {
      product: product.data,
    },
  });
};
