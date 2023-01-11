import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducer/UserReducer.js";
import ProductCart from "../reducer/ProductCart.js";
export default configureStore({
  reducer: {
    user: UserReducer,
    cart: ProductCart,
  },
});
