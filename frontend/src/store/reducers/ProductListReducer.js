import actiontypes from '../actiontypes'

const initState = {
  loading: false,
  error: null,
  data: []
}

const productListReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().productList.getProductList:
      return {
        ...state,
        loading: true
      }

    case actiontypes().productList.getProductListSuccess:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    
    case actiontypes().productList.getProductListFailed:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default productListReducer