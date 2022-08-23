
import { INCREMENT, DECREMENT } from "./actionTypes"
const initialState = {
  value: 0
}


//state changing bussiness logic of counter will be in this reducer
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state;
  }
}

export default counterReducer;