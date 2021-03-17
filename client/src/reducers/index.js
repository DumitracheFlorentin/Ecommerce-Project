import { combineReducers } from "redux";

// Import files
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
  users: usersReducer,
  cart: cartReducer,
});

export default allReducers;
