import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from "./ProductListReducer";
import authReducer from "./authReducer";
import productReducer from "./ProductReducer"
import OrdersReducer from "./OrderReducer";

export default combineReducers({
  productList: productListReducer,
  cartReducer,
  auth : authReducer,
  product:productReducer,
  order: OrdersReducer
})