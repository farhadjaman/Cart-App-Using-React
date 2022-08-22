import { SETPRODUCTS, SETISLOADING } from "./actionTypes"

export const setProducts = () => {
  return {
    type: SETPRODUCTS
  }
}
export const setIsLoading = (value) => {
  return {
    type: SETISLOADING,
    payload: value
  }
}