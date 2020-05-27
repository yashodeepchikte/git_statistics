export const changeSearchHandel = searchHandel => {
    return {
        type: "CHANGE_SEARCH_HANDEL",
        payload: searchHandel
    }
}


export const setSearchUsers = users => {
    return ({
        type: "SEARCH_RESULT_USERS",
        payload: users
    })
}