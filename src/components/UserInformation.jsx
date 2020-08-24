import React, {useState, useEffect}  from "react"

import useFetchUser from "../hooks/useFetchUSer"
import useFetchData from "../hooks/useFetchData"

const UserInformation = ({userName}) => {


    const [data, loading, error] = useFetchUser(userName)
    let generalDataEndoint = "https://api.github.com/users/"+userName
    // let repositoriesEndpoint = "https://api.github.com/users/"+userName+"/repos"
    let followersEndpoint = "https://api.github.com/users/"+userName+"/followers"
    let eventsEndpoint = "https://api.github.com/users/"+userName+"/events"
    const starredEndpoint = "https://api.github.com/users/"+userName+"/starred"
    
    let [generalData, generalDataLoadin, generalDataError] = useFetchData(generalDataEndoint)
    // const [repoData, repoLoading, repoError] = useFetchData(repositoriesEndpoint)
    const [followerData, followerLoading, followerError] = useFetchData(followersEndpoint)
    const [evenstData, eventsLoading, eventsError] = useFetchData(eventsEndpoint)
    const [starredData, starredLoading, starredError] = useFetchData(starredEndpoint)
    if(generalDataLoadin||loading  || followerLoading || eventsLoading || starredLoading){
        return "LOADING"
    }
    if(error  || followerError || eventsError || starredError || generalDataError){
        return <h1> ther is some error</h1>
    }
    let user = data.data.items.filter(user => user.login == userName)

    console.log("generalData---------------> ", generalData.data)
    // console.log("User ----------------------> ", user)
    // console.log("repoData -------------------> ", repos )
    // console.log("Followers = ", followers)
    // console.log("Starred==========> ", starredData.data.length)
    // console.log("-------------------------------------------------------------------")
    let events = evenstData.data.map(event => {
        let type = event.type.replace("Event", "")
        let actor = event.actor.login
        let repo = event.repo.name
        if(type=="Push"|| type=="push" || type=="pushed" || type=="Pushed"){
            return actor+" "+"pushed"+" to "+repo
        }else if(type=="Watch" || type=="watch" || type=="watched" || type=="Watched"){
            return actor + " started watching " + repo
        }else if(type=="Star" || type=="starred" || type=="Starred" || type=="star"){
            return actor+" added a star to "+repo
        }
        else{
            return actor+" " + type+ " "+repo
        }
    })
    user = user[0]
    // console.log("event.data.type --------------> ", evenstData.data[0].type.replace("Event", "ed"))
    // console.log("event.data.actor.login --------------> ", evenstData.data[0].actor.login)
    // console.log("event.data.repo.name --------------> ", evenstData.data[0].repo.name)
    // console.log("events --------> ", events)
    // console.log("-------------------------------------------------------------------")
    // console.log("user = ", user)

    
   
    return(
        
            <>
                <div class=" profile-pic">
                    <img src={user.avatar_url}></img>
                </div>
                <div class="info">
                    LOGIN : {user.login}<br/>
                    NAME : {generalData.data.name}<br/>
                    COMPANY : {generalData.data.company}<br/>
                </div>
                <div className="info-stats">
                    FOLLOWERS :  {generalData.data.followers}<br/>                    
                    FOLLOWING : {generalData.data.following}<br/>
                    Public_REPOS : {generalData.data.public_repos}
                </div>
        </>
 
    )
}

export default UserInformation