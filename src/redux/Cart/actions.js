import { ADDPRODUCT, INCREMENT, DECREMENT } from "./actionTypes"

export const addProductToCart = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product
  }
}
export const increment = (id) => {
  console.log("id", id)
  return {
    type: INCREMENT,
    payload: id
  }
}
export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id
  }
}