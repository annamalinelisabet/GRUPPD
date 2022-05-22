import actiontypes from "../actiontypes";

const initState = {
    token: null,
    error: null,
    loading: false, 
    userId: null,
    admin: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().auth.loading:
            return {
                ...state,
                loading: true
            }

        case actiontypes().auth.authFailure:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case actiontypes().auth.authSuccess:
            localStorage.setItem('token', action.payload)
            localStorage.setItem('userId', action.userId)
            return {
                ...state,
                error: null,
                loading: false,
                token: action.payload,
                userId: action.userId,
                admin: action.admin
            }
        
        case actiontypes().auth.logout:
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            return {
                ...initState
            }

        default: 
        return state
    }
}

export default authReducer; 