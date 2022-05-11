import { combineReducers } from "redux";
import productListReducer from "./ProductListReducer";

export default combineReducers({
  productList: productListReducer
})