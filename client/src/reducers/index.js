import { combineReducers } from "redux";

// Import files
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
  users: usersReducer,
});

export default allReducers;
