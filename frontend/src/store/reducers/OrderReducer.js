import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false, 
    error: null
}

const OrdersReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().order.getUserOrders:
            return {
                ...state, 
                loading: true
            }

        case actiontypes().order.getAdminOrders:
            return {
                ...state, 
                loading: true
            }

        case actiontypes().order.getOrdersSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            }

        case actiontypes().order.getOrdersFailure:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default OrdersReducer