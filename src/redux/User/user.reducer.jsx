const INITIAL_STATE = {
    currentUser: {}
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ("SET_USER"):
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default UserReducer