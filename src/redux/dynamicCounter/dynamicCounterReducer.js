
import { DINCREMENT, DDECREMENT } from "../dynamicCounter/actionTypes"
const initialState = {
  value: 20
}


//state changing bussiness logic of counter will be in this reducer
const dynamicCounterReducer = (state = initialState, { type, payload }) => {
  console.log("coming here")
  console.log(payload)
  switch (type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + payload
      }

    case DDECREMENT:
      return {
        ...state,
        value: state.value - payload
      }
    default:
      return state;
  }
}

export default dynamicCounterReducer;