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
            // console.log(res.data)
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