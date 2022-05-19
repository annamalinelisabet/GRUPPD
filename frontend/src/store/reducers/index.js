import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./ProductListReducer";
import authReducer from "./authReducer";
import productReducer from "./ProductReducer"

export default combineReducers({
  productList: productListReducer,
  cartReducer,
  auth : authReducer,
  product:productReducer
})