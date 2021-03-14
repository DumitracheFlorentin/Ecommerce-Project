const productReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        data: action.payload.product,
      };
    default:
      return state;
  }
};

export default productReducer;
