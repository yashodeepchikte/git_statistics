const INITIAL_STATE = {
    searchHandel: "",
    foundUsers: []
}

const SearchingReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ("CHANGE_SEARCH_HANDEL"):
            return {
                ...state,
                searchHandel: action.payload
            }
        case ("SEARCH_RESULT_USERS"):
            return {
                ...state,
                foundUsers: action.payload
            }
        default:
            return state
    }
}

export default SearchingReducer