const initState = [];

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        data: action.payload.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
