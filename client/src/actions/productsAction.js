import axios from "axios";

export const productsAction = () => async (dispatch) => {
  // FETCH DATA
  const productsData = await axios.get("http://localhost:5000/api/products");

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: {
      products: productsData.data,
    },
  });
};
