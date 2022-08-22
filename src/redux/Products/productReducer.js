
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

        fetch('data.json'
          , {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
          .then((response) => {
            return response.json()
          })
          .then((data) => {

            state.productItems = data.products


          })
          .catch((error) => {
            console.error('Error:', error);
          });

        return state;
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