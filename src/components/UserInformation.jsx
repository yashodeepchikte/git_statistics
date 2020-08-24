import React, {useState, useEffect}  from "react"


const UserInformation = ({userName}) => {

    const [data, loading, error] = useFetchUser(userName)

    if(loading){
        return "UserInforation is loafing"
    }
    if (error){
        return "error in loading user information"
    }
    let user = data.data.items.filter(user => user.login == userName)
    console.log("User ----------------------> ", user)
    if(user.len >= 1){
        user = user[0]
        return(
            <div>
                handel : {user.login}
                avatar_url: {user.avatar_url}
            </div>
        )
    }else{
        return 
    }
}