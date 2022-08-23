
import { INCREMENT, DECREMENT, ADDPRODUCT } from "../Cart/actionTypes"
const initialState = []


//state changing bussiness logic of counter will be in this reducer
const dynamicCounterReducer = (state = initialState, { type, payload }) => {
  console.log(payload)
  //
  //console.log(id, name, price)
  switch (type) {
    case ADDPRODUCT:
      {
        const newItem = payload
        const { id, name, price } = payload;
        const existItem = state.find(item => item.id === newItem.id)
        if (existItem) {
          return [...state]

        }
        else {
          return [
            ...state, { id, name, price, count: 1, incrementby: 1, decrementby: 1 }
          ]
        }
      }
    case INCREMENT:
      {
        console.log(payload)
        const newState = state.map(item => (
          item.id === payload ?
            { ...item, count: item.count + 1 }
            :
            item
        ))
        console.log(newState)
        return newState;
      }

    case DECREMENT:
      {
        console.log(payload)
        const newState = state.map(item => (
          item.id === payload && item.count > 1 ?
            { ...item, count: item.count - 1 }
            :
            item
        ))
        console.log(newState)
        return newState;
      }
    default:
      return state;
  }
}

export default dynamicCounterReducer;