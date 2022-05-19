import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./ProductListReducer";
import productReducer from "./ProductReducer"
export default combineReducers({
  productList: productListReducer,
  product:productReducer,
  cartReducer
})