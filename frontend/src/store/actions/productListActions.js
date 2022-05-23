import actiontypes from '../actiontypes'

import axios from 'axios'

export const getProducts = () => {
  return async dispatch => {
    dispatch({
      type: actiontypes().productList.getProductList
    })
    try {
      const res = await axios.get('http://localhost:5050/api/products')
      //  console.log(res.data)
      if(res.status === 200) {
        dispatch(getProductListSuccess(res.data))
      } 
      else {
        throw new Error('was not able to fetch the data')
      }
    } catch (error) {
      dispatch(getProductListFailed(error.message))
    
    }
  }
}


const getProductListSuccess = (products) => {
  return {
    type: actiontypes().productList.getProductListSuccess,
    payload: products
  }
}

const getProductListFailed = (error) => {
  return {
    type: actiontypes().productList.getProductListFailed,
    payload: error
  }
}

