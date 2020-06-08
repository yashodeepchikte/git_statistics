const INITIAL_STATE = {
    userHandel: "",
    user: {}
}

const UserReducer = (state = INITIAL_STATE, type) => {
    switch (type.action) {
        case ("search"):
            return {
                ...state,
                users: type.payload,
            }
        default:
            return state
    }
}

export default UserReducer