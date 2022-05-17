import actiontypes from "../actiontypes";
import axios from "axios";

export const getProductById = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().product.getProduct
    })
    try {
      const res = await axios.get('http://localhost:5050/api/products/' + id)
      dispatch(getProductSuccess(res.data))
    } 
    catch (error) {
      dispatch(getProductFailed(error.message))
    }
  }
}

const getProductSuccess = (product) => {
  return {
    type: actiontypes().product.getProductSuccess,
    payload: product
  }
}

const getProductFailed = (error) => {
  return {
    type: actiontypes().product.getProductFailed,
    payload: error
  }
}