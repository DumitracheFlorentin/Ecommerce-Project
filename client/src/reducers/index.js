import { combineReducers } from "redux";

// Import files
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default allReducers;
