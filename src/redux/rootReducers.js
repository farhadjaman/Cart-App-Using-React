import { combineReducers } from "redux";
import productReducer from "./Products/productReducer.js";
import cartReducer from "./Cart/cartReducer.js"

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})
export default rootReducer;