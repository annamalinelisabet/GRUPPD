import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./ProductListReducer";

export default combineReducers({
  productList: productListReducer,
  cartReducer
})