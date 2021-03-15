import { combineReducers } from "redux";

// Import files
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
});

export default allReducers;
