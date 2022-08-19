import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducers";
//our own custom logger
import myLogger from "./middlewares/myLogger";
//third party redux logger
import logger from "redux-logger"
const store = createStore(rootReducer, applyMiddleware(logger, myLogger))//we can add multiple middleware in applymiddleware

export default store;
