import { combineReducers } from "redux";

// Import files
import productsReducer from "./productsReducer";

const allReducers = combineReducers({ products: productsReducer });

export default allReducers;
