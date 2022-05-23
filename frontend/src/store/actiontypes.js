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
      removeOne: 'REMOVE_ONE',
      clearCart: 'CLEAR_CART'
    },
    auth: {
      loading: 'AUTH_LOADING',
      authFailure: 'AUTH_FAILURE',
      authSuccess: 'AUTH_SUCCESS',
      logout:      'LOGOUT',
      authAdmin:   'AUTH_ADMIN'
    },
    order: {
      getUserOrders: 'GET_USER_ORDERS', 
      getAdminOrders: 'GET_ADMIN_ORDERS', 
      getOrdersSuccess: 'GET_ORDERS_SUCCESS',
      getOrdersFailure: 'GET_ORDERS_FAILURE',
      updateOrder: 'UPDATE_ORDER',
      updateOrderSuccess: 'UPDATE_ORDER_SUCCESS',
      updateOrderFailure: 'UPDATE_ORDER_FAILURE'
    }
  }
}



export default actiontypes