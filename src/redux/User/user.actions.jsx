export const setUserHandel = (userHandel) => {
    return ({
        type: "SET_USER_HANDEL",
        pyload: userHandel
    })
}


export const setCurrentUser = (foundUsers) => {
    return ({
        type: "SET_USER",
        payload: foundUsers
    })
}