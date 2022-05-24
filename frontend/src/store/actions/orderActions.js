import axios from 'axios'
import actiontypes from '../actiontypes'

export const getOrdersFromUser = userId => {

    return async dispatch => {
        dispatch({
            type: actiontypes().order.getUserOrders
        })
        try {
            let token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:5050/api/orders/' + userId, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                dispatch(getOrdersSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data...')
            }
        } catch (err) {
            dispatch(getOrdersFailure(err.message))
        }
    }
}

export const getOrdersAdmin = () => {

    return async dispatch => {
        dispatch({
            type: actiontypes().order.getAdminOrders
        })
        try {
            let token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:5050/api/orders' , {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                dispatch(getOrdersSuccess(res.data))
            } else {
                throw new Error('Could not fetch the data...')
            }
        } catch (err) {
            dispatch(getOrdersFailure(err.message))
        }
    }
}

export const updateOrderToComplete = order => {

    return async dispatch => {
        dispatch({
            type: actiontypes().order.updateOrder
        })
        try {
            let token = localStorage.getItem('token')
            const res = await axios.put('http://localhost:5050/api/orders/' + order._id , {
                completed: true
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            if(res.status === 200) {
                dispatch(updateOrderSuccess(res.data.order._id))
            } else {
                throw new Error('Could not update the data...')
            }
        } catch (err) {
            dispatch(updateOrderFailure(err.message))
        }
    }
}

const getOrdersSuccess = orders => {
    return {
        type: actiontypes().order.getOrdersSuccess,
        payload: orders
    }
}

const getOrdersFailure = (err) => {
    return {
        type: actiontypes().order.getOrdersFailure,
        payload: err
    }
}

const updateOrderSuccess = id => {
    return {
        type: actiontypes().order.updateOrderSuccess,
        payload: id
    }
}

const updateOrderFailure = (err) => {
    return {
        type: actiontypes().order.updateOrderFailure,
        payload: err
    }
}