import { SETPRODUCTS, SETISLOADING } from "./actionTypes"

export const setProducts = (data) => {
  return {
    type: SETPRODUCTS,
    payload: data
  }
}
export const setIsLoading = (value) => {
  return {
    type: SETISLOADING,
    payload: value
  }
}