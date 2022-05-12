import actiontypes from "../actiontypes";

export const addToCart = product => {
  return {
    type: actiontypes(),
    payload: product
  }
}