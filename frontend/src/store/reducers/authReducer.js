import actiontypes from "../actiontypes";

const initState = {
    token: null,
    error: null,
    loading: false, 
    userId: null,
    admin: null
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
                error: action.payload
            }

        case actiontypes().auth.authSuccess:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                error: null,
                loading: false,
                token: action.payload,
                userId: action.userId
            }
        
        case actiontypes().auth.logout:
            localStorage.removeItem('token')
            return {
                ...initState
            }

            // -- För att logga ut sen måste Malin hämta logoutUser, lägga till dispatch och funktionen i MINA SIDOR --

        default: 
        return state
    }
}

export default authReducer; 