import { combineReducers } from "redux";

// import userReducer from './user/user.reducer';
import authReducer from "./user/reducer/authReducer";
import cartReducer from "./cart/cart.reducer";
import productReducer from "./product/product.reducer";

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer
});