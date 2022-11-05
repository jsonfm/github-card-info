// Types
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_USERNAME: "SET_USERNAME",
}

// Reducer
export const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_USERNAME:
            return { ...state, username: action.payload }

        case actionTypes.SET_USER:
            return { ...state, user: action.payload }

        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };

        case actionTypes.SET_ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}