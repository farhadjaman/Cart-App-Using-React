import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducers";

//create out first middleware
//this middle list all the action that we are dispatching
const myLogger = (store) => (next) => (action) => {
  console.log(`Action:${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`)

  //let the action passed to the reducer
  return next(action);
}
const store = createStore(rootReducer, applyMiddleware(myLogger))

export default store;
