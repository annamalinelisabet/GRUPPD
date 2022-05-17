import actiontypes from "../actiontypes";

const initState = {
  loading: false,
  error: null,
  data: []  
}

const productReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().product.getProduct:
      return {
        ...state,
        loading: true
      }
    
    case actiontypes().product.getProductSuccess:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case actiontypes().product.getProductFailed:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      }
    
    default:
      return state

  }
}

export default productReducer