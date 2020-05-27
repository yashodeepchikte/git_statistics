const INITIAL_STATE = {
    isLoading: false
}

const LoadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING_FALSE":
            return {
                ...state,
                isLoading: false
            }
        case "LOADING_TRUE":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

export default LoadingReducer