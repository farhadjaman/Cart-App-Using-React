// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
import rootReducer from "./rootReducers";


//our own custom logger
// import myLogger from "./middlewares/myLogger";


//third party redux logger
//import logger from "redux-logger"
// import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer)//we can add multiple middleware in applymiddleware

export default store;
