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

        case actiontypes().order.updateOrder:
            return {
                ...state,
                loading: true,
            }

        case actiontypes().order.updateOrderSuccess:     
            const complete = state.data.find(order => order._id === action.payload)
            complete.completed = true   
            return {
                ...state,
                loading: false,
                error: null
            }
        case actiontypes().order.updateOrderFailure:
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