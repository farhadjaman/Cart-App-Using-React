import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducers";


//our own custom logger
// import myLogger from "./middlewares/myLogger";


//third party redux logger
//import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools(
  // other store enhancers if any
))//we can add multiple middleware in applymiddleware

export default store;