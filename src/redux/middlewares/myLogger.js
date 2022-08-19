import rootReducer from "../rootReducers";

//create out first middleware
//this middle list all the action that we are dispatching
const myLogger = (store) => (next) => (action) => {
  console.log(`Action:${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`)

  const upcommingState = [action].reduce(rootReducer, store.getState())
  console.log("After :", JSON.stringify(upcommingState))

  //let the action passed to the reducer
  return next(action);
}

export default myLogger;