
import { SETPRODUCTS, SETISLOADING } from "./actionTypes"
const initialState = {
  productItems: [],
  isLoading: false
}


//state changing bussiness logic of counter will be in this reducer
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETPRODUCTS:
      {


        return {
          ...state,
          productItems: [...payload]
        };
      }
    case SETISLOADING:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
}

export default productReducer;