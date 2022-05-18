import { combineReducers } from "redux";
import productListReducer from "./ProductListReducer";
import productReducer from "./ProductReducer"
export default combineReducers({
  productList: productListReducer,
  product:productReducer
})