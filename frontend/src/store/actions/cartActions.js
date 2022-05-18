import actiontypes from "../actiontypes";

export const addToCart = product => {
  return {
    type: actiontypes().cart.add,
    payload: product
  }
}

export const decrement = id => {
  return {
      type: actiontypes().cart.decrement,
      payload: id
  }
}
export const removeOne = id => {
  return {
      type: actiontypes().cart.removeOne,
      payload: id
  }
}