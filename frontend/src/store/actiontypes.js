const actiontypes = () => {
  return {
    productList: {
      getProductList: 'GET_PRODUCT_LIST',
      getProductListSuccess: 'GET_PRODUCT_LIST_SUCCESS',
      getProductListFailed: 'GET_PRODUCT_LIST_FAILED'
      
    },
    cart: {
      add: 'ADD_TO_CART',
      decrement: 'DECREMENT',
      removeOne: 'REMOVE_ONE'
  },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout:      'LOGOUT',
      authAdmin:   'AUTH_ADMIN'
    }
  }
}



export default actiontypes