export const setSearchHandel = searchHandel => {
    return {
        type: "CHANGE_SEARCH_HANDEL",
        payload: searchHandel
    }
}


export const setFoundUsers = users => {
    return ({
        type: "SEARCH_RESULT_USERS",
        payload: users
    })
}