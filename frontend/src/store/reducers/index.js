import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./ProductListReducer";
import productReducer from "./productReducer";

export default combineReducers({
  productList: productListReducer,
  cartReducer,
  product: productReducer
})